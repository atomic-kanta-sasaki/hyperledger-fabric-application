/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

// アセットの部品情報
// アセットは複数のアセットで構成される可能性があるので、部品情報を持つ
// 例: 車のアセットは、エンジン、ハンドル、タイヤなどの部品で構成される
// asset_id, asset_part_id, qty
// A1000, Z0000, 2
// A1000, Z0000, 4
// A1000, Z0001, 1
// ここで A1000はアセットID、Z0000, Z0001は部品ID
// * asset_part_idにasset_idを指定できない
@Object()
export class AssetPartDetail {
    //アセットID
    @Property()
    public asset_id: string = "";

    //asset_idに対応するアセットを構成するアセットのID
    @Property()
    public asset_part_id: string = "";

    //部品の数量
    @Property()
    public qty: number = 0;
}
