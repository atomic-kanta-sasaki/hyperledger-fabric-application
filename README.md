## 前提条件

https://hyperledger-fabric.readthedocs.io/ja/latest/prereqs.html

こちらが完了していること

test-networkを起動するために以下のコマンドを実行しておく

```jsx
curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh && chmod +x install-fabric.sh
```

```
./install-fabric.sh docker samples binary
```

クライアントアプリケーションとchaincodeの実装環境をgitからforkして使用する(このリポジトリは実装環境のテンプレートなのでこちらに実際のアプリケーションを開発して差分を入れたくないため)

```jsx
git@github.com:atomic-kanta-sasaki/hyperledger-fabric-client-application.git
```

## ネットワーク

Hyperledger Fabricが用意している最新のネットワーク起動スクリプトを使用する

**ネットワークの起動**

```jsx
cd test-network
// ネットワークを初期化しておく
./network.sh down
// ネットワーク起動
./network.sh up createChannel

//　モニタリングに便利
./monitordocker.sh fabric_test

```

## 証明書管理

ネットワークを起動するとPeer, Orderer, Userが作成され、証明書ファイルも自動的に作成される。

作成された証明書を利用しやすい形にするため以下に示す場所にコピーする

Ordererの各種証明書

```jsx
`test-network/organizations/ordererOrganizations` を `hyperledger-fabric-application
/certificate` にすべてコピー
```

Peer, Userの各種証明書

```jsx
`test-network/organizations/peerOrganizations` を `hyperledger-fabric-application
/certificate` にすべてコピー
```

Userの秘密鍵のファイル名変更(わかりやすくするため)

```jsx
`certificate/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/` にある秘密鍵をkey.pemに変更

`certificate/peerOrganizations/org2.example.com/users/User1@org2.example.com/msp/keystore/` にある秘密鍵をkey.pemに変更
```

## Chaincode

### 準備

事前に以下の環境変数をセットする（ディレクトリはリポジトリをCloneした場所によるので各自ディレクトリを移動して設定してください）

```jsx
// peerコマンドを実行するためのパス fabric-sample配下にbinファイルはあるので指定します
export PATH=${PWD}/bin:$PATH

// peerの設定ファイルであるcore.yamlを指定する環境変数
// hyperledger-fabric-application/config/core.yamlを指定します。
export FABRIC_CFG_PATH=$PWD/config/
```

`peer` とコンソールで叩いて以下のようになればOK

```jsx
peer
Usage:
  peer [command]

Available Commands:
  chaincode   Operate a chaincode: install|instantiate|invoke|package|query|signpackage|upgrade|list.
  channel     Operate a channel: create|fetch|join|joinbysnapshot|joinbysnapshotstatus|list|update|signconfigtx|getinfo.
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  lifecycle   Perform _lifecycle operations
  node        Operate a peer node: start|reset|rollback|pause|resume|rebuild-dbs|unjoin|upgrade-dbs.
  snapshot    Manage snapshot requests: submitrequest|cancelrequest|listpending
  version     Print fabric peer version.

Flags:
  -h, --help   help for peer

Use "peer [command] --help" for more information about a command.
```

以下のコマンドは `hyperledger-fabric-application/chaincode` のディレクトリを基準にコマンドを実行する

### 作成したchaincodeをパッケージ化する

**依存ファイルのinstall**

```jsx
npm install
npm run build
```

**chaincodeのパッケージ化**

```jsx
peer lifecycle chaincode package basic.tar.gz --path ./ --lang node --label basic_1.0
```

### Org1Peer に chaincodeをinstallする

以下の環境変数をセットするときは `hyperledger-fabric-application` ディレクトリで実行します

```jsx
export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/certificate/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/certificate/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_ADDRESS=localhost:7051
```

**install**

```jsx
cd chaincode
peer lifecycle chaincode install basic.tar.gz
```

以下のようなログが出ればinstall成功

```jsx
2024-08-23 15:37:44.502 JST 0001 INFO [cli.lifecycle.chaincode] submitInstallProposal -> Installed remotely: response:<status:200 payload:"\nJbasic_1.0:4c7f4fd3119f70763b3ffbeb86566eccb3d2af8d6ab1ebe595eca7d37e9d98a7\022\tbasic_1.0" >
2024-08-23 15:37:44.502 JST 0002 INFO [cli.lifecycle.chaincode] submitInstallProposal -> Chaincode code package identifier: basic_1.0:4c7f4fd3119f70763b3ffbeb86566eccb3d2af8d6ab1ebe595eca7d37e9d98a7
```

### Org2Peer に chaincodeをinstallする

以下の環境変するは `hyperledger-fabric-application`  で実行します

