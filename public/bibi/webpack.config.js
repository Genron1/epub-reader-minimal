/*!
 *                                                                                                                         (℠)
 *  # Webpack Config for Bibi
 *
 */

'use strict';

const Webpack = require('webpack');
const Path = require('path'), resolvePath = (..._) => Path.resolve(__dirname, _.join('/'));

const Package = require('./package.json');
const Bibi = require('./bibi.info.js');

const FixStyleOnlyEntriesPlugin = require('webpack-remove-empty-scripts');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const replace = options => ({ loader: resolvePath('replace-loader.cjs'), options });
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const BrowsersList = ['last 1 version', 'ie 11'];

const IsDev = (Bibi.Arguments['mode'] === 'development');

const Config = {
    mode: IsDev ? 'development' : 'production',
    target: ['web', 'es5'],
    stats: 'errors-warnings',//IsDev ? 'errors-warnings' : 'normal',
    performance: { maxEntrypointSize: 1000000, maxAssetSize: 1000000, hints: false  },
    optimization: { minimizer: [] },
    output: { path: resolvePath(Bibi.ForPack ? Bibi.ARCHIVETMP : Bibi.DIST), filename: '[name].js' },
    entry: (PathLists => { const Entries = {};
        for(const SrcDir in PathLists) PathLists[SrcDir].forEach(P => Entries[P.replace(/\.js$/, '')] = resolvePath(SrcDir, P.replace(/\.css$/, '.scss')));
        return Entries;
    })({
        [Bibi.SRC]: [
            'bibi/and/jo.js',
            'bibi/extensions/analytics.js',
            'bibi/extensions/epubcfi.js',
            'bibi/extensions/extractor/at-once.js',
            'bibi/extensions/extractor/on-the-fly.js',
            'bibi/extensions/sanitizer.js',
            'bibi/extensions/unaccessibilizer.js',
            'bibi/extensions/zine.js',
            'bibi/resources/scripts/bibi.js',
            'bibi/resources/scripts/polyfills/bundle.js',
            'bibi/resources/scripts/polyfills/encoding.js',
            'bibi/resources/scripts/polyfills/intersection-observer.js',
            'bibi/resources/styles/bibi.css',
            'bibi/resources/scripts/bibi.js',
            'bibi-demo/embedding/index.css'
        ].concat(Bibi.Dresses['custom-made'].map(D => 'bibi/wardrobe/' + D + '/bibi.dress.css')),
        [Bibi.SRCBC]: !Bibi.WithBCK ? [] : [
            'bib/i.js'
        ]
    }),
    plugins: (PathLists => { const Patterns = [];
        for(const SrcDir in PathLists) if(PathLists[SrcDir].length) PathLists[SrcDir].forEach(P => Patterns.push({ context: resolvePath(SrcDir), from: P, to: '.' }));
        return [new CopyPlugin({ patterns: Patterns })];
    })({
        [Bibi.SRC]: [
            'bibi/*.html',
            'bibi/extensions/extractor/on-the-fly.bibi-zip-loader.worker.*',
            'bibi/presets/**',
            'bibi-bookshelf/__samples/**/*.epub',
            'bibi-demo/**/*.html'
        ],
        [Bibi.SRCBC]: !Bibi.WithBCK ? [] : [
            'bib/i/*.html',
            'README.BackCompatKit.md'
        ],
        '.': [
            'LICENSE',
            'README.md'
        ]
    }).concat([
        new FixStyleOnlyEntriesPlugin({ extensions: ['scss', 'css'] }),
        new MiniCSSExtractPlugin({ filename: '[name]' }),
        ...(IsDev ? [new BrowserSyncPlugin(require('./bs-config.js'), { reload: true, injectCss: true })] : [])
    ]),
    module: { rules: [{
        test: /\.m?js$/,
        use: [
            { loader: 'babel-loader', options: {
                babelrc: false,
                presets: [
                    ['@babel/preset-env', {
                        targets: BrowsersList,
                        useBuiltIns: false//, corejs: 3
                    }]
                ]
            }}
        ]
    }, {
        include: [
            resolvePath(Bibi.SRC, 'bibi/and/jo.js'),
            resolvePath(Bibi.SRC, 'bibi/resources/scripts/bibi.heart.js')
        ],
        use: [
            replace({ version: Bibi.version })
        ]
    }]}
};

{
    if(Bibi.Arguments['watch']) Config.watch = true;
    if(IsDev) Config.devtool = 'inline-source-map';
    const getCommonLoadersForCSS = (Opt = {}) => [
        { loader: 'css-loader', options: {
            url: Opt.url ? true : false,
            import: Opt.import ? true : false,
            sourceMap: IsDev,
            importLoaders: 2
        }},
        { loader: 'postcss-loader', options: {
            postcssOptions: {
                config: false,
                plugins: [require('postcss-preset-env')({ browsers: BrowsersList }), require('cssnano')({ preset: ['default', { zindex: false }] })]
            },
            sourceMap: IsDev
        }},
        { loader: 'sass-loader', options: {
            webpackImporter: false,
            sassOptions: { loadPaths: [resolvePath('node_modules')] },
            sourceMap: IsDev
        }}
    ];
    Config.module.rules.push({
        test: /\.scss$/,
        exclude: [
            resolvePath(Bibi.SRC, 'bibi/and/jo.scss'),
            resolvePath(Bibi.SRC, 'bibi/resources/scripts/bibi.book.scss')
        ],
        use: [
            MiniCSSExtractPlugin.loader,
            replace({ stripCharset: !IsDev })
        ].concat(getCommonLoadersForCSS({ url: true, import: true }))
    });
    Config.module.rules.push({
        include: [
            resolvePath(Bibi.SRC, 'bibi/and/jo.scss'),
            resolvePath(Bibi.SRC, 'bibi/resources/scripts/bibi.book.scss')
        ],
        use: [
            { loader: 'style-loader' }
        ].concat(getCommonLoadersForCSS({ url: true, import: true }))
    });
    Config.module.rules.push({
        test: /\.(eot|svg|ttf|otf|wof|woff|woff2)$/,
        include: [
            resolvePath('node_modules/material-icons/iconfont/MaterialIcons-Regular')
        ],
        use: [
            { loader: 'file-loader', options: {
                outputPath: 'bibi/resources/styles/fonts',
                publicPath:                     './fonts',
                name: '[name].[ext]'
            }}
        ]
    });
    Config.module.rules.push({
        test: /\.(gif|png|jpg|svg)$/,
        use: [
            { loader: 'url-loader' }
        ]
    });
}

if(IsDev) {
    Config.module.rules.push({
        include: [
            resolvePath(Bibi.SRC, 'bibi/resources/scripts/bibi.heart.js')
        ],
        use: [
            replace({ development: true })
        ]
    });
} else {
    for(const B in Bibi.Banners) if(B && Bibi.Banners[B]) Config.plugins.push(new Webpack.BannerPlugin({ test: B, banner: Bibi.Banners[B], raw: true }));
    Config.optimization.minimizer.push(new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
            ecma: 5,
            compress: true,
            output: {
                comments: /^\!\n \*( +\(.+\))?\n \* +# +(?!sML)/,
                beautify: false
            }
        }
    }));
}

module.exports = Config;
