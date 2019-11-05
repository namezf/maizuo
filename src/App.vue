<template>
    <div>
      <ul>
        <router-link to="/film" tag="li" active-class="zfactive">电影</router-link>
        <router-link to="/cinema" tag="li" active-class="zfactive">影院</router-link>
        <router-link to="/center" tag="li" active-class="zfactive">我的</router-link>
      </ul>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
*{
    margin:0;
    padding:0;
}
html,body{
    height: 100%;
}
ul{
    li{
        list-style: none;
    }
}
.zfactive{
 color:red;
}
</style>
