<template>
  <div>
    <div>轮播</div>
    <ul>
      <router-link to="/film/nowplaying" tag="li" active-class="zfactive">正在热映</router-link>
      <router-link to="/film/comingsoon" tag="li" active-class="zfactive">即将上映</router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .zfactive{
    color:#f60;
    border-bottom:2px solid #ccc;
  }
</style>
