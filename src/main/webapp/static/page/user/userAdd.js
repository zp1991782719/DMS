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
    var template = require('text!./userAdd.html');

    var user = {username:'',password:'',name:'',roleName:'',phone:''};
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

        userAdd: function () {
            user.username = this.data.get('username');
            user.password = this.data.get('password');
            user.name = this.data.get('name');
            user.roleName = this.data.get('roleName');
            user.phone = this.data.get('phone');
            if(user.username==null||user.username==''){
                swal("亲,用户名不能为空哦");
                return ;
            }
            if(user.password==null||user.password==''){
                swal("亲,密码不能为空哦");
                return ;
            }

            $.getJSON('/user/userAdd',
                {username:user.username,password:user.password,name:user.name,
                    roleName:user.roleName,phone:user.phone},function (responseResult) {
                    swal({
                        title: responseResult.msg,
                        text: "2秒后自动关闭。",
                        timer: 2000,
                        type: responseResult.result,
                        showConfirmButton: false
                    });
                $(location).prop('href','#/user/userList')
            });
        }
        
    });

})