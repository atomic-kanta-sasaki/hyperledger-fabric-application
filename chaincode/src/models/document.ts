/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Document {
    //関連する文書や証拠のID
    @Property()
    public id: string = "";

    //文書の種類
    @Property()
    public kind?: string;

    //文書や証拠へのリンクまたはパス
    @Property()
    public url?: string;

    //文書がアップロードされた日時
    @Property()
    public uploaded_datetime?: string;
}