```jsx
export CORE_PEER_LOCALMSPID="Org2MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/certificate/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/certificate/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp
export CORE_PEER_ADDRESS=localhost:9051
```

**install**

```jsx
cd chaincode
peer lifecycle chaincode install basic.tar.gz
```

### 承認処理

chaincodeがPeerにinstallされたら組織ごとに承認する必要があります。

現在エンドースメントポリシーは設定していないので組織の過半数の承認が必要です。(組織の数が二つなのですべての組織から承認が必要)

また承認フローにinstallしたパッケージIDが必要なので以下のコマンドで確認します。

```jsx
peer lifecycle chaincode queryinstalled

Installed chaincodes on peer:
Package ID: basic_1.0:4c7f4fd3119f70763b3ffbeb86566eccb3d2af8d6ab1ebe595eca7d37e9d98a7, Label: basic_1.0
```

**パッケージIDを環境変数にセット**

```jsx
export CC_PACKAGE_ID=basic_1.0:4c7f4fd3119f70763b3ffbeb86566eccb3d2af8d6ab1ebe595eca7d37e9d98a7
```

OrdererのTLS証明書のパスをセット

```jsx
export ORDERER_TLS_CERT=${PWD}/certificate/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
```

**Org2 chaincodeの承認**

`hyperledger-fabric-application` ディレクトリで実行します

```jsx
peer lifecycle chaincode approveformyorg -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --channelID mychannel --name basic --version 1.0 --package-id $CC_PACKAGE_ID --sequence 1 --tls --cafile ${PWD}/certificate/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem

//以下のログならOK 
2024-08-23 16:04:06.118 JST 0001 INFO [chaincodeCmd] ClientWait -> txid [39ecbbee6887f82f5a1684e584d7a65ae0a691f0733ff6b1d803f3ce0853844c] committed with status (VALID) at localhost:9051
```

**Org1 chaincodeの承認**

環境変数の再設定

```jsx
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_MSPCONFIGPATH=${PWD}/certificate/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/certificate/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_ADDRESS=localhost:7051
```

承認

```jsx
peer lifecycle chaincode approveformyorg -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --channelID mychannel --name basic --version 1.0 --package-id $CC_PACKAGE_ID --sequence 1 --tls --cafile ${ORDERER_TLS_CERT}
```

### chaincodeをチャネルにcommit

チャネルメンバがchaincodeの定義を承認しているかを確認

```jsx
peer lifecycle chaincode checkcommitreadiness --channelID mychannel --name basic --version 1.0 --sequence 1 --tls --cafile ${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem --output json

// 両方の組織が承認していることが確認できる
{
        "approvals": {
                "Org1MSP": true,
                "Org2MSP": true
        }
}
```

**commit**

```jsx
peer lifecycle chaincode commit -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --channelID mychannel --name basic --version 1.0 --sequence 1 --tls --cafile ${ORDERER_TLS_CERT} --peerAddresses localhost:7051 --tlsRootCertFiles ${PWD}/certificate/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt --peerAddresses localhost:9051 --tlsRootCertFiles ${PWD}/certificate/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt
```

**commitの確認**

```jsx
peer lifecycle chaincode querycommitted --channelID mychannel --name basic --cafile ${ORDERER_TLS_CERT}

// シーケンスとバージョンが返ってくる
Committed chaincode definition for chaincode 'basic' on channel 'mychannel':
Version: 1.0, Sequence: 1, Endorsement Plugin: escc, Validation Plugin: vscc, Approvals: [Org1MSP: true, Org2MSP: true]
```

[参考](https://hyperledger-fabric.readthedocs.io/ja/latest/deploy_chaincode.html#package-the-smart-contract)

## クライアントアプリケーション

### 依存ファイルのinstall

```jsx
npm install
```

### アプリケーションの実行

```jsx
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```jsx
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Prisma

```jsx
 - databaseの情報を更新した場合
 `npx prisma migrate dev`
 - seed dataの投入
 `npx prisma db seed`
```

### **各ディレクトリ構成について**

```markdown
 - src/controller
   - ルーティング用のディレクトリ（プレゼンテーション層）
 - src/domain
   - ドメインロジック（ドメイン層）
 - src/middlewre
   - 認証とか
 - src/module
   - 依存関係解決のためのmoduleシステム
   - 循環参照防止のためInjection毎に1module作っている
 - src/repository
   - ブロックチェーンにデータを永続化したり、RDBにデータを永続化したりする
 - src/types
   - 型定義
 - src/usecase
   - ビジネスロジックを作成する
 - prisma
   - prismaの設定ファイルやマイグレーションファイル
 - test
```
