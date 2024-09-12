/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';
import {Asset} from './asset';
import {AssetPartDetail} from './assetPartDetail';

@Object()
export class Product extends Asset {
  //部品情報
  @Property()
  public assetPartDetails?: AssetPartDetail[];
}
