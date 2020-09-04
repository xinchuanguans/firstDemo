<template>
  <layout>
    <nav-header></nav-header>
    <a-layout >
      <menu-list></menu-list>
      <message></message>
    </a-layout>
    <nav-footer></nav-footer>
  </layout>
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
