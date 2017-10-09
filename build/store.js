var Store = (function () {
'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lib = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
var isWeex = exports.isWeex = typeof callNative === 'function';
var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
exports['default'] = module.exports;
exports.default = module.exports;
});

var lib_3 = lib.isWeex;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var storage = {};
if (lib_3) {
    storage = require('@weex-module/storage');
} else if (typeof localStorage !== 'undefined' && localStorage !== null) {
    storage = localStorage;
}

// 操作storage对象
var handle = function handle(key, args, defaultValue) {
    if (storage[key]) {
        if (lib_3) {
            storage[key].apply(storage, args);
        } else {
            var callback = args.splice(-1, 1)[0];
            var data = storage[key].apply(storage, args) || defaultValue;
            callback({
                data: data,
                result: 'success'
            });
        }
    }
};

var Store = function () {
    function Store() {
        _classCallCheck(this, Store);
    }

    _createClass(Store, null, [{
        key: 'get',

        /**
         * 获取localStorage中存储的值
         * @param {string} key - key值: '?key'未取到会利用defaultValue;'key'未取到就是null
         * @param {*} defaultValue - 不含有key时的默认取值
         */
        value: function get(key, defaultValue) {
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

            var firstChar = key[0];
            handle('getItem', [callback], firstChar === '?' ? defaultValue : null);
        }
        /**
         * 向localStorage存入值
         */

    }, {
        key: 'set',
        value: function set() {}
        /**
         * 获取localStorage的key值数量
         * @param {function} callback - 取值成功后的回调
         */

    }, {
        key: 'keyLength',
        value: function keyLength() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

            handle('length', [callback]);
        }
    }]);

    return Store;
}();

return Store;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmUuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtZW52L2xpYi9pbmRleC5qcyIsIi4uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3dlYmFwcGFwaXMuaHRtbCNkb20tbmF2aWdhdG9yLWFwcGNvZGVuYW1lXG52YXIgaXNXZWIgPSBleHBvcnRzLmlzV2ViID0gKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5hdmlnYXRvcikpID09PSAnb2JqZWN0JyAmJiAobmF2aWdhdG9yLmFwcENvZGVOYW1lID09PSAnTW96aWxsYScgfHwgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdHZWNrbycpO1xudmFyIGlzTm9kZSA9IGV4cG9ydHMuaXNOb2RlID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICEhKHByb2Nlc3MudmVyc2lvbnMgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlKTtcbnZhciBpc1dlZXggPSBleHBvcnRzLmlzV2VleCA9IHR5cGVvZiBjYWxsTmF0aXZlID09PSAnZnVuY3Rpb24nO1xudmFyIGlzUmVhY3ROYXRpdmUgPSBleHBvcnRzLmlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgX19mYkJhdGNoZWRCcmlkZ2VDb25maWcgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbW9kdWxlLmV4cG9ydHM7XG5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgeyBpc1dlZXggfSBmcm9tICd1bml2ZXJzYWwtZW52JztcblxubGV0IHN0b3JhZ2UgPSB7fTtcbmlmIChpc1dlZXgpIHtcbiAgICBzdG9yYWdlID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL3N0b3JhZ2UnKTtcbn0gZWxzZSBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlICE9PSBudWxsKSB7XG4gICAgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcbn1cblxuLy8g5pON5L2cc3RvcmFnZeWvueixoVxuY29uc3QgaGFuZGxlID0gZnVuY3Rpb24oa2V5LCBhcmdzLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAoc3RvcmFnZVtrZXldKSB7XG4gICAgICAgIGlmIChpc1dlZXgpIHtcbiAgICAgICAgICAgIHN0b3JhZ2Vba2V5XS5hcHBseShzdG9yYWdlLCBhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5zcGxpY2UoLTEsIDEpWzBdO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHN0b3JhZ2Vba2V5XS5hcHBseShzdG9yYWdlLCBhcmdzKSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG4gICAgLyoqXG4gICAgICog6I635Y+WbG9jYWxTdG9yYWdl5Lit5a2Y5YKo55qE5YC8XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleeWAvDogJz9rZXkn5pyq5Y+W5Yiw5Lya5Yip55SoZGVmYXVsdFZhbHVlOydrZXkn5pyq5Y+W5Yiw5bCx5pivbnVsbFxuICAgICAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlIC0g5LiN5ZCr5pyJa2V55pe255qE6buY6K6k5Y+W5YC8XG4gICAgICovXG4gICAgc3RhdGljIGdldChrZXksIGRlZmF1bHRWYWx1ZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBrZXlbMF07XG4gICAgICAgIGhhbmRsZShcbiAgICAgICAgICAgICdnZXRJdGVtJyxcbiAgICAgICAgICAgIFsgY2FsbGJhY2sgXSxcbiAgICAgICAgICAgIGZpcnN0Q2hhciA9PT0gJz8nID8gZGVmYXVsdFZhbHVlIDogbnVsbFxuICAgICAgICApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlkJFsb2NhbFN0b3JhZ2XlrZjlhaXlgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0KCkge1xuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlmxvY2FsU3RvcmFnZeeahGtleeWAvOaVsOmHj1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0g5Y+W5YC85oiQ5Yqf5ZCO55qE5Zue6LCDXG4gICAgICovXG4gICAgc3RhdGljIGtleUxlbmd0aChjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gICAgICAgIGhhbmRsZSgnbGVuZ3RoJywgW2NhbGxiYWNrXSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJpc1dlZXgiLCJyZXF1aXJlIiwibG9jYWxTdG9yYWdlIiwiaGFuZGxlIiwia2V5IiwiYXJncyIsImRlZmF1bHRWYWx1ZSIsImFwcGx5IiwiY2FsbGJhY2siLCJzcGxpY2UiLCJkYXRhIiwiU3RvcmUiLCJm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
