<template>
  <layout class="bc">
    <header class="hc">{{headermsg}}</header>
    <slider class="sc">{{slidermsg}}</slider>
    <content class="cc">{{contentmsg}}
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          Hover me <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </content>
    <footer class="fc">{{footermsg}}</footer>
  </layout>




</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      headermsg: 'header',
      footermsg:'footer',
      slidermsg:'slider',
      contentmsg:'content'
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bc{
  background-color: #42b983;
}
.sc{
  background-color: #2c3e50;
}
.cc{
  background-color: aqua;
}
.hc{
  background-color: red;
}
.fc{
  background-color: yellow;
}
</style>
