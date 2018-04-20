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
    var template = require('text!./provideAdd.html');

    var provide = {name:'',director:'',phone:'',email:''};
    var vm;

    return san.defineComponent({
        template: template,

        components: {
          "router-link": Link
        },

        initData: function () {

        },

        attached: function () {
            vm = this;
        },

        provideAdd: function () {
            provide.name = this.data.get('name');
            provide.director = this.data.get('director');
            provide.phone = this.data.get('phone');
            provide.email = this.data.get('email');
            if(provide.name==null||provide.name==''){
                swal("亲,供应商名称不能为空哦");
                return ;
            }
            $.getJSON('/provide/provideAdd',{name:provide.name,director:provide.director,
                phone:provide.phone, email:provide.email},function (responseResult) {
                    swal({
                        title: responseResult.msg,
                        text: "2秒后自动关闭。",
                        timer: 2000,
                        type: responseResult.result,
                        showConfirmButton: false
                    });
                    $(location).prop('href','#/provide/provideList')
            });
        }
    });

})