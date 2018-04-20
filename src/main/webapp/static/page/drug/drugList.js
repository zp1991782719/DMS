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
    var template = require('text!./drugList.html');


    //var res = [];
    var datatable;

    return san.defineComponent({
        template: template,

        components: {
            'router-link': Link
        },

        initData: function () {

        },

        attached: function () {
            $.getJSON('/drug/drugList',function (result) {
                datatable = $("#tables").DataTable({
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
                        { data: "name"},
                        { data: "categoryName"},
                        { data: "provideName"},
                        { data: "price"},
                        { data: "validDate",
                            render: function (data,type,row) {
                                var html = getMyDate(data);
                                return html;
                            }
                        },
                        { data: "image",
                            orderable: false,
                            searchable: false,
                            render: function (data,type,row) {
                                var html = '<img width="64px" height="64px" src=/drug/drugDownload?fileName=' + data + ' alt="error"/>';
                                return html;
                            }
                        },
                        {data: null,
                            orderable: false,
                            searchable: false,
                            render: function (data,type,row) {
                                var id = row.id;
                                var html = '<a href="#/drug/drugEdit?id='+id+'" class="btn btn-info btn-xs" role="button">修改</a>';
                                return html;
                            }
                        }
                    ]
                });
            });
        },

    //datatables选中行事件
    // $('#tables tbody').on( 'click', 'tr', function () {
    //     var data = datatable.row( this).data();
    //     alert(data.id+"|"+data.username+"|"+data.password+"|"+data.name);
    // } );
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
});