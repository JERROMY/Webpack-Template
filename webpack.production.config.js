
const path = require( 'path' );
// const TerserPlugin = require( 'terser-webpack-plugin' ); production is default
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
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
        filename: '[name].[contenthash].js',
        path: path.resolve( __dirname, './dist' ),
        publicPath: '',
        // publicPath: 'dist/',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // },
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000,
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
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        // new TerserPlugin(), production is default
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'hello world',
            template: 'src/page-template.hbs',
            description: 'H',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            filename: 'bear.html',
            chunks: ['bear'],
            title: 'Bear',
            template: 'src/page-template.hbs',
            description: 'B',
            minify: false,
        }),
    ]


};