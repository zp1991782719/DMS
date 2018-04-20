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
    var template = require('text!./drugAdd.html');


    var treeview = {id:"",text:"",icon:""};
    var drug = {name:"",categoryId:"",provideId:"",price:"",validDate:"",image:""}
    var vm;

    return san.defineComponent({
        template: template,

        components: {
          "router-link": Link
        },

        initData: function () {
            var provideList;
            $.ajaxSetup({async:false});
            $.getJSON('/provide/provideList',function (responseResult) {
                provideList = responseResult;
                drug.provideId = responseResult[0].id;
            });
            return {
                provideList: provideList,
                provideId: drug.provideId
            }
        },

        created: function () {
            var vm = this;
            $.ajaxSetup({async:true});
            $.getJSON("/category/categoryList",function (responseResult) {
                treeview = {id:"",text:"",icon:""};
                $('#tree').treeview({
                    data: responseResult
                });
                $('#tree').on('nodeSelected', function(event, data) {
                    treeview = data;
                    vm.data.set("categoryId",data.id);
                });
            });
        },

        attached: function () {

        },

        drugAdd: function () {
            vm = this;
            drug.name = vm.data.get("name");
            drug.provideId =  vm.data.get("provideId");
            drug.price =  vm.data.get("price");
            drug.validDate =  vm.data.get("validDate");
            drug.image = $("#image").val();

            if(drug.name==null||drug.name==""){
                swal({
                    title: "请填写药品名称",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            if(treeview.id==null||treeview.id==""){
                swal({
                    title: "请选择药品类别",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            if(drug.price==null||drug.price==""){
                swal({
                    title: "价格不能为空",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            if(drug.validDate==null||drug.validDate==""){
                swal({
                    title: "过期时间不能为空",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            if(drug.image==null||drug.image==""){
                swal({
                    title: "图片不能为空",
                    text: "2秒后自动关闭。",
                    timer: 2000,
                    type: "error",
                    showConfirmButton: false
                });
                return ;
            }
            var formData = new FormData($( "#drugAdd")[0]);
            $.ajax({
                url: '/drug/drugAdd',
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (responseResult) {
                    swal({
                        title: responseResult.msg,
                        text: "2秒后自动关闭。",
                        timer: 2000,
                        type: responseResult.result,
                        showConfirmButton: false
                    });
                    $(location).prop('href','#/drug/drugList');
                }
            });
        }
    });

})