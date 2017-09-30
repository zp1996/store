(function () {
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

alert(lib_3);

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtZW52L2xpYi9pbmRleC5qcyIsIi4uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3dlYmFwcGFwaXMuaHRtbCNkb20tbmF2aWdhdG9yLWFwcGNvZGVuYW1lXG52YXIgaXNXZWIgPSBleHBvcnRzLmlzV2ViID0gKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5hdmlnYXRvcikpID09PSAnb2JqZWN0JyAmJiAobmF2aWdhdG9yLmFwcENvZGVOYW1lID09PSAnTW96aWxsYScgfHwgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdHZWNrbycpO1xudmFyIGlzTm9kZSA9IGV4cG9ydHMuaXNOb2RlID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICEhKHByb2Nlc3MudmVyc2lvbnMgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlKTtcbnZhciBpc1dlZXggPSBleHBvcnRzLmlzV2VleCA9IHR5cGVvZiBjYWxsTmF0aXZlID09PSAnZnVuY3Rpb24nO1xudmFyIGlzUmVhY3ROYXRpdmUgPSBleHBvcnRzLmlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgX19mYkJhdGNoZWRCcmlkZ2VDb25maWcgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbW9kdWxlLmV4cG9ydHM7XG5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgeyBpc1dlZXggfSBmcm9tICd1bml2ZXJzYWwtZW52JztcblxuYWxlcnQoaXNXZWV4KTtcbiJdLCJuYW1lcyI6WyJhbGVydCIsImlzV2VleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0VBQzNDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDOztBQUVILElBQUksT0FBTyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQzs7O0FBRzdRLElBQUksS0FBSyxHQUFHLGFBQWEsR0FBRyxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLFFBQVEsS0FBSyxTQUFTLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQ3pMLElBQUksTUFBTSxHQUFHLGNBQWMsR0FBRyxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5RyxJQUFJLE1BQU0sR0FBRyxjQUFjLEdBQUcsT0FBTyxVQUFVLEtBQUssVUFBVSxDQUFDO0FBQy9ELElBQUksYUFBYSxHQUFHLHFCQUFxQixHQUFHLE9BQU8sdUJBQXVCLEtBQUssV0FBVyxDQUFDO0FBQzNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ3BDLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTzs7Ozs7QUNaaENBLE1BQU1DLEtBQU47Ozs7In0=