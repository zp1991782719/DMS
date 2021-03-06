(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sanStore", [], factory);
	else if(typeof exports === 'object')
		exports["sanStore"] = factory();
	else
		root["sanStore"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = emitDevtool;

var _sanDevtool = __webpack_require__(4);

var _sanDevtool2 = _interopRequireDefault(_sanDevtool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function emitDevtool() {
   _sanDevtool2.default.apply(null, arguments);
} /**
   * san-store
   * Copyright 2017 Baidu Inc. All rights reserved.
   *
   * @file Devtool emitter entry
   * @author luyuan
   */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * san-store
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Baidu Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file store class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author errorrik
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _flattenDiff = __webpack_require__(5);

var _flattenDiff2 = _interopRequireDefault(_flattenDiff);

var _parseName = __webpack_require__(2);

var _parseName2 = _interopRequireDefault(_parseName);

var _emitter = __webpack_require__(0);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 唯一id的起始值
 *
 * @inner
 * @type {number}
 */
var guidIndex = 1;

/**
 * 获取唯一id
 *
 * @inner
 * @return {string} 唯一id
 */
var guid = function guid() {
    return (++guidIndex).toString();
};

/**
 * Store 类，应用程序状态数据的容器
 *
 * @class
 */

var Store = function () {
    /**
     * 构造函数
     *
     * @param {Object?} options 初始化参数
     * @param {Object?} options.initData 容器的初始化数据
     * @param {Object?} options.actions 容器的action函数集合
     * @param {boolean?} options.log 是否记录日志
     */
    function Store() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$initData = _ref.initData,
            initData = _ref$initData === undefined ? {} : _ref$initData,
            _ref$actions = _ref.actions,
            actions = _ref$actions === undefined ? {} : _ref$actions,
            _ref$log = _ref.log,
            log = _ref$log === undefined ? true : _ref$log,
            name = _ref.name;

        _classCallCheck(this, Store);

        this.raw = initData;
        this.actions = actions;
        this.log = log;
        this.name = name;

        this.listeners = [];
        this.stateChangeLogs = [];
        this.actionCtrl = new ActionControl(this);
    }

    /**
     * 获取 state
     *
     * @param {string} name state名称
     * @return {*}
     */


    _createClass(Store, [{
        key: 'getState',
        value: function getState(name) {
            name = (0, _parseName2.default)(name);

            var value = this.raw;
            for (var i = 0, l = name.length; value != null && i < l; i++) {
                value = value[name[i]];
            }

            return value;
        }

        /**
         * 监听 store 数据变化
         *
         * @param {Function} listener 监听器函数，接收diff对象
         */

    }, {
        key: 'listen',
        value: function listen(listener) {
            if (typeof listener === 'function') {
                this.listeners.push(listener);
            }
            // Alternatives for not receiving the events including default store
            // info from connector.
            (0, _emitter2.default)('store-listened', {
                store: this,
                listener: listener
            });
        }

        /**
         * 移除 store 数据变化监听器
         *
         * @param {Function} listener 监听器函数
         */

    }, {
        key: 'unlisten',
        value: function unlisten(listener) {
            var len = this.listeners.length;
            while (len--) {
                if (this.listeners[len] === listener) {
                    this.listeners.splice(len, 1);
                }
            }
            // Alternatives for not receiving the events including default store
            // info from connector.
            (0, _emitter2.default)('store-unlistened', {
                store: this,
                listener: listener
            });
        }

        /**
         * 触发 store 数据变化
         *
         * @private
         * @param {Array} diff 数据变更信息对象
         */

    }, {
        key: '_fire',
        value: function _fire(diff) {
            var _this = this;

            this.listeners.forEach(function (listener) {
                listener.call(_this, diff);
            });
        }

        /**
         * 添加一个 action
         *
         * @param {string} name action的名称
         * @param {Function} action action函数
         */

    }, {
        key: 'addAction',
        value: function addAction(name, action) {
            if (typeof action !== 'function') {
                return;
            }

            if (this.actions[name]) {
                throw new Error('Action ' + name + ' exists!');
            }

            this.actions[name] = action;

            (0, _emitter2.default)('store-action-added', { store: this, action: action });
        }

        /**
         * action 的 dispatch 入口
         *
         * @param {string} name action名称
         * @param {*} payload payload
         */

    }, {
        key: 'dispatch',
        value: function dispatch(name, payload) {
            this._dispatch(name, payload);
        }

        /**
         * action 的 dispatch 入口
         *
         * @private
         * @param {string} name action名称
         * @param {*} payload payload
         * @param {string} parentId 所属父action的id
         */

    }, {
        key: '_dispatch',
        value: function _dispatch(name, payload, parentId) {
            var _this2 = this;

            var action = this.actions[name];
            var actionId = guid();

            if (typeof action !== 'function') {
                return;
            }

            this.actionCtrl.start(actionId, name, payload, parentId);

            var context = {
                getState: function getState(name) {
                    return _this2.getState(name);
                },
                dispatch: function dispatch(name, payload) {
                    return _this2._dispatch(name, payload, actionId);
                }
            };
            var actionReturn = action.call(this, payload, context);

            var updateInfo = void 0;
            if (actionReturn) {
                if (typeof actionReturn.then === 'function') {
                    actionReturn.then(function () {
                        _this2.actionCtrl.done(actionId);
                    });
                    return;
                }

                if (typeof actionReturn.buildWithDiff === 'function') {
                    var oldValue = this.raw;
                    updateInfo = actionReturn.buildWithDiff()(oldValue);
                    updateInfo[1] = (0, _flattenDiff2.default)(updateInfo[1]);
                    this.raw = updateInfo[0];

                    if (this.log) {
                        this.stateChangeLogs.push({
                            oldValue: oldValue,
                            newValue: updateInfo[0],
                            diff: updateInfo[1],
                            id: actionId
                        });
                    }
                }
            }

            this.actionCtrl.done(actionId);

            if (updateInfo) {
                this._fire(updateInfo[1]);
            }
            (0, _emitter2.default)('store-dispatched', {
                store: this,
                diff: updateInfo ? updateInfo[1] : null,
                name: name,
                payload: payload,
                actionId: actionId,
                parentId: parentId
            });
        }
    }]);

    return Store;
}();

/**
 * Action 控制类，用于 Store 控制 Action 运行过程
 *
 * @class
 */


exports.default = Store;

var ActionControl = function () {
    /**
     * 构造函数
     *
     * @param {Store} store 所属的store实例
     */
    function ActionControl(store) {
        _classCallCheck(this, ActionControl);

        this.list = [];
        this.len = 0;
        this.index = {};
        this.store = store;
    }

    /**
     * 开始运行 action
     *
     * @param {string} id action的id
     * @param {string} name action 名称
     * @param {*} payload payload
     * @param {string?} parentId 父action的id
     */


    _createClass(ActionControl, [{
        key: 'start',
        value: function start(id, name, payload, parentId) {
            var actionInfo = {
                id: id,
                name: name,
                parentId: parentId,
                childs: []
            };

            if (this.store.log) {
                actionInfo.startTime = new Date().getTime();
                actionInfo.payload = payload;
            }

            this.list[this.len] = actionInfo;
            this.index[id] = this.len++;

            if (parentId) {
                this.getById(parentId).childs.push(id);
            }
        }

        /**
         * action 运行完成
         *
         * @param {string} id action的id
         * @param {Function?} updateBuilder 状态更新函数生成器
         */

    }, {
        key: 'done',
        value: function done(id) {
            this.getById(id).selfDone = true;
            this.detectDone(id);
        }

        /**
         * 探测 action 是否完全运行完成，只有子 action 都运行完成才算运行完成
         *
         * @param {string} id action的id
         */

    }, {
        key: 'detectDone',
        value: function detectDone(id) {
            var _this3 = this;

            var actionInfo = this.getById(id);
            var childsDone = true;
            actionInfo.childs.forEach(function (child) {
                childsDone = _this3.getById(child).done && childsDone;
            });

            if (childsDone && actionInfo.selfDone) {
                actionInfo.done = true;

                if (this.store.log) {
                    actionInfo.endTime = new Date().getTime();
                }

                if (actionInfo.parentId) {
                    this.detectDone(actionInfo.parentId);
                }
            }
        }
    }, {
        key: 'getById',
        value: function getById(id) {
            return this.list[this.index[id]];
        }
    }]);

    return ActionControl;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parseName;
/**
 * san-store
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file 解析数据属性名
 * @author errorrik
 */

/**
 * 解析数据属性名，返回数组形式的 terms
 *
 * @param {string} source 数据属性的字符串形式
 * @return {Array}
 */
function parseName(source) {
    if (source instanceof Array) {
        return source;
    }

    if (typeof source !== 'string') {
        return [];
    }

    // 这个简易的非状态机的实现是有缺陷的
    // 比如 a['dd.cc'].b 这种就有问题了，不过我们不考虑这种场景
    var terms = source.split('.');
    var result = [];

    for (var i = 0, l = terms.length; i < l; i++) {
        var term = terms[i];
        var propAccessorStart = term.indexOf('[');

        if (propAccessorStart >= 0) {
            if (propAccessorStart > 0) {
                result.push(term.slice(0, propAccessorStart));
                term = term.slice(propAccessorStart);
            }

            while (term.charCodeAt(0) === 91) {
                var propAccessorEnd = term.indexOf(']');
                if (propAccessorEnd < 0) {
                    throw new Error('name syntax error: ' + source);
                }

                var propAccessorLiteral = term.slice(1, propAccessorEnd);
                if (/^[0-9]+$/.test(propAccessorLiteral)) {
                    // for number
                    result.push(+propAccessorLiteral);
                } else if (/^(['"])([^\1]+)\1$/.test(propAccessorLiteral)) {
                    // for string literal
                    result.push(new Function('return ' + propAccessorLiteral)());
                }

                term = term.slice(propAccessorEnd + 1);
            }
        } else {
            result.push(term);
        }
    }

    return result;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * san-store
                                                                                                                                                                                                                                                                               * Copyright 2017 Baidu Inc. All rights reserved.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * @file san组件的connect
                                                                                                                                                                                                                                                                               * @author errorrik
                                                                                                                                                                                                                                                                               */

exports.default = createConnector;

var _parseName = __webpack_require__(2);

var _parseName2 = _interopRequireDefault(_parseName);

var _store = __webpack_require__(1);

var _store2 = _interopRequireDefault(_store);

var _emitter = __webpack_require__(0);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * san组件的connect
 *
 * @param {Object} mapStates 状态到组件数据的映射信息
 * @param {Object|Array?} mapActions store的action操作到组件actions方法的映射信息
 * @param {Store} store 指定的store实例
 * @return {function(ComponentClass)}
 */
function connect(mapStates, mapActions, store) {
    var mapStateInfo = [];

    for (var key in mapStates) {
        if (mapStates.hasOwnProperty(key)) {
            var mapState = mapStates[key];
            var mapInfo = { dataName: key };

            switch (typeof mapState === 'undefined' ? 'undefined' : _typeof(mapState)) {
                case 'string':
                    mapInfo.stateName = (0, _parseName2.default)(mapState);
                    break;

                case 'function':
                    mapInfo.getter = mapState;
                    break;

                default:
                    mapInfo = null;
                    break;
            }

            mapInfo && mapStateInfo.push(mapInfo);
        }
    }

    (0, _emitter2.default)('store-connected', {
        mapStates: mapStates,
        mapActions: mapActions,
        store: store
    });

    return function (ComponentClass) {
        var componentProto = void 0;

        switch (typeof ComponentClass === 'undefined' ? 'undefined' : _typeof(ComponentClass)) {
            case 'function':
                componentProto = ComponentClass.prototype;
                break;
            case 'object':
                componentProto = ComponentClass;
                break;
        }

        if (!componentProto) {
            return;
        }

        // map states
        var inited = componentProto.inited;
        componentProto.inited = function () {
            var _this = this;

            // init data
            mapStateInfo.forEach(function (info) {
                if (typeof info.getter === 'function') {
                    _this.data.set(info.dataName, info.getter(store.getState()));
                } else {
                    _this.data.set(info.dataName, clone(store.getState(info.stateName)));
                }
            });

            // listen store change
            this._storeListener = function (diff) {
                mapStateInfo.forEach(function (info) {
                    if (typeof info.getter === 'function') {
                        _this.data.set(info.dataName, info.getter(store.getState()));
                        return;
                    }

                    var updateInfo = calcUpdateInfo(info, diff);
                    if (updateInfo) {
                        if (updateInfo.spliceArgs) {
                            _this.data.splice(updateInfo.componentData, updateInfo.spliceArgs);
                        } else {
                            _this.data.set(updateInfo.componentData, clone(store.getState(updateInfo.storeData)));
                        }
                    }
                });
            };
            store.listen(this._storeListener);

            (0, _emitter2.default)('store-comp-inited', {
                mapStates: mapStates,
                mapActions: mapActions,
                store: store,
                component: this
            });

            if (typeof inited === 'function') {
                inited.call(this);
            }
        };

        var disposed = componentProto.disposed;
        componentProto.disposed = function () {
            store.unlisten(this._storeListener);
            this._storeListener = null;

            (0, _emitter2.default)('store-comp-disposed', {
                mapStates: mapStates,
                mapActions: mapActions,
                store: store,
                component: this
            });

            if (typeof disposed === 'function') {
                disposed.call(this);
            }
        };

        // map actions
        if (!componentProto.actions) {
            componentProto.actions = {};

            if (mapActions instanceof Array) {
                mapActions.forEach(function (actionName) {
                    componentProto.actions[actionName] = function (payload) {
                        store.dispatch(actionName, payload);
                    };
                });
            } else {
                var _loop = function _loop(_key) {
                    var actionName = mapActions[_key];
                    componentProto.actions[_key] = function (payload) {
                        store.dispatch(actionName, payload);
                    };
                };

                for (var _key in mapActions) {
                    _loop(_key);
                }
            }
        }

        return ComponentClass;
    };
}

function clone(source) {
    if (source == null) {
        return source;
    }

    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
        if (source instanceof Array) {
            return source.map(function (item) {
                return clone(item);
            });
        } else if (source instanceof Date) {
            return new Date(source.getTime());
        }

        var result = {};
        for (var key in source) {
            result[key] = clone(source[key]);
        }

        return result;
    }

    return source;
}

/**
 * 判断 connect 的 state 是否需要更新
 *
 * @param {Object} info state的connect信息对象
 * @param {Array} diff 数据变更的diff信息
 * @return {boolean}
 */
function calcUpdateInfo(info, diff) {
    if (info.stateName) {
        var stateNameLen = info.stateName.length;

        for (var i = 0, diffLen = diff.length; i < diffLen; i++) {
            var diffInfo = diff[i];
            var target = diffInfo.target;
            var matchThisDiff = true;
            var j = 0;
            var targetLen = target.length;

            for (; j < targetLen && j < stateNameLen; j++) {
                if (info.stateName[j] != target[j]) {
                    matchThisDiff = false;
                    break;
                }
            }

            if (matchThisDiff) {
                var updateInfo = {
                    componentData: info.dataName,
                    storeData: info.stateName
                };

                if (targetLen > stateNameLen) {
                    updateInfo.storeData = target;
                    updateInfo.componentData += '.' + target.slice(stateNameLen).join('.');
                }

                if (targetLen >= stateNameLen && diffInfo.splice) {
                    updateInfo.spliceArgs = [diffInfo.splice.index, diffInfo.splice.deleteCount];

                    if (diffInfo.splice.insertions instanceof Array) {
                        updateInfo.spliceArgs.push.apply(updateInfo.spliceArgs, diffInfo.splice.insertions);
                    }
                }

                return updateInfo;
            }
        }
    }
}

/**
 * createConnector 创建连接
 *
 * @param {Store} store store实例
 * @return {Function}
 */
function createConnector(store) {
    if (store instanceof _store2.default) {
        return function (mapStates, mapActions) {
            return connect(mapStates, mapActions, store);
        };
    }

    throw new Error(store + ' must be an instance of Store!');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = emitDevtool;
/**
 * san-store
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file San Devtool emitter
 * @author luyuan
 */

var isBrowser = typeof window !== 'undefined';

function emitDevtool(name, args) {
    if (isBrowser && window['__san_devtool__']) {
        window['__san_devtool__'].emit(name, args);
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = flattenDiff;
/**
 * san-store
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file 把 san-update 给予的 diff 对象扁平化成数组
 * @author errorrik
 */

/**
 * 把 san-update 给予的 diff 对象扁平化成数组
 *
 * @param {Object} diff diff 对象
 * @return {Array}
 */
function flattenDiff(diff) {
    var flatDiff = [];
    var pos = [];

    function readDiffObject(source) {
        if (source.$change) {
            source.target = pos.slice(0);
            flatDiff.push(source);
            return;
        }

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                pos.push(key);
                readDiffObject(source[key]);
                pos.pop();
            }
        }
    }

    readDiffObject(diff);
    return flatDiff;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.Store = exports.version = exports.store = undefined;

var _store = __webpack_require__(1);

var _store2 = _interopRequireDefault(_store);

var _createConnector = __webpack_require__(3);

var _createConnector2 = _interopRequireDefault(_createConnector);

var _emitter = __webpack_require__(0);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 默认的全局 Store 实例
 * 通常我们认为在一个应用应该具有一个全局唯一的 store，管理整个应用状态
 *
 * @type {Store}
 */
var store = exports.store = new _store2.default({ name: '__default__' });

// Alternatives for not receiving the events including default store info from
// connector.
/**
 * san-store
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file 主模块
 * @author errorrik
 */

(0, _emitter2.default)('store-default-inited', { store: store });

/**
 * 版本号
 *
 * @type {string}
 */
var version = exports.version = '1.1.0';

exports.Store = _store2.default;
var connect = exports.connect = {
  san: (0, _createConnector2.default)(store),
  createConnector: _createConnector2.default
};

/***/ })
/******/ ]);
});