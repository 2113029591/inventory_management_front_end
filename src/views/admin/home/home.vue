<template>
  <div>
    <el-container class="home-container">
      <el-header class="header">
        <div class="headerNavBar">
          <el-menu
              default-active="1"
              background-color="#4b5f6e"
              text-color="#fff"
              active-text-color="#ffd04b"
              mode="horizontal"
          >
            <el-menu-item index="1" @click="$router.push('/home')">首页</el-menu-item>
          </el-menu>
        </div>
        <div style="float: right">
          <!--全屏按钮-->
          <div style="float:left;line-height: 60px; padding: 0 10px;">
            <i class="el-icon-full-screen"
               @click="toggleFull"></i>
          </div>
          <div class="userinfo">
          <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        <img src="../../../assets/user.jpg" />
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
      </el-header>
      <el-container>
        <el-aside class="aside" width="230px">
          <!--导航菜单  default-active="1-1"-->
          <el-menu class="el-menu-vertical-demo"
                   background-color="#4b5f6e"
                   text-color="white"
                   :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统管理</span>
              </template>
              <el-menu-item index="1-1"
                            >用户管理</el-menu-item>
              <el-menu-item index="1-2"
                            >菜单管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-magic-stick"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-reading"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
          main
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: "home",
  data(){
    return{
      isCollapse:false,
    }
  },
  methods:{
    loginOut () {
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning',
      })
          .then(() => {
            this.$store.commit('logout')
          })
          .catch(() => { })
    },
    toggleFull () {
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
.home-container{
  height: 100vh;
}
.header{
  padding-left: 0px !important;
  height: 60px;
  line-height: 60px;
  width: 100%;
  background: #4b5f6e;
  color: #fff;
}
.userinfo{
  text-align: right;
  padding-right: 24px;
  float: right;
  padding: 0 10px;
}
.headerNavBar {
  float: left;
  background: #4b5f6e;
  padding: 0px 0px;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  cursor: pointer;
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
.aside{
  height: 100vh;
  width: 230px;
  background: #4b5f6e;
}
.el-menu-vertical-demo{
  /*width: 230px;*/
  border-right:0;
}

</style>