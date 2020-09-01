<template>
  <div>
    <form class="login">
      <form-item>
        <span>用户名：</span>
        <input type="text" v-model="registerForm.username" placeholder="用户名"/>
      </form-item>
      <form-item>
        <span>密&nbsp&nbsp&nbsp&nbsp码：</span>
        <input type="text" v-model="registerForm.password" placeholder="密码"/>
      </form-item>
      <form-item class="center">
        <button class="submit" @click="register">注册</button>
      </form-item>
    </form>
  </div>
</template>

<script>
import "../assets/css/login.css"
export default {
  data() {
    return {
      registerForm: {
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

    register () {
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
