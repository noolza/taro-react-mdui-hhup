'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Taro = require('@tarojs/taro');
var React = require('react');
var components = require('@tarojs/components');
var runtime = require('@tarojs/runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Taro__default = /*#__PURE__*/_interopDefaultLegacy(Taro);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _classnames_2_2_6_classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var _reactIs_16_13_1_reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var _objectAssign_4_1_1_objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!_reactIs_16_13_1_reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = _objectAssign_4_1_1_objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var _propTypes_15_7_2_propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = _reactIs_16_13_1_reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

// import { mergeStyle } from '../../common/utils'
// import { mergeStyle } from '../../common/utils'
// import { $ } from '@tarojs/extend'
// import { mergeStyle, pxTransform } from '../../common/utils'
// const DEFAULT_OPTIONS = {
//   tolerance: 5,
//   offset: 0,
//   initialClass: 'mdui-headroom',
//   pinnedClass: 'mdui-headroom-pinned-top',
//   unpinnedClass: 'mdui-headroom-unpinned-top',
// };
var AppBar = /** @class */ (function (_super) {
    __extends(AppBar, _super);
    function AppBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hidden: false };
        _this._lastScrollTop = 0;
        return _this;
    }
    AppBar.prototype.handleClick = function (index, event) {
        this.props.onClick && this.props.onClick(index, event);
    };
    AppBar.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.autoHide)
            Taro__default['default'].eventCenter.on('onPageScroll', function (e) {
                var offset = e.scrollTop - _this._lastScrollTop;
                console.log(e, offset);
                var hidden = _this.state.hidden;
                if (offset > 0 && e.scrollTop > 48 && !hidden) {
                    _this.setState({ hidden: true });
                }
                else if (offset < 0 && hidden && e.scrollTop < 150) {
                    _this.setState({ hidden: false });
                }
                _this._lastScrollTop = e.scrollTop;
            });
    };
    AppBar.prototype.render = function () {
        var _a = this.props, _b = _a.customStyle, customStyle = _b === void 0 ? '' : _b, className = _a.className, fixed = _a.fixed, autoHide = _a.autoHide, shadow = _a.shadow, _c = _a.children, children = _c === void 0 ? [] : _c;
        var hidden = this.state.hidden;
        var rootCls = _classnames_2_2_6_classnames('mdui-appbar', {
            'mdui-appbar-fixed': fixed,
            'mdui-shadow-0': !shadow,
            'mdui-headroom': autoHide,
            'mdui-headroom-pinned-toolbar': autoHide,
            'mdui-headroom-unpinned-toolbar': hidden,
            'mdui-headroom-unpinned-top': hidden
        }, className);
        // @ts-ignore
        // const navHeight = Taro.systemInfo.customNavHeight;
        // const height = `height:${navHeight}px;`
        // const sty = hidden ? `transform: translate3d(0, ${-navHeight}PX, 0) !important;` : ''
        // console.log(sty)
        return (React__default['default'].createElement(components.View, { className: rootCls, style: customStyle, onClick: this.handleClick.bind(this) }, children));
    };
    return AppBar;
}(React__default['default'].Component));
AppBar.defaultProps = {
    customStyle: '',
    className: '',
    shadow: true,
    autoHide: false,
    fixed: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { }
};
AppBar.propTypes = {
    customStyle: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.object, _propTypes_15_7_2_propTypes.string]),
    className: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.array, _propTypes_15_7_2_propTypes.string]),
    shadow: _propTypes_15_7_2_propTypes.bool,
    autoHide: _propTypes_15_7_2_propTypes.bool,
    fixed: _propTypes_15_7_2_propTypes.bool,
    onClick: _propTypes_15_7_2_propTypes.func
};

var SIZE_CLASS = {
    normal: 'normal',
    small: 'dense'
};
var TYPE_CLASS = {
    primary: 'primary',
    secondary: 'secondary'
};
var MdButton = /** @class */ (function (_super) {
    __extends(MdButton, _super);
    function MdButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isWEB: Taro__default['default'].getEnv() === Taro__default['default'].ENV_TYPE.WEB,
            isWEAPP: Taro__default['default'].getEnv() === Taro__default['default'].ENV_TYPE.WEAPP,
            isALIPAY: Taro__default['default'].getEnv() === Taro__default['default'].ENV_TYPE.ALIPAY
        };
        return _this;
    }
    MdButton.prototype.onClick = function (event) {
        if (!this.props.disabled) {
            this.props.onClick && this.props.onClick(event);
        }
    };
    MdButton.prototype.onGetUserInfo = function (event) {
        this.props.onGetUserInfo && this.props.onGetUserInfo(event);
    };
    MdButton.prototype.onContact = function (event) {
        this.props.onContact && this.props.onContact(event);
    };
    MdButton.prototype.onGetPhoneNumber = function (event) {
        this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event);
    };
    MdButton.prototype.onError = function (event) {
        this.props.onError && this.props.onError(event);
    };
    MdButton.prototype.onOpenSetting = function (event) {
        this.props.onOpenSetting && this.props.onOpenSetting(event);
    };
    MdButton.prototype.onSumit = function (event) {
        if (this.state.isWEAPP || this.state.isWEB) {
            // TODO: 3.0 this.$scope
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.$scope.triggerEvent('submit', event.detail, {
                bubbles: true,
                composed: true
            });
        }
    };
    MdButton.prototype.onReset = function (event) {
        if (this.state.isWEAPP || this.state.isWEB) {
            // TODO: 3.0 this.$scope
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.$scope.triggerEvent('reset', event.detail, {
                bubbles: true,
                composed: true
            });
        }
    };
    MdButton.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.size, size = _c === void 0 ? 'normal' : _c, _d = _b.type, type = _d === void 0 ? '' : _d, circle = _b.circle, full = _b.full, icon = _b.icon, disabled = _b.disabled, customStyle = _b.customStyle, formType = _b.formType, openType = _b.openType, lang = _b.lang, sessionFrom = _b.sessionFrom, sendMessageTitle = _b.sendMessageTitle, sendMessagePath = _b.sendMessagePath, sendMessageImg = _b.sendMessageImg, showMessageCard = _b.showMessageCard, appParameter = _b.appParameter;
        var _e = this.state, isWEAPP = _e.isWEAPP, isALIPAY = _e.isALIPAY, isWEB = _e.isWEB;
        var rootClassName = ['mdui-btn', 'mdui-color-theme', 'mdui-ripple'];
        var classObject = (_a = {},
            _a["mdui-btn-" + SIZE_CLASS[size]] = SIZE_CLASS[size],
            _a['mdui-btn-disabled'] = disabled,
            _a["mdui-btn-" + type] = TYPE_CLASS[type],
            _a['mdui-btn-icon'] = circle,
            _a['mdui-btn-block'] = full,
            _a);
        var iconComponent = null;
        if (icon) {
            iconComponent = React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, icon);
        }
        // @ts-ignore
        var webButton = React__default['default'].createElement(components.Button, { lang: lang, formType: formType });
        var button = (
        // @ts-ignore
        React__default['default'].createElement(components.Button, { formType: formType, openType: openType, lang: lang, sessionFrom: sessionFrom, sendMessageTitle: sendMessageTitle, sendMessagePath: sendMessagePath, sendMessageImg: sendMessageImg, showMessageCard: showMessageCard, appParameter: appParameter, onGetUserInfo: this.onGetUserInfo.bind(this), onGetPhoneNumber: this.onGetPhoneNumber.bind(this), onOpenSetting: this.onOpenSetting.bind(this), onError: this.onError.bind(this), onContact: this.onContact.bind(this) }));
        return (React__default['default'].createElement(components.View, { className: _classnames_2_2_6_classnames(rootClassName, classObject, this.props.className), style: customStyle, onClick: this.onClick.bind(this) },
            isWEB && !disabled && webButton,
            isWEAPP && !disabled && (React__default['default'].createElement(components.Form, { onSubmit: this.onSumit.bind(this), onReset: this.onReset.bind(this) }, button)),
            isALIPAY && !disabled && button,
            iconComponent || this.props.children));
    };
    return MdButton;
}(React__default['default'].Component));
MdButton.defaultProps = {
    size: 'normal',
    circle: false,
    full: false,
    icon: '',
    disabled: false,
    customStyle: {},
    // Button props
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '',
    sendMessagePath: '',
    sendMessageImg: '',
    showMessageCard: false,
    appParameter: ''
};
MdButton.propTypes = {
    size: _propTypes_15_7_2_propTypes.oneOf(['normal', 'small']),
    type: _propTypes_15_7_2_propTypes.oneOf(['primary', 'secondary', '']),
    circle: _propTypes_15_7_2_propTypes.bool,
    full: _propTypes_15_7_2_propTypes.bool,
    icon: _propTypes_15_7_2_propTypes.string,
    disabled: _propTypes_15_7_2_propTypes.bool,
    onClick: _propTypes_15_7_2_propTypes.func,
    customStyle: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.object, _propTypes_15_7_2_propTypes.string]),
    formType: _propTypes_15_7_2_propTypes.oneOf(['submit', 'reset', '']),
    openType: _propTypes_15_7_2_propTypes.oneOf([
        'contact',
        'share',
        'getUserInfo',
        'getPhoneNumber',
        'launchApp',
        'openSetting',
        'feedback',
        'getRealnameAuthInfo',
        'getAuthorize',
        'contactShare',
        ''
    ]),
    lang: _propTypes_15_7_2_propTypes.string,
    sessionFrom: _propTypes_15_7_2_propTypes.string,
    sendMessageTitle: _propTypes_15_7_2_propTypes.string,
    sendMessagePath: _propTypes_15_7_2_propTypes.string,
    sendMessageImg: _propTypes_15_7_2_propTypes.string,
    showMessageCard: _propTypes_15_7_2_propTypes.bool,
    appParameter: _propTypes_15_7_2_propTypes.string,
    onGetUserInfo: _propTypes_15_7_2_propTypes.func,
    onContact: _propTypes_15_7_2_propTypes.func,
    onGetPhoneNumber: _propTypes_15_7_2_propTypes.func,
    onError: _propTypes_15_7_2_propTypes.func,
    onOpenSetting: _propTypes_15_7_2_propTypes.func
};

