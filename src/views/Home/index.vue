<template>

  <div class="main-content">
      
      <!-- 輪播圖 -->
      <!-- <el-carousel :interval="5000" arrow="always" height="450px" class="bugCarousel">
        <el-carousel-item v-for="item in carouselImg" :key="item.src"  >
          <img :src="item" alt=""  >
        </el-carousel-item>
      </el-carousel> -->

    <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col banner-txt my-5">
                <h1>蟲蟲星球
                    <small>
                        讓人著迷的甲蟲世界
                    </small>
                </h1>
                <h3>
                    專業甲蟲飼育繁殖中心
                </h3>
  
              </div>
            </div>
        </div>
    </div>

  
    <div class="BGC">
      <div class="txt-wrap row">
          <div class="txt-container ">
              <h1>銷量排行榜</h1>
          </div>
      </div>
      <div class="wrap container">
        <div class="row">
          <div class="item col-4 col-md-1 " @click="changeRoute(1)">
              <img src="./images/SrZhDz.jpg">
              <div class="txt">
                  <h2>甲蟲成蟲專用水苔</h2>
                  <p>*防止成蟲因翻倒而死</p>
                  <p>*噴水之後有保濕效果</p>
                  <p>*美化成蟲飼養環境</p>
                  <span>已售出 : 2,236</span>
              </div>
          </div>
          <div class="item col-4 col-md-1 " @click="changeRoute(2)">
              <img src="./images/pd15_011b.jpg">
              <div class="txt">
                  <h2>活菌兜蟲專用土</h2>
                  <p>*100%優質闊葉木屑發酵</p>
                  <p>*添加特殊營養劑 效果超讚 !!</p>
                  <p>*特殊發酵劑超熟發酵而成</p>
                  <span>已售出 : 3,546</span>
              </div>
          </div>
          <div class="item col-4 col-md-1 " @click="changeRoute(3)">
              <img src="./images/jelly.jpg" >
              <div class="txt">
                  <h2>綜合果凍(四種口味)-40入</h2>
                  <p>*昆蟲所需蛋白質、維生素、礦物質及脂肪</p>
                  <p>*更能促進母蟲繁殖產卵</p>
                  <p>*適合鍬形蟲及兜蟲之長期飼育</p>
                  <span>已售出 : 895</span>
              </div>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="container">
            <div class="row featurette ">
              <div class="col-md-6 ">
                <h2 class="featurette-heading">鍬形蟲（學名：Lucanidae、英語：stag beetle)是鍬形蟲科昆蟲的總稱</h2>
                <p class="lead">全世界約有有100屬1,300種[3]。雄蟲通常有誇張美觀，且像角的大顎，並非用來咀嚼食物，其用途為對抗天敵與打鬥及爭奪食物、地盤或異性。雌性個體大顎較短，主要的功用是用來在腐木挖掘洞穴產卵。待產卵的雌蟲甚至會為攝取養份而進食肉類（昆蟲屍體或朽木中其他幼蟲）。天敵為鳥類及真菌等。</p>
              </div>
              <div class="col-md-6">
                <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
                <img src="./images/stag-beetle.jpg" alt="鍬形蟲" class="bugImg">
              </div>
            </div>
      </div>
      <el-divider></el-divider>
      <div class="container">
        <div class="row featurette">
          <div class="col-md-6 order-md-2">
            <h2 class="featurette-heading">兜蟲亞科（Dynastinae），為鞘翅目金龜子科的其中一個甲蟲亞科</h2>
            <p class="lead">成員裡的雄性成蟲大多都擁有或大或小的犄角，也因此吸引了許多收藏家爭相收藏，如目前已知最長的甲蟲長戟大兜蟲和廣為人知的獨角仙等......在開發較少的鄉間和山區都能見到其蹤跡，海拔分布從平地一直到高海拔山區都有。</p>
          </div>
          <div class="col-md-6 order-md-1">
            <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
            <img src="./images/rhino-beetle.jpg" alt="兜蟲" class="bugImg">
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="container">
          <div class="row featurette">
            <div class="col-md-6 txt-item">
              <h2 class="featurette-heading">金花金龜（學名：Cetonia aurata），又名玫瑰金龜子，是一種金龜子</h2>
              <p class="lead">是一種金龜子。金花金龜長約20毫米，呈金屬綠色、青銅色、銅色、紫色、藍黑色或灰色。小楯片呈V形，翅鞘間的細小三角形緊接在胸部以下，並有不規則的白紋，下身呈銅色。金花金龜將翅鞘下垂，就可以快速的飛行。牠們吃花、花蜜及花粉，特別鍾情於玫瑰，在5-7月間溫暖的晴天很多時都可以玫瑰上見到牠們。</p>
            </div>
            <div class="col-md-6">
              <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
              <img src="./images/Cetonia-aurata.jpg" alt="花金龜" class="bugImg">
            </div>
          </div>
      </div>
      <el-divider></el-divider>

      <div class="container">
        <div class="row">
            <el-container style="display:flex;">
              <p class="map-font mx-auto " >歡迎親自光臨</p> 
              <p style="background-color: #cdcfcc; border-radius: 20px; width: 10px;"></p>
              <el-main>
              <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5480.930527274389!2d121.52954656192753!3d25.0317156145406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97f889dd687%3A0x2004d9828914490a!2z5aSn5a6J5qOu5p6X5YWs5ZyS56uZ!5e0!3m2!1szh-TW!2stw!4v1652775752636!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </el-main>
            </el-container>
        </div>
      </div>
        
    
    </div>

