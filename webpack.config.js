const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const outputPath = path.resolve(__dirname, 'public/');

const appTitle = 'Weather | Amply Media';
const themeColor = '#68a08b';
const appDescription = 'Get Daily Weather Reports';
const manifest = {
    name: appTitle,
    short_name: 'AmplyMedia',
    description: appDescription,
    background_color: '#ffffff',
    theme_color: themeColor,
    fingerprints: false,
    icons: [
        {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512]
        }
    ]
};

function getPlugins(isProduction) {
    const plugins = [
        new HtmlWebPackPlugin({
            chunks: ['index'],
            template: './src/index.ejs',
            filename: `/index.html`,
            title: appTitle,
            description: appDescription,
            themeColor: themeColor,
            favicon: './src/assets/favicon.png',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                preserveLineBreaks: false
            }
        }),
        new SWPrecacheWebpackPlugin({
            cacheId: 'holiday-update-2018',
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            minify: true,
            navigateFallback: outputPath + 'index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
        }),
        new WebpackPwaManifest(manifest),
        new MiniCssExtractPlugin({
            filename: './styles/[hash].css',
            chunkFilename: './styles/[name]-[hash].css'
        })
    ];

    if (isProduction) {
        plugins.unshift(
            new BundleAnalyzer(),
            new CleanWebpackPlugin(['public'], {
                verbose: false
            })
        );
    }

    return plugins;
}

module.exports = env => {
    const isProduction = env == 'production';

    return {
        entry: {
            index: [
                '@babel/polyfill',
                './src/app.tsx',
                './src/styles/index.scss'
            ]
        },
        output: {
            path: outputPath,
            publicPath: '/',
            filename: './scripts/[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: ['ts-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.s?css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    require('autoprefixer')({
                                        browsers: ['> 1%', 'last 2 versions']
                                    })
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: getPlugins(isProduction),
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        map: {
                            inline: false,
                            annotation: true
                        }
                    }
                })
            ]
        },
        resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        mode: isProduction ? 'production' : 'development',
        stats: {
            colors: true,
            cachedAssets: false,
            chunks: false,
            modules: false,
            children: false,
            warnings: false
        },
        devServer: {
            host: '192.168.1.165',
            contentBase: outputPath
        }
    };
};
