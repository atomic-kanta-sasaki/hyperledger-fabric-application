/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

// サプライチェーン上のルール
// 各ステップで何が実行され、次のステップは何か。
// 5W（Who, What, When, Where, Why）の情報を持つ。
// Who: 誰が実行するか : organization_id
// What: 何を実行するか : name, description
// When: いつ実行するか : id (previous_id, next_id で順序を定義)
// Where: どこで実行するか : organization_id
// Why: なぜ実行するか : description
// 例: 製造工場で製造する。次のステップは認証で、認証機関で実行する。
@Object()
export class Step {
    //ステップID
    @Property()
    public id: string = "";

    //ステップの名前（例: 製造、検査、出荷など）
    @Property()
    public name: string = "";

    //ステップを実行する組織ID
    @Property()
    public organization_id: string = ""

    //直前のステップID
    @Property()
    public previous_id?: string;

    //次のステップID
    @Property()
    public next_id?: string;
}
