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