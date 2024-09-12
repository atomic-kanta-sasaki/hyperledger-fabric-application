/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';
import {TransactionAssetDetail} from './transactionAssetDetail';

@Object()
export class Transaction {
  //トランザクションの一意のID
    @Property()
    public id: string = "";

    //トランザクションのタイプ（例: 出荷、受領、保管など）
    @Property()
    public kind?: string;

    //ステップが実行された場所（例: 住所やGPS座標など）
    @Property()
    public location?: string;

    //ステップが実行された日時
    @Property()
    public executed_at?: string;

    //ステップを実行したユーザID
    @Property()
    public user_id?: string;

    //トランザクションのステータス（例: 完了、保留など）
    @Property()
    public status?: string;

    //製品または部品情報
    public transaction_asset_details?: TransactionAssetDetail[];
}
