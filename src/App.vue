<template>
    <div>
        hello vue --{{myname}}
        <input type="text" v-model="mytext">
        <button @click="handleClick()">click</button>
        <ul>
            <li v-for="data in datalist" :key="data">
               {{data}}
            </li>
        </ul>
        <child1 :myword="mytext">
            <div>插槽技术</div>
        </child1>
    </div>
</template>
<script>
import child1 from '@/components/Child1'
import Axios from 'axios'
export default {
  data () {
    return {
      myname: 'app根元素',
      mytext: '',
      datalist: []
    }
  },
  mounted () {
    Axios.get('/ajax/movieOnInfoList?token=').then(res => {
      console.log(res.data)
    })
    Axios({
      url: 'https://m.maizuo.com/gateway?cityId=220600&pageNum=1&pageSize=10&type=1&k=3263177',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15728543674037269259049"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
    })
    Axios.get('http://localhost:3000/posts/').then(res => {
      console.log(res.data)
    })
  },
  components: {
    child1
  },
  methods: {
    handleClick () {
      console.log(this.mytext)
      this.datalist.push(this.mytext)
    }
  }
}
</script>
<style lang="stylus">
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
        background: yellow;
    }
}
</style>
