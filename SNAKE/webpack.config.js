const path = require('path')

//引入webpack插件 html-webpack-plugin作用是自动生成html文件然后对需要导入的包自动做引入
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

//webpack 中的配置信息都需要写在module.exports
module.exports = {
    //入口文件
    entry:"./src/index.ts",
    //指定打包文件所在的目录
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
        //告诉webpack不使用箭头函数
        environment:{
            arrowFunction:false,
            const:false
        }
    },
    //指定webpack打包时要使用的模块
    module:{
        //指定要加载的规则
        rules:[
            {
                //test指定规则生效的文件
                test:/\.ts$/,
                //要使用的loader 数组中后面的先执行 先ts-loader把ts转js 在用babel-loader把js转低版本
                use:[
                    {
                        //指定加载器
                        loader:"babel-loader",
                        //设置babel
                        options:{
                            //设置预定义的环境（代码在哪些浏览器中运行）
                            presets:[
                                [
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //浏览器需要兼容的环境版本
                                       targets:{
                                           "chrome":"88",
                                           "ie":"11"
                                       },
                                        //下载的corejs版本
                                        "corejs":"3",
                                        //加载方式 usage按需加载
                                        "useBuiltIns":"usage",
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],
                //要排除的文件
                exclude:/node-modules/
            },
            //设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            //兼容两个最新版本浏览器
                                            browsers:"last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            //配置所有生成的html文件的title
            title:"这是一个自定义的title",
            //配置所有生成的html的模板
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin(),
        
    ],
    // 用来设置哪些文件可以用来引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}