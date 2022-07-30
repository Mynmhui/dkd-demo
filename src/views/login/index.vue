<template>
  <div class="login-body">
    <div class="login">
      <span class="imgs">
        <img src="../../assets/404.png" alt="">
      </span>
      <el-input
        v-model="input"
        type="text"
        size="medium"
        placeholder="请输入账号"
        prefix-icon="el-icon-mobile-phone"
        style="width:446px; height:52px; margin-top:80px; margin-left:35px; margin"
      />
      <el-input
        v-model="input1"
        placeholder="请输入密码"
        show-password
        prefix-icon="el-icon-lock"
        style="width:446px; height:52px; margin-top:10px; margin-left:35px; margin"
      />
      <div class="yanzm">
        <div class="left">
          <el-input
            v-model="input1"
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-circle-check"
            style="width:300px; height:52px; margin-top:15px; margin-left:35px; margin"
          />
        </div>
        <div class="right">
          <img src="../../assets/yanzm.jpg" alt="">
        </div>
      </div>
      <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      input1: ''
    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped lang='less'>
.login-body {
position: relative;
width: 100%;
height: 100%;
background-image: url('../../assets/1.png');
background-size: cover;

.login {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 518px;
height: 388px;
margin: auto;
background-color: #fff;
.imgs img {
position: absolute;
width: 96px;
height: 96px;
top: -46px;
left: 50%;
margin-left: -48px;
z-index: 99;
}
}

.el-input__inner {
font-size: 14px;
line-height: 52px;
.el-icon-mobile-phone:before {
margin-bottom: 5px;
}
}
.yanzm {
display: flex;
.right img {
width: 148px;
height: 40px;
margin-top: 15px;
}
}
.el-button--primary {
width: 448px;
height: 52px;
margin-top: 20px;
margin-left: 35px;
}
}
</style>
