define(function (require) {

    require('jquery');

    var san = require('san');

    var template = require('text!./userEdit.html');

    return san.defineComponent({
        template: template,

        initData: function () {

        },

        attached: function () {

        }

    });

})