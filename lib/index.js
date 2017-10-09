import { isWeex } from 'universal-env';

let storage = {};
if (isWeex) {
    storage = require('@weex-module/storage');
} else if (typeof localStorage !== 'undefined' && localStorage !== null) {
    storage = localStorage;
}

// 操作storage对象
const handle = function(key, args, defaultValue) {
    if (storage[key]) {
        if (isWeex) {
            storage[key].apply(storage, args);
        } else {
            const callback = args.splice(-1, 1)[0];
            const data = storage[key].apply(storage, args) || defaultValue;
            callback({
                data,
                result: 'success'
            });
        }
    }
};

export default class Store {
    /**
     * 获取localStorage中存储的值
     * @param {string} key - key值: '?key'未取到会利用defaultValue;'key'未取到就是null
     * @param {*} defaultValue - 不含有key时的默认取值
     */
    static get(key, defaultValue, callback = () => {}) {
        const firstChar = key[0];
        handle(
            'getItem',
            [ callback ],
            firstChar === '?' ? defaultValue : null
        );
    }
    /**
     * 向localStorage存入值
     */
    static set() {

    }
    /**
     * 获取localStorage的key值数量
     * @param {function} callback - 取值成功后的回调
     */
    static keyLength(callback = () => {}) {
        handle('length', [callback]);
    }
}
