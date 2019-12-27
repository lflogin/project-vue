<template>
  <div class="app-tao">
    <div class="app-header">
        猫眼电影
    </div>
    <div class="app-main">
      <router-view />
    </div>
    <FooterBar />
  </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
export default {
  components: {
    FooterBar
  }
}
</script>
<style lang="scss">
.app-tao {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
  .app-header {
    width: 100%;
    height: 50px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
  }
  .app-main {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
</style>