<template>
<div>
  <div class="add-and-query">
    <div class="top-div-button">
      <el-button type="primary" class="add-button"
                 @click="()=>{
                   dialogVisible = true
                 }">新增记录</el-button>
    </div>
    <div>
      <el-button type="primary" class="add-button"
                 @click="queryTest(4)">test</el-button>
    </div>
    <el-form :inline="true"
              :model="searchForm"
              class="demo-form-inline search-form">
    <el-form-item label="物品编码">
      <el-input v-model="searchForm.user"
                placeholder="物品编码"></el-input>
    </el-form-item>
    <el-form-item label="名称">
      <el-input v-model="searchForm.phone"
                placeholder="名称">
      </el-input>
    </el-form-item>
      <el-form-item label="存放位置">
        <el-input v-model="searchForm.phone"
                  placeholder="存放位置">
        </el-input>
      </el-form-item>
      <el-form-item label="厂商">
        <el-input v-model="searchForm.phone"
                  placeholder="厂商">
        </el-input>
      </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  </div>

  <el-tabs v-model="activeName" @tab-click="handleClick" style="background: white">
    <el-tab-pane label="用户管理" name="first">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          fixed
          prop="nameCode"
          label="物品编码"
          align="center"
          >
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          align="center"
          >
      </el-table-column>
      <el-table-column
          prop="location"
          label="存放位置"
          align="center">
      </el-table-column>
      <el-table-column
          prop="count"
          label="数量"
          align="center">
      </el-table-column>
      <el-table-column
          prop="brand"
          label="品牌"
          align="center">
      </el-table-column>
      <el-table-column
          prop="model"
          label="型号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="manufacturer"
          label="厂商"
          align="center">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          align="center">
        <template slot-scope="scope">
          <el-button @click="()=>{
            handleClick(scope.row)
            dialogVisibleItem=true
          }" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="()=>{
            dialogVisibleChange=true
          }">借用</el-button>
        </template>
      </el-table-column>
    </el-table></el-tab-pane>
    <el-tab-pane label="配置管理" name="second" ><el-table
        :data="tableDataByType"
        stripe
        style="width: 100%">
      <el-table-column
          fixed
          prop="nameCode"
          label="物品编码"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="location"
          label="存放位置"
          align="center">
      </el-table-column>
      <el-table-column
          prop="count"
          label="数量"
          align="center">
      </el-table-column>
      <el-table-column
          prop="brand"
          label="品牌"
          align="center">
      </el-table-column>
      <el-table-column
          prop="model"
          label="型号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="manufacturer"
          label="厂商"
          align="center">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          align="center">
        <template slot-scope="scope">
          <el-button @click="()=>{
            handleClick(scope.row)
            dialogVisibleItem=true
          }" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="()=>{
            dialogVisibleChange=true
          }">借用</el-button>
        </template>
      </el-table-column>
    </el-table></el-tab-pane>
    <el-tab-pane label="角色管理" name="third"><el-table
        :data="tableDataByType"
        stripe
        style="width: 100%">
      <el-table-column
          fixed
          prop="nameCode"
          label="物品编码"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="location"
          label="存放位置"
          align="center">
      </el-table-column>
      <el-table-column
          prop="count"
          label="数量"
          align="center">
      </el-table-column>
      <el-table-column
          prop="brand"
          label="品牌"
          align="center">
      </el-table-column>
      <el-table-column
          prop="model"
          label="型号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="manufacturer"
          label="厂商"
          align="center">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          align="center">
        <template slot-scope="scope">
          <el-button @click="()=>{
            handleClick(scope.row)
            dialogVisibleItem=true
          }" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="()=>{
            dialogVisibleChange=true
          }">借用</el-button>
        </template>
      </el-table-column>
    </el-table></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth" ><el-table
        :data="tableDataByType"
        stripe
        style="width: 100%">
      <el-table-column
          fixed
          prop="nameCode"
          label="物品编码"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="location"
          label="存放位置"
          align="center">
      </el-table-column>
      <el-table-column
          prop="count"
          label="数量"
          align="center">
      </el-table-column>
      <el-table-column
          prop="brand"
          label="品牌"
          align="center">
      </el-table-column>
      <el-table-column
          prop="model"
          label="型号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="manufacturer"
          label="厂商"
          align="center">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          align="center">
        <template slot-scope="scope">
          <el-button @click="()=>{
            handleClick(scope.row)
            dialogVisibleItem=true
          }" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="()=>{
            dialogVisibleChange=true
          }">借用</el-button>
        </template>
      </el-table-column>
    </el-table></el-tab-pane>
  </el-tabs>

  <el-dialog title="新增用户"
             :visible.sync="dialogVisible"
             width="80%">
    <el-form :model="userData"
             ref="userDataForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="姓名"
                    prop="name"
                    :rules="[{ required: true, message: '姓名不能为空'},]">
        <el-input type="text"
                  v-model="userData.name"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址"
                    prop="address"
                    :rules="[{ required: true, message: '地址不能为空'},]">
        <el-input type="text"
                  v-model="userData.address"
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary"
                           @click="closeDialog">确 定</el-button>
            </span>
  </el-dialog>
  <el-dialog title="编辑"
             :visible.sync="dialogVisibleItem"
             width="80%">
    <el-form :model="userData"
             ref="userDataForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="姓名"
                    prop="name"
                    :rules="[{ required: true, message: '姓名不能为空'},]">
        <el-input type="text"
                  v-model="userData.name"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址"
                    prop="address"
                    :rules="[{ required: true, message: '地址不能为空'},]">
        <el-input type="text"
                  v-model="userData.address"
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
                <el-button @click="closeItemDialog">取 消</el-button>
                <el-button type="primary"
                           @click="closeItemDialog">确 定</el-button>
            </span>
  </el-dialog>
  <el-dialog title="申请"
             :visible.sync="dialogVisibleChange"
             width="80%">
    <el-form :model="userData"
             ref="userDataForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="姓名"
                    prop="name"
                    :rules="[{ required: true, message: '姓名不能为空'},]">
        <el-input type="text"
                  v-model="userData.name"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址"
                    prop="address"
                    :rules="[{ required: true, message: '地址不能为空'},]">
        <el-input type="text"
                  v-model="userData.address"
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
                <el-button @click="closeChangeDialog">取 消</el-button>
                <el-button type="primary"
                           @click="closeChangeDialog">确 定</el-button>
            </span>
  </el-dialog>
