<template>
<div class="item-change">
  <el-form :inline="true"
           :model="searchForm"
           class="demo-form-inline search-form">
    <el-form-item label="用户名">
      <el-input v-model="searchForm.user"
                placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="searchForm.phone"
                placeholder="手机号">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table
      :data="tableData"
      stripe
      style="width: 100%">
    <el-table-column
        prop="date"
        label="日期"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: "itemChangeInformation",
  data() {
    return {
      searchForm: {
        currentPage: 1,
        pageSize: 20,
        user: '',
        phone: ''
      },
      tableData: [
          {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>
.item-change{
  background: white;
}
.search-form{
  padding: 20px;
  margin-bottom: 10px;
  background: white;
}
</style>