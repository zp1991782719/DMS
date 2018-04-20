define(function (require) {

    require('jquery');
    require('bootstrap');
    require('bootstrap-treeview');
    require('sweetalert');
    require('css!sweetalert-css');
    require('css!bootstrap-css');


    var san = require('san');
    var sanRouter = require('san-router');
    var Link = sanRouter.Link;
    var template = require('text!./categoryList.html');

    var treeview = {id:"",text:"",icon:""};

    return san.defineComponent({
        template: template,

        components: {
            "router-link": Link
        },

        initData: function () {

        },

        attached: function () {
            var vm = this;
            $.getJSON("/category/categoryList",function (responseResult) {
                treeview = {id:"",text:"",icon:""};
                $('#tree').treeview({
                    data: responseResult
                });
                $('#tree').on('nodeSelected', function(event, data) {
                    treeview = data;
                    vm.data.set("categoryName",treeview.text);
                    vm.data.set("categoryIcon",treeview.icon);
                });
            });
        },

        categoryEdit: function () {
            var vm = this;
            treeview.text = vm.data.get("categoryName");
            treeview.icon = vm.data.get("categoryIcon");
            if(treeview.id==null||treeview.id==""){
                swal({
                    title: "亲,请先选择类别",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            if(treeview.text==null||treeview.text==""){
                swal({
                    title: "亲,类别名不能为空的噢",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            $.getJSON("/category/categoryEdit",{id:treeview.id,text:treeview.text,icon:treeview.icon},function (responseResult) {
                swal({
                    title: responseResult.msg,
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: responseResult.result,
                    showConfirmButton: false
                });
                $.getJSON("/category/categoryList",function (responseResult) {
                    treeview = {id:"",text:"",icon:""};
                    $('#tree').treeview({
                        data: responseResult
                    });
                    $('#tree').on('nodeSelected', function(event, data) {
                        treeview = data;
                        vm.data.set("categoryName",treeview.text);
                        vm.data.set("categoryIcon",treeview.icon);
                    });
                });
            })

        },

        categoryDelete: function () {
            var vm = this;
            if(treeview.id==null||treeview.id==""){
                swal({
                    title: "亲,请先选择类别",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            $.getJSON("/category/categoryDelete",{id:treeview.id},function (responseResult) {
                swal({
                    title: responseResult.msg,
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: responseResult.result,
                    showConfirmButton: false
                });
                $.getJSON("/category/categoryList",function (responseResult) {
                    treeview = {id:"",text:"",icon:""};
                    $('#tree').treeview({
                        data: responseResult
                    });
                    $('#tree').on('nodeSelected', function(event, data) {
                        treeview = data;
                        vm.data.set("categoryName",treeview.text);
                        vm.data.set("categoryIcon",treeview.icon);
                    });
                });
            });
        },

        categoryAdd: function () {
            var vm = this;
            if(treeview.id==null||treeview.id==""){
                swal({
                    title: "亲,请先选择添加类别节点位置",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            var text = vm.data.get("categoryAddName");
            if(text==null||text==""){
                swal({
                    title: "亲,类别名不能为空的噢",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            var icon = vm.data.get("categoryAddIcon");
            $.getJSON("/category/categoryAdd",{parentId:treeview.id,text:text,icon:icon},function (responseResult) {
                swal({
                    title: responseResult.msg,
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: responseResult.result,
                    showConfirmButton: false
                });
                $.getJSON("/category/categoryList",function (responseResult) {
                    treeview = {id:"",text:"",icon:""};
                    $('#tree').treeview({
                        data: responseResult
                    });
                    $('#tree').on('nodeSelected', function(event, data) {
                        treeview = data;
                        vm.data.set("categoryName",treeview.text);
                        vm.data.set("categoryIcon",treeview.icon);
                    });
                });
            });
        }

    });

})