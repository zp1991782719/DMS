define(function (require) {

    require("css!bootstrap-css");
    require('css!fontAwesome-css');
    require('css!Ionicons-css');
    require('css!adminlte-css');
    require('css!adminlte-skin-css');

    require('jquery');
    require('bootstrap');
    require('adminlte');

    var san = require("san");
    var sanRouter = require('san-router');
    // Link 组件
    var Link = sanRouter.Link;
    var router = sanRouter.router;

    var template = require("text!./page/index.html");

    var App = new san.defineComponent({
        template: '<div class="wrapper">\n' +
        '    <header class="main-header">\n' +
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
        '                                                <img src="/static/AdminLTE-2.4.2/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n' +
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
        '                <li class="treeview" id="userMenu">\n' +
        '                    <a href="#" on-click="userMenu">\n' +
        '                        <i class="fa fa-user"></i> <span>用户职工</span>\n' +
        '                        <span class="pull-right-container">\n' +
        '                  <i class="fa fa-angle-left pull-right"></i>\n' +
        '                </span>\n' +
        '                    </a>\n' +
        '                    <ul class="treeview-menu" id="userTreeMenu">\n' +
        '                        <li><router-link to="/user/userList"><i class="fa fa-circle-o"></i>用户列表</router-link></li>\n' +
        '                        <li><router-link to="/store/storeList"><i class="fa fa-circle-o"></i>库存列表</router-link></li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li class="treeview" id="drugMenu">\n' +
        '                    <a href="#" on-click="drugMenu">\n' +
        '                        <i class="fa fa-plus-circle"></i> <span>药品信息</span>\n' +
        '                        <span class="pull-right-container">\n' +
        '                  <i class="fa fa-angle-left pull-right"></i>\n' +
        '                </span>\n' +
        '                    </a>\n' +
        '                    <ul class="treeview-menu" id="drugTreeMenu">\n' +
        '                        <li><router-link to="/drug/drugList"><i class="fa fa-circle-o"></i>药品列表</router-link></li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li class="treeview" id="categoryMenu">\n' +
        '                    <a href="#" on-click="categoryMenu">\n' +
        '                        <i class="fa fa-tree"></i> <span>药品类别</span>\n' +
        '                        <span class="pull-right-container">\n' +
        '                  <i class="fa fa-angle-left pull-right"></i>\n' +
        '                </span>\n' +
        '                    </a>\n' +
        '                    <ul class="treeview-menu" id="categoryTreeMenu">\n' +
        '                        <li><router-link to="/category/categoryList"><i class="fa fa-circle-o"></i>类别列表</router-link></li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +

        '                <li class="treeview" id="provideMenu">\n' +
        '                    <a href="#" on-click="provideMenu">\n' +
        '                        <i class="fa fa-car"></i> <span>供应商</span>\n' +
        '                        <span class="pull-right-container">\n' +
        '                  <i class="fa fa-angle-left pull-right"></i>\n' +
        '                </span>\n' +
        '                    </a>\n' +
        '                    <ul class="treeview-menu" id="provideTreeMenu">\n' +
        '                        <li><router-link to="/provide/provideList"><i class="fa fa-circle-o"></i>供应商列表</router-link></li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '        </section>\n' +
        '    </aside>\n' +
        '    <section class="content-wrapper">\n' +
        '            <div id="main"></div>' +
        '    </section>\n' +
        '</div>',

        components: {
            "router-link": Link
        },

        userMenu: function () {
            $("#userTreeMenu").toggle();
            $("#userMenu").toggleClass("menu-open");
        },
        drugMenu: function(){
            $("#drugTreeMenu").toggle();
            $("#drugMenu").toggleClass("menu-open");
        },
        categoryMenu: function () {
            $("#categoryTreeMenu").toggle();
            $("#categoryMenu").toggleClass("menu-open");
        },
        provideMenu: function () {
            $("#provideTreeMenu").toggle();
            $("#provideMenu").toggleClass("menu-open");
        }

    });
    new App().attach(document.body);

    //添加路由
    var userList = require('./page/user/userList');
    var userEdit = require('./page/user/userEdit');
    var userAdd = require('./page/user/userAdd');
    var drugList = require('./page/drug/drugList');
    var drugEdit = require('./page/drug/drugEdit');
    var drugAdd = require('./page/drug/drugAdd');
    var categoryList = require('./page/category/categoryList');
    var provideList = require('./page/provide/provideList');
    var provideEdit = require('./page/provide/provideEdit');
    var provideAdd = require('./page/provide/provideAdd');
    var storeList = require('./page/store/storeList');
    var storeIn = require('./page/store/storeIn');
    var storeOut = require('./page/store/storeOut');


    router.add({rule: '/user/userList', Component: userList, target: '#main'});
    router.add({rule: '/user/userEdit', Component: userEdit, target: '#main'});
    router.add({rule: '/user/userAdd', Component: userAdd, target: '#main'});
    router.add({rule: '/drug/drugList', Component: drugList, target: '#main'});
    router.add({rule: '/drug/drugEdit', Component: drugEdit, target: '#main'});
    router.add({rule: '/drug/drugAdd', Component: drugAdd, target: '#main'});
    router.add({rule: '/category/categoryList', Component: categoryList, target: '#main'});
    router.add({rule: '/provide/provideList', Component: provideList, target: '#main'});
    router.add({rule: '/provide/provideEdit', Component: provideEdit, target: '#main'});
    router.add({rule: '/provide/provideAdd', Component: provideAdd, target: '#main'});
    router.add({rule: '/store/storeList', Component: storeList, target: '#main'});
    router.add({rule: '/store/storeIn', Component: storeIn, target: '#main'});
    router.add({rule: '/store/storeOut', Component: storeOut, target: '#main'});

    // 设置路由模式 'html5 | hash'
    router.setMode('hash');
    // 路由监听
    router.listen(function(e, config){
        // 在路由发生变化时触发
        // console.log(e);
        // console.log(config);
    });
    router.start();

    return {
        start: function () {

        }
    };
});