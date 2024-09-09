<!-- (SPDX-License-Identifier: CC-BY-4.0) -->  <!-- Ensure there is a newline before, and after, this line -->

# Blockchain Explorer
## Set Up
./networkディレクトリにあるOrganizationを./blockchain-explorerにコピーしてく来る

./blockchain-explorerディレクトリ配下で以下の環境変数をセットする
```
export EXPLORER_CONFIG_FILE_PATH=./examples/net1/config.json
export EXPLORER_PROFILE_DIR_PATH=./examples/net1/connection-profile
export FABRIC_CRYPTO_PATH=./organizations
```

## 起動
`docker compose up -d`

## ログイン
http://localhost:8080/
```
Userid: exploreradmin
Password: exploreradminpw
```
