/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

// テーブル: サプライチェーン上のトランザクションを追跡
@Object()
export class Track {
    //追跡用ID
    @Property()
    public id: string = "";

    //トランザクションID
    @Property()
    public transaction_id: string = "";
}
