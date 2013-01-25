// enable Ext autoloader
Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath({
    'Ext.ux': 'ux',
    'Ext': 'lib/sencha-touch-2.1.0',
    'OpenLayersMapDemo': 'app'
});

Ext.application({
    name: 'OpenLayersMapDemo',

    statusBarStyle: 'black',
    viewport: {
        // hide navigation bar of browser
        autoMaximize: true
    },

    views: [
        'Main'
    ],

    controllers: [
        'Map'
    ],

    // launch function is called as soon as app is ready
    launch: function() {
        Ext.Viewport.add(Ext.create('OpenLayersMapDemo.view.Main'));
    }
});