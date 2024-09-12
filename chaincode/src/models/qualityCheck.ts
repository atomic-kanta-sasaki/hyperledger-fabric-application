/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class QualityCheck {
    //品質検査の一意のID
    @Property()
    public id: string = "";

    //品質検査が実施された日時
    @Property()
    public execute_at?: string;

    //品質検査の結果
    @Property()
    public result?: string;
}
