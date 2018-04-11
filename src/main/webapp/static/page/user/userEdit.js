define(function (require) {

    require('jquery');
    require('bootstrap')
    require('sweetalert');
    require('css!bootstrap-css');
    require('css!sweetalert-css');

    var san = require('san');
    var sanRouter = require('san-router');
    var Link = sanRouter.Link;
    var template = require('text!./userEdit.html');

    var user;

    return san.defineComponent({
        template: template,

        components: {
          "router-link": Link
        },

        initData: function () {

        },
        created: function () {
            var vm = this;
            var route = this.data.get('route');
            var id = route.query.id;
            $.getJSON("/user/userDetail",{id:id},function(data){
                user = data;
                vm.data.set('username',user.username);
                vm.data.set('password',user.password);
                vm.data.set('name',user.name);
                vm.data.set('roleName',user.roleName);
                vm.data.set('phone',user.phone);
            });
        },
        attached: function () {

        },
        
        userDelete: function () {
            $.getJSON("/user/userDelete",{id:user.id},function(data){
                if (data.result=='success') {
                    swal({
                        title: "删除成功",
                        text: "2秒后自动关闭。",
                        timer: 2000,
                        type: "success",
                        showConfirmButton: false
                    });
                }else{
                    swal({
                        title: "删除失败,请联系管理员周大大",
                        text: "2秒后自动关闭。",
                        timer: 2000,
                        type: "error",
                        showConfirmButton: false
                    });
                }
                $(location).prop('href','#/user/userList');
            });
        },
        
        userEdit: function () {
            user.password = this.data.get("password");
            user.name = this.data.get("name");
            user.roleName = this.data.get("roleName");
            user.phone = this.data.get("phone");
            $.getJSON('/user/userEdit',
                {id:user.id,username:user.username,password:user.password,name:user.name,
                 roleName:user.roleName,phone:user.phone},function (data) {

                if (data.result=='success') {
                    swal({
                        title: "修改用户成功",
                        text: "2秒后自动关闭。",
                        timer: 2000,
                        type: "success",
                        showConfirmButton: false
                    });
                }else{
                    swal({
                        title: "修改失败,,请联系管理员周大大",
                        text: "2秒后自动关闭。",
                        timer: 2000,
                        type: "error",
                        showConfirmButton: false
                    });
                }
                $(location).prop('href','#/user/userList')

            });
        }
        
    });

})