## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Prisma
 - databaseの情報を更新した場合
 `npx prisma migrate dev`
 - seed dataの投入
 `npx prisma db seed`

## 各ディレクトリ構成について
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
 - peer
   - peerのTLS証明書ファイルを保存する場所
 - user
   - userの公開鍵、秘密鍵を保存する
 - prisma
   - prismaの設定ファイルやマイグレーションファイル
 - test

## blockchain(Hyperledger)
hyperledger fabricのサンプルのネットワークを動かしそこにchaincodeをデプロイしたものを本プロジェクトで呼び出します。
Hyperledger fabricの実行に必要な事前準備やサンプルのダウンロード方法は公式ドキュメントを合わせてご確認ください。
以下はすべて事前準備が完了している前提でHyperleder Fabricのネットワークを構成するサンプルをダウンロードするところからになります。
https://hyperledger-fabric.readthedocs.io/ja/latest/install.html

サンプルのダウンロードからテストネットワーク起動まで
```
curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh && chmod +x install-fabric.sh

cd fabric-samples/test-network

./network.sh up createChannel -c mychannel -ca

```

chaincodeのデプロイ
```
./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-javascript/ -ccl javascript
```

各種証明書ファイルのコピー
userの秘密鍵
```
test-network/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/key.pem を user/User1@org1.example.com/key.pemにコピー
↑
key.pemの方は別の文字列になっているのでわかりやすくするためのkey.pemとしてコピーしてください
```
userの公開鍵
```
test-network/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/cert.pem を user/User1@org1.example.com/cert.pemにコピー
```
peerのTLS証明書
```
test-network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt を 
```
