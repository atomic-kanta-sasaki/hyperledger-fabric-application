/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Organization {
    //組織ID
    @Property()
    public id: string = "";

    //組織タイプ（例: サプライヤ、製造工場、倉庫、輸送、小売業、認証機関）
    @Property()
    public kind?: string;

    //登録日時
    @Property()
    public created_at: string = "";
}
