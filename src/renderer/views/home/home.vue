<script setup>
import { useRouter } from 'vue-router'
import { gotoPath } from '@renderer/api'
import { ElMessageBox } from 'element-plus'
// router钩子，返回路由器实例
const router = useRouter()

const { ipcRenderer } = window.electron

// 登录
const goto = (path) => {
    router.push('path')
}

// 读取目录文件列表
const readDir = () => {
    // 给主进程发送消息
    ipcRenderer.send('readDir', { msg: 'test' })
    // 通过preload接收主进程的回调信息
    window.api.readDirReply((event, result) => {
        if (!result.canceled) {
            console.log(result)
        } else {
            console.log('取消选择操作。')
        }
    })
}

// 获取Electron版本号 - 给主进程发送消息并异步等待结果
const getElectronVersion = () => {
    ipcRenderer.invoke('getElectronVersion').then((result) => {
        ElMessageBox.alert(result, 'Electron版本号', {
            confirmButtonText: 'OK'
        })
    })
}
</script>

<template>
    <div class="P-home">
        <h1>Home Page</h1>
        <div class="ipt-con">
            <el-button type="primary" @click="readDir">读取目录列表</el-button>
        </div>
        <div className="ipt-con">
            <el-button type="primary" @click="getElectronVersion">查看Electron版本</el-button>
        </div>
        <div class="ipt-con">
            <el-button @click="gotoPath('/login')">组件外跳转</el-button>
        </div>
        <div class="ipt-con">
            <el-button @click="goto('/login')">返回登录</el-button>
        </div>
    </div>
</template>

<style scoped lang="stylus">
.P-home
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    background: linear-gradient(#f48c8d,#f4c58d)
    text-align: center
    h1
        margin-top: 50px
        color: #fff
        font-size: 28px
    .ipt-con
        margin: 20px auto 0
        text-align: center
</style>