var ENV = Taro__default['default'].getEnv();
function delay(delayTime) {
    if (delayTime === void 0) { delayTime = 25; }
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, delayTime);
    });
}
function delayQuerySelector(selectorStr, delayTime, scope) {
    if (delayTime === void 0) { delayTime = 500; }
    if (scope === void 0) { scope = null; }
    return new Promise(function (resolve) {
        var selector = Taro__default['default'].createSelectorQuery();
        delay(delayTime).then(function () {
            if (scope != null) {
                // @ts-ignore
                selector = selector.in(scope);
            }
            selector.select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function uuid(len, radix) {
    if (len === void 0) { len = 8; }
    if (radix === void 0) { radix = 16; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var value = [];
    var i = 0;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++)
            value[i] = chars[0 | (Math.random() * radix)];
    }
    else {
        // rfc4122, version 4 form
        var r
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        = void 0;
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        value[8] = value[13] = value[18] = value[23] = '-';
        value[14] = '4';
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!value[i]) {
                r = 0 | (Math.random() * 16);
                value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return value.join('');
}
function objectToString(style) {
    if (style && typeof style === 'object') {
        var styleStr_1 = '';
        Object.keys(style).forEach(function (key) {
            var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
        });
        return styleStr_1;
    }
    else if (style && typeof style === 'string') {
        return style;
    }
    return '';
}
/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
function mergeStyle(style1, style2) {
    if (style1 &&
        typeof style1 === 'object' &&
        style2 &&
        typeof style2 === 'object') {
        return Object.assign({}, style1, style2);
    }
    return objectToString(style1) + objectToString(style2);
}
// function extend(target, object1, ...objectN) {
//   objectN.unshift(object1);
//   objectN.map((object) => {
//     object.map((value) => {
//       if (typeof value !== 'undefined') {
//         target[prop] = value;
//       }
//     });
//   });
//   return target;
// }
function getSystemInfo() {
    Taro__default['default'].getSystemInfo().then(function (res) {
        // @ts-ignore
        Taro__default['default'].systemInfo = res;
    });
}

/* eslint-disable no-mixed-operators */

let i;
let support;
let Expr;
let getText;
let isXML;
let tokenize;
let compile;
let select;
let outermostContext;
let sortInput;
let hasDuplicate;

// Local document vars
let setDocument;
let _document;
let docElem;
let documentIsHTML;
let rbuggyQSA;
let rbuggyMatches;
let matches;
let contains;

// Instance-specific data
const expando = 'sizzle' + 1 * new Date();
const preferredDoc = runtime.window.document;
let dirruns = 0;
let done = 0;
const classCache = createCache();
const tokenCache = createCache();
const compilerCache = createCache();
const nonnativeSelectorCache = createCache();
let sortOrder = function (a, b) {
  if (a === b) {
    hasDuplicate = true;
  }
  return 0
};

// Instance methods
const hasOwn = ({}).hasOwnProperty;
let arr = [];
const pop = arr.pop;
const pushNative = arr.push;
let push = arr.push;
const slice = arr.slice;

// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
const indexOf = function (list, elem) {
  let i = 0;
  const len = list.length;
  for (; i < len; i++) {
    if (list[i] === elem) {
      return i
    }
  }
  return -1
};

const booleans = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|' +
      'ismap|loop|multiple|open|readonly|required|scoped';

// Regular expressions

// http://www.w3.org/TR/css3-selectors/#whitespace
const whitespace = '[\\x20\\t\\r\\n\\f]';

// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
const identifier = '(?:\\\\[\\da-fA-F]{1,6}' + whitespace +
      '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+';

// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
const attributes = '\\[' + whitespace + '*(' + identifier + ')(?:' + whitespace +

      // Operator (capture 2)
      '*([*^$|!~]?=)' + whitespace +

      // "Attribute values must be CSS identifiers [capture 5]
      // or strings [capture 3 or capture 4]"
      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + '))|)' +
      whitespace + '*\\]';

const pseudos = ':(' + identifier + ')(?:\\((' +

      // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
      // 1. quoted (capture 3; capture 4 or capture 5)
      "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

      // 2. simple (capture 6)
      '((?:\\\\.|[^\\\\()[\\]]|' + attributes + ')*)|' +

      // 3. anything else (capture 2)
      '.*' +
      ')\\)|)';

// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
const rwhitespace = new RegExp(whitespace + '+', 'g');
const rtrim = new RegExp('^' + whitespace + '+|((?:^|[^\\\\])(?:\\\\.)*)' +
      whitespace + '+$', 'g');

const rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*');
const rcombinators = new RegExp('^' + whitespace + '*([>+~]|' + whitespace + ')' + whitespace +
      '*');
const rdescend = new RegExp(whitespace + '|>');

const rpseudo = new RegExp(pseudos);
const ridentifier = new RegExp('^' + identifier + '$');

const matchExpr = {
  ID: new RegExp('^#(' + identifier + ')'),
  CLASS: new RegExp('^\\.(' + identifier + ')'),
  TAG: new RegExp('^(' + identifier + '|[*])'),
  ATTR: new RegExp('^' + attributes),
  PSEUDO: new RegExp('^' + pseudos),
  CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
        whitespace + '*(even|odd|(([+-]|)(\\d*)n|)' + whitespace + '*(?:([+-]|)' +
        whitespace + '*(\\d+)|))' + whitespace + '*\\)|)', 'i'),
  bool: new RegExp('^(?:' + booleans + ')$', 'i'),

  // For use in libraries implementing .is()
  // We use this for POS matching in `select`
  needsContext: new RegExp('^' + whitespace +
        '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + whitespace +
        '*((?:-\\d)?\\d*)' + whitespace + '*\\)|)(?=[^-]|$)', 'i')
};

const rhtml = /HTML$/i;
const rinputs = /^(?:input|select|textarea|button)$/i;
const rheader = /^h\d$/i;

const rnative = /^[^{]+\{\s*\[native \w/;

// Easily-parseable/retrievable ID or TAG or CLASS selectors
const rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;

const rsibling = /[+~]/;

// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
const runescape = new RegExp('\\\\[\\da-fA-F]{1,6}' + whitespace + '?|\\\\([^\\r\\n\\f])', 'g');
const funescape = function (escape, nonHex) {
  const high = '0x' + escape.slice(1) - 0x10000;

  return nonHex || (high < 0
    ? String.fromCharCode(high + 0x10000)
    : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00))
};

// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
// eslint-disable-next-line no-control-regex
const rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
const fcssescape = function (ch, asCodePoint) {
  if (asCodePoint) {
    // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
    if (ch === '\0') {
      return '\uFFFD'
    }

    // Control characters and (dependent upon position) numbers get escaped as code points
    return ch.slice(0, -1) + '\\' +
          ch.charCodeAt(ch.length - 1).toString(16) + ' '
  }

  // Other potentially-special ASCII characters get backslash-escaped
  return '\\' + ch
};

// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
const unloadHandler = function () {
  setDocument();
};

const inDisabledFieldset = addCombinator(
  function (elem) {
    return elem.disabled === true && elem.nodeName.toLowerCase() === 'fieldset'
  },
  { dir: 'parentNode', next: 'legend' }
);

// Optimize for push.apply( _, NodeList )
try {
  push.apply(
    (arr = slice.call(preferredDoc.childNodes)),
    preferredDoc.childNodes
  );

  // Support: Android<4.0
  // Detect silently failing push.apply
  // eslint-disable-next-line no-unused-expressions
  arr[preferredDoc.childNodes.length].nodeType;
} catch (e) {
  push = {
    apply: arr.length

      // Leverage slice if possible
      ? function (target, els) {
        pushNative.apply(target, slice.call(els));
      }

      // Support: IE<9
      // Otherwise append directly
      : function (target, els) {
        let j = target.length;
        let i = 0;

        // Can't trust NodeList.length
        while ((target[j++] = els[i++])) {}
        target.length = j - 1;
      }
  };
}

function Sizzle (selector, context, results, seed) {
  let m; let i; let elem; let nid; let match; let groups; let newSelector;
  let newContext = context && context.ownerDocument;

  // nodeType defaults to 9, since context defaults to document
  const nodeType = context ? context.nodeType : 9;

  results = results || [];

  // Return early from calls with invalid selector or context
  if (typeof selector !== 'string' || !selector ||
      nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
    return results
  }

  // Try to shortcut find operations (as opposed to filters) in HTML documents
  if (!seed) {
    setDocument(context);
    context = context || _document;

    if (documentIsHTML) {
      // If the selector is sufficiently simple, try using a "get*By*" DOM method
      // (excepting DocumentFragment context, where the methods don't exist)
      if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
        // ID selector
        if ((m = match[1])) {
          // Document context
          if (nodeType === 9) {
            if ((elem = context.getElementById(m))) {
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if (elem.id === m) {
                results.push(elem);
                return results
              }
            } else {
              return results
            }

            // Element context
          } else {
            // Support: IE, Opera, Webkit
            // TODO: identify versions
            // getElementById can match elements by name instead of ID
            if (newContext && (elem = newContext.getElementById(m)) &&
                contains(context, elem) &&
                elem.id === m) {
              results.push(elem);
              return results
            }
          }

          // Type selector
        } else if (match[2]) {
          push.apply(results, context.getElementsByTagName(selector));
          return results

          // Class selector
        } else if ((m = match[3]) && support.getElementsByClassName &&
            context.getElementsByClassName) {
          push.apply(results, context.getElementsByClassName(m));
          return results
        }
      }

      // Take advantage of querySelectorAll
      if (support.qsa &&
          !nonnativeSelectorCache[selector + ' '] &&
          (!rbuggyQSA || !rbuggyQSA.test(selector)) &&

          // Support: IE 8 only
          // Exclude object elements
          (nodeType !== 1 || context.nodeName.toLowerCase() !== 'object')) {
        newSelector = selector;
        newContext = context;

        // qSA considers elements outside a scoping root when evaluating child or
        // descendant combinators, which is not what we want.
        // In such cases, we work around the behavior by prefixing every selector in the
        // list with an ID selector referencing the scope context.
        // The technique has to be used as well when a leading combinator is used
        // as such selectors are not recognized by querySelectorAll.
        // Thanks to Andrew Dupont for this technique.
        if (nodeType === 1 &&
            (rdescend.test(selector) || rcombinators.test(selector))) {
          // Expand context for sibling selectors
          newContext = rsibling.test(selector) && testContext(context.parentNode) ||
              context;

          // We can use :scope instead of the ID hack if the browser
          // supports it & if we're not changing the context.
          if (newContext !== context || !support.scope) {
            // Capture the context ID, setting it first if necessary
            if ((nid = context.getAttribute('id'))) {
              nid = nid.replace(rcssescape, fcssescape);
            } else {
              context.setAttribute('id', (nid = expando));
            }
          }

          // Prefix every selector in the list
          groups = tokenize(selector);
          i = groups.length;
          while (i--) {
            groups[i] = (nid ? '#' + nid : ':scope') + ' ' +
                toSelector(groups[i]);
          }
          newSelector = groups.join(',');
        }

        try {
          push.apply(results,
            newContext.querySelectorAll(newSelector)
          );
          return results
        } catch (qsaError) {
          nonnativeSelectorCache(selector, true);
        } finally {
          if (nid === expando) {
            context.removeAttribute('id');
          }
        }
      }
    }
  }

  // All others
  return select(selector.replace(rtrim, '$1'), context, results, seed)
}

/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   * property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   * deleting the oldest entry
   */
function createCache () {
  const keys = [];

  function cache (key, value) {
    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
    if (keys.push(key + ' ') > Expr.cacheLength) {
      // Only keep the most recent entries
      delete cache[keys.shift()];
    }
    return (cache[key + ' '] = value)
  }
  return cache
}

/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
function markFunction (fn) {
  fn[expando] = true;
  return fn
}

/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
function assert (fn) {
  let el = _document.createElement('fieldset');

  try {
    return !!fn(el)
  } catch (e) {
    return false
  } finally {
    // Remove from its parent by default
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }

    // release memory in IE
    el = null;
  }
}

/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
function addHandle (attrs, handler) {
  const arr = attrs.split('|');
  let i = arr.length;

  while (i--) {
    Expr.attrHandle[arr[i]] = handler;
  }
}

/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
function siblingCheck (a, b) {
  let cur = b && a;
  const diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
        a.sourceIndex - b.sourceIndex;

  // Use IE sourceIndex if available on both nodes
  if (diff) {
    return diff
  }

  // Check if b follows a
  if (cur) {
    while ((cur = cur.nextSibling)) {
      if (cur === b) {
        return -1
      }
    }
  }

  return a ? 1 : -1
}

/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
function createInputPseudo (type) {
  return function (elem) {
    const name = elem.nodeName.toLowerCase();
    return name === 'input' && elem.type === type
  }
}

/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
function createButtonPseudo (type) {
  return function (elem) {
    const name = elem.nodeName.toLowerCase();
    return (name === 'input' || name === 'button') && elem.type === type
  }
}

/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
function createDisabledPseudo (disabled) {
  // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
  return function (elem) {
    // Only certain elements can match :enabled or :disabled
    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
    if ('form' in elem) {
      // Check for inherited disabledness on relevant non-disabled elements:
      // * listed form-associated elements in a disabled fieldset
      //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
      //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
      // * option elements in a disabled optgroup
      //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
      // All such elements have a "form" property.
      if (elem.parentNode && elem.disabled === false) {
        // Option elements defer to a parent optgroup if present
        if ('label' in elem) {
          if ('label' in elem.parentNode) {
            return elem.parentNode.disabled === disabled
          } else {
            return elem.disabled === disabled
          }
        }

        // Support: IE 6 - 11
        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
        return elem.isDisabled === disabled ||

            // Where there is no isDisabled, check manually
            /* jshint -W018 */
            elem.isDisabled !== !disabled &&
            inDisabledFieldset(elem) === disabled
      }

      return elem.disabled === disabled

      // Try to winnow out elements that can't be disabled before trusting the disabled property.
      // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
      // even exist on them, let alone have a boolean value.
    } else if ('label' in elem) {
      return elem.disabled === disabled
    }

    // Remaining elements are neither :enabled nor :disabled
    return false
  }
}

/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
function createPositionalPseudo (fn) {
  return markFunction(function (argument) {
    argument = +argument;
    return markFunction(function (seed, matches) {
      let j;
      const matchIndexes = fn([], seed.length, argument);
      let i = matchIndexes.length;

      // Match elements found at the specified indexes
      while (i--) {
        if (seed[(j = matchIndexes[i])]) {
          seed[j] = !(matches[j] = seed[j]);
        }
      }
    })
  })
}

/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
function testContext (context) {
  return context && typeof context.getElementsByTagName !== 'undefined' && context
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
isXML = Sizzle.isXML = function (elem) {
  const namespace = elem.namespaceURI;
  const docElem = (elem.ownerDocument || elem).documentElement;

  // Support: IE <=8
  // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
  // https://bugs.jquery.com/ticket/4833
  return !rhtml.test(namespace || docElem && docElem.nodeName || 'HTML')
};

/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
setDocument = Sizzle.setDocument = function (node) {
  let hasCompare; let subWindow;
  const doc = node ? node.ownerDocument || node : preferredDoc;

  // Return early if doc is invalid or already selected
  // Support: IE 11+, Edge 17 - 18+
  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
  // two documents; shallow comparisons work.
  // eslint-disable-next-line eqeqeq
  if (doc == _document || doc.nodeType !== 9 || !doc.documentElement) {
    return _document
  }

  // Update global variables
  _document = doc;
  docElem = _document.documentElement;
  documentIsHTML = !isXML(_document);

  // Support: IE 9 - 11+, Edge 12 - 18+
  // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
  // Support: IE 11+, Edge 17 - 18+
  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
  // two documents; shallow comparisons work.
  // eslint-disable-next-line eqeqeq
  if (preferredDoc != _document &&
      (subWindow = _document.defaultView) && subWindow.top !== subWindow) {
    // Support: IE 11, Edge
    if (subWindow.addEventListener) {
      subWindow.addEventListener('unload', unloadHandler, false);

      // Support: IE 9 - 10 only
    } else if (subWindow.attachEvent) {
      subWindow.attachEvent('onunload', unloadHandler);
    }
  }

  // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
  // Safari 4 - 5 only, Opera <=11.6 - 12.x only
  // IE/Edge & older browsers don't support the :scope pseudo-class.
  // Support: Safari 6.0 only
  // Safari 6.0 supports :scope but it's an alias of :root there.
  support.scope = false;
  /* Attributes
    ---------------------------------------------------------------------- */

  // Support: IE<8
  // Verify that getAttribute really returns attributes and not properties
  // (excepting IE8 booleans)
  support.attributes = assert(function (el) {
    el.className = 'i';
    return !el.getAttribute('className')
  });

  /* getElement(s)By*
    ---------------------------------------------------------------------- */

  // Check if getElementsByTagName("*") returns only elements
  support.getElementsByTagName = true;

  // Support: IE<9
  support.getElementsByClassName = true;

  // Support: IE<10
  // Check if getElementById returns elements by name
  // The broken getElementById methods don't pick up programmatically-set names,
  // so use a roundabout getElementsByName test
  support.getById = true;

  // ID filter and find
  if (support.getById) {
    Expr.filter.ID = function (id) {
      const attrId = id.replace(runescape, funescape);
      return function (elem) {
        return elem.getAttribute('id') === attrId
      }
    };
    Expr.find.ID = function (id, context) {
      if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
        const elem = context.getElementById(id);
        return elem ? [elem] : []
      }
    };
  } else {
    Expr.filter.ID = function (id) {
      const attrId = id.replace(runescape, funescape);
      return function (elem) {
        const node = typeof elem.getAttributeNode !== 'undefined' &&
            elem.getAttributeNode('id');
        return node && node.value === attrId
      }
    };

    // Support: IE 6 - 7 only
    // getElementById is not reliable as a find shortcut
    Expr.find.ID = function (id, context) {
      if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
        let node; let i; let elems;
        let elem = context.getElementById(id);

        if (elem) {
          // Verify the id attribute
          node = elem.getAttributeNode('id');
          if (node && node.value === id) {
            return [elem]
          }

          // Fall back on getElementsByName
          elems = context.getElementsByName(id);
          i = 0;
          while ((elem = elems[i++])) {
            node = elem.getAttributeNode('id');
            if (node && node.value === id) {
              return [elem]
            }
          }
        }

        return []
      }
    };
  }

  // Tag
  Expr.find.TAG = support.getElementsByTagName
    ? function (tag, context) {
      if (typeof context.getElementsByTagName !== 'undefined') {
        return context.getElementsByTagName(tag)

        // DocumentFragment nodes don't have gEBTN
      } else if (support.qsa) {
        return context.querySelectorAll(tag)
      }
    }

    : function (tag, context) {
      let elem;
      const tmp = [];
      let i = 0;

      // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
      const results = context.getElementsByTagName(tag);

      // Filter out possible comments
      if (tag === '*') {
        while ((elem = results[i++])) {
          if (elem.nodeType === 1) {
            tmp.push(elem);
          }
        }

        return tmp
      }
      return results
    };

  // Class
  Expr.find.CLASS = support.getElementsByClassName && function (className, context) {
    if (typeof context.getElementsByClassName !== 'undefined' && documentIsHTML) {
      return context.getElementsByClassName(className)
    }
  };

  /* QSA/matchesSelector
    ---------------------------------------------------------------------- */

  // QSA and matchesSelector support

  // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
  rbuggyMatches = [];

  // qSa(:focus) reports false when true (Chrome 21)
  // We allow this because of a bug in IE8/9 that throws an error
  // whenever `document.activeElement` is accessed on an iframe
  // So, we allow :focus to pass through QSA all the time to avoid the IE error
  // See https://bugs.jquery.com/ticket/13378
  rbuggyQSA = [];

  rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|'));
  rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join('|'));

  /* Contains
    ---------------------------------------------------------------------- */
  hasCompare = rnative.test(docElem.compareDocumentPosition);

  // Element contains another
  // Purposefully self-exclusive
  // As in, an element does not contain itself
  contains = hasCompare || rnative.test(docElem.contains)
    ? function (a, b) {
      const adown = a.nodeType === 9 ? a.documentElement : a;
      const bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && (
        adown.contains
          ? adown.contains(bup)
          : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
      ))
    }
    : function (a, b) {
      if (b) {
        while ((b = b.parentNode)) {
          if (b === a) {
            return true
          }
        }
      }
      return false
    };

  /* Sorting
    ---------------------------------------------------------------------- */

  // Document order sorting
  sortOrder = hasCompare
    ? function (a, b) {
      // Flag for duplicate removal
      if (a === b) {
        hasDuplicate = true;
        return 0
      }

      // Sort on method existence if only one input has compareDocumentPosition
      let compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
      if (compare) {
        return compare
      }

      // Calculate position if both inputs belong to the same document
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      compare = (a.ownerDocument || a) == (b.ownerDocument || b)
        ? a.compareDocumentPosition(b)

        // Otherwise we know they are disconnected
        : 1;

      // Disconnected nodes
      if (compare & 1 ||
        (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
        // Choose the first element that is related to our preferred document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if (a == _document || a.ownerDocument == preferredDoc &&
          contains(preferredDoc, a)) {
          return -1
        }

        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if (b == _document || b.ownerDocument == preferredDoc &&
          contains(preferredDoc, b)) {
          return 1
        }

        // Maintain original order
        return sortInput
          ? (indexOf(sortInput, a) - indexOf(sortInput, b))
          : 0
      }

      return compare & 4 ? -1 : 1
    }
    : function (a, b) {
      // Exit early if the nodes are identical
      if (a === b) {
        hasDuplicate = true;
        return 0
      }

      let cur;
      let i = 0;
      const aup = a.parentNode;
      const bup = b.parentNode;
      const ap = [a];
      const bp = [b];

      // Parentless nodes are either documents or disconnected
      if (!aup || !bup) {
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        /* eslint-disable eqeqeq */
        return a == _document ? -1
          : b == _document ? 1
            /* eslint-enable eqeqeq */
            : aup ? -1
              : bup ? 1
                : sortInput
                  ? (indexOf(sortInput, a) - indexOf(sortInput, b))
                  : 0

        // If the nodes are siblings, we can do a quick check
      } else if (aup === bup) {
        return siblingCheck(a, b)
      }

      // Otherwise we need full lists of their ancestors for comparison
      cur = a;
      while ((cur = cur.parentNode)) {
        ap.unshift(cur);
      }
      cur = b;
      while ((cur = cur.parentNode)) {
        bp.unshift(cur);
      }

      // Walk down the tree looking for a discrepancy
      while (ap[i] === bp[i]) {
        i++;
      }

      return i

        // Do a sibling check if the nodes have a common ancestor
        ? siblingCheck(ap[i], bp[i])

        // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        /* eslint-disable eqeqeq */
        : ap[i] == preferredDoc ? -1
          : bp[i] == preferredDoc ? 1
            /* eslint-enable eqeqeq */
            : 0
    };

  return _document
};

Sizzle.matches = function (expr, elements) {
  return Sizzle(expr, null, null, elements)
};

Sizzle.matchesSelector = function (elem, expr) {
  setDocument(elem);

  if (support.matchesSelector && documentIsHTML &&
      !nonnativeSelectorCache[expr + ' '] &&
      (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
      (!rbuggyQSA || !rbuggyQSA.test(expr))) {
    try {
      const ret = matches.call(elem, expr);

      // IE 9's matchesSelector returns false on disconnected nodes
      if (ret || support.disconnectedMatch ||

          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
        return ret
      }
    } catch (e) {
      nonnativeSelectorCache(expr, true);
    }
  }

  return Sizzle(expr, _document, null, [elem]).length > 0
};

Sizzle.contains = function (context, elem) {
  // Set document vars if needed
  // Support: IE 11+, Edge 17 - 18+
  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
  // two documents; shallow comparisons work.
  // eslint-disable-next-line eqeqeq
  if ((context.ownerDocument || context) != _document) {
    setDocument(context);
  }
  return contains(context, elem)
};

Sizzle.attr = function (elem, name) {
  // Set document vars if needed
  // Support: IE 11+, Edge 17 - 18+
  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
  // two documents; shallow comparisons work.
  // eslint-disable-next-line eqeqeq
  if ((elem.ownerDocument || elem) != _document) {
    setDocument(elem);
  }

  const fn = Expr.attrHandle[name.toLowerCase()];

  // Don't get fooled by Object.prototype properties (jQuery #13807)
  let val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
    ? fn(elem, name, !documentIsHTML)
    : undefined;

  return val !== undefined
    ? val
    : support.attributes || !documentIsHTML
      ? elem.getAttribute(name)
      : (val = elem.getAttributeNode(name)) && val.specified
        ? val.value
        : null
};

Sizzle.escape = function (sel) {
  return (sel + '').replace(rcssescape, fcssescape)
};

Sizzle.error = function (msg) {
  throw new Error('Syntax error, unrecognized expression: ' + msg)
};

/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
Sizzle.uniqueSort = function (results) {
  let elem;
  const duplicates = [];
  let j = 0;
  let i = 0;

  // Unless we *know* we can detect duplicates, assume their presence
  hasDuplicate = !support.detectDuplicates;
  sortInput = !support.sortStable && results.slice(0);
  results.sort(sortOrder);

  if (hasDuplicate) {
    while ((elem = results[i++])) {
      if (elem === results[i]) {
        j = duplicates.push(i);
      }
    }
    while (j--) {
      results.splice(duplicates[j], 1);
    }
  }

  // Clear input after sorting to release objects
  // See https://github.com/jquery/sizzle/pull/225
  sortInput = null;

  return results
};

/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
getText = Sizzle.getText = function (elem) {
  let node;
  let ret = '';
  let i = 0;
  const nodeType = elem.nodeType;

  if (!nodeType) {
    // If no nodeType, this is expected to be an array
    while ((node = elem[i++])) {
      // Do not traverse comment nodes
      ret += getText(node);
    }
  } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
    // Use textContent for elements
    // innerText usage removed for consistency of new lines (jQuery #11153)
    if (typeof elem.textContent === 'string') {
      return elem.textContent
    } else {
      // Traverse its children
      for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
        ret += getText(elem);
      }
    }
  } else if (nodeType === 3 || nodeType === 4) {
    return elem.nodeValue
  }

  // Do not include comment or processing instruction nodes

  return ret
};

