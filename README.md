# gpt-vue3

基于vite和vue3开发的gpt的前端页面,

## 启动项目

请先确保已经成功安装了node和pnpm包管理器,其中我这里的node版本为`v20`，并且配置了国内源，我配置的是阿里源，否则下面的指令有几率执行不成功。

> 切记node版本必须要大于v16，最好是v18以上，这是因为vite需要node版本大于v16才能正常运行

首先使用pnpm安装依赖

```sh
pnpm install
```
然后启动项目

```sh   
pnpm dev
```
如果你用的其他的包管理器应该也能运行成功，这里列举npm的命令：
```sh
# 安装依赖
npm install
# 启动项目
npm run dev
```


## 使用的主要技术栈

主要使用了: 
- vite
- vue 3
- pinia
- vue-Router 4
- element-plus

## 使用的一些开发工具和插件
- vscode
- esLint
- prettier
- TONGYI的ai辅助

## 一些注意事项
本项目主要采用了esLint作为代码检查器,用prettier来美化代码格式,同时使用MDN上推荐的js代码编写风格

## 目前存在的问题

截至到我写这个文档的时候，还是有很多bug，由于原本的页面使用原生三件套写的，html和css还好，但是js的问题就比较大了。

1. 原生的js在vue中使用不了，所以我就没怎么写js，这个将是接下来着重解决的问题。
2. 其次就是有些样式有bug，未来可能会考虑移除，或者使用别的css重写
3. 在vue中，`a`标签可以用`<router-link to=""></router-link> ` 因此但是有些页面没写好，所以还有相当一部分没有用`vue`中的写法
4. 同时之后的token数量，应该是要用pinia中存储的，我现在只是在页面上简单的写了一下。





## 后续展望

后续的开发方向或者是优化方向
使用`typescript`语言开发,提高开发效率和代码质量,使用更好的ui组件库,`Tailwind CSS `来提高页面的美观度和开发效率

## 闲谈

### 2024-10-24

目前没有