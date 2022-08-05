<template>
<div>
      <el-col :span="23">
    <el-card shadow="always">
    <el-form 
    inline="false" 
    :model="formInline" 
    class="demo-form-inline"
    size="medium"
    >
  <el-form-item label="工单编号:">
    <el-input v-model="formInline.number" placeholder="请输入"></el-input>
  </el-form-item>
  <el-form-item label="工单状态:">
    <el-input v-model="formInline.state" placeholder="请选择"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">查询</el-button>
  </el-form-item>
</el-form>
    </el-card>
  </el-col>

  <el-col :span="23">
    <el-card 
    shadow="always">
    <el-button  type="primary" class="newbtn">
      <i class="el-icon-circle-plus-outline"></i>
      新建</el-button>
    <el-button type="primary" class="allocationbtn">工单配置</el-button>
      <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
        prop="number"
        label="序号"
        width="83px"
        >
      </el-table-column>
        <el-table-column
        prop="WorkOrder"
        label="工单编号"
        >
      </el-table-column>
      <el-table-column
        prop="equipment"
        label="设备编号"
        >
      </el-table-column>
            <el-table-column
        prop="accounting"
        label="工单类型"
        >
      </el-table-column>
            <el-table-column
        prop="repair"
        label="工单方式"
        >
      </el-table-column>
            <el-table-column
        prop="status"
        label="工单状态"
        >
      </el-table-column>
            <el-table-column
        prop="operating"
        label="运营人员"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建日期"
        >
      </el-table-column>
      <el-table-column
        prop="operate"
        label="查看详情">
      </el-table-column>
    </el-table>
    </el-card>
  </el-col>
</div>
</template>

<script>
export default {
  data () {
    return {
            formInline: {
          number: '',
          state: ''
        },
         tableData: [{
            number: 11,
            WorkOrder: '202208050003',
            equipment: '01000063',
            accounting: '补货工单',
            repair: '手动',
            status: '取消',
            operating: '王小虎',
            date: '2016-05-02',
            operate: 11,
          },
          {
            number: 11,
            WorkOrder: '202208050003',
            equipment: '01000063',
            accounting: '补货工单',
            repair: '手动',
            status: '取消',
            operating: '王小虎',
            date: '2016-05-02',
            operate: 11,
          }, 
          {
            number: 11,
            WorkOrder: '202208050003',
            equipment: '01000063',
            accounting: '补货工单',
            repair: '手动',
            status: '取消',
            operating: '王小虎',
            date: '2016-05-02',
            operate: 11,
          },
          ]

    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style scoped>
.el-col-23 {
  height: 60px;
  margin-top: 20px;
  margin-left: 25px;
  
}
.el-card__body {
  width: 1256px;
  height: 64px;
  position: relative;
}
.el-form--inline {
  position: absolute;
  height: 64px;
  top: 22px;
  /* left: 0; */
  /* bottom: 0; */
  /* right: 0; */
  /* margin: auto; */
}

.newbtn {
  border: 0 solid;
  background: linear-gradient(135deg,#ff9743,#ff5e20)!important;
}

.allocationbtn {
  border: 0 solid;
  background-color: #fbf4f0!important;
  color: #655b56!important;
}
</style>
