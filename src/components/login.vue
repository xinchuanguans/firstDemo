<template>
  <div>
    <form class="login">
      <form-item>
        <span>用户名：</span>
        <input type="text" v-model="loginForm.username" placeholder="用户名"/>
      </form-item>
      <form-item>
        <span>密&nbsp&nbsp&nbsp&nbsp码：</span>
        <input type="text" v-model="loginForm.password" placeholder="密码"/>
      </form-item>
    <form-item class="center">
    <button class="submit" @click="login">登录</button>
    </form-item>
    </form>
  </div>
</template>

<script>
import "../assets/css/login.css"
import {mapMutations} from "vuex";
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userForm:{
        username: 'abc',
        password: '123'
      }
    };
  },
  methods: {
    // ...mapMutations(['changeLogin']),
    // login () {
    //   let _this = this;
    //   if (this.loginForm.username === '' || this.loginForm.password === '') {
    //     alert('账号或密码不能为空');
    //   } else {
    //     this.axios({
    //       method: 'post',
    //       url: '/user/login',
    //       data: _this.loginForm
    //     }).then(res => {
    //       console.log(res.data);
    //       _this.userToken = 'Bearer ' + res.data.data.body.token;
    //       // 将用户token保存到vuex中
    //       _this.changeLogin({Authorization: _this.userToken});
    //       _this.$router.push('/');
    //       alert('登陆成功');
    //     }).catch(error => {
    //       alert('账号或密码错误');
    //       console.log(error);
    //     });
    //   }
    // }
      login () {
        if(this.loginForm.username==this.userForm.username){
          if(this.loginForm.password==this.userForm.password){
            alert("true")
          }
          else {
            alert("password error!")
          }
        }
        else {
          alert("username error!")
        }
      }
  }
};
</script>
