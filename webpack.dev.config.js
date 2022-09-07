
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

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, './dist' ),
        publicPath: '',
        // publicPath: 'dist/',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // },
    },
    mode: 'development',
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
            title: 'hello world 2',
            template: 'src/index.hbs',
            description: 'test desc'
        }),
    ]


};