var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-xeditable']
    },
    output: {
        path: __dirname + '/public/scripts',
        filename: 'plan.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
		//don't forget the common after the exising plugin
		new webpack.OldWatchingPlugin()
    ]
};