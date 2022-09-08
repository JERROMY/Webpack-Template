
const path = require( 'path' );
// const TerserPlugin = require( 'terser-webpack-plugin' );
// const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )

/*

module
asset/resource
asset/inline
asset/
asset/source

css-loader => MiniCssExtractPlugin.loader

*/

module.exports = {

    entry: {
        'hello-world': './src/hello-world.js',
        'bear': './src/bear.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve( __dirname, './dist' ),
        publicPath: '',
        // publicPath: 'dist/',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // },
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve( __dirname, './dist' ),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        }
    },
    module: {
        rules:[
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024,
                    }
                }
            },
            {
                test:/\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        // new TerserPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'style.css',
        // }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'hello world',
            template: 'src/page-template.hbs',
            description: 'H',
        }),
        new HtmlWebpackPlugin({
            filename: 'bear.html',
            chunks: ['bear'],
            title: 'Bear',
            template: 'src/page-template.hbs',
            description: 'B',
        }),
    ]


};