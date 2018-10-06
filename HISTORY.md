## 操作步骤
##-------------------------------------------------------------
### STEP ---
$ cnpm init -y
### STEP VUE
$ cnpm i -S vue vue-router
### STEP WEBPACK
$ cnpm i -D webpack webpack-dev-server

### STEP WEBPACK-loader--基本的加载器
- html,css,file+url(可选)
$ cnpm i -D file-loader url-loader css-loader html-loader

### STEP WEBPACK-loader->vueloader
- 默认包含vue模板
- vue-style-loader(可选)

$ cnpm i -D vue-loader vue-template-compiler vue-style-loader
### STEP WEBPACK-PRE-CSS-loader(这里选择less)
$ cnpm i -D less less-loader
### STEP WEBPACK-TYPESCRPT(注：ts-loader或者awesome-typescript-loader))
$ cnpm i -D typescript ts-loader

### STEP [WEBPACK-BABEL] 这里不用
- 这里是手机APP，直接编译为ES6,暂时也不需要第三方库。
$ cnpm i -D babel-core babel-loader
$ cnpm i -D babel-preset-stage-2 babel-preset-env
$ cnpm i -D babel-plugin-syntax-dynamic-import babel-plugin-transform-runtime 

### STEP [WEBPACK-PLUGINS] 暂时不使用插件

##-------------------------------------------------------------
### STEP 建立目录结构
### STEP 建立TS配置文件和EDITOER配置文件。
