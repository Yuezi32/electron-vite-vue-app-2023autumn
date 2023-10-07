<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const account = ref('')
const password = ref('')

// router钩子，返回路由器实例
const router = useRouter()

// 登录
const onLogin = () => {
    router.push('/home')
}
</script>

<template>
    <div class="P-login">
        <img src="./logo.png" class="logo" />
        <div class="ipt-con">
            <el-input v-model="account" placeholder="账号" />
        </div>
        <div class="ipt-con">
            <el-input v-model="password" type="password" placeholder="密码" show-password />
        </div>
        <div class="ipt-con">
            <el-button type="primary" style="width: 100%" @click="onLogin">登录</el-button>
        </div>
    </div>
</template>

<style scoped lang="stylus">
.P-login
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    background: #7adbcb
    .logo
        display: block
        margin: 50px auto 20px
        height: 128px
    .ipt-con
        margin: 0 auto 20px
        width: 400px
        text-align: center
</style>
