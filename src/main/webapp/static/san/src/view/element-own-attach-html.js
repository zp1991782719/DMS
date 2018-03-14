/**
 * @file attach 元素的 HTML
 * @author errorrik(errorrik@gmail.com)
 */

var genElementStartHTML = require('./gen-element-start-html');
var genElementChildrenHTML = require('./gen-element-children-html');
var genElementEndHTML = require('./gen-element-end-html');
var attachings = require('./attachings');
var LifeCycle = require('./life-cycle');

/**
 * attach 元素的 HTML
 *
 * @param {Object} buf html串存储对象
 */
function elementOwnAttachHTML(buf) {
    this.lifeCycle = LifeCycle.painting;

    genElementStartHTML(this, buf);
    genElementChildrenHTML(this, buf);
    genElementEndHTML(this, buf);

    attachings.add(this);
}

exports = module.exports = elementOwnAttachHTML;
