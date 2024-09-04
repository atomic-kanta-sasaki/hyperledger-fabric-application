/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
*/

'use strict';

/**
 * State class. States have a class, unique key, and a lifecycle current state
 * the current state is determined by the specific subclass
 */
import sortKeysRecursive from 'sort-keys-recursive';

export class State {


    constructor() {}
    /**
     * Convert object to buffer containing JSON data serialization
     * Typically used before putState()ledger API
     * @param {Object} JSON object to serialize
     * @return {buffer} buffer with the data to store
     */
    static serialize<T extends { key: any }>(object: T): Buffer {
        // don't write the key:value passed in - we already have a real composite key, issuer and paper Number.
        delete object.key;
        return Buffer.from(JSON.stringify(sortKeysRecursive(object)));
    }

    /**
     * Deserialize object into one of a set of supported JSON classes
     * i.e. Covert serialized data to JSON object
     * Typically used after getState() ledger API
     * @param {data} data to deserialize into JSON object
     * @param (supportedClasses) the set of classes data can be serialized to
     * @return {json} json with the data to store
     */
    static deserialize(data: Uint8Array) {
        return JSON.parse(data.toString());
        // let objClass = supportedClasses[json.class];
        // if (!objClass) {
        //     throw new Error(`Unknown class of ${json.class}`);
        // }
        // let object = new (objClass)(json);

        // return object;
    }

    /**
     * Deserialize object into specific object class
     * Typically used after getState() ledger API
     * @param {data} data to deserialize into JSON object
     * @return {json} json with the data to store
     */
    // static deserializeClass(data, objClass) {
    //     let json = JSON.parse(data.toString());
    //     let object = new (objClass)(json);
    //     return object;
    // }


}

module.exports = State;