</div>

  

</template>

<script>

export default {

    name:'Home',
    data(){
      return{
        
        carouselImg:[
          // require('./images/Carousel-Cetonia-aurata.jpg'), <!-- this.$router.push({path:'/itemSearch'}) changeRoute-->
          require('./images/Carousel-Cetonia-aurata.jpg'),
          require('./images/Carousel-rhinoceros-beetle.jpg'),
          require('./images/Carousel-stag-beetle.jpg'),
        ]
      }
    
    },
    methods:{
      changeRoute(value){
        if(value == 1 ){
          this.$router.push({path:'/sawdust'})
        }else{
          (value=== 2) ? this.$router.push({path:'/humus'}) : this.$router.push({path:'/jelly'})
        }
      }
    },
}
</script>

<style scoped>
 

  .BGC{
      padding-top: 80px;
      background: url(./images/matthew.jpg) fixed center center / 100% 100%;
  }
  .bugImg{
    width: 600px;
    height: 400px;
  }
  .BGC .wrap .item{
    padding: 0;
  }
  .wrap{
      padding-top: 50px;
      width: 1200px;
      display: flex;
      margin: auto;
  }
    
  .item{
      width: 366px;
      margin: 50px 50px;
      /* margin: 15px; */
      text-align: center;
      background-color: #fff;
      border: 1px solid #ccc;
      transform: translateY(0px);
      transition:.5s;
  }
  .item img{
      width: 100%;
      vertical-align: middle;
      height: 400px;
      
  }
  .item h2{
      border-bottom: 1px solid #888;
      padding-bottom:  .3em;
      margin-bottom: .4em;
      font-weight: 700;
      font-size: 26px;
      transition:.25s;
      background-color: transparent;
  }
  .item p{
      line-height: 1.6;
      font-weight: 300;
      transition:.25s;
      background-color: transparent;
  }
  .item span{
    color: #d7503d;
    display: flex;
    justify-content: flex-end;
  }
  .item .txt{
      padding: 20px;
      position: relative;
      
  }
  .item .txt:before{
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      /* transparent透明 */
      border-top: 50px solid transparent;
      transform: translateY(-100%);
  }
  .item:hover{
      transform: translateY(-50px);
  }
  .item:hover .txt{
      background-image: linear-gradient(0deg,#4ca1af ,#c4e0e5)
  }
  .item:hover .txt::before{
      border-left: 182px solid #c4e0e5;
      border-right: 182px solid #c4e0e5;
  }
  .item:hover h2{
      color: #fff;
      border-bottom-color: #fff;
      background-color: transparent;
  }
  .item:hover p{
      color: #fff;
      background-color: transparent;
  }
  .item:hover span{
    color: rgb(233, 240, 135);
  }

  /* 輪播圖 */
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;

    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #e8eceb;
    }
    .el-carousel__item:nth-child(2n+1) {
      background-color: #e8eceb;
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
      align-content: center;
      justify-content: center;
      padding: 50px;
      line-height: 24px;
      letter-spacing: 5px;
       font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","",Arial,sans-serif;
    }
    .bug p::first-letter{
        font-size:38px;
        

    }
  /* 地圖 */
    .map{
      width: 1200px;
      
    }
    .map-font{
      color: #fff;
      font-size:36px;
      letter-spacing: 20px;
      writing-mode: vertical-lr;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","",Arial,sans-serif;
    }


