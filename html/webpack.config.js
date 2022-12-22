const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [ 
        new webpack.ProvidePlugin({ 
            "jQuery": "jquery", 
            "window.jQuery": "jquery", 
            "jquery": "jquery", 
            "window.jquery": "jquery", 
            "$": "jquery", 
            "window.$": "jquery" 
        }),
    ],
    
    entry: {
        main: "./src/js/index.js",
        main_page: "./src/js/main_page.js",
        custom: "./src/js/custom.js",
        preloader: './src/blocks/modules/preloader/module.preloader.js',
        'header': './src/blocks/modules/header/module.header.js',
        'first-screen': './src/blocks/modules/first-screen/module.first-screen.js',
        'industry-specialization': './src/blocks/modules/industry-specialization/module.industry-specialization.js',
        'main-web': './src/blocks/modules/main-web/module.main-web.js',
        'main-about': './src/blocks/modules/main-about/module.main-about.js',
        'main-question': './src/blocks/modules/main-question/module.main-question.js',
        footer: './src/blocks/modules/footer/module.footer.js',
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            vue: 'vue/dist/vue.js'
        }
    }
};
