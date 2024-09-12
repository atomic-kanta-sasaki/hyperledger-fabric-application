/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class TransactionAssetDetail {
    //製品・部品を一意に識別するID
    @Property()
    public asset_id: string = "";

    //取引された製品・部品の数量
    @Property()
    public qty: number = 0;

    //取引された製品・部品のステータス
    @Property()
    public status?: string;
}
