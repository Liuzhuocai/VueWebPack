<template>
    <div class="header-container">
        <div>
            <i class="icon icon-header"></i>
            <span class="toolbar-text" style="margin-left: 8px">{{msg}}</span>
        </div>
        <div @click="dialogVisible=true" >
            <span class="toolbar-text" style="margin-right: 10px" >登录</span>
            <i class="icon icon-avator"></i>
        </div>
        <el-dialog  :visible.sync="dialogVisible" center :append-to-body='true' :lock-scroll="false" width="900px" >
            <login-name></login-name>
        </el-dialog>
    </div>
</template>

<script>
    import LoginName from '../components/login';

    export default {
        name: "toolbar",
        components: {LoginName},
        props: {
            msg: String
        }
        , data() {
            return {
                dialogVisible: false
            }
        }
        , methods: {
            showLoginDialog() {
                this.dialogVisible = true;
            }
        }
    }

</script>

<style lang="less" scoped>

</style>