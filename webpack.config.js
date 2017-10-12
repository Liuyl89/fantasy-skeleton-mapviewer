const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    reactDllManifest = require('../../../fantasy-dll/fantasy-react-dll/dist/manifest.json')

module.exports = {
    entry: {
        vendor: ['./src/vendor.js'],
        app: ['./src/index.jsx'],

    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'amd',
        publicPath: '/fantasy-skeleton-mapviewer/',
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'react',
                    'stage-1',
                ],
                plugins: [
                    'lodash',
                ],
            },
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!sass-loader',
        }, {
            test: /\.(png|gif)$/,
            loader: 'url-loader?limit=100000',
        }, {
            test: /\.jpg$/,
            loader: 'file-loader',
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            chunks: ['vendor', 'app', 'manifest'],
            template: './src/index.html',
            hash: true,
            filename: 'index.html',
            title: 'Fantasy Skeleton Mapviewer',
            cdn: 'https://cdn.bootcss.com/',
            scripts: [{
                file: 'modernizr.min.js',
                path: 'assets/js/',
                locale: true,
            }, {
                file: 'fantasyReactDll.js',
                path: '/fantasy-react-dll/',
                locale: true,
            }, {
                file: 'fantasy-ui-react.js',
                path: 'http://localhost:8079/fantasy-ui-react/umd/',
                locale: true,
            }, {
                // arcgis js api应该最后引用，否则可能导致multiple define错误
                file: 'init.js',
                path: 'https://localhost/arcgis_js_api/library/4.4/',
                //path: 'http://localhost:8079/arcgis_js_api/library/4.5/',
                version: '4.5',
                locale: true,
            }, {
                file: 'fantasy-map.js',
                path: 'http://localhost:8079/fantasy-map/umd/',
                locale: true,
            }, {
                file: 'fantasy-layers.js',
                path: 'http://localhost:8079/fantasy-layers/umd/',
                locale: true,
            }],
            links: [{
                rel: 'stylesheet',
                file: 'main.css',
                locale: true,
                path: 'http://localhost:8079/arcgis_js_api/library/4.5/esri/css/',
            }],
            dojoDefines: ['fantasyReactDll', 'FantasyUIReact', 'FantasyMap', 'FantasyLayers'],
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            sourceType: 'var',
            manifest: reactDllManifest,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            sourceType: 'var',
            chunks: ['app', 'vendor'],
        })],
    externals: [{
        'fantasy-ui-react': 'FantasyUIReact',
        'fantasy-map': 'FantasyMap',
        'fantasy-layers': 'FantasyLayers',
    }, (context, request, callback) => {
        if (/^dojo/.test(request) ||
            /^dojox/.test(request) ||
            /^dijit/.test(request) ||
            /^esri/.test(request)
        ) {
            return callback(null, `amd ${request}`)
        }
        return callback()
    }],
}
