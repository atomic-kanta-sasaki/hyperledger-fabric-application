/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class ComplianceCertification {
    //コンプライアンス認証のID
    @Property()
    public id: string = "";

    //トランザクションID
    @Property()
    public transaction_id: string = "";

    //認証のタイプ
    @Property()
    public kind?: string;

    //認証が発行された日
    @Property()
    public issue_date?: string;
}
