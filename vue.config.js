const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, "./src/assets"),
                '@components': path.resolve(__dirname, "./src/components"),
                '@pages': path.resolve(__dirname, "./src/pages"),
            }
        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    oneOf: [
                        {
                            resourceQuery: /^\?vue/,
                            use: ['pug-plain-loader']
                        },
                        {
                            use: ['raw-loader', 'pug-plain-loader']
                        }
                    ]
                }
            ]
        },
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "sass",
            patterns: [path.resolve(__dirname, "./src/assets/sass/*.scss")]
        }
    },
    css: {
        loaderOptions: {
            css: {
                localsConvention: 'camelCaseOnly'
            }
        }
    },
    runtimeCompiler: true,
}
