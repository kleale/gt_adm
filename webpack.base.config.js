let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
const { config } = require('process');

let PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src + '/index.js',
    },
    output: {
        filename: `js/[name].js`,
        path: PATHS.dist,
        publicPath: '/', // относительная ссылка в браузере на папку выходную
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader?url=false'
                        //options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            //sourceMap: true, 
                            config: {
                                path: `${PATHS.src}/postcss.config.js`
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                        //options: { sourceMap: true }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: `${PATHS.src}/postcss.config.js`
                            }
                        }
                    }
                ]
            }, {
                test: /\.html$/,
                loader: "twig-loader",
                options: {
                    // See options section below = twigOptions 
                },
            }
        ]
    },
    node: {
        fs: "empty" // avoids error messages twig-loader
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `css/[name].css`,
        }),
        new CopyWebpackPlugin([{
                from: `${PATHS.src}/img`,
                to: `${PATHS.dist}/img`
            },
            {
                from: `${PATHS.src}/fonts`,
                to: `${PATHS.dist}/fonts`
            },
            {
                from: `${PATHS.src}/static`,
                to: `${PATHS.dist}/static`
            }
        ]),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html',
            minify: {
                //collapseWhitespace: true,
                removeComments: true
                //removeRedundantAttributes: true,
                //removeScriptTypeAttributes: true,
                //removeStyleLinkTypeAttributes: true,
                //useShortDoctype: true
            }
        }),
        
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: `${PATHS.src}/404.html`,
        //     filename: './404.html'
        // }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_match_lists.html`,
            filename: './gt_match_lists.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_edit_prize.html`,
            filename: './gt_tournaments_edit_prize.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_edit_teams.html`,
            filename: './gt_tournaments_edit_teams.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_edit.html`,
            filename: './gt_tournaments_edit.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_round_tabs.html`,
            filename: './gt_tournaments_round_tabs.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_rounds.html`,
            filename: './gt_tournaments_rounds.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_stages.html`,
            filename: './gt_tournaments_stages.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_venues.html`,
            filename: './gt_venues.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_teams_lists.html`,
            filename: './gt_teams_lists.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_player_lists.html`,
            filename: './gt_player_lists.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_stages_edit.html`,
            filename: './gt_tournaments_stages_edit.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_stages_edit_prize.html`,
            filename: './gt_tournaments_stages_edit_prize.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_stages_edit_mesh.html`,
            filename: './gt_tournaments_stages_edit_mesh.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_rounds_edit.html`,
            filename: './gt_tournaments_rounds_edit.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_tournaments_round_tabs_edit.html`,
            filename: './gt_tournaments_round_tabs_edit.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/gt_match_lists_edit.html`,
            filename: './gt_match_lists_edit.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/live_games.html`,
            filename: './live_games.html'
        })

        
        
        

    ],
}

// module.exports = (env, options) => {
//     //console.log(options);
//     let production = options.mode === 'production';

//     conf.devtool = production 
//                     ? 'source-map'
//                     : 'eval-source-map';

//     return conf;
// }