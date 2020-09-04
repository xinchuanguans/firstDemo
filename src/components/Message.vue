<template>
<a-layout class="msg">
<!--  标题-->
  <a-breadcrumb style="margin: 16px 0;">
    <a-breadcrumb-item>简介</a-breadcrumb-item>
    <a-breadcrumb-item>{{ this.testTxt[$route.params.id].textName }}</a-breadcrumb-item>
  </a-breadcrumb>
<!--  正文-->
  <a-layout-content class="textbox">
    <p>{{ this.testTxt[$route.params.id].textWords }}</p>
  </a-layout-content>
</a-layout>
</template>
<script>
export default {
  data () {
    return {
      testTxt:[
        {id:1,textName:"内容1",textWords:"测试文档1"},
        {id:2,textName:"内容2",textWords:"测试文档2"},
      ]
    }
  },

}
</script>
