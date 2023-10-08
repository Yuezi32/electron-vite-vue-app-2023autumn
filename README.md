# 2023金秋版：基于electron-vite构建Vue桌面客户端

基于electron-vite的Electron+Vue工程脚手架。

本项目架构实现了以下功能：

- 基于Vite 4.x搭建
- 集成Sass/Scss/Less/Stylus
- 集成Element Plus
- 集成Vue Router
- 基于send与on/once实现主进程与渲染进程通信
- 基于invoke与handle实现主进程与渲染进程通信
- 讲解应用图标、APP窗口大小、取消跨域限制、禁止DevTools等常用配置
- 讲解如何解决下载和编译时遇到的各种问题
- 讲解如何进行V8字节源代码保护、敏感字符串保护
- 讲解如何进行主进程热更新、禁止应用多开等问题
- 实现了完整的Electron项目Demo。


## 安装项目
执行：
```
npm install
```
或
```
yarn
```

## 使用方法：开发环境

执行：
```
npm run dev
```
或
```
yarn dev
```

## 使用方法：build项目

构建windows版本：
```
yarn build:win
```

构建macOS版本：
```
yarn build:mac
```

构建linux版本：
```
yarn build:linux
```

## 配套教程

📚📚本项目有详细的讲解教程，原文请关注我的微信公众号【卧梅又闻花】📚📚

查阅本项目完整教程：[《2023金秋版：基于electron-vite构建Vue桌面客户端》](https://mp.weixin.qq.com/s/7EMjVSZAEyz6dmrO5Vs8YA)

### 教程目录

先看下目录了解本教程都有哪些内容。

```
1 Electron核心概念
• 1.1 主进程（main）
• 1.2 渲染进程（renderer）
• 1.3 预加载脚本（preload）
2 初始化项目
• 2.1 使用electron-vite新建项目
• 2.2 精简项目
• 2.3 去掉renderer的src目录
3 Vite基础配置
• 3.1 配置国内镜像源
• 3.2 支持Sass/Scss/Less/Stylus
• 3.3 设置路径别名
4 项目架构搭建
• 4.1 项目目录结构设计
• 4.2 关于样式命名规范
• 4.3 设置全局公用样式
5 引入Element Plus
• 5.1 安装Element Plus
• 5.2 设置Element Plus为中文语言
6 渲染进程页面开发
• 6.1 构建Login页面
• 6.2 构建Home页面
• 6.3 实现页面路由跳转
• 6.4 在Vue组件中实现页面路由跳转
• 6.5 在非Vue组件中实现页面路由跳转
7 主进程与渲染进程通信方法一：send与on/once
• 7.1 预加载脚本（preload）开发
• 7.2 主进程开发
• 7.3 继续渲染进程开发
• 7.4 运行效果
• 7.5 关于ipcRenderer.on/once
8 主进程与渲染进程通信方法二：invoke与handle
• 8.1 主进程开发
• 8.2 在渲染进程显示Electron版本号
9 常用配置
• 9.1 设置应用图标
• 9.2 设置APP窗口大小
• 9.3 取消跨域限制
• 9.4 设置DevTools快捷键
• 9.5 禁止build环境的DevTools
10 build项目
• 10.1 执行build命令
• 10.2 解决windows版本编译时无法下载的问题
• 10.3 设置build版应用icon
• 10.4 其他应用信息配置
• 10.5 解决macOS build版本的Coding Siging错误
• 10.6 build后的目录结构
11 其他说明
• 11.1 源代码保护
• 11.2 敏感字符串保护
• 11.3 主进程热更新
• 11.4 禁止同个Electron程序多开
• 11.5 允许windows用户更改安装目录
• 11.6 批量升级全部项目npm依赖包
12 项目Git源码
结束语
```
