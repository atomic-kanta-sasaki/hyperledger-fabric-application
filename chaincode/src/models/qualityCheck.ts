/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class QualityCheck {
    //品質検査のID
    @Property()
    public id: string = "";

    //トランザクションID
    @Property()
    public transaction_id: string = "";

    //品質検査が実施された日時
    @Property()
    public executed_at?: string;

    //品質検査の結果
    @Property()
    public result?: string;
}