Expr = Sizzle.selectors = {

  // Can be adjusted by the user
  cacheLength: 50,

  createPseudo: markFunction,

  match: matchExpr,

  attrHandle: {},

  find: {},

  relative: {
    '>': { dir: 'parentNode', first: true },
    ' ': { dir: 'parentNode' },
    '+': { dir: 'previousSibling', first: true },
    '~': { dir: 'previousSibling' }
  },

  preFilter: {
    ATTR: function (match) {
      match[1] = match[1].replace(runescape, funescape);

      // Move the given value to match[3] whether quoted or unquoted
      match[3] = (match[3] || match[4] ||
          match[5] || '').replace(runescape, funescape);

      if (match[2] === '~=') {
        match[3] = ' ' + match[3] + ' ';
      }

      return match.slice(0, 4)
    },

    CHILD: function (match) {
      /* matches from matchExpr["CHILD"]
          1 type (only|nth|...)
          2 what (child|of-type)
          3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          4 xn-component of xn+y argument ([+-]?\d*n|)
          5 sign of xn-component
          6 x of xn-component
          7 sign of y-component
          8 y of y-component
        */
      match[1] = match[1].toLowerCase();

      if (match[1].slice(0, 3) === 'nth') {
        // nth-* requires argument
        if (!match[3]) {
          Sizzle.error(match[0]);
        }

        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[4] = +(match[4]
          ? match[5] + (match[6] || 1)
          : 2 * (match[3] === 'even' || match[3] === 'odd'));
        match[5] = +((match[7] + match[8]) || match[3] === 'odd');

        // other types prohibit arguments
      } else if (match[3]) {
        Sizzle.error(match[0]);
      }

      return match
    },

    PSEUDO: function (match) {
      let excess;
      const unquoted = !match[6] && match[2];

      if (matchExpr.CHILD.test(match[0])) {
        return null
      }

      // Accept quoted arguments as-is
      if (match[3]) {
        match[2] = match[4] || match[5] || '';

        // Strip excess characters from unquoted arguments
      } else if (unquoted && rpseudo.test(unquoted) &&

          // Get excess from tokenize (recursively)
          (excess = tokenize(unquoted, true)) &&

          // advance to the next closing parenthesis
          (excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)) {
        // excess is a negative index
        match[0] = match[0].slice(0, excess);
        match[2] = unquoted.slice(0, excess);
      }

      // Return only captures needed by the pseudo filter method (type and argument)
      return match.slice(0, 3)
    }
  },

  filter: {

    TAG: function (nodeNameSelector) {
      const nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
      return nodeNameSelector === '*'
        ? function () {
          return true
        }
        : function (elem) {
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
        }
    },

    CLASS: function (className) {
      let pattern = classCache[className + ' '];

      return pattern ||
          (pattern = new RegExp('(^|' + whitespace +
            ')' + className + '(' + whitespace + '|$)')) && classCache(
            className, function (elem) {
              return pattern.test(
                typeof elem.className === 'string' && elem.className ||
                  typeof elem.getAttribute !== 'undefined' &&
                    elem.getAttribute('class') ||
                  ''
              )
            })
    },

    ATTR: function (name, operator, check) {
      return function (elem) {
        let result = Sizzle.attr(elem, name);

        if (result == null) {
          return operator === '!='
        }
        if (!operator) {
          return true
        }

        result += '';

        /* eslint-disable max-len */

        return operator === '=' ? result === check
          : operator === '!=' ? result !== check
            : operator === '^=' ? check && result.indexOf(check) === 0
              : operator === '*=' ? check && result.indexOf(check) > -1
                : operator === '$=' ? check && result.slice(-check.length) === check
                  : operator === '~=' ? (' ' + result.replace(rwhitespace, ' ') + ' ').indexOf(check) > -1
                    : operator === '|=' ? result === check || result.slice(0, check.length + 1) === check + '-'
                      : false
        /* eslint-enable max-len */
      }
    },

    CHILD: function (type, what, _argument, first, last) {
      const simple = type.slice(0, 3) !== 'nth';
      const forward = type.slice(-4) !== 'last';
      const ofType = what === 'of-type';

      return first === 1 && last === 0

      // Shortcut for :nth-*(n)
        ? function (elem) {
          return !!elem.parentNode
        }

        : function (elem, _context, xml) {
          let cache; let uniqueCache; let outerCache; let node; let nodeIndex; let start;
          let dir = simple !== forward ? 'nextSibling' : 'previousSibling';
          const parent = elem.parentNode;
          const name = ofType && elem.nodeName.toLowerCase();
          const useCache = !xml && !ofType;
          let diff = false;

          if (parent) {
            // :(first|last|only)-(child|of-type)
            if (simple) {
              while (dir) {
                node = elem;
                while ((node = node[dir])) {
                  if (ofType
                    ? node.nodeName.toLowerCase() === name
                    : node.nodeType === 1) {
                    return false
                  }
                }

                // Reverse direction for :only-* (if we haven't yet done so)
                start = dir = type === 'only' && !start && 'nextSibling';
              }
              return true
            }

            start = [forward ? parent.firstChild : parent.lastChild];

            // non-xml :nth-child(...) stores cache data on `parent`
            if (forward && useCache) {
              // Seek `elem` from a previously-cached index

              // ...in a gzip-friendly way
              node = parent;
              outerCache = node[expando] || (node[expando] = {});

              // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)
              uniqueCache = outerCache[node.uniqueID] ||
                  (outerCache[node.uniqueID] = {});

              cache = uniqueCache[type] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = nodeIndex && cache[2];
              node = nodeIndex && parent.childNodes[nodeIndex];

              while ((node = ++nodeIndex && node && node[dir] ||

                  // Fallback to seeking `elem` from the start
                  (diff = nodeIndex = 0) || start.pop())) {
                // When found, cache indexes on `parent` and break
                if (node.nodeType === 1 && ++diff && node === elem) {
                  uniqueCache[type] = [dirruns, nodeIndex, diff];
                  break
                }
              }
            } else {
              // Use previously-cached element index if available
              if (useCache) {
                // ...in a gzip-friendly way
                node = elem;
                outerCache = node[expando] || (node[expando] = {});

                // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)
                uniqueCache = outerCache[node.uniqueID] ||
                    (outerCache[node.uniqueID] = {});

                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex;
              }

              // xml :nth-child(...)
              // or :nth-last-child(...) or :nth(-last)?-of-type(...)
              if (diff === false) {
                // Use the same loop as above to seek `elem` from the start
                while ((node = ++nodeIndex && node && node[dir] ||
                    (diff = nodeIndex = 0) || start.pop())) {
                  if ((ofType
                    ? node.nodeName.toLowerCase() === name
                    : node.nodeType === 1) &&
                      ++diff) {
                    // Cache the index of each encountered element
                    if (useCache) {
                      outerCache = node[expando] ||
                          (node[expando] = {});

                      // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)
                      uniqueCache = outerCache[node.uniqueID] ||
                          (outerCache[node.uniqueID] = {});

                      uniqueCache[type] = [dirruns, diff];
                    }

                    if (node === elem) {
                      break
                    }
                  }
                }
              }
            }

            // Incorporate the offset, then check against cycle size
            diff -= last;
            return diff === first || (diff % first === 0 && diff / first >= 0)
          }
        }
    },

    PSEUDO: function (pseudo, argument) {
      // pseudo-class names are case-insensitive
      // http://www.w3.org/TR/selectors/#pseudo-classes
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
      // Remember that setFilters inherits from pseudos
      let args;
      const fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
            Sizzle.error('unsupported pseudo: ' + pseudo);

      // The user may use createPseudo to indicate that
      // arguments are needed to create the filter function
      // just as Sizzle does
      if (fn[expando]) {
        return fn(argument)
      }

      // But maintain support for old signatures
      if (fn.length > 1) {
        args = [pseudo, pseudo, '', argument];
        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
          ? markFunction(function (seed, matches) {
            let idx;
            const matched = fn(seed, argument);
            let i = matched.length;
            while (i--) {
              idx = indexOf(seed, matched[i]);
              seed[idx] = !(matches[idx] = matched[i]);
            }
          })
          : function (elem) {
            return fn(elem, 0, args)
          }
      }

      return fn
    }
  },

  pseudos: {

    // Potentially complex pseudos
    not: markFunction(function (selector) {
      // Trim the selector passed to compile
      // to avoid treating leading and trailing
      // spaces as combinators
      const input = [];
      const results = [];
      const matcher = compile(selector.replace(rtrim, '$1'));

      return matcher[expando]
        ? markFunction(function (seed, matches, _context, xml) {
          let elem;
          const unmatched = matcher(seed, null, xml, []);
          let i = seed.length;

          // Match elements unmatched by `matcher`
          while (i--) {
            if ((elem = unmatched[i])) {
              seed[i] = !(matches[i] = elem);
            }
          }
        })
        : function (elem, _context, xml) {
          input[0] = elem;
          matcher(input, null, xml, results);

          // Don't keep the element (issue #299)
          input[0] = null;
          return !results.pop()
        }
    }),

    has: markFunction(function (selector) {
      return function (elem) {
        return Sizzle(selector, elem).length > 0
      }
    }),

    contains: markFunction(function (text) {
      text = text.replace(runescape, funescape);
      return function (elem) {
        return (elem.textContent || getText(elem)).indexOf(text) > -1
      }
    }),

    // "Whether an element is represented by a :lang() selector
    // is based solely on the element's language value
    // being equal to the identifier C,
    // or beginning with the identifier C immediately followed by "-".
    // The matching of C against the element's language value is performed case-insensitively.
    // The identifier C does not have to be a valid language name."
    // http://www.w3.org/TR/selectors/#lang-pseudo
    lang: markFunction(function (lang) {
      // lang value must be a valid identifier
      if (!ridentifier.test(lang || '')) {
        Sizzle.error('unsupported lang: ' + lang);
      }
      lang = lang.replace(runescape, funescape).toLowerCase();
      return function (elem) {
        let elemLang;
        do {
          if ((elemLang = documentIsHTML
            ? elem.lang
            : elem.getAttribute('xml:lang') || elem.getAttribute('lang'))) {
            elemLang = elemLang.toLowerCase();
            return elemLang === lang || elemLang.indexOf(lang + '-') === 0
          }
        } while ((elem = elem.parentNode) && elem.nodeType === 1)
        return false
      }
    }),

    // Miscellaneous
    target: function (elem) {
      const hash = runtime.window.location && runtime.window.location.hash;
      return hash && hash.slice(1) === elem.id
    },

    root: function (elem) {
      return elem === docElem
    },

    focus: function (elem) {
      return elem === _document.activeElement &&
          (!_document.hasFocus || _document.hasFocus()) &&
          !!(elem.type || elem.href || ~elem.tabIndex)
    },

    // Boolean properties
    enabled: createDisabledPseudo(false),
    disabled: createDisabledPseudo(true),

    checked: function (elem) {
      // In CSS3, :checked should return both checked and selected elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      const nodeName = elem.nodeName.toLowerCase();
      return (nodeName === 'input' && !!elem.checked) ||
          (nodeName === 'option' && !!elem.selected)
    },

    selected: function (elem) {
      // Accessing this property makes selected-by-default
      // options in Safari work properly
      if (elem.parentNode) {
        // eslint-disable-next-line no-unused-expressions
        elem.parentNode.selectedIndex;
      }

      return elem.selected === true
    },

    // Contents
    empty: function (elem) {
      // http://www.w3.org/TR/selectors/#empty-pseudo
      // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
      //   but not by others (comment: 8; processing instruction: 7; etc.)
      // nodeType < 6 works because attributes (2) do not appear as children
      for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
        if (elem.nodeType < 6) {
          return false
        }
      }
      return true
    },

    parent: function (elem) {
      return !Expr.pseudos.empty(elem)
    },

    // Element/input types
    header: function (elem) {
      return rheader.test(elem.nodeName)
    },

    input: function (elem) {
      return rinputs.test(elem.nodeName)
    },

    button: function (elem) {
      const name = elem.nodeName.toLowerCase();
      return name === 'input' && elem.type === 'button' || name === 'button'
    },

    text: function (elem) {
      let attr;
      return elem.nodeName.toLowerCase() === 'input' &&
          elem.type === 'text' &&

          // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          ((attr = elem.getAttribute('type')) == null ||
            attr.toLowerCase() === 'text')
    },

    // Position-in-collection
    first: createPositionalPseudo(function () {
      return [0]
    }),

    last: createPositionalPseudo(function (_matchIndexes, length) {
      return [length - 1]
    }),

    eq: createPositionalPseudo(function (_matchIndexes, length, argument) {
      return [argument < 0 ? argument + length : argument]
    }),

    even: createPositionalPseudo(function (matchIndexes, length) {
      let i = 0;
      for (; i < length; i += 2) {
        matchIndexes.push(i);
      }
      return matchIndexes
    }),

    odd: createPositionalPseudo(function (matchIndexes, length) {
      let i = 1;
      for (; i < length; i += 2) {
        matchIndexes.push(i);
      }
      return matchIndexes
    }),

    lt: createPositionalPseudo(function (matchIndexes, length, argument) {
      let i = argument < 0
        ? argument + length
        : argument > length
          ? length
          : argument;
      for (; --i >= 0;) {
        matchIndexes.push(i);
      }
      return matchIndexes
    }),

    gt: createPositionalPseudo(function (matchIndexes, length, argument) {
      let i = argument < 0 ? argument + length : argument;
      for (; ++i < length;) {
        matchIndexes.push(i);
      }
      return matchIndexes
    })
  }
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
  Expr.pseudos[i] = createInputPseudo(i);
}
for (i in { submit: true, reset: true }) {
  Expr.pseudos[i] = createButtonPseudo(i);
}

// Easy API for creating new setFilters
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
// eslint-disable-next-line new-cap
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
  let matched; let match; let tokens; let type;
  let soFar; let groups; let preFilters;
  const cached = tokenCache[selector + ' '];

  if (cached) {
    return parseOnly ? 0 : cached.slice(0)
  }

  soFar = selector;
  groups = [];
  preFilters = Expr.preFilter;

  while (soFar) {
    // Comma and first run
    if (!matched || (match = rcomma.exec(soFar))) {
      if (match) {
        // Don't consume trailing commas as valid
        soFar = soFar.slice(match[0].length) || soFar;
      }
      groups.push((tokens = []));
    }

    matched = false;

    // Combinators
    if ((match = rcombinators.exec(soFar))) {
      matched = match.shift();
      tokens.push({
        value: matched,

        // Cast descendant combinators to space
        type: match[0].replace(rtrim, ' ')
      });
      soFar = soFar.slice(matched.length);
    }

    // Filters
    for (type in Expr.filter) {
      if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
          (match = preFilters[type](match)))) {
        matched = match.shift();
        tokens.push({
          value: matched,
          type: type,
          matches: match
        });
        soFar = soFar.slice(matched.length);
      }
    }

    if (!matched) {
      break
    }
  }

  // Return the length of the invalid excess
  // if we're just parsing
  // Otherwise, throw an error or return tokens
  return parseOnly
    ? soFar.length
    : soFar
      ? Sizzle.error(selector)

    // Cache the tokens
      : tokenCache(selector, groups).slice(0)
};

function toSelector (tokens) {
  let i = 0;
  const len = tokens.length;
  let selector = '';
  for (; i < len; i++) {
    selector += tokens[i].value;
  }
  return selector
}

function addCombinator (matcher, combinator, base) {
  const dir = combinator.dir;
  const skip = combinator.next;
  const key = skip || dir;
  const checkNonElements = base && key === 'parentNode';
  const doneName = done++;

  return combinator.first

  // Check against closest ancestor/preceding element
    ? function (elem, context, xml) {
      while ((elem = elem[dir])) {
        if (elem.nodeType === 1 || checkNonElements) {
          return matcher(elem, context, xml)
        }
      }
      return false
    }

  // Check against all ancestor/preceding elements
    : function (elem, context, xml) {
      let oldCache; let uniqueCache; let outerCache;
      const newCache = [dirruns, doneName];

      // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
      if (xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            if (matcher(elem, context, xml)) {
              return true
            }
          }
        }
      } else {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            outerCache = elem[expando] || (elem[expando] = {});

            // Support: IE <9 only
            // Defend against cloned attroperties (jQuery gh-1709)
            uniqueCache = outerCache[elem.uniqueID] ||
                (outerCache[elem.uniqueID] = {});

            if (skip && skip === elem.nodeName.toLowerCase()) {
              elem = elem[dir] || elem;
            } else if ((oldCache = uniqueCache[key]) &&
                oldCache[0] === dirruns && oldCache[1] === doneName) {
              // Assign to newCache so results back-propagate to previous elements
              return (newCache[2] = oldCache[2])
            } else {
              // Reuse newcache so results back-propagate to previous elements
              uniqueCache[key] = newCache;

              // A match means we're done; a fail means we have to keep checking
              if ((newCache[2] = matcher(elem, context, xml))) {
                return true
              }
            }
          }
        }
      }
      return false
    }
}

function elementMatcher (matchers) {
  return matchers.length > 1
    ? function (elem, context, xml) {
      let i = matchers.length;
      while (i--) {
        if (!matchers[i](elem, context, xml)) {
          return false
        }
      }
      return true
    }
    : matchers[0]
}

function multipleContexts (selector, contexts, results) {
  let i = 0;
  const len = contexts.length;
  for (; i < len; i++) {
    Sizzle(selector, contexts[i], results);
  }
  return results
}

function condense (unmatched, map, filter, context, xml) {
  let elem;
  const newUnmatched = [];
  let i = 0;
  const len = unmatched.length;
  const mapped = map != null;

  for (; i < len; i++) {
    if ((elem = unmatched[i])) {
      if (!filter || filter(elem, context, xml)) {
        newUnmatched.push(elem);
        if (mapped) {
          map.push(i);
        }
      }
    }
  }

  return newUnmatched
}

function setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
  if (postFilter && !postFilter[expando]) {
    postFilter = setMatcher(postFilter);
  }
  if (postFinder && !postFinder[expando]) {
    postFinder = setMatcher(postFinder, postSelector);
  }
  return markFunction(function (seed, results, context, xml) {
    let temp; let i; let elem;
    const preMap = [];
    const postMap = [];
    const preexisting = results.length;

    // Get initial elements from seed or context
    const elems = seed || multipleContexts(
      selector || '*',
      context.nodeType ? [context] : context,
      []
    );

    // Prefilter to get matcher input, preserving a map for seed-results synchronization
    const matcherIn = preFilter && (seed || !selector)
      ? condense(elems, preMap, preFilter, context, xml)
      : elems;

    let matcherOut = matcher

      // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
      ? postFinder || (seed ? preFilter : preexisting || postFilter)

        // ...intermediate processing is necessary
        ? []

        // ...otherwise use results directly
        : results
      : matcherIn;

    // Find primary matches
    if (matcher) {
      matcher(matcherIn, matcherOut, context, xml);
    }

    // Apply postFilter
    if (postFilter) {
      temp = condense(matcherOut, postMap);
      postFilter(temp, [], context, xml);

      // Un-match failing elements by moving them back to matcherIn
      i = temp.length;
      while (i--) {
        if ((elem = temp[i])) {
          matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
        }
      }
    }

    if (seed) {
      if (postFinder || preFilter) {
        if (postFinder) {
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
          temp = [];
          i = matcherOut.length;
          while (i--) {
            if ((elem = matcherOut[i])) {
              // Restore matcherIn since elem is not yet a final match
              temp.push((matcherIn[i] = elem));
            }
          }
          postFinder(null, (matcherOut = []), temp, xml);
        }

        // Move matched elements from seed to results to keep them synchronized
        i = matcherOut.length;
        while (i--) {
          if ((elem = matcherOut[i]) &&
              (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
            seed[temp] = !(results[temp] = elem);
          }
        }
      }

      // Add elements to results, through postFinder if defined
    } else {
      matcherOut = condense(
        matcherOut === results
          ? matcherOut.splice(preexisting, matcherOut.length)
          : matcherOut
      );
      if (postFinder) {
        postFinder(null, results, matcherOut, xml);
      } else {
        push.apply(results, matcherOut);
      }
    }
  })
}

