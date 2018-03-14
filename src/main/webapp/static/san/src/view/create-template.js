/**
 * @file 创建 template 元素
 * @author errorrik(errorrik@gmail.com)
 */

var each = require('../util/each');
var insertBefore = require('../browser/insert-before');
var htmlBufferComment = require('../runtime/html-buffer-comment');
var NodeType = require('./node-type');
var LifeCycle = require('./life-cycle');
var genElementChildrenHTML = require('./gen-element-children-html');
var nodeInit = require('./node-init');
var nodeDispose = require('./node-dispose');
var createReverseNode = require('./create-reverse-node');
var elementDisposeChildren = require('./element-dispose-children');
var elementOwnToPhase = require('./element-own-to-phase');
var attachings = require('./attachings');
var elementUpdateChildren = require('./element-update-children');
var nodeCreateStump = require('./node-create-stump');
var nodeOwnSimpleAttached = require('./node-own-simple-attached');
var nodeOwnOnlyChildrenAttach = require('./node-own-only-children-attach');
var nodeOwnGetStumpEl = require('./node-own-get-stump-el');

/**
 * 创建 template 元素
 *
 * @param {Object} options 初始化参数
 * @return {Object}
 */
function createTemplate(options) {
    var node = nodeInit(options);

    node.lifeCycle = LifeCycle.start;
    node.children = [];

    node.nodeType = NodeType.TPL;

    node.attach = nodeOwnOnlyChildrenAttach;
    node.dispose = templateOwnDispose;


    node._toPhase = elementOwnToPhase;
    node._getEl = nodeOwnGetStumpEl;
    node._attachHTML = templateOwnAttachHTML;
    node._attached = nodeOwnSimpleAttached;
    node._update = templateOwnUpdate;


    // #[begin] reverse
    var walker = options.reverseWalker;
    if (walker) {
        options.reverseWalker = null;

        node.sel = nodeCreateStump(node);
        insertBefore(node.sel, walker.target, walker.current);

        each(node.aNode.children, function (aNodeChild) {
            node.children.push(createReverseNode(aNodeChild, walker, node));
        });

        node.el = nodeCreateStump(node);
        insertBefore(node.el, walker.target, walker.current);

        attachings.add(node);
    }
    // #[end]

    return node;
}

/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 */
function templateOwnUpdate(changes) {
    elementUpdateChildren(this, changes);
}

/**
 * attach 元素的 html
 *
 * @param {Object} buf html串存储对象
 */
function templateOwnAttachHTML(buf) {
    htmlBufferComment(buf, this.id);
    genElementChildrenHTML(this, buf);
    htmlBufferComment(buf, this.id);

    attachings.add(this);
}

/**
 * 销毁释放
 *
 * @param {Object=} options dispose行为参数
 */
function templateOwnDispose(options) {
    elementDisposeChildren(this, options);

    nodeDispose(this);
}

exports = module.exports = createTemplate;
