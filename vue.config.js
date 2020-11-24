module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'https://www.wumeili.top/',
                secure: false,
                changeOrigin:true,
                pathRewrite:{
                  '^/api':'https://www.wumeili.top/'
                }
            },
        }
    }
}