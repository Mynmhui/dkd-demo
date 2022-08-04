<template>
  <div class="navbar">
    <!-- <hamburger  class="hamburger-container" @toggleClick="toggleSideBar" /> -->
    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <div class="logo-style">
      <img 
      src="~@/assets/logo.png" 
      alt="" 
      >
      <!-- v-imgError="defaultImg" -->
    </div>

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
    <div>
      <el-avatar class="touxian" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <span class="uname">欢迎您,{{ $store.state.user.userInfo.userName}}</span>
      <el-tooltip 
      class="item" 
      effect="dark" 
      content="退出登录" 
      placement="bottom"
      @click.native="logout"
      >
        <el-button>退出</el-button>
      </el-tooltip>
    </div>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  data () {
  return {
  // defaultImg
  }
  },
  computed: {
  ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1996;
  background-image: url('~@/assets/navbar.png');
  background-size: cover;
  background-repeat: no-repeat;

  .logo-style img {
  width: 88px;
  height: 36px;
  position: relative;
  top: 10px;
  left: 14px;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    // float: right;
    height: 100%;
    // line-height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -30px;
    right: -600px;
    .touxian {
    position: absolute;
    top: -30px;
    left: -140px;
    }
    .uname {
    position: absolute;
    top: -16px;
    left: -90px;
    color: #fff;
    }
    .item {
    position: absolute;
    top: -30px;
    right: -110px;
    background-color: #6480e3;
    // opacity: 0;
    // filter: none;
    }


  .el-button {
  border: 0 solid;
    color: #fff;
  }

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          // top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
