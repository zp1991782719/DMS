define(function (require) {

    var san = require('san');
    var sanRouter = require('san-router');
    var Link = sanRouter.Link;
    var template = require('text!./about.html');

    return san.defineComponent({
        template: template,
        components: {
            'router-link': Link
        },
        initData: function () {

        }
    })
})