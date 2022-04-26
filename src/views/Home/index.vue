<template>
  <div>
      <!-- 輪播圖 -->
      <el-carousel :interval="5000" arrow="always" height="450px">
        <el-carousel-item v-for="item in carouselImg" :key="item.src"  >
          <img :src="item" alt="" >
        </el-carousel-item>
      </el-carousel>

      <!-- 介紹 -->
      <div class="bug">
          <img class="stag-beetle" src="./images/stag-beetle.jpg"  alt="鍬形蟲">

            <p>鍬形蟲（學名：Lucanidae、英語：stag beetle)是鍬形蟲科昆蟲的總稱，全世界約有有100屬1,300種[3]。雄蟲通常有誇張美觀，且像角的大顎，並非用來咀嚼食物，其用途為對抗天敵與打鬥及爭奪食物、地盤或異性。雌性個體大顎較短，主要的功用是用來在腐木挖掘洞穴產卵。臺灣的鍬形蟲種類有60種，部份種類4月即是成蟲活躍的季節，大多成蟲在5月左右開始出現，在5~7月最活躍。以特定樹木（大多是山毛櫸科植物，或稱殼斗科植物）流出的汁液為食，亦會攝取腐爛的水果，待產卵的雌蟲甚至會為攝取養份而進食肉類（昆蟲屍體或朽木中其他幼蟲）。天敵為鳥類及真菌等。</p>
          </div>
          <el-divider></el-divider>
          <div class="bug">
            <p>兜蟲亞科（Dynastinae），為鞘翅目金龜子科的其中一個甲蟲亞科，成員裡的雄性成蟲大多都擁有或大或小的犄角，也因此吸引了許多收藏家爭相收藏，如目前已知最長的甲蟲長戟大兜蟲、重量感十足的象兜蟲屬、頂著天線的豎角兜蟲屬、亞洲地區最大的牛魔王南洋大兜蟲屬、和廣為人知的獨角仙等......目前在台灣共有九個種，其中以獨角仙(雙叉犀金龜)、蘭嶼姬兜較為人所知，生長的過程由卵、幼蟲、蛹、成蟲，而在幼蟲階段共會經過三個齡期，其中又以三齡的時間最長；以獨角仙為例，一個世代大概需要花上一年的時間，野外成蟲的壽命大約1～3個月。在開發較少的鄉間和山區都能見到其蹤跡，海拔分布從平地一直到高海拔山區都有，近來由於棲地破壞和商業性捕捉，許多國家地區的族群數量減少許多。</p>
            <img class="Dynastinae" src="./images/rhino-beetle.jpg"  alt="兜蟲">
          </div>
          <el-divider></el-divider>
          <div class="bug">
            <img class="Cetonia-aurata" src="./images/Cetonia-aurata.jpg"  alt="花金龜">

            <p>金花金龜（學名：Cetonia aurata），又名玫瑰金龜子，是一種金龜子。金花金龜長約20毫米，呈金屬綠色、青銅色、銅色、紫色、藍黑色或灰色。小楯片呈V形，翅鞘間的細小三角形緊接在胸部以下，並有不規則的白紋，下身呈銅色。金花金龜將翅鞘下垂，就可以快速的飛行。牠們吃花、花蜜及花粉，特別鍾情於玫瑰，在5-7月間溫暖的晴天很多時都可以玫瑰上見到牠們。</p>
        </div>
      
      <el-divider></el-divider>
      
  
      <!-- background-color: #def8d1; -->
      <el-container style=" display:flex;  "  >
        <el-aside width="200px">
          <p class="map-font" >歡迎親自光臨</p> 
        </el-aside>
          <el-aside width="16px" style="background-color: #cdcfcc;">
            
        </el-aside>
        <el-main>
          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9996930469015!2d121.44135991546327!3d25.034084483972293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7dfd07afb8b%3A0xc77045589ddc044!2zMjQy5paw5YyX5biC5paw6I6K5Y2A5Lit5q2j6LevNDM36Jmf!5e0!3m2!1szh-TW!2stw!4v1650432672814!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </el-main>
      </el-container>
      
  
  
  </div>

</template>

<script>

export default {

    name:'Home',
    data(){
      return{
        
        carouselImg:[
          require('./images/Carousel-Cetonia-aurata.jpg'),
          require('./images/Carousel-rhinoceros-beetle.jpg'),
          require('./images/Carousel-stag-beetle.jpg'),
        ]
      }
    }
}
</script>

<style scoped>

  /* 輪播圖 */
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
        
      }
      
      .el-carousel__item:nth-child(2n) {
        background-color: #8aa77b;
      }
      .el-carousel__item:nth-child(2n+1) {
        background-color: #8aa77b;
      }
  /* 介紹 */
    .stag-beetle  {
      height: 384px;
      width: 100%;
    }
    .Cetonia-aurata{
      height: 384px;
    }
    .Dynastinae{
      height: 384px;
    }
    .bug{
      display: flex;
      
    }
    .bug span{
      display: flex;
      /* align-items: center; */
      align-content: center;
      justify-content: center;
      padding: 50px;
      line-height: 24px;
      letter-spacing: 5px;
      /* background-color: #def8d1; */
       font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","",Arial,sans-serif;
    }
    .bug p::first-letter{
        /* font-weight:bold; */
        font-size:38px;

      }
  /* 地圖 */
  .map{
    width: 1200px;
    
  }
  .map-font{
    font-size:36px;
    letter-spacing: 20px;
    writing-mode: vertical-lr;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","",Arial,sans-serif;
  }
  *{
    background-color: #edffe4;
  }
</style>