<template>
  <div>
      用户名： <input type="text" v-model="user"> <br/>
      密码 ： <input type="text" v-model="pwd"> <br/>
      <button @click="dianji">点击</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      pwd: ''
    }
  },

  methods: {
    dianji() {
      this.$http.get('/api/login',{
        params: {
          user: this.user,
          pwd: this.pwd
        }
      }).then(res=>{
        if(res.data.errCode === 0) {
          localStorage.setItem('key',res.data.token)
          this.$router.push({
            path: '/mine'
          })
        } else {
          alert('输入错误')
        }
      })
    }
  },
}
</script>
<style lang="scss">
  
</style>