<template>
<div class="headerNav">
  <!--logo-->
  <!--<logo></logo>-->
  <!--<hamburger></hamburger>-->

  <!-- 头部导航栏 -->
  <div class="heardNavBar">
    <el-menu default-active="1" class="el-menu-demo" background-color="#4b5f6e" text-color="#fff" active-text-color="#ffd04b" mode="horizontal">
      <el-menu-item index="1" @click="$router.push('/')">首页</el-menu-item>
      <el-menu-item index="2" @click="openUrl('#')">使用文档</el-menu-item>
      <el-menu-item index="3" @click="openUrl('https://github.com/levy-w-wang/lion-ui')">GitHub</el-menu-item>
    </el-menu>
  </div>
  <!-- 右侧信息 -->
  <div style="float:right">
    <!-- 全屏 -->
    <div style="float:left;line-height: 60px; padding: 0 10px;">
      <i class="el-icon-full-screen" @click="toggleFull"></i>
    </div>
    <!-- 个人信息 -->
    <div class="userinfo">
      <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        <img src="../../../../assets/user.jpg" />
                        <i class="el-icon-caret-bottom"></i>
                    </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/"><i class="el-icon-s-home"></i>首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/"><i class="el-icon-s-custom"></i>我的主页</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <a @click="loginOut()"><i class="el-icon-switch-button"></i>登出</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: "header",
  data(){
    return{

    }
  },
  methods:{
    openUrl(url) {
      window.open(url)
    },
    loginOut() {
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning',
      })
          .then(() => {
            this.$store.commit('logout')
          })
          .catch(() => {})
    },
    toggleFull() {
      if (!screenfull.isEnabled) {
        this.$message({
          type: 'warning',
          message: 'you browser can not work',
        })
        return false
      }
      screenfull.toggle()
    },
  }
}
</script>

<style scoped>
.headerNav {
  padding-left: 0px !important;
  height: 60px;
  line-height: 60px;
  width: 100%;
  background: #4b5f6e;
  color: #fff;
}

.heardNavBar {
  float: left;
  background: #4b5f6e;
  padding: 0px 0px;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  cursor: pointer;
}
.userinfo {
  text-align: right;
  padding-right: 24px;
  float: right;
  padding: 0 10px;

}
.userinfo-inner {
  font-size: 20px;
  cursor: pointer;
  color: #fff;


}
img {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 10px 0px 10px 10px;
  float: right;
}
</style>