.txt-container{
    width: 1200px;
    margin: auto;
    text-align: center;

}
.txt-container h1{
    width: 100%;
    box-sizing: border-box;       
    font-size: 70px;
    color: #fff;
    margin-bottom: 0.5em;
    display: flex;
    
}
.txt-container h1::before,
.txt-container h1::after{
    content: '';
    display: block;
    height: 5px;
    width: 4em;
    /* 自動填滿 */
    flex-grow: 1;
    background-color: #aaa;
    margin: auto;
}
.txt-container h1::before{
    margin-right: .5em;
}
.txt-container h1::after{
    margin-left: .5em;
}
.txt-container .txt{
    flex-shrink: 0;
    box-sizing: border-box; 
    color: #fff; 
    
}
.txt-container .txt p{
    margin-bottom: 1em;
}

.featurette h2{
    color: #fff;
}
.featurette img{
    border: 2px solid #fff;
    border-radius: 50%;
}
.featurette p{
    color: rgb(236, 236, 236);
}

.banner{
    width: 100%;
    height: 70vh;
    position: relative;
    /* height: 700px; */
    background-color: #ccc;
    background: 
        linear-gradient(120deg,#b3eeca 48%,transparent 48%) center center 
        / 100% 100%,
        url("./images/beetle.png") right center / auto 100%
}
.container{
    width: 100%;
    max-width: 1440px;
    height: 100%;
    margin: auto;

}
.banner-txt{
    height: 100%;
    display: flex;
    /* 讓顯示為垂直的 */
    flex-direction: column;
    /* 置中 */
    justify-content: center;
    align-items: flex-start;
}
.banner-txt h1{
    font-size: 80px;   
    font-weight: 900; 
    padding-bottom: .3em;
    margin-bottom: .3em;
    
  }
.banner-txt small{
  text-align: right;
  font-size: 53px;
  transform: translateX(100px);
  border-bottom: 1px solid #333;
}
.banner-txt h1 small{
    /* 換行 */
    display: block;
}
.banner-txt h3{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 50px;
    font-weight: 700;
    color: #fff;
}
.banner-txt p{
    font-size: 20px;
    font-weight: 300;
}
 

   @media screen and (max-width:992px) {
     .banner{
          background: 
        linear-gradient(30deg,#b3eeca 25%,transparent 25%) center center 
        / 25% 100%,
        url("./images/beetle.png") center center / auto 95%;
    }
    .banner-txt h1{
      margin-top: 20px;
      text-align: left;
      transform: rotate(25deg);
      color: #fff;
    }
    .banner-txt small{
      width: 40px;
      font-size: 30px;
      transform: rotate(-25deg);
      border-bottom: 0px;
      color: #fff;
    
    }
    .banner-txt h3{
      color: #888;
    }

  
    .BGC .wrap .item{
       margin: auto;
       margin-top: 50px;
    }
    .txt-wrap {
      width: 100%;
    }
    .txt-container h1{
      margin: 0 10px;
      font-size:43px;
    }
    .txt-container h1::before,
    .txt-container h1::after{
        height: 6px;
        width: 2em;
        margin: auto;
    }
    .wrap .row .item {
      width: 290px;
      height: 560px;
    }
    .wrap .row .item img{
      height: 260px;
      width: 100%;
    } 

    .featurette img{
      width: 350px;
      height: 350px;
    }
    
    .map-font p{
      
      display: flex;
      flex-direction: row;
      width: 350px;
    }
    .map{
      height: 320px;
    }
   }

   @media screen and (max-width:767px) {

    .banner{
          background: 
        linear-gradient(30deg,#b3eeca 20%,transparent 20%) center center 
        / 25% 100%,
        url("./images/beetle.png") center center / auto 85%;
    }
    .banner-txt h1{
      margin-top: 20px;
      font-size: 40px;
      text-align: left;
      transform: rotate(14deg);
      color: #fff;
    }
    .banner-txt small{
      width: 40px;
      font-size: 23px;
      transform: rotate(-24deg);
      border-bottom: 0px;
      color: #fff;

    }
    .banner-txt h3{
      font-size: 28px;  
      margin: auto;
      color: #888;
    }

  
    .BGC .wrap .item{
       margin: auto;
       margin-top: 50px;
    }
    .txt-wrap {
      width: 100%;
    }
    .txt-container h1{
      margin: 0 10px;
      font-size:43px;
    }
    .txt-container h1::before,
    .txt-container h1::after{
        height: 6px;
        width: 2em;
        margin: auto;
    }
    .wrap .row .item {
      width: 290px;
    }
    .wrap .row .item img{
      height: 260px;
      width: 100%;
    } 

    .featurette img{
      width: 150px;
      height: 150px;
    }
    
    .map-font p{
      
      display: flex;
      flex-direction: row;
      width: 350px;
    }
    .map{
      height: 320px;
    }
  }
</style>