define(function (require) {

    require('jquery');
    require('dataTables-bootstrap');
    require('sweetalert');
    require('css!sweetalert-css');
    require('css!dataTables-bootstrap-css');
    require('css!fontAwesome-css');

    var san = require('san');
    var sanRouter = require('san-router');
    var Link = sanRouter.Link;
    var template = require('text!./storeList.html');

    var storeList;

    return san.defineComponent({
        template: template,

        components: {
            'router-link': Link
        },

        initData: function () {

        },

        attached: function () {
            $.getJSON('/store/storeList',function (result) {
                storeList = result;
                $("#tables").DataTable({
                    data: storeList,
                    language: {
                        "lengthMenu": "每页 _MENU_ 条记录",
                        "zeroRecords": " ",
                        "info": "当前 _START_ 条到 _END_ 条 共 _TOTAL_ 条",
                        "infoEmpty": "无记录",
                        "infoFiltered": "(从 _MAX_ 条记录过滤)",
                        "paginate": {
                            "first": "首页",
                            "previous": "上一页",
                            "next": "下一页",
                            "last": "尾页"
                        }
                    },
                    columnDefs: [
                        {
                            "defaultContent": "",
                            "targets": "_all"
                        }
                    ],
                    columns: [
                        { data: "id"},
                        { data: "drugName"},
                        { data: "provideName"},
                        { data: "count"}
                    ]
                });
            });
        },

    //datatables选中行事件
    // $('#tables tbody').on( 'click', 'tr', function () {
    //     var data = datatable.row( this).data();
    //     alert(data.id+"|"+data.username+"|"+data.password+"|"+data.name);
    // } );
    })
});