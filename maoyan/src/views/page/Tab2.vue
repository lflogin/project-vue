<template>
  <div>
    <SwiperBar :carousel='carousel' />
    <List :data='data' />
  </div>
</template>
<script>

import SwiperBar from '@/components/SwiperBar.vue'
import List from '@/components/List.vue'

export default {

 components: {
   SwiperBar,
   List
 },

  data() {
    return {
      carousel: [],  //轮播图数据
      data: []   //列表数据
    }
  },

  created() {
    this.getData()
  },

  methods: {
    getData() {
      this.$http.get('/api/data').then(res=>{
        console.log(res.data)
        this.carousel = res.data.carousel;
        this.data = res.data.coming;
      })
    }
  },
}
</script>
<style lang="scss">
  
</style>