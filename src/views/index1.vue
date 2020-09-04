<template>
  <layout>
    <div class="nav-login">
      <div class="login-fl">
        <a-button-group>
        <a-button type="primary" @click="onLogin">登录</a-button>
        <a-button @click="onRegister">注册</a-button>
        </a-button-group>
      </div>
    </div>
    <div v-show="showOverlay" class="overlay1"></div>
    <div v-show="showLogin" class="login-center"><login ></login></div>
    <div v-show="showRegister" class="login-center"><register ></register></div>
    <nav-header></nav-header>
    <rotation></rotation>
    <div class="news">
      <news-box class="" :news-list="newslist1" :box-name="boxname.name1"></news-box>
      <news-box class="" :news-list="newslist2" :box-name="boxname.name2"></news-box>
    </div>
  <nav-footer></nav-footer>
  </layout>
</template>
<script>
import NavHeader from "../components/NavHeader.vue"
import NavFooter from "../components/NavFooter.vue"
import Rotation from "../components/Rotation.vue"
import newsBox from "../components/newsBox.vue"
import login from "../components/login"
import register from "../components/register";
import "../assets/css/navheader.css"
import "../assets/css/navfooter.css"
import "../assets/css/main.css"
import "../assets/css/rotation.css"
import "../assets/css/newsbox.css"
export default {
  name:'index1',
  data () {
    return {
      showLogin:false,
      showRegister:false,
      showOverlay:false,
      msg: 'Welcome to Your Vue.js App',
      boxname: {
        name1: 1,
        name2: 2
      },
      newslist1:[
        {id:1,newstitle: "news1", updatetime: "2020-1-1"},
        {id:2,newstitle: "news2", updatetime: "2020-1-2"},
        {id:3,newstitle: "news3", updatetime: "2020-1-3"},
        {id:4,newstitle: "news4", updatetime: "2020-1-4"},
        {id:5,newstitle: "news5", updatetime: "2020-1-5"},
        {id:6,newstitle: "news6", updatetime: "2020-1-6"},
        {id:7,newstitle: "news7", updatetime: "2020-1-7"},
        {id:8,newstitle: "news8", updatetime: "2020-1-8"},
        {id:9,newstitle: "news9", updatetime: "2020-1-9"},
      ],
      newslist2: [
        {id:1,newstitle: "news1", updatetime: "2020-1-4"},
        {id:2,newstitle: "news2", updatetime: "2020-1-5"},
        {id:3,newstitle: "news3", updatetime: "2020-1-6"},
        {id:4,newstitle: "news4", updatetime: "2020-1-7"},
        {id:5,newstitle: "news5", updatetime: "2020-1-8"},
        {id:6,newstitle: "news6", updatetime: "2020-1-9"},
        {id:7,newstitle: "news7", updatetime: "2020-1-10"}
      ]
    }
  },
  props:true,
  components: {
    NavHeader,
    NavFooter,
    Rotation,
    newsBox,
    login,
    register,
  },
  methods:{
    onLogin(){
      this.showLogin=!this.showLogin;
      this.showRegister=false;
      this.showOverlay=this.showLogin
    },
    onRegister(){
      this.showRegister=!this.showRegister;
      this.showLogin=false;
      this.showOverlay=this.showRegister
    }
  }
}
</script>
