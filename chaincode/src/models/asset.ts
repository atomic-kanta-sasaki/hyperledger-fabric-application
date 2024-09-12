/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Asset {
    //ID
    @Property()
    public id: string = "";
    
    //名前
    @Property()
    public name: string = "";

    //ロット番号
    @Property()
    public batch_number?: string;

    //シリアル番号
    @Property()
    public serial_number?: string;

    //製造日
    @Property()
    public manufacture_datetime?: string;

    //有効期限
    @Property()
    public expire_datetime?: string;
}
