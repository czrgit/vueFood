<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.noFoot"/><!--是否显示底部导航-->
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    mounted(){
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()


    },
    methods:{
      ...mapActions(['getAddress','getUserInfo']),

    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: relative;
  }
</style>
