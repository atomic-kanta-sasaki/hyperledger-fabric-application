/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';
import { Transaction } from './transaction';

// テーブル: サプライチェーン上のトランザクションを追跡
@Object()
export class Track {
    //追跡用ID
    @Property()
    public id: string = "";

    //TrackID に紐づくトランザクションのリスト
    @Property()
    public transactions?: Transaction[] = [];
}
