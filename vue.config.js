const path = require('path');
module.exports = {
    // devServer:{
    //     proxy:{
    //         "":{
    //             target:"",
    //             changOrigin:true
    //         }
    //     }
    // },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.resolve(__dirname,"./src/"),
                "api":path.resolve(__dirname,"./src/api/"),
                "common":path.resolve(__dirname,"./src/common/"),
                "router":path.resolve(__dirname,"./src/router/"),
                "utils":path.resolve(__dirname,"./src/utils/"),
                "store":path.resolve(__dirname,"./src/store/"),
                "views":path.resolve(__dirname,"./src/views/")
            }
        }
    }
}