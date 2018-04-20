define(function (require) {

    require('jquery');
    require('bootstrap')
    require('sweetalert');
    require('css!bootstrap-css');
    require('css!sweetalert-css');

    var san = require('san');
    var sanRouter = require('san-router');
    var Link = sanRouter.Link;
    var template = require('text!./provideEdit.html');

    var provide;

    return san.defineComponent({
        template: template,

        components: {
          "router-link": Link
        },

        initData: function () {

        },

        attached: function () {
            var vm = this;
            var route = this.data.get('route');
            var id = route.query.id;
            $.getJSON("/provide/provideDetail",{id:id},function(data){
                provide = data;
                vm.data.set('name',provide.name);
                vm.data.set('director',provide.director);
                vm.data.set('phone',provide.phone);
                vm.data.set('email',provide.email);
            });
        },

        provideDelete: function () {
            $.getJSON("/provide/provideDelete",{id:provide.id},function(responseResult){
                swal({
                    title: responseResult.msg,
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: responseResult.result,
                    showConfirmButton: false
                });
                $(location).prop('href','#/provide/provideList');
            });
        },

        provideEdit: function () {
            provide.name = this.data.get("name");
            provide.director = this.data.get("director");
            provide.phone = this.data.get("phone");
            provide.email = this.data.get("email");
            if(provide.name==null||provide.name==''){
                swal("亲,供应商名称不能为空哦");
                return ;
            }
            $.getJSON('/provide/provideEdit',
                {id:provide.id,name:provide.name,director:provide.director,phone:provide.phone,
                    email:provide.email},function (responseResult) {
                    swal({
                        title: responseResult.msg,
                        text: "2秒后自动关闭。",
                        timer: 2000,
                        type: responseResult.result,
                        showConfirmButton: false
                    });
                    $(location).prop('href','#/provide/provideList');
            });
        }
        
    });

})