<template>
  <div class="newsbox">
    <div class="boxname" >{{ boxName }}</div>
    <div class="newslist">
      <ul>
        <li v-for="(item,index) in newslist" :key="index"><a href="#">【{{item.updatetime}}】{{ item.newstitle }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newslist: this.newsList,
    }
  },
  props:["newsList","boxName"],
}
</script>

<style scoped>

</style>