function matcherFromTokens (tokens) {
  let checkContext; let matcher; let j;
  const len = tokens.length;
  const leadingRelative = Expr.relative[tokens[0].type];
  const implicitRelative = leadingRelative || Expr.relative[' '];
  let i = leadingRelative ? 1 : 0;

  // The foundational matcher ensures that elements are reachable from top-level context(s)
  const matchContext = addCombinator(function (elem) {
    return elem === checkContext
  }, implicitRelative, true);
  const matchAnyContext = addCombinator(function (elem) {
    return indexOf(checkContext, elem) > -1
  }, implicitRelative, true);
  let matchers = [function (elem, context, xml) {
    const ret = (!leadingRelative && (xml || context !== outermostContext)) || (
      (checkContext = context).nodeType
        ? matchContext(elem, context, xml)
        : matchAnyContext(elem, context, xml));

    // Avoid hanging onto element (issue #299)
    checkContext = null;
    return ret
  }];

  for (; i < len; i++) {
    if ((matcher = Expr.relative[tokens[i].type])) {
      matchers = [addCombinator(elementMatcher(matchers), matcher)];
    } else {
      matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

      // Return special upon seeing a positional matcher
      if (matcher[expando]) {
        // Find the next relative operator (if any) for proper handling
        j = ++i;
        for (; j < len; j++) {
          if (Expr.relative[tokens[j].type]) {
            break
          }
        }
        return setMatcher(
          i > 1 && elementMatcher(matchers),
          i > 1 && toSelector(

            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens
              .slice(0, i - 1)
              .concat({ value: tokens[i - 2].type === ' ' ? '*' : '' })
          ).replace(rtrim, '$1'),
          matcher,
          i < j && matcherFromTokens(tokens.slice(i, j)),
          j < len && matcherFromTokens((tokens = tokens.slice(j))),
          j < len && toSelector(tokens)
        )
      }
      matchers.push(matcher);
    }
  }

  return elementMatcher(matchers)
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
  const bySet = setMatchers.length > 0;
  const byElement = elementMatchers.length > 0;
  const superMatcher = function (seed, context, xml, results, outermost) {
    let elem; let j; let matcher;
    let matchedCount = 0;
    let i = '0';
    const unmatched = seed && [];
    let setMatched = [];
    const contextBackup = outermostContext;

    // We must always have either seed elements or outermost context
    const elems = seed || byElement && Expr.find.TAG('*', outermost);

    // Use integer dirruns iff this is the outermost matcher
    const dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);
    const len = elems.length;

    if (outermost) {
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      outermostContext = context == _document || context || outermost;
    }

    // Add elements passing elementMatchers directly to results
    // Support: IE<9, Safari
    // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
    for (; i !== len && (elem = elems[i]) != null; i++) {
      if (byElement && elem) {
        j = 0;

        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if (!context && elem.ownerDocument != _document) {
          setDocument(elem);
          xml = !documentIsHTML;
        }
        while ((matcher = elementMatchers[j++])) {
          if (matcher(elem, context || _document, xml)) {
            results.push(elem);
            break
          }
        }
        if (outermost) {
          dirruns = dirrunsUnique;
        }
      }

      // Track unmatched elements for set filters
      if (bySet) {
        // They will have gone through all possible matchers
        if ((elem = !matcher && elem)) {
          matchedCount--;
        }

        // Lengthen the array for every element, matched or not
        if (seed) {
          unmatched.push(elem);
        }
      }
    }

    // `i` is now the count of elements visited above, and adding it to `matchedCount`
    // makes the latter nonnegative.
    matchedCount += i;

    // Apply set filters to unmatched elements
    // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
    // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
    // no element matchers and no seed.
    // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
    // case, which will result in a "00" `matchedCount` that differs from `i` but is also
    // numerically zero.
    if (bySet && i !== matchedCount) {
      j = 0;
      while ((matcher = setMatchers[j++])) {
        matcher(unmatched, setMatched, context, xml);
      }

      if (seed) {
        // Reintegrate element matches to eliminate the need for sorting
        if (matchedCount > 0) {
          while (i--) {
            if (!(unmatched[i] || setMatched[i])) {
              setMatched[i] = pop.call(results);
            }
          }
        }

        // Discard index placeholder values to get only actual matches
        setMatched = condense(setMatched);
      }

      // Add matches to results
      push.apply(results, setMatched);

      // Seedless set matches succeeding multiple successful matchers stipulate sorting
      if (outermost && !seed && setMatched.length > 0 &&
            (matchedCount + setMatchers.length) > 1) {
        Sizzle.uniqueSort(results);
      }
    }

    // Override manipulation of globals by nested matchers
    if (outermost) {
      dirruns = dirrunsUnique;
      outermostContext = contextBackup;
    }

    return unmatched
  };

  return bySet
    ? markFunction(superMatcher)
    : superMatcher
}

compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
  let i;
  const setMatchers = [];
  const elementMatchers = [];
  let cached = compilerCache[selector + ' '];

  if (!cached) {
    // Generate a function of recursive functions that can be used to check each element
    if (!match) {
      match = tokenize(selector);
    }
    i = match.length;
    while (i--) {
      cached = matcherFromTokens(match[i]);
      if (cached[expando]) {
        setMatchers.push(cached);
      } else {
        elementMatchers.push(cached);
      }
    }

    // Cache the compiled function
    cached = compilerCache(
      selector,
      matcherFromGroupMatchers(elementMatchers, setMatchers)
    );

    // Save selector and tokenization
    cached.selector = selector;
  }
  return cached
};

/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
select = Sizzle.select = function (selector, context, results, seed) {
  let i; let tokens; let token; let type; let find;
  const compiled = typeof selector === 'function' && selector;
  const match = !seed && tokenize((selector = compiled.selector || selector));

  results = results || [];

  // Try to minimize operations if there is only one selector in the list and no seed
  // (the latter of which guarantees us context)
  if (match.length === 1) {
    // Reduce context if the leading compound selector is an ID
    tokens = match[0] = match[0].slice(0);
    if (tokens.length > 2 && (token = tokens[0]).type === 'ID' &&
        context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
      context = (Expr.find.ID(token.matches[0]
        .replace(runescape, funescape), context) || [])[0];
      if (!context) {
        return results

        // Precompiled matchers will still verify ancestry, so step up a level
      } else if (compiled) {
        context = context.parentNode;
      }

      selector = selector.slice(tokens.shift().value.length);
    }

    // Fetch a seed set for right-to-left matching
    i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
    while (i--) {
      token = tokens[i];

      // Abort if we hit a combinator
      if (Expr.relative[(type = token.type)]) {
        break
      }
      if ((find = Expr.find[type])) {
        // Search, expanding context for leading sibling combinators
        if ((seed = find(
          token.matches[0].replace(runescape, funescape),
          rsibling.test(tokens[0].type) && testContext(context.parentNode) ||
              context
        ))) {
          // If seed is empty or no tokens remain, we can return early
          tokens.splice(i, 1);
          selector = seed.length && toSelector(tokens);
          if (!selector) {
            push.apply(results, seed);
            return results
          }

          break
        }
      }
    }
  }

  // Compile and execute a filtering function if one is not provided
  // Provide `match` to avoid retokenization if we modified the selector above
  (compiled || compile(selector, match))(
    seed,
    context,
    !documentIsHTML,
    results,
    !context || rsibling.test(selector) && testContext(context.parentNode) || context
  );
  return results
};

// One-time assignments

// Sort stability
support.sortStable = expando.split('').sort(sortOrder).join('') === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function (el) {
  // Should return 1, but returns 4 (following)
  return el.compareDocumentPosition(_document.createElement('fieldset')) & 1
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (!assert(function (el) {
  el.innerHTML = "<a href='#'></a>";
  return el.firstChild.getAttribute('href') === '#'
})) {
  addHandle('type|href|height|width', function (elem, name, isXML) {
    if (!isXML) {
      return elem.getAttribute(name, name.toLowerCase() === 'type' ? 1 : 2)
    }
  });
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if (!support.attributes || !assert(function (el) {
  el.innerHTML = '<input/>';
  el.firstChild.setAttribute('value', '');
  return el.firstChild.getAttribute('value') === ''
})) {
  addHandle('value', function (elem, _name, isXML) {
    if (!isXML && elem.nodeName.toLowerCase() === 'input') {
      return elem.defaultValue
    }
  });
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if (!assert(function (el) {
  return el.getAttribute('disabled') == null
})) {
  addHandle(booleans, function (elem, name, isXML) {
    let val;
    if (!isXML) {
      return elem[name] === true ? name.toLowerCase()
        : (val = elem.getAttributeNode(name)) && val.specified
          ? val.value
          : null
    }
  });
}

// EXPOSE
const _sizzle = runtime.window.Sizzle;

Sizzle.noConflict = function () {
  if (runtime.window.Sizzle === Sizzle) {
    runtime.window.Sizzle = _sizzle;
  }

  return Sizzle
};

/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

function initEvent ($) {
  let _zid = 1; let undefined$1;
  const slice = Array.prototype.slice;
  const isFunction = $.isFunction;
  const isString = function (obj) { return typeof obj === 'string' };
  const handlers = {};
  const specialEvents = {};
  const focusinSupported = 'onfocusin' in window;
  const focus = { focus: 'focusin', blur: 'focusout' };
  const hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

  function zid (element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers (element, event, fn, selector) {
    event = parse(event);
    let matcher;
    if (event.ns) matcher = matcherFor(event.ns);
    return (handlers[zid(element)] || []).filter(function (handler) {
      return handler &&
        (!event.e || handler.e == event.e) &&
        (!event.ns || matcher.test(handler.ns)) &&
        (!fn || zid(handler.fn) === zid(fn)) &&
        (!selector || handler.sel == selector)
    })
  }
  function parse (event) {
    const parts = ('' + event).split('.');
    return { e: parts[0], ns: parts.slice(1).sort().join(' ') }
  }
  function matcherFor (ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture (handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent (type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add (element, events, fn, data, selector, delegator, capture) {
    const id = zid(element); const set = (handlers[id] || (handlers[id] = []));
    events.split(/\s/).forEach(function (event) {
      if (event == 'ready') return $(document).ready(fn)
      const handler = parse(event);
      handler.fn = fn;
      handler.sel = selector;
      // emulate mouseenter, mouseleave
      if (handler.e in hover) {
        fn = function (e) {
          const related = e.relatedTarget;
          if (!related || (related !== this && !$.contains(this, related))) { return handler.fn.apply(this, arguments) }
        };
      }
      handler.del = delegator;
      const callback = delegator || fn;
      handler.proxy = function (e) {
        e = compatible(e);
        if (e.isImmediatePropagationStopped()) return
        e.data = data;
        const result = callback.apply(element, e._args == undefined$1 ? [e] : [e].concat(e._args));
        if (result === false) e.preventDefault(), e.stopPropagation();
        return result
      };
      handler.i = set.length;
      set.push(handler);
      if ('addEventListener' in element) { element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture)); }
    });
  }
  function remove (element, events, fn, selector, capture) {
    const id = zid(element)
    ;(events || '').split(/\s/).forEach(function (event) {
      findHandlers(element, event, fn, selector).forEach(function (handler) {
        delete handlers[id][handler.i];
        if ('removeEventListener' in element) { element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture)); }
      });
    });
  }

  $.event = { add: add, remove: remove };

  $.proxy = function (fn, context) {
    const args = (2 in arguments) && slice.call(arguments, 2);
    if (isFunction(fn)) {
      const proxyFn = function () { return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) };
      proxyFn._zid = zid(fn);
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn);
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError('expected function')
    }
  };

  $.fn.bind = function (event, data, callback) {
    return this.on(event, data, callback)
  };
  $.fn.unbind = function (event, callback) {
    return this.off(event, callback)
  };
  $.fn.one = function (event, selector, data, callback) {
    return this.on(event, selector, data, callback, 1)
  };

  const returnTrue = function () { return true };
  const returnFalse = function () { return false };
  const ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/;
  const eventMethods = {
    preventDefault: 'isDefaultPrevented',
    stopImmediatePropagation: 'isImmediatePropagationStopped',
    stopPropagation: 'isPropagationStopped'
  };

  function compatible (event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event);

      $.each(eventMethods, function (name, predicate) {
        const sourceMethod = source[name];
        event[name] = function () {
          this[predicate] = returnTrue;
          return sourceMethod && sourceMethod.apply(source, arguments)
        };
        event[predicate] = returnFalse;
      });

      try {
        event.timeStamp || (event.timeStamp = Date.now());
      } catch (ignored) { }

      if (source.defaultPrevented !== undefined$1 ? source.defaultPrevented
        : 'returnValue' in source ? source.returnValue === false
          : source.getPreventDefault && source.getPreventDefault()) { event.isDefaultPrevented = returnTrue; }
    }
    return event
  }

  function createProxy (event) {
    let key; const proxy = { originalEvent: event };
    for (key in event) { if (!ignoreProperties.test(key) && event[key] !== undefined$1) proxy[key] = event[key]; }

    return compatible(proxy, event)
  }

  $.fn.delegate = function (selector, event, callback) {
    return this.on(event, selector, callback)
  };
  $.fn.undelegate = function (selector, event, callback) {
    return this.off(event, selector, callback)
  };

  $.fn.live = function (event, callback) {
    $(document.body).delegate(this.selector, event, callback);
    return this
  };
  $.fn.die = function (event, callback) {
    $(document.body).undelegate(this.selector, event, callback);
    return this
  };

  $.fn.on = function (event, selector, data, callback, one) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let autoRemove; let delegator; const $this = this;
    if (event && !isString(event)) {
      $.each(event, function (type, fn) {
        $this.on(type, selector, data, fn, one);
      });
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false) { callback = data, data = selector, selector = undefined$1; }
    if (callback === undefined$1 || data === false) { callback = data, data = undefined$1; }

    if (callback === false) callback = returnFalse;

    return $this.each(function (_, element) {
      if (one) {
        autoRemove = function (e) {
          remove(element, e.type, callback);
          return callback.apply(this, arguments)
        };
      }

      if (selector) {
        delegator = function (e) {
          let evt; const match = $(e.target).closest(selector, element).get(0);
          if (match && match !== element) {
            evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
            return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
          }
        };
      }

      add(element, event, callback, data, selector, delegator || autoRemove);
    })
  };
  $.fn.off = function (event, selector, callback) {
    const $this = this;
    if (event && !isString(event)) {
      $.each(event, function (type, fn) {
        $this.off(type, selector, fn);
      });
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false) { callback = selector, selector = undefined$1; }

    if (callback === false) callback = returnFalse;

    return $this.each(function () {
      remove(this, event, callback, selector);
    })
  };

  $.fn.trigger = function (event, args) {
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event);
    event._args = args;
    return this.each(function () {
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] === 'function') this[event.type]();
      // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event);
      else $(this).triggerHandler(event, args);
    })
  };

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function (event, args) {
    let e, result;
    this.each(function (i, element) {
      e = createProxy(isString(event) ? $.Event(event) : event);
      e._args = args;
      e.target = element;
      $.each(findHandlers(element, event.type || event), function (i, handler) {
        result = handler.proxy(e);
        if (e.isImmediatePropagationStopped()) return false
      });
    });
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout focus blur load resize scroll unload click dblclick ' +
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
  'change select keydown keypress keyup error').split(' ').forEach(function (event) {
    $.fn[event] = function (callback) {
      return (0 in arguments)
        ? this.bind(event, callback)
        : this.trigger(event)
    };
  });

  $.Event = function (type, props) {
    if (!isString(type)) props = type, type = props.type;
    const event = document.createEvent(specialEvents[type] || 'Events'); let bubbles = true;
    if (props) for (const name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name]);
    event.initEvent && event.initEvent(type, bubbles, true);
    return compatible(event)
  };
}

/* eslint-disable brace-style */

