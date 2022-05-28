<template>
        <!-- style="background-color: #cbf1fd;" -->
            <!-- <el-timeline >
               
            </el-timeline>   -->
             <div class="wrap">
                    <div class="container main-content ">
                        <div class="item mx-auto">
                            <div class="pic">
                                <img src="./images/egg.jpg">
                            </div>
                            <div class="txt">
                                <h2>甲蟲的卵，是甲蟲生命的開始…</h2>
                                <p>當公母交配後，將母蟲放入牠們喜歡的產房之後，母蟲便會開始在接近底部之處開始產卵；若產房是透明的，拿起產房有機會可以在底部及底部側邊看到卵或幼蟲。</p>
                            </div>
                        </div>
                        <div class="item mx-auto">
                            <div class="pic">
                                <img src="./images/larva.jpg">
                            </div>
                            <div class="txt">
                                <h2>幼蟲期是個重要的過程與關鍵</h2>
                                <p>幼蟲成長過程會蛻三次皮，每次增加一齡。隨著蟲齡的增加，幼蟲所需求的食物與空間都會增加。所以幼蟲時期的飼養環境及食材，才是影響牠們羽化為成蟲時個體大小的重要因素。</p>
                            </div>
                        </div>
                        <div class="item mx-auto">
                            <div class="pic">
                                <img src="./images/pupa.jpg">
                            </div>
                            <div class="txt">
                                <h2>甲蟲的蛹，漸漸具有成蟲的雛形</h2>
                                <p>三齡幼蟲(終齡幼蟲)在化蛹前會先蠕動身體，壓緊周遭的土壤成為橢圓形的蛹室。根據其犄角的有無，即可辨其雌雄。</p>
                            </div>
                        </div>
                        <div class="item mx-auto">
                            <div class="pic">
                                <img src="./images/adultWorm.jpg">
                            </div>
                            <div class="txt">
                                <h2>甲蟲的最終型態</h2>
                                <p>雖然有著凶猛的外型，但所有的鍬形蟲都是完全素食者，一生以吸取樹木汁液、或水果為生。多數的鍬形蟲喜歡聚集在殼斗科植物，因為會分泌甜美的樹枝，在台灣中海拔是常見的樹種。</p>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    name:"BugLife",
}
</script>

<style scoped>

 
    .wrap{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 50px 0;
        /* background: url(https://picsum.photos/1920/1080/?random=64) fixed center center / 100% 100%; */
        background: url( https://i.picsum.photos/id/502/1920/1080.jpg?hmac=Ul5I28Qag5jfJZ0RQUZIDYyMj6DX4XpsKnkgWd85SGE) fixed center center / 100% 100%;
          
    }
    .container{
        width: 1200px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }
    .item{
        width: 100%;
        /* width: 1198px; */
        margin: 0 15px;
        display: flex;
        background-color: rgba(255,255,255,.7);
        backdrop-filter: blur(3px);
        border: 1px solid #888;
        box-shadow: 0 10px 30px rgba(5, 5, 5, 0.8);
        font-family: 'Noto Sans TC', sans-serif;
        margin: 15px;
    }
    .item .pic{
        height: 300px;
        width: 300px;
    }
    .item .pic img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
    .item .txt{
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
    }
    .item .txt h2{
        margin-bottom: .4em;
        font-weight: 700;
    }
    .item .txt p{
        font-weight: 300;
    }
    .item .txt .btn{
        line-height: 1.5em;
        border: 1px solid #ccc;
        padding: 0 1em;
        align-self: flex-end;
        text-decoration: none;
        border-radius: 200px;
        margin-top: auto;
        color: #aaa;
    }
    .item .txt .btn:hover{
        background-color: #ccc;
        color: #fff;
    }
    @media screen and (max-width:767px) {
          .wrap .container{
              width: 325px;
          }
          .item{
              display: flex;
              margin: 0;
              flex-wrap: wrap;
              margin-top: 50px;
          }
          .item h2{
              width: 250px;
          }
          .item p{
              width: 250px;
              font-size: 21px;
              padding: 9px;
              text-align: left;
          }

      }
</style>