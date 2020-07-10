<template>
    <div class="dialog-container">
        <div class="login-img">

        </div>
        <div class="login-container">
            <div class="dialog-title">
                欢迎登录
            </div>
            <div class="input-container">
                <div class="hints">用户名</div>
                <input class="input "
                       maxlength="30"
                >
            </div>
            <div class="input-container">
                <div class="hints">密码</div>
                <input class="input "
                       maxlength="30"
                >
            </div>
            <div class="input-container">
                <div class="hints">验证码</div>
                <input class="vertical-code"
                       maxlength="30"
                >
                <div class="verity-code "></div>
            </div>
            <div class="tips-container">
                <div class="icon tips-icon"></div>
                <div class="tips-text">用户名或密码输入错误</div>
            </div>
            <div class="login-btn">登录</div>
            <div class="login-up">新用户注册</div>
        </div>
    </div>
    <!-- <section>
         <el-container>
             <el-form label-width="120px" >
            &lt;!&ndash; <el-form label-width="120px" :model="User" :rules="Rules" ref="User" >&ndash;&gt;
                 <el-row>
                     <el-col>
                         <el-form-item label="账号" prop="name">
 &lt;!&ndash;                            <el-input v-model.number="User.name"></el-input>&ndash;&gt;
                             <el-input ></el-input>
                         </el-form-item>
                     </el-col>
                 </el-row>
                 <el-row>
                     <el-col>
                         <el-form-item label="密码" prop="pass">
                             <el-input  type="password" auto-complete="new-password"></el-input>
 &lt;!&ndash;                            <el-input type="password" v-model="User.pass" auto-complete="new-password"></el-input>&ndash;&gt;
                         </el-form-item>
                     </el-col>
                 </el-row>
                 <el-row>
                     <el-col>
                         <el-form-item label="记住密码" prop="delivery">
                           &lt;!&ndash;  <el-switch v-model="User.delivery"></el-switch>&ndash;&gt;
                             <el-switch></el-switch>
                         </el-form-item>
                     </el-col>
                 </el-row>
                 <span class="pwwd">
             <a href="">忘记密码？</a>
             <a href="">还没账号,注册一个</a>
           </span>
             </el-form>

         </el-container>
         <div slot="footer" class="dialog-footer">
             <el-button >取 消</el-button>
             <el-button type="primary">登 录</el-button>
         </div>
     </section>-->
</template>

<script>
    export default {
        name: "LoginName"
    }
</script>

<style lang="less" scoped>
    .dialog-container {
        display: flex;
        box-sizing: border-box;

        .login-img {
            box-sizing: border-box;
            flex-shrink: 0;
            width: 450px;
            height: 500px;
            background-image: url(../assets/imgs/login_bk.png);
        }

        .login-container {
            box-sizing: border-box;
            padding: 60px 70px;
            flex-shrink: 0;
            width: 450px;
            height: 500px;
        }
    }

    .input-container {
        display: flex;
        width: 300px;
        height: 40px;
        border-radius: 5px;
        box-sizing: border-box;
        border: 1px solid #D8D8D8;
        margin-top: 15px;
        align-items: center;

        &:focus-within {
            border-color: #0482FE;
        }

        &:nth-child(2) {
            margin-top: 45px;
        }
    }
    .verity-code{
        flex-grow: 1;
        height:38px;
        background-position:right ;
        background-repeat: no-repeat;
        background-image: url(../assets/imgs/verity-img.png);
    }

    .tips-icon{
        padding-right:10px;
        display: inline-block;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-size: contain;
        width:16px;
        height:16px;
        background-image: url(../assets/imgs/input_caution_icon.png);
    }
    .tips-container{
        align-items: center;
        align-content: center;
        box-sizing: border-box;
        margin-top:20px;
    }
    .login-btn{
        width:300px;
        height:42px;
        line-height: 42px;
        background-color: #0195FF;
        margin-top: 55px;
        text-align: center;
        color:#D3E9FE;
        border-radius: 5px;
    }
    .login-up{
        margin-top:16px;
        color: #0195FF;
        font-size: 12px;
        text-align: end;
    }
</style>