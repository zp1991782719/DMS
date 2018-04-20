define(function (require) {

    require('jquery');
    require('bootstrap')
    require('sweetalert');
    require('css!bootstrap-css');
    require('css!sweetalert-css');

    var san = require('san');
    var sanRouter = require('san-router');
    var Link = sanRouter.Link;
    var template = require('text!./drugEdit.html');

    var drug={name:"",categoryId:"",provideId:"",price:"",validDate:"",image:""};
    var treeview = {id:"",text:"",icon:""};
    var provideList;

    return san.defineComponent({
        template: template,

        components: {
          "router-link": Link
        },

        initData: function () {
            $.getJSON('/provide/provideList',function (responseResult) {
                provideList = responseResult;
            });
        },
        created: function () {
            var vm = this;
            var route = this.data.get('route');
            var id = route.query.id;
            $.ajaxSetup({async:false});
            $.getJSON("/drug/drugDetail",{id:id},function(data){
                drug = data;
                vm.data.set('name',drug.name);
                vm.data.set("categoryId",drug.categoryId);
                vm.data.set('provideId',drug.provideId);
                vm.data.set('price',drug.price);
                vm.data.set('validDate',getMyDate(drug.validDate));
            });
            return {
                provideId: drug.provideId,
                provideList: provideList
            }
        },

        attached: function () {
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

        drugDelete: function () {

        },

        drugEdit: function () {

        }
        
    });

    //将时间戳格式化
    function getMyDate(time){
        if(typeof(time)=="undefined"){
            return "";
        }
        var oDate = new Date(time),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间
        return oTime;
    };

    //补0操作,当时间数据小于10的时候，给该数据前面加一个0
    function getzf(num){
        if(parseInt(num) < 10){
            num = '0'+num;
        }
        return num;
    }

})