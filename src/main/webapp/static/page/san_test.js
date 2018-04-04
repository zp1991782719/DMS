define(function (require) {

    require('jquery');

    require('../AdminLTE-2.4.2/');

    var san = require('san');
    var sanRouter = require('san-router');
    var router = sanRouter.router;
    var Link = sanRouter.Link;

    require('text!./san_test.html')

    var App = new san.defineComponent({
        template:
        '<header class="main-header">\n' +
        '        <!- - Logo - ->\n' +
        '        <a href="#" class="logo">\n' +
        '            <!-- mini logo for sidebar mini 50x50 pixels -->\n' +
        '            <span class="logo-mini">DMS</span>\n' +
        '            <span class="logo-lg">药品后台管理系统</span>\n' +
        '        </a>\n' +
        '        <!- - Header Navbar - ->\n' +
        '        <nav class="navbar navbar-static-top" role="navigation">\n' +
        '            <!-- Sidebar toggle button-->\n' +
        '            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">\n' +
        '                <span class="sr-only">Toggle navigation</span>\n' +
        '            </a>\n' +
        '            <!-- Navbar Right Menu -->\n' +
        '            <div class="navbar-custom-menu">\n' +
        '                <ul class="nav navbar-nav">\n' +
        '                    <!-- Messages: style can be found in dropdown.less-->\n' +
        '                    <li class="dropdown messages-menu">\n' +
        '                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
        '                            <i class="fa fa-envelope-o"></i>\n' +
        '                            <span class="label label-success">4</span>\n' +
        '                        </a>\n' +
        '                        <ul class="dropdown-menu">\n' +
        '                            <li class="header">You have 4 messages</li>\n' +
        '                            <li>\n' +
        '                                <!-- inner menu: contains the actual data -->\n' +
        '                                <ul class="menu">\n' +
        '                                    <li><!-- start message -->\n' +
        '                                        <a href="#">\n' +
        '                                            <div class="pull-left">\n' +
        '                                                <img src="../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n' +
        '                                            </div>\n' +
        '                                            <h4>\n' +
        '                                                Sender Name\n' +
        '                                                <small><i class="fa fa-clock-o"></i> 5 mins</small>\n' +
        '                                            </h4>\n' +
        '                                            <p>Message Excerpt</p>\n' +
        '                                        </a>\n' +
        '                                    </li><!-- end message -->\n' +
        '                                    ...\n' +
        '                                </ul>\n' +
        '                            </li>\n' +
        '                            <li class="footer"><a href="#">See All Messages</a></li>\n' +
        '                        </ul>\n' +
        '                    </li>\n' +
        '                    <!-- Notifications: style can be found in dropdown.less -->\n' +
        '                    <li class="dropdown notifications-menu">\n' +
        '                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
        '                            <i class="fa fa-bell-o"></i>\n' +
        '                            <span class="label label-warning">10</span>\n' +
        '                        </a>\n' +
        '                        <ul class="dropdown-menu">\n' +
        '                            <li class="header">You have 10 notifications</li>\n' +
        '                            <li>\n' +
        '                                <!-- inner menu: contains the actual data -->\n' +
        '                                <ul class="menu">\n' +
        '                                    <li>\n' +
        '                                        <a href="#">\n' +
        '                                            <i class="ion ion-ios-people info"></i> Notification title\n' +
        '                                        </a>\n' +
        '                                    </li>\n' +
        '                                    ...\n' +
        '                                </ul>\n' +
        '                            </li>\n' +
        '                            <li class="footer"><a href="#">View all</a></li>\n' +
        '                        </ul>\n' +
        '                    </li>\n' +
        '                    <!-- Tasks: style can be found in dropdown.less -->\n' +
        '                    <li class="dropdown tasks-menu">\n' +
        '                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
        '                            <i class="fa fa-flag-o"></i>\n' +
        '                            <span class="label label-danger">9</span>\n' +
        '                        </a>\n' +
        '                        <ul class="dropdown-menu">\n' +
        '                            <li class="header">You have 9 tasks</li>\n' +
        '                            <li>\n' +
        '                                <!-- inner menu: contains the actual data -->\n' +
        '                                <ul class="menu">\n' +
        '                                    <li><!-- Task item -->\n' +
        '                                        <a href="#">\n' +
        '                                            <h3>\n' +
        '                                                设计按钮\n' +
        '                                                <small class="pull-right">20%</small>\n' +
        '                                            </h3>\n' +
        '                                            <div class="progress xs">\n' +
        '                                                <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
        '                                                    <span class="sr-only">20% Complete</span>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </a>\n' +
        '                                    </li><!-- end task item -->\n' +
        '                                    ...\n' +
        '                                </ul>\n' +
        '                            </li>\n' +
        '                            <li class="footer">\n' +
        '                                <a href="#">View all tasks</a>\n' +
        '                            </li>\n' +
        '                        </ul>\n' +
        '                    </li>\n' +
        '                    <!-- User Account: style can be found in dropdown.less -->\n' +
        '                    <li class="dropdown user user-menu">\n' +
        '                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
        '                            <img src="/static/AdminLTE-2.4.2/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">\n' +
        '                            <span class="hidden-xs">Alexander Pierce</span>\n' +
        '                        </a>\n' +
        '                        <ul class="dropdown-menu">\n' +
        '                            <!-- User image -->\n' +
        '                            <li class="user-header">\n' +
        '                                <img src="/static/AdminLTE-2.4.2/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n' +
        '                                <p>\n' +
        '                                    Alexander Pierce - Web Developer\n' +
        '                                    <small>Member since Nov. 2012</small>\n' +
        '                                </p>\n' +
        '                            </li>\n' +
        '                            <!-- Menu Body -->\n' +
        '                            <li class="user-body">\n' +
        '                                <div class="col-xs-4 text-center">\n' +
        '                                    <a href="#">Followers</a>\n' +
        '                                </div>\n' +
        '                                <div class="col-xs-4 text-center">\n' +
        '                                    <a href="#">Sales</a>\n' +
        '                                </div>\n' +
        '                                <div class="col-xs-4 text-center">\n' +
        '                                    <a href="#">Friends</a>\n' +
        '                                </div>\n' +
        '                            </li>\n' +
        '                            <!-- Menu Footer-->\n' +
        '                            <li class="user-footer">\n' +
        '                                <div class="pull-left">\n' +
        '                                    <a href="#" class="btn btn-default btn-flat">Profile</a>\n' +
        '                                </div>\n' +
        '                                <div class="pull-right">\n' +
        '                                    <a href="#" class="btn btn-default btn-flat">Sign out</a>\n' +
        '                                </div>\n' +
        '                            </li>\n' +
        '                        </ul>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '            </div>\n' +
        '        </nav>\n' +
        '    </header>\n' +
        '\n' +
        '    <aside class="main-sidebar">\n' +
        '        <!-- sidebar: style can be found in sidebar.less -->\n' +
        '        <section class="sidebar">\n' +
        '            <!-- sidebar menu: : style can be found in sidebar.less -->\n' +
        '            <ul class="sidebar-menu" data-widget="tree">\n' +
        '                <li class="header">主菜单</li>\n' +
        '                <li class="active treeview">\n' +
        '                    <a href="#">\n' +
        '                        <i class="fa fa-dashboard"></i> <span>Dashboard</span>\n' +
        '                        <span class="pull-right-container">\n' +
        '                  <i class="fa fa-angle-left pull-right"></i>\n' +
        '                </span>\n' +
        '                    </a>\n' +
        '                    <ul class="treeview-menu">\n' +
        '                        <li class="active"><a href="/user/userLogin"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>\n' +
        '                        <li><a href="/user/userLogin"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li><a href="https://adminlte.io/docs"><i class="fa fa-book"></i> <span>Documentation</span></a></li>\n' +
        '                <li class="header">LABELS</li>\n' +
        '                <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>\n' +
        '                <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>\n' +
        '                <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>\n' +
        '            </ul>\n' +
        '        </section>\n' +
        '    </aside>\n' +
        '\n' +
        '\n' +
        '    <section id="main" class="content-wrapper">\n' +
        '        123\n' +
        '    </section>',

        component: {
            'router-link': Link
        }
    })

    new App().attach($("#app").get(0));

    //router.add({rule: '/userList', Component: userList, target: '#mycontent'});

    // 设置路由模式 'html5 | hash'
    router.setMode('html5');
    // 路由监听
    router.listen(function(e, config){
        // 在路由发生变化时触发
        console.log(e);
        console.log(config);
    });

    router.start();

})