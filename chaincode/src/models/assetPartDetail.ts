/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class AssetPartDetail {
    //部品を一意に識別するID
    @Property()
    public id: string = "";

    //部品の数量
    @Property()
    public qty: number = 0;
}
