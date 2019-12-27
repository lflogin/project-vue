<template>
  <div class="app-footer">
    <router-link to="moive">电影</router-link>
    <router-link to="yingyuan">影院</router-link>
    <router-link to="mine">我的</router-link>
  </div>
</template>

<style lang="scss">
    .app-footer {
      border-top: 1px solid #ccc;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
    }
</style>