const Zepto = (function () {
  let undefined$1; let key; let $; let classList; const emptyArray = []; const concat = emptyArray.concat; const filter = emptyArray.filter; const slice = emptyArray.slice;
  const document = runtime.window.document;
  const isBrowser = typeof document !== 'undefined' && !!document.scripts;
  const elementDisplay = {}; const classCache = {};
  const cssNumber = { 'column-count': 1, columns: 1, 'font-weight': 1, 'line-height': 1, opacity: 1, 'z-index': 1, zoom: 1 };
  const fragmentRE = /^\s*<(\w+|!)[^>]*>/;
  const singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  const tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;
  const rootNodeRE = /^(?:body|html)$/i;
  const capitalRE = /([A-Z])/g;

  // special attributes that should be get/set via method calls
  const methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'];

  const adjacencyOperators = ['after', 'prepend', 'before', 'append'];
  const table = document.createElement('table');
  const tableRow = document.createElement('tr');
  const containers = {
    tr: document.createElement('tbody'),
    tbody: table,
    thead: table,
    tfoot: table,
    td: tableRow,
    th: tableRow,
    '*': document.createElement('div')
  };
  const class2type = {};
  const toString = class2type.toString;
  const zepto = {};
  let camelize; let uniq;
  const tempParent = document.createElement('div');
  const propMap = {
    tabindex: 'tabIndex',
    readonly: 'readOnly',
    for: 'htmlFor',
    class: 'className',
    maxlength: 'maxLength',
    cellspacing: 'cellSpacing',
    cellpadding: 'cellPadding',
    rowspan: 'rowSpan',
    colspan: 'colSpan',
    usemap: 'useMap',
    frameborder: 'frameBorder',
    contenteditable: 'contentEditable'
  };
  const isArray = Array.isArray ||
      function (object) { return object instanceof Array };

  zepto.matches = function (element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    const matchesSelector = element.matches || element.webkitMatchesSelector ||
                          element.mozMatchesSelector || element.oMatchesSelector ||
                          element.matchesSelector;
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    let match; let parent = element.parentNode; const temp = !parent;
    if (temp) (parent = tempParent).appendChild(element);
    match = ~zepto.qsa(parent, selector).indexOf(element);
    temp && tempParent.removeChild(element);
    return match
  };

  function type (obj) {
    return obj == null ? String(obj)
      : class2type[toString.call(obj)] || 'object'
  }

  function isFunction (value) { return type(value) == 'function' }
  function isWindow (obj) { return obj != null && obj == obj.window }
  function isDocument (obj) { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject (obj) { return type(obj) == 'object' }
  function isPlainObject (obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }

  function likeArray (obj) {
    const length = !!obj && 'length' in obj && obj.length;
    const type = $.type(obj);

    return type != 'function' && !isWindow(obj) && (
      type == 'array' || length === 0 ||
        (typeof length === 'number' && length > 0 && (length - 1) in obj)
    )
  }

  function compact (array) { return filter.call(array, function (item) { return item != null }) }
  function flatten (array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function (str) { return str.replace(/-+(.)?/g, function (match, chr) { return chr ? chr.toUpperCase() : '' }) };
  function dasherize (str) {
    return str.replace(/::/g, '/')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      .replace(/([a-z\d])([A-Z])/g, '$1_$2')
      .replace(/_/g, '-')
      .toLowerCase()
  }
  uniq = function (array) { return filter.call(array, function (item, idx) { return array.indexOf(item) == idx }) };

  function classRE (name) {
    return name in classCache
      ? classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx (name, value) {
    return (typeof value === 'number' && !cssNumber[dasherize(name)]) ? value + 'px' : value
  }

  function defaultDisplay (nodeName) {
    let element, display;
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName);
      document.body.appendChild(element);
      display = runtime.window.getComputedStyle(element, '').getPropertyValue('display');
      element.parentNode.removeChild(element);
      display == 'none' && (display = 'block');
      elementDisplay[nodeName] = display;
    }
    return elementDisplay[nodeName]
  }

  function children (element) {
    return 'children' in element
      ? slice.call(element.children)
      : $.map(element.childNodes, function (node) { if (node.nodeType == 1) return node })
  }

  function Z (dom, selector) {
    let i; const len = dom ? dom.length : 0;
    for (i = 0; i < len; i++) this[i] = dom[i];
    this.length = len;
    this.selector = selector || '';
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overridden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function (html, name, properties) {
    let dom, nodes, container;

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, '<$1></$2>');
      if (name === undefined$1) name = fragmentRE.test(html) && RegExp.$1;
      if (!(name in containers)) name = '*';

      container = containers[name];
      container.innerHTML = '' + html;
      dom = $.each(slice.call(container.childNodes), function () {
        container.removeChild(this);
      });
    }

    if (isPlainObject(properties)) {
      nodes = $(dom);
      $.each(properties, function (key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value);
        else nodes.attr(key, value);
      });
    }

    return dom
  };

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. This method can be overridden in plugins.
  zepto.Z = function (dom, selector) {
    return new Z(dom, selector)
  };

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overridden in plugins.
  zepto.isZ = function (object) {
    return object instanceof zepto.Z
  };

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overridden in plugins.
  zepto.init = function (selector, context) {
    let dom;
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector === 'string') {
      selector = selector.trim();
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector)) { dom = zepto.fragment(selector, RegExp.$1, context), selector = null; }
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined$1) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector);
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector);
      // Wrap DOM nodes.
      else if (isObject(selector)) { dom = [selector], selector = null; }
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector)) { dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null; }
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined$1) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector);
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  };

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function (selector, context) {
    return zepto.init(selector, context)
  };

  function extend (target, source, deep) {
    for (key in source) {
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) { target[key] = {}; }
        if (isArray(source[key]) && !isArray(target[key])) { target[key] = []; }
        extend(target[key], source[key], deep);
      } else if (source[key] !== undefined$1) target[key] = source[key];
    }
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function (target) {
    let deep; const args = slice.call(arguments, 1);
    if (typeof target === 'boolean') {
      deep = target;
      target = args.shift();
    }
    args.forEach(function (arg) { extend(target, arg, deep); });
    return target
  };

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overridden in plugins.
  zepto.qsa = function (element, selector) {
    return Sizzle(selector, element)
  };

  function filtered (nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains
    ? function (parent, node) {
      return parent !== node && parent.contains(node)
    }
    : function (parent, node) {
      while (node && (node = node.parentNode)) { if (node === parent) return true }
      return false
    };

  function funcArg (context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute (node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
  }

  // access className property while respecting SVGAnimatedString
  function className (node, value) {
    const klass = node.className || '';
    const svg = klass && klass.baseVal !== undefined$1;

    if (value === undefined$1) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value);
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue (value) {
    try {
      return value
        ? value == 'true' ||
        (value == 'false' ? false
          : value == 'null' ? null
            : +value + '' == value ? +value
              : /^[[{]/.test(value) ? $.parseJSON(value)
                : value)
        : value
    } catch (e) {
      return value
    }
  }

  $.type = type;
  $.isFunction = isFunction;
  $.isWindow = isWindow;
  $.isArray = isArray;
  $.isPlainObject = isPlainObject;

  $.isEmptyObject = function (obj) {
    let name;
    for (name in obj) return false
    return true
  };

  $.isNumeric = function (val) {
    const num = Number(val); const type = typeof val;
    return val != null && type != 'boolean' &&
      (type != 'string' || val.length) &&
      !isNaN(num) && isFinite(num) || false
  };

  $.inArray = function (elem, array, i) {
    return emptyArray.indexOf.call(array, elem, i)
  };

  $.camelCase = camelize;
  $.trim = function (str) {
    return str == null ? '' : String.prototype.trim.call(str)
  };

  // plugin compatibility
  $.uuid = 0;
  $.support = { };
  $.expr = { };
  $.noop = function () {};

  $.map = function (elements, callback) {
    let value; const values = []; let i; let key;
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i);
        if (value != null) values.push(value);
      }
    } else {
      for (key in elements) {
        value = callback(elements[key], key);
        if (value != null) values.push(value);
      }
    }
    return flatten(values)
  };

  $.each = function (elements, callback) {
    let i, key;
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++) { if (callback.call(elements[i], i, elements[i]) === false) return elements }
    } else {
      for (key in elements) { if (callback.call(elements[key], key, elements[key]) === false) return elements }
    }

    return elements
  };

  $.grep = function (elements, callback) {
    return filter.call(elements, callback)
  };

  if (runtime.window.JSON) $.parseJSON = JSON.parse;

  // Populate the class2type map
  $.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (i, name) {
    class2type['[object ' + name + ']'] = name.toLowerCase();
  });

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    constructor: zepto.Z,
    length: 0,

    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    splice: emptyArray.splice,
    indexOf: emptyArray.indexOf,
    concat: function () {
      let i; let value; const args = [];
      for (i = 0; i < arguments.length; i++) {
        value = arguments[i];
        args[i] = zepto.isZ(value) ? value.toArray() : value;
      }
      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
    },

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function (fn) {
      return $($.map(this, function (el, i) { return fn.call(el, i, el) }))
    },
    slice: function () {
      return $(slice.apply(this, arguments))
    },

    ready: function (callback) {
      // don't use "interactive" on IE <= 10 (it can fired premature)
      if (document.readyState === 'complete' ||
          (document.readyState !== 'loading' && !document.documentElement.doScroll)) { setTimeout(function () { callback($); }, 0); } else {
        let handler = function () {
          document.removeEventListener('DOMContentLoaded', handler, false);
          runtime.window.removeEventListener('load', handler, false);
          callback($);
        };
        document.addEventListener('DOMContentLoaded', handler, false);
        runtime.window.addEventListener('load', handler, false);
      }
      return this
    },
    get: function (idx) {
      return idx === undefined$1 ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function () { return this.get() },
    size: function () {
      return this.length
    },
    remove: function () {
      return this.each(function () {
        if (this.parentNode != null) { this.parentNode.removeChild(this); }
      })
    },
    each: function (callback) {
      emptyArray.every.call(this, function (el, idx) {
        return callback.call(el, idx, el) !== false
      });
      return this
    },
    filter: function (selector) {
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function (element) {
        return zepto.matches(element, selector)
      }))
    },
    add: function (selector, context) {
      return $(uniq(this.concat($(selector, context))))
    },
    is: function (selector) {
      return typeof selector === 'string' ? this.length > 0 && zepto.matches(this[0], selector)
        : selector && this.selector == selector.selector
    },
    not: function (selector) {
      const nodes = [];
      if (isFunction(selector) && selector.call !== undefined$1) {
        this.each(function (idx) {
          if (!selector.call(this, idx)) nodes.push(this);
        });
      } else {
        const excludes = typeof selector === 'string' ? this.filter(selector)
          : (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector);
        this.forEach(function (el) {
          if (excludes.indexOf(el) < 0) nodes.push(el);
        });
      }
      return $(nodes)
    },
    has: function (selector) {
      return this.filter(function () {
        return isObject(selector)
          ? $.contains(this, selector)
          : $(this).find(selector).size()
      })
    },
    eq: function (idx) {
      return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1)
    },
    first: function () {
      const el = this[0];
      return el && !isObject(el) ? el : $(el)
    },
    last: function () {
      const el = this[this.length - 1];
      return el && !isObject(el) ? el : $(el)
    },
    find: function (selector) {
      let result; const $this = this;
      if (!selector) result = $();
      else if (typeof selector === 'object') {
        result = $(selector).filter(function () {
          const node = this;
          return emptyArray.some.call($this, function (parent) {
            return $.contains(parent, node)
          })
        });
      } else if (this.length == 1) result = $(zepto.qsa(this[0], selector));
      else result = this.map(function () { return zepto.qsa(this, selector) });
      return result
    },
    closest: function (selector, context) {
      const nodes = []; const collection = typeof selector === 'object' && $(selector);
      this.each(function (_, node) {
        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) { node = node !== context && !isDocument(node) && node.parentNode; }
        if (node && nodes.indexOf(node) < 0) nodes.push(node);
      });
      return $(nodes)
    },
    parents: function (selector) {
      const ancestors = []; let nodes = this;
      while (nodes.length > 0) {
        nodes = $.map(nodes, function (node) {
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node);
            return node
          }
        });
      }
      return filtered(ancestors, selector)
    },
    parent: function (selector) {
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function (selector) {
      return filtered(this.map(function () { return children(this) }), selector)
    },
    contents: function () {
      return this.map(function () { return this.contentDocument || slice.call(this.childNodes) })
    },
    siblings: function (selector) {
      return filtered(this.map(function (i, el) {
        return filter.call(children(el.parentNode), function (child) { return child !== el })
      }), selector)
    },
    empty: function () {
      return this.each(function () { this.innerHTML = ''; })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function (property) {
      return $.map(this, function (el) { return el[property] })
    },
    show: function () {
      return this.each(function () {
        this.style.display == 'none' && (this.style.display = '');
        if (runtime.window.getComputedStyle(this, '').getPropertyValue('display') == 'none') { this.style.display = defaultDisplay(this.nodeName); }
      })
    },
    replaceWith: function (newContent) {
      return this.before(newContent).remove()
    },
    wrap: function (structure) {
      const func = isFunction(structure);
      let dom;
      let clone;
      if (this[0] && !func) {
        dom = $(structure).get(0);
        clone = dom.parentNode || this.length > 1;
      }

      return this.each(function (index) {
        $(this).wrapAll(
          func ? structure.call(this, index)
            : clone ? dom.cloneNode(true) : dom
        );
      })
    },
    wrapAll: function (structure) {
      if (this[0]) {
        $(this[0]).before(structure = $(structure));
        let children;
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first();
        $(structure).append(this);
      }
      return this
    },
    wrapInner: function (structure) {
      const func = isFunction(structure);
      return this.each(function (index) {
        const self = $(this); const contents = self.contents();
        const dom = func ? structure.call(this, index) : structure;
        contents.length ? contents.wrapAll(dom) : self.append(dom);
      })
    },
    unwrap: function () {
      this.parent().each(function () {
        $(this).replaceWith($(this).children());
      });
      return this
    },
    clone: function () {
      return this.map(function () { return this.cloneNode(true) })
    },
    hide: function () {
      return this.css('display', 'none')
    },
    toggle: function (setting) {
      return this.each(function () {
        const el = $(this)
        ;(setting === undefined$1 ? el.css('display') == 'none' : setting) ? el.show() : el.hide();
      })
    },
    prev: function (selector) { return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function (selector) { return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function (html) {
      return 0 in arguments
        ? this.each(function (idx) {
          const originHtml = this.innerHTML;
          $(this).empty().append(funcArg(this, html, idx, originHtml));
        })
        : (0 in this ? this[0].innerHTML : null)
    },
    text: function (text) {
      return 0 in arguments
        ? this.each(function (idx) {
          const newText = funcArg(this, text, idx, this.textContent);
          this.textContent = newText == null ? '' : '' + newText;
        })
        : (0 in this ? this.pluck('textContent').join('') : null)
    },
    attr: function (name, value) {
      let result;
      return (typeof name === 'string' && !(1 in arguments))
        ? (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined$1)
        : this.each(function (idx) {
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key]);
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
        })
    },
    removeAttr: function (name) {
      return this.each(function () {
        this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
          setAttribute(this, attribute);
        }, this);
      })
    },
    prop: function (name, value) {
      name = propMap[name] || name;
      return (typeof name === 'string' && !(1 in arguments))
        ? (this[0] && this[0][name])
        : this.each(function (idx) {
          if (isObject(name)) for (key in name) this[propMap[key] || key] = name[key];
          else this[name] = funcArg(this, value, idx, this[name]);
        })
    },
    removeProp: function (name) {
      name = propMap[name] || name;
      return this.each(function () { delete this[name]; })
    },
    data: function (name, value) {
      const attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();

      const data = (1 in arguments)
        ? this.attr(attrName, value)
        : this.attr(attrName);

      return data !== null ? deserializeValue(data) : undefined$1
    },
    val: function (value) {
      if (0 in arguments) {
        if (value == null) value = '';
        return this.each(function (idx) {
          this.value = funcArg(this, value, idx, this.value);
        })
      } else {
        return this[0] && (this[0].multiple
          ? $(this[0]).find('option').filter(function () { return this.selected }).pluck('value')
          : this[0].value)
      }
    },
    offset: function (coordinates) {
      if (coordinates) {
        return this.each(function (index) {
          const $this = $(this);
          const coords = funcArg(this, coordinates, index, $this.offset());
          const parentOffset = $this.offsetParent().offset();
          const props = {
            top: coords.top - parentOffset.top,
            left: coords.left - parentOffset.left
          };

          if ($this.css('position') == 'static') props.position = 'relative';
          $this.css(props);
        })
      }
      if (!this.length) return null
      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) { return { top: 0, left: 0 } }
      if (!isBrowser) {
        return new Promise((resolve) => {
          Taro__default['default'].createSelectorQuery().select('#' + this[0].uid).boundingClientRect(function (rect) {
            resolve({
              left: rect.left,
              top: rect.top,
              width: rect.height,
              height: rect.height
            });
          }).exec();
        })
      }

      const obj = this[0].getBoundingClientRect();
      return new Promise((resolve) => {
        resolve({
          left: obj.left + runtime.window.pageXOffset,
          top: obj.top + runtime.window.pageYOffset,
          width: Math.round(obj.width),
          height: Math.round(obj.height)
        });
      })
    },
    css: function (property, value) {
      if (arguments.length < 2) {
        const element = this[0];
        if (typeof property === 'string') {
          if (!element) return
          return element.style[camelize(property)] || runtime.window.getComputedStyle(element, '').getPropertyValue(property)
        } else if (isArray(property)) {
          if (!element) return
          const props = {};
          const computedStyle = runtime.window.getComputedStyle(element, '');
          $.each(property, function (_, prop) {
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop));
          });
          return props
        }
      }

      let css = '';
      if (type(property) == 'string') {
        if (!value && value !== 0) { this.each(function () { this.style.removeProperty(dasherize(property)); }); } else { css = dasherize(property) + ':' + maybeAddPx(property, value); }
      } else {
        for (key in property) {
          if (!property[key] && property[key] !== 0) { this.each(function () { this.style.removeProperty(dasherize(key)); }); } else { css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'; }
        }
      }

      return this.each(function () { this.style.cssText += ';' + css; })
    },
    index: function (element) {
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function (name) {
      if (!name) return false
      return emptyArray.some.call(this, function (el) {
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function (name) {
      if (!name) return this
      return this.each(function (idx) {
        if (!('className' in this)) return
        classList = [];
        const cls = className(this); const newName = funcArg(this, name, idx, cls);
        newName.split(/\s+/g).forEach(function (klass) {
          if (!$(this).hasClass(klass)) classList.push(klass);
        }, this);
        classList.length && className(this, cls + (cls ? ' ' : '') + classList.join(' '));
      })
    },
    removeClass: function (name) {
      return this.each(function (idx) {
        if (!('className' in this)) return
        if (name === undefined$1) return className(this, '')
        classList = className(this);
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
          classList = classList.replace(classRE(klass), ' ');
        });
        className(this, classList.trim());
      })
    },
    toggleClass: function (name, when) {
      if (!name) return this
      return this.each(function (idx) {
        const $this = $(this); const names = funcArg(this, name, idx, className(this));
        names.split(/\s+/g).forEach(function (klass) {
          (when === undefined$1 ? !$this.hasClass(klass) : when)
            ? $this.addClass(klass) : $this.removeClass(klass);
        });
      })
    },
    scrollTop: function (value) {
      if (!this.length) return
      const hasScrollTop = 'scrollTop' in this[0];
      if (value === undefined$1) {
        if (isBrowser) {
          return Promise.resolve(hasScrollTop ? this[0].scrollTop : this[0].pageYOffset)
        }
        return hasScrollTop ? Promise.resolve(this[0].scrollTop) : new Promise((resolve) => {
          Taro__default['default'].createSelectorQuery().select('#' + this[0].uid).scrollOffset(function (res) {
            resolve(res.scrollTop);
          }).exec();
        })
      }
      return this.each(hasScrollTop
        ? function () { this.scrollTop = value; }
        : function () { this.scrollTo(this.scrollX, value); })
    },
    scrollLeft: function (value) {
      if (!this.length) return
      const hasScrollLeft = 'scrollLeft' in this[0];
      if (value === undefined$1) {
        if (isBrowser) {
          return Promise.resolve(hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset)
        }

        return hasScrollLeft ? Promise.resolve(this[0].scrollLeft) : new Promise(resolve => {
          Taro__default['default'].createSelectorQuery().select('#' + this[0].uid).scrollOffset(function (res) {
            resolve(res.scrollLeft);
          }).exec();
        })
      }
      return this.each(hasScrollLeft
        ? function () { this.scrollLeft = value; }
        : function () { this.scrollTo(value, this.scrollY); })
    },
    position: function () {
      if (!this.length) return

      const elem = this[0];
      // Get *real* offsetParent
      const offsetParent = this.offsetParent();
      // Get correct offsets
      const offset = this.offset();
      const parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();
      if (!offset) return
      return offset.then(offsetValue => {
        // Subtract element margins
        // note: when an element has margin: auto the offsetLeft and marginLeft
        // are the same in Safari causing offset.left to incorrectly be 0
        offsetValue.top -= parseFloat($(elem).css('margin-top')) || 0;
        offsetValue.left -= parseFloat($(elem).css('margin-left')) || 0;

        // Add offsetParent borders
        parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
        parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

        // Subtract the two offsets
        return {
          top: offsetValue.top - parentOffset.top,
          left: offsetValue.left - parentOffset.left
        }
      })
    },
    offsetParent: function () {
      return this.map(function () {
        let parent = this.offsetParent || document.body;
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css('position') == 'static') { parent = parent.offsetParent; }
        return parent
      })
    },
    // reflow : function () {
    //   return this.each(function () {
    //     return this.clientLeft;
    //   });
    // },
    // transition : function (duration) {
    //   if (typeof duration === 'number') {
    //     duration = `${duration}ms`;
    //   }
    //   return this.each(function () {
    //     this.style.webkitTransitionDuration = duration;
    //     this.style.transitionDuration = duration;
    //   });
    // },
    //
    // transitionEnd : function (callback) {
    //   // eslint-disable-next-line @typescript-eslint/no-this-alias
    //   const that = this;
    //   const events = ['webkitTransitionEnd', 'transitionend'];
    //   function fireCallback(e) {
    //     console.log('end')
    //     if (e.target !== this) {
    //       return;
    //     }
    //     // @ts-ignore
    //     callback.call(this, e);
    //     events.map((event) => {
    //       that.off(event, fireCallback);
    //     });
    //   }
    //   events.map(( event) => {
    //     that.on(event, fireCallback);
    //   });
    //   return this;
    // }
  };

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function (dimension) {
    const dimensionProperty =
      dimension.replace(/./, function (m) { return m[0].toUpperCase() });

    $.fn[dimension] = function (value) {
      let el = this[0];
      if (value === undefined$1) {
        if (isBrowser) {
          let v;
          if (isWindow) {
            v = el['inner' + dimensionProperty];
          } else if (isDocument) {
            v = el.documentElement['scroll' + dimensionProperty];
          }
          return Promise.resolve(v)
        }
        return this.offset().then(rect => rect[dimension])
      } else {
        return this.each(function (idx) {
          el = $(this);
          el.css(dimension, funcArg(this, value, idx, el[dimension]()));
        })
      }
    };
  });

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function (operator, operatorIndex) {
    const inside = operatorIndex % 2; //= > prepend, append

    $.fn[operator] = function () {
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      let argType; const nodes = $.map(arguments, function (arg) {
        let arr = [];
        argType = type(arg);
        if (argType == 'array') {
          arg.forEach(function (el) {
            if (el.nodeType !== undefined$1) return arr.push(el)
            else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())
            arr = arr.concat(zepto.fragment(el));
          });
          return arr
        }
        return argType == 'object' || arg == null
          ? arg : zepto.fragment(arg)
      });
      let parent; const copyByClone = this.length > 1;
      if (nodes.length < 1) return this

      return this.each(function (_, target) {
        parent = inside ? target : target.parentNode;

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling
          : operatorIndex == 1 ? target.firstChild
            : operatorIndex == 2 ? target
              : null;

        nodes.forEach(function (node) {
          if (copyByClone) node = node.cloneNode(true);
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target);
        });
      })
    };

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
      $(html)[operator](this);
      return this
    };
  });

  zepto.Z.prototype = Z.prototype = $.fn;

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq;
  zepto.deserializeValue = deserializeValue;
  $.zepto = zepto;
  initEvent($);

  return $
})();

