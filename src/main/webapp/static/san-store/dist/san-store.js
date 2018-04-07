!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("sanStore",[],e):"object"==typeof exports?exports.sanStore=e():t.sanStore=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist",e(e.s=6)}([function(t,e,n){"use strict";function i(){r.default.apply(null,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(4),r=function(t){return t&&t.__esModule?t:{default:t}}(o)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(5),a=i(s),u=n(2),f=i(u),c=n(0),l=i(c),d=1,h=function(){return(++d).toString()},p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.initData,i=void 0===n?{}:n,r=e.actions,s=void 0===r?{}:r,a=e.log,u=void 0===a||a,f=e.name;o(this,t),this.raw=i,this.actions=s,this.log=u,this.name=f,this.listeners=[],this.stateChangeLogs=[],this.actionCtrl=new v(this)}return r(t,[{key:"getState",value:function(t){t=(0,f.default)(t);for(var e=this.raw,n=0,i=t.length;null!=e&&n<i;n++)e=e[t[n]];return e}},{key:"listen",value:function(t){"function"==typeof t&&this.listeners.push(t),(0,l.default)("store-listened",{store:this,listener:t})}},{key:"unlisten",value:function(t){for(var e=this.listeners.length;e--;)this.listeners[e]===t&&this.listeners.splice(e,1);(0,l.default)("store-unlistened",{store:this,listener:t})}},{key:"_fire",value:function(t){var e=this;this.listeners.forEach(function(n){n.call(e,t)})}},{key:"addAction",value:function(t,e){if("function"==typeof e){if(this.actions[t])throw new Error("Action "+t+" exists!");this.actions[t]=e,(0,l.default)("store-action-added",{store:this,action:e})}}},{key:"dispatch",value:function(t,e){this._dispatch(t,e)}},{key:"_dispatch",value:function(t,e,n){var i=this,o=this.actions[t],r=h();if("function"==typeof o){this.actionCtrl.start(r,t,e,n);var s={getState:function(t){return i.getState(t)},dispatch:function(t,e){return i._dispatch(t,e,r)}},u=o.call(this,e,s),f=void 0;if(u){if("function"==typeof u.then)return void u.then(function(){i.actionCtrl.done(r)});if("function"==typeof u.buildWithDiff){var c=this.raw;f=u.buildWithDiff()(c),f[1]=(0,a.default)(f[1]),this.raw=f[0],this.log&&this.stateChangeLogs.push({oldValue:c,newValue:f[0],diff:f[1],id:r})}}this.actionCtrl.done(r),f&&this._fire(f[1]),(0,l.default)("store-dispatched",{store:this,diff:f?f[1]:null,name:t,payload:e,actionId:r,parentId:n})}}}]),t}();e.default=p;var v=function(){function t(e){o(this,t),this.list=[],this.len=0,this.index={},this.store=e}return r(t,[{key:"start",value:function(t,e,n,i){var o={id:t,name:e,parentId:i,childs:[]};this.store.log&&(o.startTime=(new Date).getTime(),o.payload=n),this.list[this.len]=o,this.index[t]=this.len++,i&&this.getById(i).childs.push(t)}},{key:"done",value:function(t){this.getById(t).selfDone=!0,this.detectDone(t)}},{key:"detectDone",value:function(t){var e=this,n=this.getById(t),i=!0;n.childs.forEach(function(t){i=e.getById(t).done&&i}),i&&n.selfDone&&(n.done=!0,this.store.log&&(n.endTime=(new Date).getTime()),n.parentId&&this.detectDone(n.parentId))}},{key:"getById",value:function(t){return this.list[this.index[t]]}}]),t}()},function(t,e,n){"use strict";function i(t){if(t instanceof Array)return t;if("string"!=typeof t)return[];for(var e=t.split("."),n=[],i=0,o=e.length;i<o;i++){var r=e[i],s=r.indexOf("[");if(s>=0)for(s>0&&(n.push(r.slice(0,s)),r=r.slice(s));91===r.charCodeAt(0);){var a=r.indexOf("]");if(a<0)throw new Error("name syntax error: "+t);var u=r.slice(1,a);/^[0-9]+$/.test(u)?n.push(+u):/^(['"])([^\1]+)\1$/.test(u)&&n.push(new Function("return "+u)()),r=r.slice(a+1)}else n.push(r)}return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){var i=[];for(var o in t)if(t.hasOwnProperty(o)){var a=t[o],f={dataName:o};switch(void 0===a?"undefined":u(a)){case"string":f.stateName=(0,c.default)(a);break;case"function":f.getter=a;break;default:f=null}f&&i.push(f)}return(0,p.default)("store-connected",{mapStates:t,mapActions:e,store:n}),function(o){var a=void 0;switch(void 0===o?"undefined":u(o)){case"function":a=o.prototype;break;case"object":a=o}if(a){var f=a.inited;a.inited=function(){var o=this;i.forEach(function(t){"function"==typeof t.getter?o.data.set(t.dataName,t.getter(n.getState())):o.data.set(t.dataName,r(n.getState(t.stateName)))}),this._storeListener=function(t){i.forEach(function(e){if("function"==typeof e.getter)return void o.data.set(e.dataName,e.getter(n.getState()));var i=s(e,t);i&&(i.spliceArgs?o.data.splice(i.componentData,i.spliceArgs):o.data.set(i.componentData,r(n.getState(i.storeData))))})},n.listen(this._storeListener),(0,p.default)("store-comp-inited",{mapStates:t,mapActions:e,store:n,component:this}),"function"==typeof f&&f.call(this)};var c=a.disposed;if(a.disposed=function(){n.unlisten(this._storeListener),this._storeListener=null,(0,p.default)("store-comp-disposed",{mapStates:t,mapActions:e,store:n,component:this}),"function"==typeof c&&c.call(this)},!a.actions)if(a.actions={},e instanceof Array)e.forEach(function(t){a.actions[t]=function(e){n.dispatch(t,e)}});else{for(var l in e)!function(t){var i=e[t];a.actions[t]=function(t){n.dispatch(i,t)}}(l)}return o}}}function r(t){if(null==t)return t;if("object"===(void 0===t?"undefined":u(t))){if(t instanceof Array)return t.map(function(t){return r(t)});if(t instanceof Date)return new Date(t.getTime());var e={};for(var n in t)e[n]=r(t[n]);return e}return t}function s(t,e){if(t.stateName)for(var n=t.stateName.length,i=0,o=e.length;i<o;i++){for(var r=e[i],s=r.target,a=!0,u=0,f=s.length;u<f&&u<n;u++)if(t.stateName[u]!=s[u]){a=!1;break}if(a){var c={componentData:t.dataName,storeData:t.stateName};return f>n&&(c.storeData=s,c.componentData+="."+s.slice(n).join(".")),f>=n&&r.splice&&(c.spliceArgs=[r.splice.index,r.splice.deleteCount],r.splice.insertions instanceof Array&&c.spliceArgs.push.apply(c.spliceArgs,r.splice.insertions)),c}}}function a(t){if(t instanceof d.default)return function(e,n){return o(e,n,t)};throw new Error(t+" must be an instance of Store!")}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=a;var f=n(2),c=i(f),l=n(1),d=i(l),h=n(0),p=i(h)},function(t,e,n){"use strict";function i(t,e){o&&window.__san_devtool__&&window.__san_devtool__.emit(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o="undefined"!=typeof window},function(t,e,n){"use strict";function i(t){function e(t){if(t.$change)return t.target=i.slice(0),void n.push(t);for(var o in t)t.hasOwnProperty(o)&&(i.push(o),e(t[o]),i.pop())}var n=[],i=[];return e(t),n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.connect=e.Store=e.version=e.store=void 0;var o=n(1),r=i(o),s=n(3),a=i(s),u=n(0),f=i(u),c=e.store=new r.default({name:"__default__"});(0,f.default)("store-default-inited",{store:c});e.version="1.1.0";e.Store=r.default;e.connect={san:(0,a.default)(c),createConnector:a.default}}])});