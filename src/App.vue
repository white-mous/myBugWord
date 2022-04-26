<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>

        <!-- <el-row>
                <el-col :span="12"><p >總計金額 :   {{$store.state.totalValue}} </p></el-col>
                <el-col :span="12"><el-button type="success">我要結帳</el-button></el-col>
            </el-row> -->        
        <!-- <div class="footer"> 
        </div> -->
</template>

<script>

import Header from './components/Header'
import Home from './views/Home'
import Footer from './components/Footer'

export default {
  name: 'App',
  // components: {MyTest},MyTest
  components: {Header,Home,Footer}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
