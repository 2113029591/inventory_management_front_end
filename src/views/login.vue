<template>
  <el-form
      :model="userData"
      :rules="rules2"
      ref="userData"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
  >
    <h2 class="title">用户登录</h2>
    <el-form-item prop="account">
      <el-input
          type="text"
          v-model="userData.account"
          prefix-icon="fa fa-user"
          auto-complete="on"
          placeholder="账号"
          @keyup.enter.native="handleLogin"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
          :type="pwdType"
          v-model="userData.password"
          prefix-icon="fa fa-lock"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
      ></el-input>
      <span class="show-pwd" @click="showPwd">
        <i class="fa fa-eye" aria-hidden="true"></i>
      </span>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
          :loading="loginLoading"
      >登录</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import {login} from "@/api/login"
export default {
name: "login",
  data:function (){
    return{
      userData: {
        account: "",
        password: "",
        type: 2
      },
      loginLoading: false,
      rules2: {
        //字段校验
        username: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validatePass }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validatePass2 }
        ]
      },
      checked: true,
      pwdType: "password"
      }
    },
  methods:{
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },

    handleLogin(userData){
      // this.$router.push("/home")
      this.$refs.userData.validate(valid=>{
        if(valid){
          this.loginLoading=false
          login(userData).then(resp=>{
            if(resp.data.code==0){
              this.$router.push("/home")
              this.$message({
                message: "登录成功！",
                type: "success"
              })
            } else {
              this.$message({
                message: resp.data.msg,
                type: "error"
              });
            }
          }).catch(()=>{
            this.loginLoading=false
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 0px;
  font-size: 16px;
  cursor: pointer;
  color: #909399;
}
</style>