/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class TransactionAssetDetail {
    //トランザクションID
    @Property()
    public transaction_id: string = "";

    //アセットを識別するID
    @Property()
    public asset_id: string = "";

    //取引されたアセットの数量
    @Property()
    public qty: number = 0;

    //取引されたアセットのステータス
    @Property()
    public status?: string;
}
