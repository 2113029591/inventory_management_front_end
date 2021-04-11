<template>
  <div class="aside-container" :class="isCollapse ? 'aside-collapse-width' : 'aside-width'">
    <!--导航菜单  default-active="1-1"-->
    <el-menu class="el-menu-vertical-demo" :class="isCollapse ? 'aside-collapse-width' : 'aside-width'" :collapse-transition="false" :unique-opened="true" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">菜单管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" disabled>
        <i class="el-icon-magic-stick"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-reading"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name: "aside",
  data() {
    return {}
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.app.isCollapse,
    }),
    mainTabs: {
      get() {
        return this.$store.state.app.mainTabs
      },
      set(val) {
        this.$store.commit('updateMainTabs', val)
      },
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.app.mainTabsActiveName
      },
      set(val) {
        this.$store.commit('updateMainTabsActiveName', val)
      },
    },
  },
}
</script>

<style scoped>

</style>