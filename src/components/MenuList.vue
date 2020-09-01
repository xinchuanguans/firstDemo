<template>
<div class="menulist">
  <ul>
    <li v-for="item in list">{{ item.msg }}</li>
  </ul>
</div>
</template>
<script>
  export default {
    data () {
      return {
        list:[
          {id:1,msg:"简介"},
          {id:2,msg:"内容"}
        ]
      }
    },
  }
</script>