var MdAccordion = /** @class */ (function (_super) {
    __extends(MdAccordion, _super);
    function MdAccordion(props) {
        var _this = _super.call(this, props) || this;
        _this.bodyId = uuid();
        _this._id = uuid();
        _this.handleClick = function (event) {
            var opened = _this.state.opened;
            var bodyStyle = '';
            if (opened) {
                bodyStyle = 'height:0px;';
            }
            else if (_this.bodyHeight > 0) {
                bodyStyle = "height:" + _this.bodyHeight + "px;";
            }
            if (event) {
                var self_1 = Zepto("#" + event.currentTarget.id);
                var pId = self_1.attr('mdui-panel');
                if (pId)
                    Taro__default['default'].eventCenter.trigger("mdui-panel-item-open-" + pId, _this.bodyId, opened);
                _this.props.onClick && _this.props.onClick(!opened, event);
            }
            _this.setState({ opened: !opened, bodyStyle: bodyStyle }, function () {
                if (_this.bodyHeight == undefined)
                    delayQuerySelector("#" + _this.bodyId, 0).then(function (rect) {
                        console.log(rect);
                        var height = parseInt(rect[0].height.toString());
                        if (height > 0) {
                            _this.bodyHeight = height;
                        }
                    });
            });
        };
        _this.open = function () {
            if (_this.state.opened)
                return;
            _this.handleClick();
        };
        _this.close = function () {
            if (!_this.state.opened)
                return;
            _this.handleClick();
        };
        _this.handleActionClick = function (act, idx, e) {
            console.log('action click ', idx);
            _this.props.onActionClick && _this.props.onActionClick(act, idx);
            e.stopPropagation();
        };
        _this.state = {
            opened: props.open,
            loaded: false,
            bodyStyle: ''
        };
        return _this;
    }
    MdAccordion.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            var self = Zepto("#" + _this._id);
            var pId = self.attr('mdui-panel');
            if (pId) {
                Taro__default['default'].eventCenter.on("mdui-panel-item-open-" + pId, function (st, itemId) {
                    console.log(st, itemId);
                    if (itemId != _this._id && st && _this.state.opened) {
                        _this.close();
                    }
                });
            }
            delayQuerySelector("#" + _this.bodyId, 0).then(function (rect) {
                var height = parseInt(rect[0].height.toString());
                if (height > 0) {
                    _this.bodyHeight = height;
                    var opened = _this.state.opened;
                    _this.setState({ bodyStyle: "height:" + (opened ? height : '0') + "px;", loaded: true });
                }
            });
        }, 10);
    };
    MdAccordion.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.open != undefined && nextProps.open !== this.state.opened) {
            this.setState({ opened: nextProps.open });
        }
    };
    MdAccordion.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.customStyle, customStyle = _b === void 0 ? '' : _b, className = _a.className, title = _a.title, subTitle = _a.subTitle, children = _a.children, actions = _a.actions;
        var _c = this.state, opened = _c.opened, loaded = _c.loaded, bodyStyle = _c.bodyStyle;
        var sty = mergeStyle(customStyle, { visibility: loaded ? 'visible' : 'hidden' });
        return (React__default['default'].createElement(components.View, { id: this._id, className: _classnames_2_2_6_classnames('mdui-panel-item', { 'mdui-panel-item-open': opened }, className), onClick: this.handleClick, style: sty },
            React__default['default'].createElement(components.View, { className: 'mdui-panel-item-header' },
                React__default['default'].createElement(components.View, { className: 'mdui-panel-item-title' }, title),
                React__default['default'].createElement(components.View, { className: 'mdui-panel-item-summary' }, subTitle),
                React__default['default'].createElement(components.View, { className: 'mdui-panel-item-arrow mdui-icon material-icons' }, "keyboard_arrow_down")),
            React__default['default'].createElement(components.View, { id: this.bodyId, className: 'mdui-panel-item-body', style: bodyStyle },
                children,
                actions && React__default['default'].createElement(components.View, { className: 'mdui-panel-item-actions' }, actions.map(function (act, i) { return (
                // @ts-ignore
                React__default['default'].createElement(components.Button, { className: 'mdui-btn mdui-ripple', key: i, onClick: _this.handleActionClick.bind(_this, act, i) }, act)); })))));
    };
    return MdAccordion;
}(React__default['default'].Component));
MdAccordion.defaultProps = {
    open: undefined,
    customStyle: '',
    className: '',
    title: '',
    subTitle: '',
    icon: '',
    actions: undefined
};
MdAccordion.propTypes = {
    customStyle: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.object, _propTypes_15_7_2_propTypes.string]),
    className: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.array, _propTypes_15_7_2_propTypes.string]),
    open: _propTypes_15_7_2_propTypes.bool,
    title: _propTypes_15_7_2_propTypes.string,
    subTitle: _propTypes_15_7_2_propTypes.string,
    icon: _propTypes_15_7_2_propTypes.string,
    actions: _propTypes_15_7_2_propTypes.array,
    onClick: _propTypes_15_7_2_propTypes.func
};

var MdListItem = /** @class */ (function (_super) {
    __extends(MdListItem, _super);
    function MdListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            if (typeof _this.props.onClick === 'function' && !_this.props.active) {
                _this.props.onClick(event);
            }
        };
        _this.handleSwitchChange = function (event) {
            if (typeof _this.props.onChange === 'function' &&
                !_this.props.active) {
                _this.props.onChange(event);
            }
        };
        return _this;
    }
    MdListItem.prototype.handleSwitchClick = function (e) {
        e.stopPropagation();
    };
    MdListItem.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, title = _d.title, subTitle = _d.subTitle, border = _d.border, iconInfo = _d.iconInfo, rightIcon = _d.rightIcon, active = _d.active, type = _d.type, state = _d.state;
        var rootClass = _classnames_2_2_6_classnames('mdui-list-item', (_a = {}, _a['mdui-list-item-active'] = active, _a), this.props.className);
        var leftType = iconInfo && typeof iconInfo != 'string' ? iconInfo.type : null;
        var rightType = rightIcon ? rightIcon.type : null;
        var leftIsImg = iconInfo && typeof iconInfo != 'string' && iconInfo.value.indexOf('.') > 0;
        var rightIsImg = rightIcon && rightIcon.value.indexOf('.') > 0;
        var iconClass = ['mdui-list-item-icon', 'mdui-icon', 'material-icons'];
        var leftIconClass = _classnames_2_2_6_classnames(leftIsImg ? 'mdui-list-item-img' : iconClass, (_b = {}, _b['mdui-list-item-avatar'] = leftType == 'avatar', _b));
        var rightIconClass = _classnames_2_2_6_classnames(rightIsImg ? 'mdui-list-item-img' : iconClass, (_c = {}, _c['mdui-list-item-avatar'] = rightType == 'avatar', _c));
        var imgSty = "width:100%;height:100%;" + (leftType == 'avatar' ? 'border-radius: 50%;' : '');
        return (React__default['default'].createElement(components.View, null,
            React__default['default'].createElement(components.View, { className: rootClass, onClick: this.handleClick },
                iconInfo && (leftIsImg
                    ? React__default['default'].createElement(components.View, { className: leftIconClass },
                        React__default['default'].createElement(components.Image, { style: imgSty, src: typeof iconInfo !== "string" ? iconInfo.value : iconInfo }))
                    : React__default['default'].createElement(components.View, { className: leftIconClass }, typeof iconInfo !== "string" ? iconInfo === null || iconInfo === void 0 ? void 0 : iconInfo.value : iconInfo)),
                React__default['default'].createElement(components.View, { className: 'mdui-list-item-content' },
                    React__default['default'].createElement(components.View, { className: 'mdui-list-item-title' }, title),
                    subTitle && React__default['default'].createElement(components.View, { className: 'mdui-list-item-text mdui-text-color-theme-text mdui-list-item-one-line' }, subTitle)),
                rightIcon &&
                    (rightIsImg ? React__default['default'].createElement(components.View, { className: leftIconClass },
                        React__default['default'].createElement(components.Image, { mode: 'widthFix', src: rightIcon.value })) : React__default['default'].createElement(components.View, { className: rightIconClass }, rightIcon === null || rightIcon === void 0 ? void 0 : rightIcon.value)),
                type == 'check' &&
                    React__default['default'].createElement(components.Checkbox, { checked: state, value: '', onChange: this.handleSwitchChange.bind(this), onClick: this.handleSwitchClick.bind(this) }),
                type == 'switch' &&
                    React__default['default'].createElement(components.Switch, { checked: state, type: 'switch', onChange: this.handleSwitchChange.bind(this), onClick: this.handleSwitchClick.bind(this) })),
            border && React__default['default'].createElement(components.View, { className: "mdui-divider mdui-divider-" + border })));
    };
    return MdListItem;
}(React__default['default'].Component));
MdListItem.defaultProps = {
    customStyle: '',
    subTitle: '',
    active: false,
    title: '',
    iconInfo: undefined,
    rightIcon: undefined,
    type: undefined,
    border: false,
    state: false,
};
MdListItem.propTypes = {
    subTitle: _propTypes_15_7_2_propTypes.string,
    active: _propTypes_15_7_2_propTypes.bool,
    title: _propTypes_15_7_2_propTypes.string,
    onClick: _propTypes_15_7_2_propTypes.func,
    type: _propTypes_15_7_2_propTypes.oneOf(['switch', 'check']),
    border: _propTypes_15_7_2_propTypes.oneOf([true, false, 'inset', 'light', 'dark', 'inset-dark', 'inset-light']),
    state: _propTypes_15_7_2_propTypes.bool,
    onChange: _propTypes_15_7_2_propTypes.func,
    iconInfo: _propTypes_15_7_2_propTypes.shape({
        value: _propTypes_15_7_2_propTypes.string,
        type: _propTypes_15_7_2_propTypes.string
    })
};

var MdList = /** @class */ (function (_super) {
    __extends(MdList, _super);
    function MdList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdList.prototype.render = function () {
        var _a = this.props, border = _a.border, items = _a.items;
        var rootClass = _classnames_2_2_6_classnames('mdui-list', this.props.className);
        return React__default['default'].createElement(components.View, { className: rootClass },
            border &&
                React__default['default'].createElement(components.View, { className: "mdui-divider mdui-divider-" + border }), items === null || items === void 0 ? void 0 :
            items.map(function (it, idx) {
                var leftIcon = typeof it.iconInfo == 'string' ? {
                    value: it.iconInfo,
                    type: 'avatar'
                } : it.iconInfo;
                return (React__default['default'].createElement(MdListItem, { key: "list_item_" + idx, title: it.title, subTitle: it.subTitle, type: it.type, border: border, iconInfo: leftIcon }));
            }),
            !(items === null || items === void 0 ? void 0 : items.length) && this.props.children);
    };
    return MdList;
}(React__default['default'].Component));
MdList.defaultProps = {
    customStyle: '',
    border: false,
    items: []
};
MdList.propTypes = {
    border: _propTypes_15_7_2_propTypes.oneOf([true, false, 'inset', 'light', 'dark', 'inset-dark', 'inset-light']),
    items: _propTypes_15_7_2_propTypes.arrayOf(_propTypes_15_7_2_propTypes.object),
};

var MdTabs = /** @class */ (function (_super) {
    __extends(MdTabs, _super);
    function MdTabs(props) {
        var _this = _super.call(this, props) || this;
        _this.setActive = function (index) {
            var $panels = Zepto("#mdui-tab-body-" + _this._tabId).children('.mdui-tab-panel');
            $panels.forEach(function (panel, idx) {
                var dis = idx == index ? 'block' : 'none';
                Zepto(panel).css('display', dis);
            });
            _this.setState({ activeIdx: index });
        };
        _this.state = {
            activeIdx: props.current || 0
        };
        _this._tabId = uuid();
        _this.page = Taro.getCurrentInstance().page;
        _this.tabPosition = [];
        return _this;
    }
    MdTabs.prototype.handleClick = function (index, event) {
        this.setActive(index);
        this.props.onClick(index, event);
    };
    MdTabs.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            var selector = Taro__default['default'].createSelectorQuery().in(_this.page);
            selector.selectAll(".mdui-tab-item-" + _this._tabId).boundingClientRect().exec(function (_a) {
                var _b = __read(_a, 1), rects = _b[0];
                // for(var i=0;i<rects.length;i++){
                //   var rect = rects[i]
                //   this.tabPosition.push({'width':parseInt(rect.width),'height':rect.height,'left':rect.left,'right':rect.right})
                // }
                _this.tabPosition = rects;
                _this.setActive(_this.state.activeIdx);
            });
        }, 50);
    };
    MdTabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.customStyle, customStyle = _b === void 0 ? '' : _b, className = _a.className, tabList = _a.tabList, scroll = _a.scroll, _c = _a.children, children = _c === void 0 ? [] : _c, height = _a.height;
        var activeIdx = this.state.activeIdx;
        var tabItems = tabList.map(function (item, idx) {
            var cls = "mdui-tab-item-" + _this._tabId;
            var itemCls = _classnames_2_2_6_classnames('mdui-tab-item', cls, {
                'mdui-tab-active': activeIdx === idx
            });
            var it = typeof item === 'string' ? { title: item } : item;
            return (React__default['default'].createElement(components.View, { className: itemCls, key: idx, onClick: _this.handleClick.bind(_this, idx) },
                it.icon && React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, it.icon),
                it.title && React__default['default'].createElement(components.View, { className: 'mdui-tab-label' }, it.title)));
        });
        var rootCls = _classnames_2_2_6_classnames('mdui-tab', 'mdui-tab-full-width', { 'mdui-tab-scrollable': scroll }, className);
        var curTab = this.tabPosition[activeIdx];
        var indicatorSty = curTab ? { left: curTab.left + "px", width: curTab.width + "px" } : {};
        var h = height ? height : 'auto';
        return (React__default['default'].createElement(components.View, { id: this._tabId },
            React__default['default'].createElement(components.View, { className: rootCls },
                tabItems,
                React__default['default'].createElement(components.View, { className: 'mdui-tab-indicator', style: indicatorSty })),
            React__default['default'].createElement(components.ScrollView, { id: "mdui-tab-body-" + this._tabId, scrollY: true, className: 'mdui-tab-body', style: mergeStyle({ 'height': "" + h }, customStyle) }, children)));
    };
    return MdTabs;
}(React__default['default'].Component));
MdTabs.defaultProps = {
    customStyle: '',
    className: '',
    height: '',
    current: 0,
    scroll: false,
    tabList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { }
};
MdTabs.propTypes = {
    customStyle: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.object, _propTypes_15_7_2_propTypes.string]),
    className: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.array, _propTypes_15_7_2_propTypes.string]),
    height: _propTypes_15_7_2_propTypes.string,
    current: _propTypes_15_7_2_propTypes.number,
    scroll: _propTypes_15_7_2_propTypes.bool,
    tabList: _propTypes_15_7_2_propTypes.array,
    onClick: _propTypes_15_7_2_propTypes.func
};

