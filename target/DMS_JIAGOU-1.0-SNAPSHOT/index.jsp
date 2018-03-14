<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>请登录</title>
    <!-- 引入requirejs文件管理js依赖包 -->
    <script src="static/js/require.js" data-main="static/js/lib/main.js"></script>

    <style type="text/css">
        body{
            background: url("static/images/log_bg.jpg");
        }
        .form{
            background: rgba(255,255,255,0.2);
            width:400px;
            margin:120px auto;
        }
        /*阴影*/
        .fa{display: inline-block;top: 27px;left: 6px;position: relative;color: #ccc;}
        input[type="text"],input[type="password"]{padding-left:26px;}
        .checkbox{padding-left:21px;}
    </style>

    <!-- 新 Bootstrap 核心 CSS 文件
    <link href="static/bootstrap-3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    -->
    <!-- jQuery文件。务必在bootstrap.min.js 之前引入
    <script src="static/js/jquery-3.3.1.min.js"></script>
     -->
    <!-- 最新的 Bootstrap 核心 JavaScript 文件
    <script src="static/bootstrap-3.3.7/dist/js/bootstrap.min.js"></script>
    -->
    <!-- Font Awesome
    <link rel="stylesheet" href="/static/AdminLTE-2.4.2/bower_components/font-awesome/css/font-awesome.min.css">
    -->

</head>
<body>
<div id="testt">my name is bob</div>
    <form action="/user/userLogin" method="post">
        <div class="container">
            <div class="row form" style="margin-left: 50%">
                <div class="form-horizontal col-md-offset-3" id="login_form">
                    <h3 class="form-title">LOGIN</h3>

                    <div class="col-md-9">
                        <div class="form-group">
                            <i class="fa fa-user fa-lg"></i>
                            <input class="form-control required" type="text" placeholder="Username" id="username" name="username" autofocus="autofocus" maxlength="20"/>
                        </div>

                        <div class="form-group">
                            <i class="fa fa-lock fa-lg"></i>
                            <input class="form-control required" type="password" placeholder="Password" id="password" name="password" maxlength="8"/>
                        </div>

                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" name="remember" value="1"/>记住我
                            </label>
                        </div>

                        <div class="form-group col-md-offset-9">
                            <button type="submit" class="btn btn-success pull-right" name="submit">登录</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </form>
</body>
</html>