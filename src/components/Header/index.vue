
<template>
<!-- ffd04b  67C23A-->
    <div >
      
          <el-menu
          :default-active="activeIndex1"
          class="el-menu-demo nav"
          mode="horizontal"
          @select="handleSelect"
          background-color="#cfdd8e"
          text-color="#666"
          
          router
          hover-text-color="#f00"
          active-text-color="#d36783">

          <el-menu-item index="home">首頁</el-menu-item>
          <el-menu-item index="bugLife">甲蟲的一生</el-menu-item>
          <el-submenu index="3">
              <template slot="title">甲蟲</template>
              <el-menu-item index="StagBeetle">鍬形蟲</el-menu-item>
              <el-menu-item index="dynastinae">兜蟲</el-menu-item>
              <el-menu-item index="cetoniaAurata">花金龜</el-menu-item>
          </el-submenu>
              
          <img class="bug-logo" src="./images/aa-removebg-preview.png" >
          <el-submenu index="5">
              <template slot="title">甲蟲食材</template>
              <el-menu-item index="jelly">果凍</el-menu-item>
              <el-menu-item index="wood">皿木</el-menu-item>
              <el-menu-item index="sawdust">木屑</el-menu-item>
              <el-menu-item index="humus">腐質土</el-menu-item>
              <el-menu-item index="nutrition">營養添加補充</el-menu-item>
              <el-menu-item index="bacteriaBottle">菌瓶</el-menu-item>
          </el-submenu>
          
            <el-menu-item index="shoppingCart" class="">
              <i class="el-icon-shopping-cart-2"></i>
              購物車
                    <el-badge v-show="$store.state.ItemList.length" :value="$store.state.ItemList.length" class="ms-2 pb-2 item">
                    </el-badge>
            </el-menu-item>

          
          <el-menu-item index="mylove" class="mylove" ><i class="el-icon-star-off"></i> 我的最愛</el-menu-item>
          <el-menu-item index="myOder">訂單管理</el-menu-item>
          <!-- <el-menu-item index="4" disabled>尚未新增</el-menu-item> -->
              <el-input
                v-model="inputValue"
                placeholder="請輸入内容"
                prefix-icon="el-icon-search"
                class="el_input my-auto head_input "
                
                @keyup.enter.native="submit"
                >
              </el-input>

          </el-menu>
          <div class="wrap" v-show="isPath">
            <button class="btn" @click="callSort(2)">價格低到高<i class="el-icon-caret-top"></i></button>
            <button class="btn" @click="callSort(1)">價格高到低<i class="el-icon-caret-bottom"></i></button>
          </div>

          
    </div>
    
    
</template>

<script>
export default {
    name:'Header',
     data() {
      return {
        itemValue:1,
        activeIndex1: '1',
        inputValue: '',
        sortType:0, //0原本順序 1降序 2升序
        isPath:false,
        aa:''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log('切換的路由名稱為 : ',key)
      },
      submit(){
              if(this.inputValue != ''){
                this.$store.commit('SEARCHVALUE',this.inputValue)
                this.$router.push({path:'/itemSearch'})
            }
      },
      callSort(value){
        this.$store.commit('SORTLIST',value)

      },
    },
    mounted(){
        //第一次載入時畫面時,如果localStorage為空,則不沒有動作,如果有資料就載入
        if(localStorage.getItem('todos') != null){
            //有資料
            this.$store.state.ItemList = JSON.parse(localStorage.getItem('todos'))
        }
        if( this.$route.path === "/home" || this.$route.path === "/bugLife" || 
            this.$route.path === "/shoppingCart" || this.$route.path === "/checkout"|| 
            this.$route.path === "/odercheck" || this.$route.path === "/myOder" || this.$route.path === "/mylove" ){
            this.isPath = false
        }else{
           this.isPath = true
        }

    },
    watch:{
      '$route' (to, from){
          if( to.path === "/home"|| to.path === "/bugLife" || to.path === "/shoppingCart" || 
              this.$route.path === "/checkout"  || this.$route.path === "/odercheck" || to.path === "/myOder" || this.$route.path === "/mylove" ){
              this.isPath = false
          }else{
            this.isPath = true
          }
        
      }
    },

}
</script>

<style scoped>

  .wrap{
    display: flex;
    background-color: #e8eceb;
    height: 50px;
    justify-content: center;
  }
  .el-menu-demo{
    display: flex;
    justify-content: center;
    
    
  }


  .bug-logo{
    height: 60px;
    width: 60px;
    border-radius: 45%;
   
  }

  .el_input{
    width: 250px;
    margin-left: 50px;
  }

.el-menu.el-menu--horizontal{
  border: none;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  color: #f00;
}
  @media screen and (max-width:767px) {
    .nav{
      width:100%;
      padding-bottom: 25px;
    }
    .head_input{
      margin: auto;
    }
    .mylove{
      margin: auto;
    }
  }
  @media screen and (max-width:992px) {
    
  }
</style>