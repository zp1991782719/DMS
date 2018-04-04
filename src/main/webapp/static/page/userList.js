define(function (require) {

    var san = require('san');
    var template = require('text!./userList.html');

    return san.defineComponent({
        template: template,
    })
})