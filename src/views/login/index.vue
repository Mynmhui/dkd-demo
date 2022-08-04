<template>
  <div class="app">
    <div class="input">
      <img class="photo" src="../../assets/404.png" alt="">
      <div class="main">
        <el-form
        ref="loginForm"
        size="medium"
        auto-complete="on"
        label-position="left"
        :model="loginForm"
        :rules="loginFormRules"
        >
          <el-form-item prop="loginName">
            <el-input
            v-model="loginForm.loginName"
            name="loginName"
            type="text"
            tabindex="1"
            auto-complete="on"
            placeholder="请输入账号"
            prefix-icon="el-icon-mobile-phone"
            style="width: 446px; height:52px; line-height:52px; margin: 70px 30px 0"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
            v-model="loginForm.password"
            name="password"
            tabindex="2"
            auto-complete="on"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
            style="width: 446px; height:52px; line-height:52px; margin: 0 30px "
            ></el-input>
          </el-form-item>

          <el-form-item prop="code">
            <div class="lest2">
            <el-input
            v-model="loginForm.code"
            name="code"
            tabindex="3"
            auto-complete="on"
            placeholder="请输入验证码"
            prefix-icon="el-icon-circle-check"
            style="width: 300px; height:52px; line-height:52px; margin: 0 30px "
            />
            <img 
            :src="`https://likede2-java.itheima.net/api/user-service/user/imageCode/${loginForm.clientToken}`" 
            alt=""
            @click="clickCode"
            >
            </div>
          </el-form-item>
        </el-form>
        <el-button 
        type="primary" 
        class="test"
        style="margin: 10px 8px 0px"
        @click="onLogin"
        :loading = 'isloading'
        >登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { login, Code } from "@/api/user"
export default {
  components: {
  },
  data() {
    return {
      loginForm: {
      loginName: "admin",
      password: "admin",
      code: '',
      clientToken: '',
      loginType: 0
      },
      loginFormRules: {
      loginName: [
      { required: true, message: '请输入手机号', trigget: 'blur' },
      { pattern: /^[a-zA-Z]{5}$/, message: '手机号码格式不符合要求', trigget: 'blur'}
      ],
      password: [
      { required: true, message: '请输入密码', trigget: 'blur' },
      { pattern: /^[a-zA-Z]{5}$/, message: '密码格式不符合要求', trigget: 'blur'}
      ],
      code: [ {required: true, min: 4, max: 4, message: '验证码格式不正确', trigger: 'blur'}]
      },
      token: localStorage.getItem('DILIKE'),
      userInfo: {},
      isloading: false
    }
  },

  created() {
  this.getNum()
  },

  methods: {
  async onLogin () {
    try {
      this.isloading = true
      await this.$refs.loginForm.validate()
      const { data } = await login(this.loginForm)
      // console.log(data.msg)
      this.userInfo = data
      await this.$store.dispatch('user/getToken', this.loginForm)
      this.$store.dispatch('user/getCode', this.token)
      this.$store.dispatch('user/getUserInfo', this.userInfo)
      if (data.token) {
      this.$router.push('/')
      return this.$message.success(data.msg)
      } else {
      return this.$message.error(data.msg)
      }
      
    } finally {
    this.isloading = false
    }
  },
  async clickCode () {
  await Code(this.loginForm.clientToken)
  this.getNum()
  },
  getNum() {
  var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var nums = ''
  for (var i = 0; i < 32; i++) {
    var id = parseInt(Math.random() * 61)
    nums += chars[id]
  }
  this.loginForm.clientToken = nums
  },
}
}
</script>

<style scoped lang='less'>
.app{
  position: relative;
  width: 100%;
  height: 100%;
  background: url('~@/assets/1.png');
  background-size: cover;

  .input{
  position: relative;
  width: 450px;
  height: 50px;
  top: 25%;
  left:22%;
  .photo{
    width: 96px;
    height: 96px;
    position: absolute;
    top: -50%;
    left: 80%;
    z-index: 99;
  }
  .el-input__inner {
  width: 379px;
  height: 52px;
  }
  .main{
    position: absolute;
    width: 500px;
    height: 400px;
    top: 25%;
    left: 34%;
    background-color: #fff;
    border-radius: 20px;
    
    .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
    padding: 20px 60px;
    }
    }
    .test{
      width: 450px;
  position: absolute;
      left: 20px;
      top: 300px;
      background-color: #4463E5;
    }
    .lest2{
      display: flex;
      .lest3{
        width: 200px;
      }
    }
  }
}

}

</style>

