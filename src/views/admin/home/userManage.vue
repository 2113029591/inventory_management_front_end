<template>
  <div>
    <el-tabs v-model="activeTabName"
             @tab-click="tabClick">
      <el-tab-pane label="用户管理"
                   name="user">
      </el-tab-pane>
      <el-tab-pane label="角色管理"
                   name="role">
      </el-tab-pane>
    </el-tabs>
    <component class="component-style"
               :is="componentOn"></component>
  </div>
</template>

<script>
import userComponent from "@/views/admin/home/userManage/userComponent";
import roleComponent from "@/views/admin/home/userManage/roleComponent";
export default {
name: "userManage",
  data () {
    return {
      activeTabName: 'user'
    }
  },
  //引入组件
  components: {
    userComponent,
    roleComponent
  },
  // 方法
  methods: {
    tabClick (tab) {
      this.activeTabName = tab.name
    }
  },
  // 计算属性
  computed: {
    componentOn () {
      if (this.activeTabName == 'user') {
        return 'userComponent'
      }
      // if (this.activeTabName == 'role')
      else {
        return 'roleComponent'
      }
    }
  },
}
</script>

<style  scoped>
::v-deep .el-tabs__header {
  background-color: #fff;
  font-size: 14px;
  margin: 0px;
}
.el-tabs__nav-scroll {
  padding: 0 16px;
}
.el-tabs__item {
  font-size: 14px;
}
.component-style {
  background-color: #fff;
  margin: 15px;
}
</style>