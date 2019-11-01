export default class DataValue {

    static _DATA = 'data';
    static _BOOLEAN = 'boolean';
    static _ARRAY = 'array';
    static _OBJECT = 'object';
    static _NULL = 'null';

    static getValueType(value) {
        if (value == null)
            return this._NULL;

        if (typeof value === 'boolean')
            return this._BOOLEAN;

        if (Array.isArray(value))
            return this._ARRAY;

        if (typeof value === 'object')
            return this._OBJECT;

        return this._DATA;
    }

}
