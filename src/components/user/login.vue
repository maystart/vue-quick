<template>
  <div class="login-body" layout="row" layout-align="center start">
    <div class="loginWarp" v-loading="loading" element-loading-text="正在登陆中..." @keyup.enter="login">
      <div class="login-title">
        <img src="../../assets/images/logo.ico" />
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="rules" label-width="0">
          <el-form-item prop="username" class="login-item">
            <el-input v-model="form.username" placeholder="请输入账户名" class="form-input" :autofocus="true"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-item">
            <el-input type="password" v-model="form.password" placeholder="请输入账户密码" class="form-input"></el-input>
          </el-form-item>
          <el-form-item class="login-item">
            <el-button size="large" icon="check" class="form-submit" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [{ required: true, message: '请输入账户名！', trigger: 'blur' }],
        password: [{ required: true, message: '请输入账户密码！', trigger: 'blur' }]
      },
      loading: false
    }
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (!valid) return false
        this.loading = true
        if (this.form.username == 'admin' && this.form.password == 'admin') {
          window.localStorage.token = this.form.username;
          this.$router.push({ path: '/' });
        } else {
          this.$message.error('小主,用户名或密码错误');
          this.loading = false;
        }
      })
    }
  }
}

</script>
<style lang="less" scoped>
.login-body {
  padding-top: 10%;
  width: 100%;
  background-size: 100%;
  .loginWarp {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 3px hsla(0, 0%, 4%, .1), 0 0 0 1px hsla(0, 0%, 4%, .1);
    display: block;
    padding: 1.25rem;
    width: 350px;
    .login-title {
      margin-bottom: 25px;
      text-align: center;
    }
    .login-item {
      margin-bottom: 35px;
      .form-input {
        input {
          margin-bottom: 15px;
          font-size: 12px;
          height: 40px;
          border: 1px solid #eaeaec;
          background: #eaeaec;
          border-radius: 5px;
          color: #555;
        }
      }
    }
    .form-submit {
      width: 100%;
      color: #fff;
      border-color: #6bc5a4;
      background: #6bc5a4;
      &:active,
      &:hover {
        border-color: #6bc5a4;
        background: #6bc5a4;
      }
    }
  }
}

</style>