</div>
</template>

<script>
import {getWarehouseInfo,getWarehouseInfos,getWarehouseByType} from "@/api/warehouse";

export default {
  name: "itemInformation",
  data() {
    return {
      dialogVisible: false,
      dialogVisibleItem:false,
      dialogVisibleChange:false,

      limit:{
        limit:5,
        page:0
      },
      limitByType:{
        limit:5,
        page:0,
        type:1,
      },

      userData: {
        date: '2018-08-16',
        name: '',
        address: ''
      },
      searchForm: {
        currentPage: 1,
        pageSize: 20,
        user: '',
        phone: ''
      },
      activeName: 'first',
      tableData: [],
      tableDataByType:[],
    };
  },
  methods: {
    handleClick(tab) {
      if(tab.name == 'second'){
        // 触发‘配置管理’事件
        this.second(this.changeLimitByType(1));
      }
      else if(tab.name == 'third'){
        this.thrid(this.changeLimitByType(2))
      }
      else if(tab.name == 'fourth'){
        this.fourth(this.changeLimitByType(3))
      }
      else{
        // 触发‘用户管理’事件
        this.first();
      }
      },
    closeDialog(){
      this.dialogVisible=!this.dialogVisible
    },
    closeItemDialog(){
      this.dialogVisibleItem=!this.dialogVisibleItem
    },
    closeChangeDialog(){
      this.dialogVisibleChange=!this.dialogVisibleChange
    },
    queryTest(id){
      getWarehouseInfo(id).then(res=>{
        console.log(res);
      })
    },
    //获得所有信息
    getInfos(){
      getWarehouseInfos(this.limit).then(resp=>{
        let itemData=resp.data.data.records
        console.log(itemData);
        this.tableData=itemData
      })
    },
    //按类查找
    getInfosByType(){
      getWarehouseByType(this.limitByType).then(resp=>{
        let dataByType=resp.data.data.records
        this.tableDataByType=dataByType
      })
    },
    changeLimitByType(type){
      this.limitByType.type=type;
      this.getInfosByType();
    }

  },
  created:function () {
    this.getInfos();
    this.getInfosByType();
  }
}
</script>

<style scoped>
.add-and-query{
  background: white;
  margin-bottom: 10px;
  padding: 10px;
}
.top-div-button{
  margin: 10px;
}
</style>