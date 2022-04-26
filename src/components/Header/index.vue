<template>
    <div>
                <el-menu
                :default-active="activeIndex1"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                router
                
                active-text-color="#ffd04b">
                <el-menu-item index="home">首頁</el-menu-item>
                <el-menu-item index="bugLife">甲蟲的一生</el-menu-item>
                <el-submenu index="3">
                    <template slot="title">甲蟲</template>
                    <el-menu-item index="StagBeetle">鍬形蟲</el-menu-item>
                    <el-menu-item index="dynastinae">兜蟲</el-menu-item>
                    <el-menu-item index="cetoniaAurata">花金龜</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">甲蟲食材</template>
                    <el-menu-item index="jelly">果凍</el-menu-item>
                    <el-menu-item index="wood">皿木</el-menu-item>
                    <el-menu-item index="sawdust">木屑</el-menu-item>
                    <el-menu-item index="humus">腐質土</el-menu-item>
                    <el-menu-item index="nutrition">營養添加補充</el-menu-item>
                    <el-menu-item index="bacteriaBottle">菌瓶</el-menu-item>
                </el-submenu>

                  <el-badge :value="$store.state.ItemList.length" class="item">
                    <!-- <el-button size="small">评论</el-button> -->
                        <el-menu-item index="shoppingCart">購物車</el-menu-item>
                  </el-badge>

                <!-- <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item> -->
                <!-- <el-menu-item index="4" disabled>尚未新增</el-menu-item> -->
                </el-menu>

    </div>
  
    
</template>

<script>
export default {
    name:'Header',
     data() {
      return {
        itemValue:1,
        activeIndex1: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log('切換的路由名稱為 : ',key)
      },

    }
}
</script>

<style>
  .el-menu-demo{
    display: flex;
    justify-content: right;
  }
</style>