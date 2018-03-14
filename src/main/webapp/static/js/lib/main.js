require.config({
    baseUrl: '../../../static',
    paths: {
        /*这里配置js文件*/
        'jquery': 'js/jquery-3.3.1.min',
        'bootstrap': 'AdminLTE-2.4.2/bower_components/bootstrap/dist/js/bootstrap.min',
        'san': 'san/dist/san.dev.min',


        /*这里配置css文件*/
        'bootstrap-css': 'AdminLTE-2.4.2/bower_components/bootstrap/dist/css/bootstrap.min',
        'fontAwesome-css': 'AdminLTE-2.4.2/bower_components/font-awesome/css/font-awesome.min'
    },
    map: {
        '*': {
            'css': 'require-css/css.min'
        }
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports : 'bootstrap'
        },
        'adminlte' : {
            deps: ['jquery','bootstrap'],
            exports: 'adminlte'
        }
    }
});

define(function (require) {
    //加载bootstrap的样式
    require("css!bootstrap-css");
    //加载字体图标
    require("css!fontAwesome-css");
});






