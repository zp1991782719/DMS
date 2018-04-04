define(function (require) {

    require("jquery");


    var san = require("san");

    var MyApp = san.defineComponent({



        initData: function () {

        },

        attached: function () {

        }
    });

    var myapp = new MyApp();
    myapp.attach($("#wrap").get(0));
});