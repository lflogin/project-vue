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
import { mapState, mapActions } from 'vuex'
export default {
 
  computed: mapState({
    list: state => state.list
  }),

  data() {
    return {
      // list: []
    }
  },

  created() {
    this.getmock()
  },

  methods: {
    ...mapActions([
      'toleftlist'
    ]),
    getmock() {
      // this.$http.get('/api/mock').then(res=>{
        // console.log(res.data.coming)
        // this.$store.commit('toleftlist',res.data.coming)
      // })
      this.toleftlist()
    }
  },

}
</script>
<style lang="scss">
  
</style>