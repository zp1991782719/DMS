require.config({
    baseUrl: '/static',
    paths: {

        /*这里配置js文件*/
        'text' : 'js/text',
        'jquery': 'js/jquery-3.3.1.min',
        'bootstrap': 'AdminLTE-2.4.2/bower_components/bootstrap/dist/js/bootstrap.min',
        'adminlte': 'AdminLTE-2.4.2/dist/js/adminlte.min',
        'san': 'san/dist/san.dev.min',
        'san-router': 'san-router/dist/san-router',
        'san-store': 'san-store/dist/san-store.source',
        'san-update': 'san-update/src/index',
        'datatables.net': 'DataTables-1.10.15/media/js/jquery.dataTables.min',
        'dataTables-bootstrap': 'DataTables-1.10.15/media/js/dataTables.bootstrap',
        'sweetalert': 'bootstrap-sweetalert/bootstrap-sweetalert-master/dist/sweetalert.min',

        /*这里配置css文件*/
        'bootstrap-css': 'AdminLTE-2.4.2/bower_components/bootstrap/dist/css/bootstrap.min',
        'fontAwesome-css': 'AdminLTE-2.4.2/bower_components/font-awesome/css/font-awesome.min',
        'Ionicons-css': 'AdminLTE-2.4.2/bower_components/Ionicons/css/ionicons.min',
        'adminlte-css': 'AdminLTE-2.4.2/dist/css/AdminLTE.min',
        'adminlte-skin-css': 'AdminLTE-2.4.2/dist/css/skins/_all-skins.min',
        'jquery-dataTables-css': 'DataTables-1.10.15/media/css/jquery.dataTables.min',
        'dataTables-bootstrap-css': 'DataTables-1.10.15/media/css/dataTables.bootstrap',
        'sweetalert-css': 'bootstrap-sweetalert/bootstrap-sweetalert-master/dist/sweetalert',
    },
    map: {
        '*': {
            'css': 'require-css/css.min'
        }
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'adminlte': {
            deps: ['jquery','bootstrap'],
            exports: 'adminlte'
        },
        'datatables.net': {
            deps: ['jquery'],
            exports: 'jquery-dataTables'
        },
        'dataTables-bootstrap': {
            deps: ['jquery','datatables.net'],
            exports: 'dataTables-bootstrap'
        },


        'adminlte-css': {
            deps: ['css!bootstrap-css'],
            exports: 'adminlte-css'
        },
        'adminlte-skin-css': {
            deps: ['css!bootstrap-css','css!adminlte-css'],
            exports: 'adminlte-skin-css'
        },
        'dataTables-bootstrap-css': {
            deps: ['css!bootstrap-css'],
            exports: 'dataTables-bootstrap-css'
        }
    }
});

require(['appstart'],function(appstart){
    appstart.start();
});



