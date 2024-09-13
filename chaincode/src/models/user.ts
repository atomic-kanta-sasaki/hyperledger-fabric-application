/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class User {
    //ユーザID
    @Property()
    public id: string = "";

    //組織ID
    @Property()
    public organization_id: string = "";

    //ユーザタイプ（例: オペレータ、検査官、管理者など）
    @Property()
    public kind?: string;

    //登録日時
    @Property()
    public created_at: string = "";
}
