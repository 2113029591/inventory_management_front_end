<template>
<div>
  <div class="top-div-button">
    <el-button type="primary" class="add-button"
               @click="dialogVisible = true">新增用户</el-button>
  </div>
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
  <el-table :data="tableData"
            style="width: 100%">
    <el-table-column label="用户名"
                     width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.account }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名"
                     width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover"
                    placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference"
               class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作"
                     align="right">
      <template slot-scope="scope">
        <el-button size="mini"
                   @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini"
                   type="danger"
                   @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <pagination-footer :total="total" class="page-footer"
                     :page.sync="searchForm.currentPage"
                     :limit.sync="searchForm.pageSize"
                     @pagination="searchData">
    <el-button type="success">测试按钮</el-button>
  </pagination-footer>

  <el-dialog title="新增用户"
             :visible.sync="dialogVisible"
             width="50%">
    <el-form :model="userData"
             ref="userDataForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="账号"
                    prop="account"
                    :rules="[{ required: true, message: '账号不能为空'},]">
        <el-input type="text"
                  v-model="userData.account"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="name"
                    :rules="[{ required: true, message: '密码不能为空'},]">
        <el-input type="password"
                  v-model="userData.password"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名"
                    prop="realname"
                    :rules="[{ required: true, message: '地址不能为空'},]">
        <el-input type="text"
                  v-model="userData.realname"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话"
                    prop="phone"
                    :rules="[{ required: true, message: '地址不能为空'},]">
        <el-input type="text"
                  v-model="userData.phone"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址"
                    prop="position"
                    :rules="[{ required: true, message: '地址不能为空'},]">
        <el-input type="text"
                  v-model="userData.position"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="类型"
                    prop="type"
                    :rules="[{ required: true, message: '地址不能为空'},]">
        <el-input type="text"
                  v-model="userData.type"
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
                <el-button @click="()=>{
                    // resetForm('userDataForm')
                    this.dialogVisible = false
                    }">取 消</el-button>
                <el-button type="primary"
                           @click="createUserData">确 定</el-button>
            </span>
  </el-dialog>
</div>
</template>

<script>
import {userCreate} from "@/api/user";
import {getUserInfos} from "@/api/admin";

export default {
name: "userComponent",
  data(){
  return{
    total: 100,
    searchForm: {
      currentPage: 1,
      pageSize: 20,
      user: '',
      phone: ''
    },
    dialogVisible: false,
    userData: {
      account:"",
      password:"",
      realname:"",
      phone: '',
      position: '',
      type:1,
    },
    tableData: [],

    limit:{
      limit:5,
      page:1,
    }
  }
  },
  methods:{
    onSubmit () {
      this.searchData()
    },
    searchData () {
      console.log(this.searchForm);
    },
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    //添加用户
    createUserData(){
      userCreate(this.userData).then(resp=>{
        console.log(resp)
        this.$message({
          message: "注册成功！",
          type: "success"
        })
      })
    },
    getTotalUserData(){
      getUserInfos(this.limit).then(resp=>{
        let userTotal=resp.data.data.records
        this.tableData=userTotal
        console.log(resp);
      })
    }
  },
  created() {
  this.getTotalUserData();
  }

}
</script>

<style scoped>
.add-button{
  margin: 20px 60px;
}
.page-footer{
  display: flex;
  justify-content:space-between;
  padding: 25px 30px 25px 30px;

}
</style>