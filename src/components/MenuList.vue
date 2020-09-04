<template>
<a-layout-sider class="menubox">
  <a-menu mode="inline" class="menulist" :default-selected-keys="['1']" :default-open-keys="['sub1']">
    <a-sub-menu key="sub1">
      <span slot="title">简介</span>
      <a-menu-item key="p1">
        <a href="#/profiles/0" >内容1</a>
      </a-menu-item>
      <a-menu-item key="p2">
        <a href="#/profiles/1">内容2</a>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</a-layout-sider>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>
