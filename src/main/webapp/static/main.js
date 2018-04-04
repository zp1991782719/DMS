require.config({
    baseUrl: '../../../static',
    paths: {

        /*这里配置js文件*/
        'text' : 'js/text',
        'jquery': 'js/jquery-3.3.1.min',
        'bootstrap': 'AdminLTE-2.4.2/bower_components/bootstrap/dist/js/bootstrap.min',
        'adminlte' : 'AdminLTE-2.4.2/dist/js/adminlte',
        'san': 'san/dist/san.dev.min',
        'san-router': 'san-router/dist/san-router',

        /*这里配置css文件*/
        'bootstrap-css': 'AdminLTE-2.4.2/bower_components/bootstrap/dist/css/bootstrap.min',
        'fontAwesome-css': 'AdminLTE-2.4.2/bower_components/font-awesome/css/font-awesome.min',
        'Ionicons-css': 'AdminLTE-2.4.2/bower_components/Ionicons/css/ionicons.min',
        'adminlte-css': 'AdminLTE-2.4.2/dist/css/AdminLTE.min',
        'adminlte-skin-css': 'AdminLTE-2.4.2/dist/css/skins/_all-skins.min'
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
        },
        'adminlte-css' : {
            deps: ['css!bootstrap-css'],
            exports: 'adminlte-css'
        },
        'adminlte-skin-css' : {
            deps: ['css!bootstrap-css','css!adminlte-css'],
            exports: 'adminlte-skin-css'
        }
    }
});

require(['appstart'],function(appstart){
    appstart.start();
});



