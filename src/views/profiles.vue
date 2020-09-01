<template>
  <div>
    <nav-header></nav-header>
    <div class="main">
      <menu-list></menu-list>
      <message></message>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from "../components/NavHeader.vue"
import NavFooter from "../components/NavFooter.vue"
import MenuList from "../components/MenuList.vue"
import Message from "../components/Message.vue"
import Rotation from "../components/Rotation.vue"

import "../assets/css/navheader.css"
import "../assets/css/navfooter.css"
import "../assets/css/menulist.css"
import "../assets/css/message.css"
import "../assets/css/main.css"
import "../assets/css/rotation.css"


export default {
  name:'profiles',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NavHeader,
    NavFooter,
    MenuList,
    Message,
    Rotation,
  }
}
</script>
