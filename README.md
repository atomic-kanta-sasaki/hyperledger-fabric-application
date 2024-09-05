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
### 前提条件完了後手順
 - chaincodeの環境構築
 - api環境構築
 - front 環境構築

## 注意事項
`./network.sh down` を実行するとdocker コンテナ、イメージ、ボリュームすべて削除されます。
環境が壊れたり、最初からやり直したい場合などは `./network.sh down` を実行していただき、実行後はすべて最初から環境構築を行う必要があります。