var Height = 36;
var LineHeight = 20;
var MdTextarea = /** @class */ (function (_super) {
    __extends(MdTextarea, _super);
    function MdTextarea(props) {
        var _this = _super.call(this, props) || this;
        _this.handleInput = function (event) {
            _this.setState({ inputValue: event.detail.value });
            _this.props.onChange && _this.props.onChange(event.target.value, event);
        };
        _this.handleFocus = function (event) {
            _this.setState({ focus: true });
            _this.props.onFocus && _this.props.onFocus(event);
        };
        _this.handleBlur = function (event) {
            _this.setState({ focus: false });
            _this.props.onBlur && _this.props.onBlur(event);
        };
        _this.handleConfirm = function (event) {
            _this.props.onConfirm && _this.props.onConfirm(event);
        };
        _this.handleLinechange = function (event) {
            if (_this.props.rows != undefined) {
                _this.setState({ row: event.detail.lineCount });
                // const $input = this.input.current;
                // let line = event.detail.lineCount
                // let h = line*LineHeight+Height + 'px';
                // $input.style.height = h
            }
            _this.props.onLinechange && _this.props.onLinechange(event);
        };
        _this.handleClick = function (event) {
            _this.props.onClick && _this.props.onClick(_this.state.inputValue, event);
        };
        _this.state = {
            focus: false,
            row: 1,
            inputValue: props.value || ''
        };
        return _this;
    }
    MdTextarea.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MdTextarea.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, value = _a.value, placeholder = _a.placeholder, disabled = _a.disabled, autoFocus = _a.autoFocus, label = _a.label, multiLine = _a.multiLine, floatLabel = _a.floatLabel, helpLabel = _a.helpLabel, error = _a.error, maxLength = _a.maxLength, type = _a.type, icon = _a.icon, rows = _a.rows;
        var _b = this.state, focus = _b.focus, row = _b.row, inputValue = _b.inputValue;
        var rootCls = _classnames_2_2_6_classnames('mdui-textfield', {
            'mdui-textfield-floating-label': floatLabel != undefined,
            'mdui-textfield-has-bottom': error || maxLength || helpLabel,
            'mdui-textfield-disabled': disabled,
            'mdui-textfield-not-empty': inputValue.length != 0,
            'mdui-textfield-focus': focus,
            'mdui-textfield-invalid-html5': error
        }, className);
        var inputCls = _classnames_2_2_6_classnames('mdui-textfield-input', className);
        var line = rows == undefined ? row : rows;
        var heightSty = { height: (line - 1) * LineHeight + Height + 'px' };
        return (React__default['default'].createElement(components.View, { className: rootCls, style: customStyle, onClick: this.handleClick },
            icon && React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, icon),
            label || floatLabel && React__default['default'].createElement(components.Text, { className: 'mdui-textfield-label' }, label || floatLabel),
            multiLine
                ? React__default['default'].createElement(components.Textarea, { className: inputCls, placeholder: placeholder, disabled: disabled, value: inputValue, autoFocus: autoFocus, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm, onLineChange: this.handleLinechange, maxlength: maxLength, style: heightSty })
                : React__default['default'].createElement(components.Input, { className: inputCls, placeholder: placeholder, type: type, disabled: disabled, value: inputValue, autoFocus: autoFocus, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm, maxlength: maxLength }),
            error != undefined && React__default['default'].createElement(components.View, { className: 'mdui-textfield-error' }, error),
            helpLabel && React__default['default'].createElement(components.View, { className: 'mdui-textfield-helper' }, helpLabel),
            maxLength &&
                React__default['default'].createElement(components.View, { className: 'mdui-textfield-counter' },
                    React__default['default'].createElement(components.View, { className: 'mdui-textfield-counter-inputed' }, value.length + " / " + maxLength))));
    };
    return MdTextarea;
}(React__default['default'].Component));
MdTextarea.defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    placeholder: '',
    disabled: false,
    autoFocus: false,
    label: '',
    multiLine: false,
    floatLabel: '',
    helpLabel: '',
    error: '',
    type: undefined,
    icon: '',
    rows: 1,
    onChange: function () { },
    onClick: function () { }
};
MdTextarea.propTypes = {
    customStyle: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.object, _propTypes_15_7_2_propTypes.string]),
    className: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.array, _propTypes_15_7_2_propTypes.string]),
    value: _propTypes_15_7_2_propTypes.string.isRequired,
    placeholder: _propTypes_15_7_2_propTypes.string,
    disabled: _propTypes_15_7_2_propTypes.bool,
    autoFocus: _propTypes_15_7_2_propTypes.bool,
    label: _propTypes_15_7_2_propTypes.string,
    multiLine: _propTypes_15_7_2_propTypes.bool,
    floatLabel: _propTypes_15_7_2_propTypes.string,
    helpLabel: _propTypes_15_7_2_propTypes.string,
    error: _propTypes_15_7_2_propTypes.string,
    type: _propTypes_15_7_2_propTypes.string,
    icon: _propTypes_15_7_2_propTypes.string,
    rows: _propTypes_15_7_2_propTypes.number,
    onChange: _propTypes_15_7_2_propTypes.func,
    onClick: _propTypes_15_7_2_propTypes.func
};

// import { mergeStyle } from '../../common/utils'
// import Taro from '@tarojs/taro'
var MdNavBar = /** @class */ (function (_super) {
    __extends(MdNavBar, _super);
    function MdNavBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleActionClick = function (act, _) {
            _this.props.onClickAction && _this.props.onClickAction(act);
        };
        return _this;
    }
    MdNavBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, fixed = _a.fixed, border = _a.border, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, title = _a.title, children = _a.children;
        var leftIcons = Array.isArray(leftIcon) ? leftIcon : [leftIcon];
        var rightIcons = Array.isArray(rightIcon) ? rightIcon : [rightIcon];
        // @ts-ignore
        // const navHeight = Taro.systemInfo.customNavHeight;
        // const height = `height:${navHeight}px;`
        // console.log(height)
        return (React__default['default'].createElement(components.View, { className: _classnames_2_2_6_classnames('mdui-toolbar', 'mdui-text-color-theme-text', { 'mdui-toolbar-fixed': fixed }, className), style: customStyle },
            leftIcons[0] && leftIcons.map(function (ic, idx) {
                return (React__default['default'].createElement(components.View, { className: 'mdui-btn mdui-btn-icon', "data-action": ic, key: idx, onClick: _this.handleActionClick.bind(_this, ic, idx) },
                    React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, ic)));
            }),
            children,
            React__default['default'].createElement(components.Text, { className: 'mdui-typo-title mdui-text-center' }, title),
            rightIcons[0] && rightIcons.map(function (ic, idx) {
                return (React__default['default'].createElement(components.View, { "data-action": ic, className: 'mdui-btn mdui-btn-icon', key: idx, onClick: _this.handleActionClick.bind(_this, ic, idx) },
                    React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, ic)));
            }),
            border && React__default['default'].createElement(components.View, { className: "mdui-divider mdui-divider-" + border })));
    };
    return MdNavBar;
}(React__default['default'].Component));
MdNavBar.defaultProps = {
    customStyle: '',
    className: '',
    fixed: false,
    border: true,
    leftIcon: '',
    title: '',
    rightIcon: '',
    autoHide: false
};
MdNavBar.propTypes = {
    className: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.array, _propTypes_15_7_2_propTypes.string]),
    fixed: _propTypes_15_7_2_propTypes.bool,
    border: _propTypes_15_7_2_propTypes.bool,
    leftIcon: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.string, _propTypes_15_7_2_propTypes.array]),
    rightIcon: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.string, _propTypes_15_7_2_propTypes.array]),
    title: _propTypes_15_7_2_propTypes.string,
    autoHide: _propTypes_15_7_2_propTypes.bool,
    onClickAction: _propTypes_15_7_2_propTypes.func,
};

var MdLoading = /** @class */ (function (_super) {
    __extends(MdLoading, _super);
    function MdLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdLoading.prototype.render = function () {
        var _a = this.props, _b = _a.mode, mode = _b === void 0 ? 'circle' : _b, step = _a.step, style = _a.style;
        var sty = step != undefined ? "width:" + step : '';
        return (mode == 'circle' ? React__default['default'].createElement(components.View, { className: 'mdui-spinner', style: style },
            React__default['default'].createElement(components.View, { className: 'mdui-spinner-layer' },
                React__default['default'].createElement(components.View, { className: 'mdui-spinner-circle-clipper mdui-spinner-left' },
                    React__default['default'].createElement(components.View, { className: 'mdui-spinner-circle' })),
                React__default['default'].createElement(components.View, { className: 'mdui-spinner-gap-patch' },
                    React__default['default'].createElement(components.View, { className: 'mdui-spinner-circle' })),
                React__default['default'].createElement(components.View, { className: 'mdui-spinner-circle-clipper mdui-spinner-right' },
                    React__default['default'].createElement(components.View, { className: 'mdui-spinner-circle' })))) :
            React__default['default'].createElement(components.View, { className: 'mdui-progress' },
                React__default['default'].createElement(components.View, { className: step == undefined ? 'mdui-progress-indeterminate' : 'mdui-progress-determinate', style: sty })));
    };
    return MdLoading;
}(React__default['default'].Component));
MdLoading.defaultProps = {
    step: undefined,
    mode: 'circle',
    style: ''
};
MdLoading.propTypes = {
    step: _propTypes_15_7_2_propTypes.oneOf([_propTypes_15_7_2_propTypes.number, _propTypes_15_7_2_propTypes.string, undefined]),
    mode: _propTypes_15_7_2_propTypes.oneOf(['circle', 'line']),
    style: _propTypes_15_7_2_propTypes.string
};

var MdDrawer = /** @class */ (function (_super) {
    __extends(MdDrawer, _super);
    function MdDrawer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            _show: props.show
        };
        return _this;
    }
    MdDrawer.prototype.componentDidMount = function () {
        var _show = this.state._show;
        if (_show)
            this.animShow();
    };
    MdDrawer.prototype.onItemClick = function (index) {
        this.props.onItemClick && this.props.onItemClick(index);
        this.animHide();
    };
    // private onHide(): void {
    //   this.setState({ _show: false }, () => {
    //     this.props.onClose && this.props.onClose()
    //   })
    // }
    MdDrawer.prototype.animHide = function () {
        var _this = this;
        this.setState({
            _show: false
        });
        setTimeout(function () {
            _this.props.onClose && _this.props.onClose();
        }, 300);
    };
    MdDrawer.prototype.animShow = function () {
        this.setState({ _show: true });
        // setTimeout(() => {
        //   this.setState({
        //     animShow: true
        //   })
        // }, 200)
    };
    MdDrawer.prototype.onMaskClick = function () {
        this.animHide();
    };
    MdDrawer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var show = nextProps.show;
        if (show !== this.state._show) {
            show ? this.animShow() : this.animHide();
        }
    };
    MdDrawer.prototype.render = function () {
        var _this = this;
        var _a = this.props, mask = _a.mask, right = _a.right, items = _a.items;
        var _show = this.state._show;
        var msk = mask ? 1 : 0;
        var maskStyle = {
            opacity: _show ? msk : 0
        };
        var classObject = {
            'mdui-drawer-open': _show,
            'mdui-drawer-close': !_show,
            'mdui-drawer-right': right,
            'mdui-drawer-left': !right
        };
        // const pos = _show ? 0 : 290;
        var rtlTranslateMultiplier = right ? -1 : 1;
        var transformCSS = "translate(" + -1 * rtlTranslateMultiplier * 290 + "px, 0) !important;";
        var transitionCSS = 'initial !important;';
        var sty = _show ? '' : "transform: " + transformCSS + "; transition: " + transitionCSS + ";";
        return (React__default['default'].createElement(components.View, null,
            React__default['default'].createElement(components.View, { className: _classnames_2_2_6_classnames('mdui-overlay', { 'mdui-overlay-show': _show }), style: maskStyle, onClick: this.onMaskClick.bind(this) }),
            React__default['default'].createElement(components.View, { className: _classnames_2_2_6_classnames('mdui-drawer', classObject, this.props.className), style: sty },
                React__default['default'].createElement(components.View, null, !!items && items.length ? (React__default['default'].createElement(MdList, null, items.map(function (item, index) { return (React__default['default'].createElement(MdListItem, { key: index, onClick: _this.onItemClick.bind(_this, index), title: item.title, iconInfo: item.iconInfo })); }))) : (this.props.children)))));
    };
    return MdDrawer;
}(React__default['default'].Component));
MdDrawer.defaultProps = {
    customStyle: '',
    show: false,
    mask: true,
    width: '',
    right: false,
    items: []
};
MdDrawer.propTypes = {
    customStyle: _propTypes_15_7_2_propTypes.oneOfType([_propTypes_15_7_2_propTypes.object, _propTypes_15_7_2_propTypes.string]),
    show: _propTypes_15_7_2_propTypes.bool,
    mask: _propTypes_15_7_2_propTypes.bool,
    width: _propTypes_15_7_2_propTypes.string,
    items: _propTypes_15_7_2_propTypes.arrayOf(_propTypes_15_7_2_propTypes.any),
    onItemClick: _propTypes_15_7_2_propTypes.func,
    onClose: _propTypes_15_7_2_propTypes.func
};

var MdCard = /** @class */ (function (_super) {
    __extends(MdCard, _super);
    function MdCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (args) {
            if (typeof _this.props.onClick === 'function') {
                _this.props.onClick(args);
            }
        };
        return _this;
    }
    MdCard.prototype.render = function () {
        var _a = this.props, title = _a.title, subTitle = _a.subTitle, content = _a.content, image = _a.image, head = _a.head, actions = _a.actions, className = _a.className, mode = _a.mode, onLoad = _a.onLoad;
        var rootClass = _classnames_2_2_6_classnames('mdui-card', className);
        var coveredClass = _classnames_2_2_6_classnames('mdui-card-media-covered', { 'mdui-card-media-covered-top': mode == 'covered-title-top' });
        var titleView = function () { return (React__default['default'].createElement(components.View, { className: 'mdui-card-primary' },
            React__default['default'].createElement(components.View, { className: 'mdui-card-primary-title' }, title),
            React__default['default'].createElement(components.View, { className: 'mdui-card-primary-subtitle' }, subTitle))); };
        var actionView = function () { return (React__default['default'].createElement(components.View, { className: 'mdui-card-actions' }, actions === null || actions === void 0 ? void 0 : actions.map(function (act, i) {
            act = typeof act == 'string' ? { text: act } : act;
            var isIcon = act.icon != undefined;
            // const value = act.text || act.icon || ''
            var className = "mdui-btn " + (isIcon && !act.text ? 'mdui-btn-icon' : '') + " " + (act.className || '');
            return (React__default['default'].createElement(components.Button, { className: className, key: i },
                act.text || '',
                isIcon && React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, act.icon)));
        }))); };
        var headIcon = head && head.iconInfo ? head.iconInfo : null;
        var headMenu = head && head.rightIcon ? head.rightIcon : null;
        var img = typeof image == 'string' ? { url: image, mode: 'widthFix' } : image;
        return (React__default['default'].createElement(components.View, { onClick: this.handleClick, className: rootClass },
            headIcon && React__default['default'].createElement(components.View, { className: 'mdui-card-header' },
                React__default['default'].createElement(components.Image, { className: 'mdui-card-header-avatar', src: headIcon }),
                React__default['default'].createElement(components.Text, { className: 'mdui-card-header-title' }, head === null || head === void 0 ? void 0 : head.title),
                React__default['default'].createElement(components.Text, { className: 'mdui-card-header-subtitle' }, head === null || head === void 0 ? void 0 : head.subTitle)),
            headMenu && React__default['default'].createElement(components.View, { className: 'mdui-card-menu' },
                React__default['default'].createElement(components.Button, { appPackagename: '', className: 'mdui-btn mdui-btn-icon' },
                    React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, headMenu))),
            React__default['default'].createElement(components.View, { className: 'mdui-card-media' },
                React__default['default'].createElement(components.Image, { mode: img.mode, className: 'mdui-card-image', src: img.url, onLoad: function (res) { onLoad && onLoad(res); } }),
                mode && React__default['default'].createElement(components.View, { className: coveredClass },
                    titleView(),
                    mode == 'covered-all' && actionView())),
            !mode && titleView(),
            content && React__default['default'].createElement(components.Text, { className: 'mdui-card-content' }, content),
            mode != 'covered-all' && actions && actionView()));
    };
    return MdCard;
}(React__default['default'].Component));
MdCard.defaultProps = {
    head: undefined,
    actions: undefined,
    title: '',
    image: '',
    subTitle: '',
    content: '',
    mode: undefined,
};
MdCard.propTypes = {
    subTitle: _propTypes_15_7_2_propTypes.string,
    image: _propTypes_15_7_2_propTypes.string,
    title: _propTypes_15_7_2_propTypes.string,
    content: _propTypes_15_7_2_propTypes.string,
    actions: _propTypes_15_7_2_propTypes.array,
    mode: _propTypes_15_7_2_propTypes.oneOf(['covered-title', 'covered-all', 'covered-title-top']),
    onClick: _propTypes_15_7_2_propTypes.func,
    onLoad: _propTypes_15_7_2_propTypes.func,
};

