define(function (require) {

    require('jquery');
    require('dataTables-bootstrap');

    require('css!dataTables-bootstrap-css');
    require('css!fontAwesome-css');

    var san = require('san');
    var sanRouter = require('san-router');
    var Link = sanRouter.Link;
    var template = require('text!./userList.html');

    return san.defineComponent({
        template: template,

        components: {
            'router-link': Link
        },

        initData: function () {

        },

        attached: function () {
            $.getJSON('/user/userList',function (result) {
                $("#tables").DataTable({
                    data: result,
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
                        { data: "username"},
                        { data: "password"},
                        { data: "name"},
                        { data: "roleName"},
                        { data: "phone"},
                        {
                            data: null,
                            orderable: false,
                            searchable: false,
                            render: function (data,type,row) {
                                var id = row.id;
                                var html = '<a href="#/user/userEdit?id='+id+'" class="btn btn-info btn-xs" role="button">修改</a>';
                                return html;
                            }
                        }
                    ]
                });
            });
        },
    })
});