import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
// 自定义的主进程方法API
const api = {
    // 读取目录文件列表回调
    readDirReply: (callback) => {
        ipcRenderer.once('readDir-reply', (event, result) => {
            callback(event, result)
        })
    }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
// 使用contextBridge将Electron API和自定义的主进程方法API暴露给渲染进程页面。
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI)
        contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
        console.error(error)
    }
} else {
    window.electron = electronAPI
    window.api = api
}