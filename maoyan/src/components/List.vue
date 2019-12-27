<template>
  <div>
    <ul>
      <li v-for="(item,index) in data" :key="index" >
        <img :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: Array
  }
}
</script>
<style lang="scss">
  
</style>