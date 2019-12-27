<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    }
  },

  created() {
    this.getmock()
  },

  methods: {
    getmock() {
      this.$http.get('/api/mock').then(res=>{
        // console.log(res.data.coming)
        this.list = res.data.coming
      })
    }
  },

}
</script>
<style lang="scss">
  
</style>