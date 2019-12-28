<template>
   <swiper :options="swiperOption" ref="mySwiper" >
   
    <swiper-slide v-for="(item,index) in carousel" :key="index" >
      <img :src="item.img" alt="">
    </swiper-slide>
 
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    carousel: Array
  },

   components: {
    swiper,
    swiperSlide
  },

  data() {
    return {
       swiperOption: {
           autoplay:true,
           slidesPerView: 4,  //每页显示几个
           spaceBetween: 10,  //之间的间距
        }
    }
  },



}
</script>
<style lang="scss">
  
</style>