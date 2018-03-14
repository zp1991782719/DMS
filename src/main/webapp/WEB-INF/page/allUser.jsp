<!DOCTYPE HTML>
<html>
<head>
    <META http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>用户列表</title>
    <link href="/static/bootstrap-3.3.7/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/static/DataTables-1.10.15/media/css/dataTables.bootstrap.min.css" rel="stylesheet" />

    <script src="/static/bootstrap-3.3.7/dist/js/jquery.js"></script>
    <script src="/static/bootstrap-3.3.7/dist/js/bootstrap.min.js"></script>

    <script src="/static/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>
    <script src="/static/DataTables-1.10.15/media/js/dataTables.bootstrap.min.js"></script>

    <!--引入好看的alert(sweetalert)-->
    <link rel="stylesheet" href="/static/bootstrap-sweetalert/bootstrap-sweetalert-master/dist/sweetalert.css">
    <script src="/static/bootstrap-sweetalert/bootstrap-sweetalert-master/dist/sweetalert.min.js"></script>

</head>

<body>
<div class="userList">
    <table id="example" class="table table-striped table-bordered" cellspacing="0">
        <thead>
            <th>id</th>
            <th>用户名</th>
            <th>密码</th>
            <th>姓名</th>
            <th>操作</th>
        </thead>

        <tbody>

        </tbody>
    </table>
</div>
<script>

    $("#example").DataTable( {
        aLengthMenu: [5,10],  //用户可自选每页展示数量 5条或10条
        searching: false,//禁用搜索（搜索框）
        paging: true,//开启表格分页
        bServerSide: true,
        bProcessing: true,
        ajax: {
            url: "/user/getUserEtc",
            dataType: "json"
        },
        button: ["新增"],
        columns: [
            {data: 'id'},
            {data: 'username'},
            {data: 'password'},
            {data: 'name'},
            {data: null }
        ],
        columnDefs: [
            {
                //   指定第最后一列，添加修改和删除按钮
                targets: 4,
                render: function(data, type, row, meta) {
                    return "<button class='btn btn-info btn-sm' onclick='del("+row.id+")'>删除</button>";
                }
            }
        ]

    } );

    //删除方法
    function del(id) {
        swal({
                title: "确认删除?",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "yes",
                cancelButtonText: "no",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function(isConfirm) {
                if (isConfirm) {
                    $.ajax({
                        url: "/user/delUserById",
                        //在后台接受id这个参数
                        data: {
                            id: id
                        },
                        success: function(data) {
                            if (data.flag) {
                                swal("Deleted!", data.msg, "success");
                                $("#example").DataTable().ajax.reload( null, false ); // 刷新表格数据，分页信息不会重置
                            }else{
                                swal("服务器问题!", data.msg, "error");
                            }
                        }
                    })
                } else {
                    swal("Cancelled", "取消删除", "error");
                }
            });
    }

</script>





</body>
</html>