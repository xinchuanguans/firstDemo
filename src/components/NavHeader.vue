<template>
    <header class="nav-header">
      <div class="start">
        <div class="fl logo">
          <h1>这是一个小样</h1>
        </div>
        <div><ul class="fr">这里可以放标签</ul></div>
      </div>
      <div class="nav-item">
          <div>
            <a href="/" class="nav-menu">首页</a>
          </div>
          <div>
            <a-dropdown>
              <a href="#/profiles/0" class="ant-dropdown-link nav-menu" >
                简介
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="#/profiles/0">内容1</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="#/profiles/1">内容2</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
          <div>
            <a href="#" class="nav-menu">......</a>
          </div>

      </div>
    </header>
</template>
<script>
export default {
  methods(){
    return{
    }
  }
}
</script>
