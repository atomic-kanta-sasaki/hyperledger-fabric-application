/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';
import {Transaction} from './transaction';

@Object()
export class Step {
  //ステップを一意に識別するID
    @Property()
    public id: string = "";

    //ステップの名前（例: 製造、検査、出荷など）
    @Property()
    public name: string = "";

    //ステップを実行する組織ID
    @Property()
    public organization_id: string = ""

    //直前のステップのID
    @Property()
    public previous_id?: string;

    //次のステップのID
    @Property()
    public next_id?: string;

    //トランザクション情報
    public transactions?: Transaction[];
}
