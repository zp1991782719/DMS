define(function (require) {

    require('jquery');
    require('bootstrap');
    require('sweetalert');
    require('css!sweetalert-css');
    require('css!bootstrap-css');
    require('css!adminlte-css');


    var san = require('san');
    var sanRouter = require('san-router');
    var Link = sanRouter.Link;
    var template = require('text!./storeOut.html');

    var provideList;
    var drugList;
    var store = {drugId:"",provideId:"",count:""}
    var vm;

    return san.defineComponent({
        template: template,

        components: {
            "router-link": Link
        },

        initData: function () {

            $.ajaxSetup({async:false});
            $.getJSON('/provide/provideList',function (responseResult) {
                provideList = responseResult;
                store.provideId = responseResult[0].id;
            });
            $.getJSON('/drug/drugList',function (responseResult) {
                drugList = responseResult;
                store.drugId = responseResult[0].id;
            });
            return {
                provideId: store.provideId,
                provideList: provideList,
                drugId: store.drugId,
                drugList: drugList
            }
        },

        attached: function () {

        },

        storeIn: function () {
            store.drugId = this.data.get("drugId");
            store.provideId = this.data.get("provideId");
            store.count = this.data.get("count");
            $.ajaxSetup({async:true});
            $.getJSON("/store/storeOut",{drugId:store.drugId,provideId:store.provideId,count:store.count},function (responseResult) {
                swal({
                    title: responseResult.msg,
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: responseResult.result,
                    showConfirmButton: false
                });
                $(location).prop('href','#/store/storeList');
            })
        }
    });

})