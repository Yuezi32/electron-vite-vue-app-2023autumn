const { dialog } = require('electron')
const fs = require('fs')
const path = require('path')

// 递归遍历文件
const loadFilesInDir = (dir) => {
    let fileList = []
    // 读取目录下全部文件及子目录
    let files = fs.readdirSync(dir)
    for (var i = 0; i < files.length; i++) {
        let filePath = path.join(dir, files[i])
        // 获取信息
        let fileData = fs.statSync(filePath)
        // 判断是文件还是目录
        if (fileData.isFile()) {
            // 如果是文件，则记录下来
            fileList.push(filePath)
        } else {
            // 如果是目录，则递归遍历，并拼接结果
            fileList = fileList.concat(loadFilesInDir(filePath))
        }
    }
    return fileList
}

// 打开选择目录对话框并遍历目录里的所有文件
const readDir = (event, arg) => {
    console.log('接收渲染进程传参：', arg)
    dialog
        .showOpenDialog({
            // 只允许选择文件夹
            properties: ['openDirectory']
        })
        .then((result) => {
            if (!result.canceled) {
                result.fileList = loadFilesInDir(result.filePaths[0])
            }
            // 将处理结果返回给渲染进程
            event.reply('readDir-reply', result)
        })
}

export { readDir }