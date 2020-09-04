<template>
  <div class="newsbox">
    <div class="boxname" >{{ boxName }}</div>
<!--    <div class="newslist">-->
      <a-list item-layout="vertical" :pagination="pagination" :data-source="newslist">
        <a-list-item slot="renderItem" key="index" slot-scope="item, index">
          <a>【{{item.updatetime}}】{{item.newstitle}}</a>
        </a-list-item>
      </a-list>
<!--      <ul>-->
<!--        <li v-for="(item,index) in newslist" :key="index"><a href="#">【{{item.updatetime}}】{{ item.newstitle }}</a></li>-->
<!--      </ul>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  data(){
    return {
      newslist: this.newsList,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 7,
      },
    }
  },
  props:["newsList","boxName"],
}
</script>

<style scoped>

</style>