// import { $ } from '@tarojs/extend'
var MdFab = /** @class */ (function (_super) {
    __extends(MdFab, _super);
    // private $element
    // private $btn
    // private $dial
    // private $dialBtns
    function MdFab(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._id = uuid();
        _this.onItemClick = function (idx) {
            _this.close();
            _this.props.onItemClick && _this.props.onItemClick(idx);
        };
        _this.state = { status: 'closed' };
        return _this;
    }
    MdFab.prototype.componentDidMount = function () {
        // const selector = `#${this._id}`
        // this.$element = $(selector).first();
        // this.$btn = this.$element.find('.mdui-fab');
        // this.$dial = this.$element.find('.mdui-fab-dial');
        // this.$dialBtns = this.$dial.find('.mdui-fab');
    };
    MdFab.prototype.onClick = function (e) {
        this.toggle();
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    };
    /**
     * 当前是否为打开状态
     */
    MdFab.prototype.isOpen = function () {
        var status = this.state.status;
        return status === 'opening' || status === 'opened';
    };
    MdFab.prototype.toggle = function () {
        this.isOpen() ? this.close() : this.open();
    };
    /**
     * 打开快速拨号菜单
     */
    MdFab.prototype.open = function () {
        var _this = this;
        if (this.isOpen()) {
            return;
        }
        // 为菜单中的按钮添加不同的 transition-delay
        // this.$dialBtns.each((index, btn) => {
        //   const delay = `${15 * (this.$dialBtns.length - index)}ms`;
        //   btn.style.transitionDelay = delay;
        //   btn.style.webkitTransitionDelay = delay;
        // });
        // this.$dial.css('height', 'auto').addClass('mdui-fab-dial-show');
        // 如果按钮中存在 .mdui-fab-opened 的图标，则进行图标切换
        // if (this.$btn.find('.mdui-fab-opened').length) {
        //   this.$btn.addClass('mdui-fab-opened');
        // }
        // 打开顺序为从下到上逐个打开，最上面的打开后才表示动画完成
        // transitionEnd(this.$dialBtns.first(),() => {
        //   if (this.$btn.hasClass('mdui-fab-opened')) {
        //     this.setState({status:'opened'})
        //   }
        // });
        this.setState({ status: 'opening' });
        setTimeout(function () {
            _this.setState({ status: 'opened' });
        }, 200);
    };
    /**
     * 关闭快速拨号菜单
     */
    MdFab.prototype.close = function () {
        var _this = this;
        if (!this.isOpen()) {
            return;
        }
        // 为菜单中的按钮添加不同的 transition-delay
        // this.$dialBtns.each((index, btn) => {
        //   const delay = `${15 * index}ms`;
        //   btn.style.transitionDelay = delay;
        //   btn.style.webkitTransitionDelay = delay;
        // });
        // this.$dial.removeClass('mdui-fab-dial-show');
        // this.$btn.removeClass('mdui-fab-opened');
        // 从上往下依次关闭，最后一个关闭后才表示动画完成
        // transitionEnd(this.$dialBtns.last(),() => {
        //   if (this.$btn.hasClass('mdui-fab-opened')) {
        //     return;
        //   }
        //   this.setState({status:'closed'})
        //   this.$dial.css('height', 0);
        // // });
        // this.setState({status:'closed'})
        // this.$dial.css('height', 0);
        this.setState({ status: 'closing' });
        setTimeout(function () {
            _this.setState({ status: 'closed' });
        }, 200);
    };
    MdFab.prototype.onMaskClick = function () {
        this.close();
    };
    MdFab.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, small = _b.small, icon = _b.icon, switchIcon = _b.switchIcon, className = _b.className, items = _b.items, children = _b.children, mask = _b.mask;
        var rootClass = _classnames_2_2_6_classnames('mdui-fab', 'mdui-ripple', 'mdui-color-theme', className, (_a = {},
            _a["mdui-fab-mini"] = small,
            _a));
        var show = this.isOpen();
        var maskStyle = {
            opacity: mask && show ? 1 : 0,
        };
        var dialSty = this.state.status != 'closed' ? { height: 'auto' } : { height: 0 };
        return (React__default['default'].createElement(components.View, { className: 'mdui-fab-wrapper', id: this._id },
            React__default['default'].createElement(components.View, { className: _classnames_2_2_6_classnames('mdui-overlay', { 'mdui-overlay-show': show }), style: maskStyle, onClick: this.onMaskClick.bind(this) }),
            React__default['default'].createElement(components.Button, { className: rootClass, onClick: this.onClick.bind(this) },
                React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, icon),
                switchIcon && React__default['default'].createElement(components.View, { className: 'mdui-icon mdui-fab-opened material-icons' }, switchIcon)),
            React__default['default'].createElement(components.View, { className: _classnames_2_2_6_classnames('mdui-fab-dial', { 'mdui-fab-dial-show': show }), style: dialSty },
                items && items.map(function (it, idx) {
                    var sty = "transition-delay:" + (show ? 50 * (items.length - idx) : 50 * idx) + "ms";
                    return React__default['default'].createElement(components.Button, { style: sty, className: _classnames_2_2_6_classnames('mdui-fab mdui-fab-mini mdui-color-theme'), key: idx, onClick: _this.onItemClick.bind(_this, idx) },
                        React__default['default'].createElement(components.View, { className: 'mdui-icon material-icons' }, it.iconInfo));
                }),
                children)));
    };
    return MdFab;
}(React__default['default'].Component));
MdFab.propTypes = {
    icon: _propTypes_15_7_2_propTypes.string,
    switchIcon: _propTypes_15_7_2_propTypes.string,
    small: _propTypes_15_7_2_propTypes.bool,
    mask: _propTypes_15_7_2_propTypes.bool,
    onClick: _propTypes_15_7_2_propTypes.func,
    trigger: _propTypes_15_7_2_propTypes.oneOf(['hover', 'click']),
    items: _propTypes_15_7_2_propTypes.array
};
MdFab.defaultProps = {
    icon: '',
    switchIcon: '',
    small: false,
    mask: false,
    trigger: undefined,
    items: undefined
};

/**
 * Created by lhq on 2020/10/5 0005.
 */

const DEFAULT_OPTIONS$b = {
  position: 'auto',
  delay: 2,
  content: '',
};
class Tooltip {
  constructor(selector, options = {}) {
    /**
     * 配置参数
     */
    this.options = Object.assign({}, DEFAULT_OPTIONS$b);
    /**
     * 当前 tooltip 的状态
     */
    this.state = 'willOpen';
    this.targetProps=null;
    /**
     * setTimeout 的返回值
     */
    this.timeoutId = null;
    this.$target = Zepto(selector).first();
    Object.assign(this.options, options);
    const bd = Zepto('root');
    // 创建 Tooltip HTML
    this.$element = Zepto(`<div class="mdui-tooltip" id="${uuid()}">${this.options.content}</div>`).appendTo(bd);
    // 绑定事件。元素处于 disabled 状态时无法触发鼠标事件，为了统一，把 touch 事件也禁用
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    this.getTargetProps(selector);
  }

  getTargetProps(selector){
    let self = this;
    Taro__default['default'].createSelectorQuery()
    .select(selector)
    .boundingClientRect()
    .exec(res=>{
      console.log(res);
      self.targetProps = res[0];
      if(self.state == 'willOpen'){
        self.state = 'openning';
        self.open(self.options);
      }
    });
  }
  /**
   * 元素是否已禁用
   * @param element
   */
  isDisabled(element) {
    return (element.disabled ||
      Zepto(element).attr('disabled') !== undefined);
  }
  /**
   * 是否是桌面设备
   */
  isDesktop() {
    return false
    // return $window.width() > 1024;
  }
  /**
   * 设置 Tooltip 的位置
   */
  setPosition() {
    let marginLeft;
    let marginTop;
    // 触发的元素
    // const targetProps = this.$target[0].getBoundingClientRect();
    const targetProps = this.targetProps;
    // 触发的元素和 Tooltip 之间的距离
    const targetMargin = 0;// this.isDesktop() ? 14 : 24;
    // Tooltip 的宽度和高度
    const tooltipWidth = this.targetProps.width;
    const tooltipHeight = this.targetProps.height;
    // Tooltip 的方向
    let position = this.options.position;
    const {windowHeight,windowWidth} = Taro__default['default'].systemInfo;
    // 自动判断位置，加 2px，使 Tooltip 距离窗口边框至少有 2px 的间距
    if (position === 'auto') {
      if (targetProps.top + targetProps.height + targetMargin + tooltipHeight + 2 < windowHeight) {position = 'bottom';}
      else if (targetMargin + tooltipHeight + 2 < targetProps.top) {
        position = 'top';
      }
      else if (targetMargin + tooltipWidth + 2 < targetProps.left) {
        position = 'left';
      }
      else if (targetProps.width + targetMargin + tooltipWidth + 2 <
        windowWidth - targetProps.left) {
        position = 'right';
      } else {
        position = 'bottom';
      }
    }
    console.log('pos:',position);
    // 设置位置
    switch (position) {
      case 'bottom':
        marginLeft = -1 * (tooltipWidth / 2);
        marginTop = targetProps.height / 2 + targetMargin;
        this.transformOrigin('top center');
        break;
      case 'top':
        marginLeft = -1 * (tooltipWidth / 2);
        marginTop = -1 * (tooltipHeight + targetMargin);
        this.transformOrigin('top center');
        break;
      case 'left':
        marginLeft = -1 * (tooltipWidth + targetProps.width / 2 + targetMargin);
        marginTop = -1 * (tooltipHeight / 2);
        this.transformOrigin('center right');
        break;
      case 'right':
        marginLeft = targetProps.width / 2 + targetMargin;
        marginTop = -1 * (tooltipHeight / 2);
        this.transformOrigin('center left');
        break;
    }

    this.$element.css({
      top: `${targetProps.top + targetProps.height / 2}px`,
      left: `${targetProps.left + targetProps.width / 2}px`,
      'margin-left': `${marginLeft}px`,
      'margin-top': `${marginTop}px`,
    });
  }
  transformOrigin (transformOrigin) {
    this.$element[0].style.webkitTransformOrigin = transformOrigin;
    this.$element[0].style.transformOrigin = transformOrigin;
  };
  /**
   * 动画结束回调
   */
  transitionEnd() {
    if (this.$element.hasClass('mdui-tooltip-open')) {
      this.state = 'opened';
    }
    else {
      this.state = 'closed';
    }

  }

  /**
   * 当前 tooltip 是否为打开状态
   */
  isOpen() {
    return this.state === 'opening' || this.state === 'opened';
  }
  /**
   * 执行打开 tooltip
   */
  doOpen() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this.state = 'opening';
    // transitionEnd(this.$element.first(),() => console.log('sdfsdf'));
    this.$element.addClass('mdui-tooltip-open');
    if (this.options.delay) {
      this.timeoutId = setTimeout(() => this.close(), this.options.delay*1000);
    }
  }
  /**
   * 打开 Tooltip
   * @param options 允许每次打开时设置不同的参数
   */
  open(options) {
    if(this.state == 'willOpen'){
      return;
    }
    if(!this.targetProps){
      this.state = 'willOpen';
      return;
    }
    if(this.options.target!=options.target){
      Object.assign(this.options, options);
      this.state = 'willOpen';
      this.getTargetProps(options.target);
      return;
    }
    const oldOptions = Object.assign({}, this.options);
    if (options) {
      Object.assign(this.options, options);
    }
    // tooltip 的内容有更新
    if (oldOptions.content !== this.options.content) {
      this.$element.html(this.options.content);
    }
    this.setPosition();
    this.doOpen();
  }
  /**
   * 关闭 Tooltip
   */
  close() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (!this.isOpen()) {
      return;
    }
    // transitionEnd(this.$element,() => this.transitionEnd());

    this.state = 'closing';
    // this.triggerEvent('close');
    this.$element.removeClass('mdui-tooltip-open');
  }
  /**
   * 切换 Tooltip 的打开状态
   */
  toggle() {
    this.isOpen() ? this.close() : this.open();
  }
  /**
   * 获取 Tooltip 状态。共包含四种状态：`opening`、`opened`、`closing`、`closed`
   */
  getState() {
    return this.state;
  }
}
Tooltip.ins = null;
Tooltip.show = (opt)=>{
  if(Tooltip.ins){
    Tooltip.ins.open(opt);
  } else {
    Tooltip.ins = new Tooltip(opt.target,opt);
  }
};

/**
 * Created by lhq on 2020/10/7 0007.
 */

class Alert {
  static ins
  static Open = (root,opt)=>{
    if(Alert.ins){
      Alert.ins.remove();
    }
    Alert.ins = new Alert(root,opt);
    Alert.ins.open();
  }
  constructor(root,opt){
    this.options = opt;
    this.id = uuid();
    root.append(this.html(opt));
    this.bindEvent();
  }
  html(opt){
    const html = `<div class='mdui-dialog-mask mdui-mask'>
    <div class="mdui-dialog">
        <div class="mdui-dialog-title">${opt.title}</div>
        <div class="mdui-dialog-content">${opt.content}</div>
        ${opt.actions?
      `<div class="mdui-dialog-actions">
            <button class="mdui-btn mdui-ripple">${opt.actions[0]}</button>
            <button class="mdui-btn mdui-ripple">${opt.actions[1]||''}</button>
        </div>`:''}
    </div></div>`;
    return html
  }
  bindEvent(){
    Zepto('.mdui-dialog-mask').on('click',()=>{
      this.close();
    });
    Zepto('.mdui-dialog').on('tap touchstart',false);
    Zepto('.mdui-dialog-actions').children().each((idx,e)=>{
      Zepto(e).on('tap touchend',this.close.bind(this));
    });
  }

  open(){
    setTimeout(()=>{
      Zepto('.mdui-dialog-mask').addClass('mdui-mask-show');
      Zepto('.mdui-dialog').addClass('mdui-dialog-open');
    },10);
  }

  close(){
    console.log('sdfsdf');
    Zepto('.mdui-dialog-mask').removeClass('mdui-mask-show');
    Zepto('.mdui-dialog').removeClass('mdui-dialog-open');
    setTimeout(()=>{
      this.remove();
    },300);
  }
  remove(){
    Zepto('.mdui-dialog-mask').remove();
  }
}

var AtSearchBar = /** @class */ (function (_super) {
    __extends(AtSearchBar, _super);
    function AtSearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function (event) {
            _this.setState({
                isFocus: true
            });
            _this.props.onFocus && _this.props.onFocus(event);
        };
        _this.handleBlur = function (event) {
            _this.setState({
                isFocus: false
            });
            _this.props.onBlur && _this.props.onBlur(event);
        };
        _this.handleChange = function (e) {
            _this.props.onChange(e.target.value, e);
        };
        _this.handleClear = function (event) {
            if (_this.props.onClear) {
                _this.props.onClear(event);
            }
            else {
                _this.props.onChange('', event);
            }
        };
        _this.handleConfirm = function (event) {
            _this.props.onConfirm && _this.props.onConfirm(event);
        };
        _this.handleActionClick = function (event) {
            _this.props.onActionClick && _this.props.onActionClick(event);
        };
        _this.state = {
            isFocus: !!props.focus
        };
        return _this;
    }
    AtSearchBar.prototype.render = function () {
        var _a = this.props, value = _a.value, placeholder = _a.placeholder, maxLength = _a.maxLength, fixed = _a.fixed, disabled = _a.disabled, _b = _a.inputType, inputType = _b === void 0 ? 'text' : _b, // 处理issue#464
        className = _a.className, customStyle = _a.customStyle;
        var isFocus = this.state.isFocus;
        var rootCls = _classnames_2_2_6_classnames('mdui-textfield', 'mdui-textfield-expandable', {
            'mdui-float-right': fixed
        }, className);
        return (React__default['default'].createElement(components.View, { className: rootCls, style: customStyle },
            React__default['default'].createElement(components.Button, { className: "mdui-textfield-icon mdui-btn mdui-btn-icon", onClick: this.handleActionClick.bind(this) },
                React__default['default'].createElement(components.View, { className: "mdui-icon material-icons" }, "search")),
            React__default['default'].createElement(components.Input, { className: "mdui-textfield-input", type: inputType, confirmType: 'search', value: value, focus: isFocus, disabled: disabled, maxlength: maxLength, onInput: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm, placeholder: placeholder }),
            React__default['default'].createElement(components.Button, { className: "mdui-textfield-close mdui-btn mdui-btn-icon", onClick: this.handleClear.bind(this) },
                React__default['default'].createElement(components.View, { className: "mdui-icon material-icons" }, "close"))));
    };
    return AtSearchBar;
}(React__default['default'].Component));
AtSearchBar.defaultProps = {
    value: '',
    placeholder: '搜索',
    maxLength: 140,
    fixed: false,
    focus: false,
    disabled: false,
    showActionButton: false,
    actionName: '搜索',
    inputType: 'text',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtSearchBar.propTypes = {
    value: _propTypes_15_7_2_propTypes.string,
    placeholder: _propTypes_15_7_2_propTypes.string,
    maxLength: _propTypes_15_7_2_propTypes.number,
    fixed: _propTypes_15_7_2_propTypes.bool,
    focus: _propTypes_15_7_2_propTypes.bool,
    disabled: _propTypes_15_7_2_propTypes.bool,
    showActionButton: _propTypes_15_7_2_propTypes.bool,
    actionName: _propTypes_15_7_2_propTypes.string,
    inputType: _propTypes_15_7_2_propTypes.oneOf(['text', 'number', 'idcard', 'digit']),
    onChange: _propTypes_15_7_2_propTypes.func,
    onFocus: _propTypes_15_7_2_propTypes.func,
    onBlur: _propTypes_15_7_2_propTypes.func,
    onConfirm: _propTypes_15_7_2_propTypes.func,
    onActionClick: _propTypes_15_7_2_propTypes.func,
    onClear: _propTypes_15_7_2_propTypes.func
};

var objectToString$1 = function (style) {
    if (style && typeof style === 'object') {
        var styleStr_1 = '';
        Object.keys(style).forEach(function (key) {
            var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
        });
        return styleStr_1;
    }
    else if (style && typeof style === 'string') {
        return style;
    }
    return '';
};
var MdComponent = /** @class */ (function (_super) {
    __extends(MdComponent, _super);
    function MdComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 合并 style
     * @param {Object|String} style1
     * @param {Object|String} style2
     * @returns {String}
     */
    MdComponent.prototype.mergeStyle = function (style1, style2) {
        if (style1 &&
            typeof style1 === 'object' &&
            style2 &&
            typeof style2 === 'object') {
            return Object.assign({}, style1, style2);
        }
        return objectToString$1(style1) + objectToString$1(style2);
    };
    return MdComponent;
}(React.Component));

/**
 * Created by lhq on 2020/10/6 0006.
 */

const mdui = {
  Tooltip,
  mutation(root){
    if(root) {
      mdui.$root = Zepto(root);
      mdui.$root.on('touchstart',mdui.onPageTouchStart);
    }
    else {
      setTimeout(()=>{
        let $doc = Zepto('app');
        const $firstView = $doc.children().first().children().first();
        $firstView.on('touchstart',mdui.onPageTouchStart);
      },1500);
    }
    if(!Taro__default['default'].systemInfo){
      getSystemInfo();
    }
  },

  onPageScroll(e){
    Taro__default['default'].eventCenter.trigger('onPageScroll',e);
  },

  onPageTouchStart(e){
    Taro__default['default'].eventCenter.trigger('onPageTouch',e);
  },

  lockScreen(){
    let $doc = Zepto('app');
    const $firstView = $doc.children().first();
    $firstView.css('overflow', 'hidden');
  },

  showTip(opt){
    Tooltip.show(opt);
  },

  showDialog(opt){
    Alert.Open(this.$root,opt);
  }
};

exports.AppBar = AppBar;
exports.MdAccordion = MdAccordion;
exports.MdAlert = Alert;
exports.MdButton = MdButton;
exports.MdCard = MdCard;
exports.MdComponent = MdComponent;
exports.MdDrawer = MdDrawer;
exports.MdFab = MdFab;
exports.MdInput = MdTextarea;
exports.MdList = MdList;
exports.MdListItem = MdListItem;
exports.MdLoading = MdLoading;
exports.MdNavbar = MdNavBar;
exports.MdSearch = AtSearchBar;
exports.MdTabs = MdTabs;
exports.MdTooltip = Tooltip;
exports.mdui = mdui;
//# sourceMappingURL=index.js.map
