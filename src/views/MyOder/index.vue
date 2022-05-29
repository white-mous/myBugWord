<template>
    <div class="BGC container" >
        <div class="row" v-if="haveOder">   
            <div class="col-12"  >
              <h1>Order #{{$store.state.info[0].oderCode}}</h1>
              <p class="mainText">訂單 #{{$store.state.info[0].oderCode}} 已於{{$store.state.info[0].date}} 下達，目前正在準備中。如果您有任何問題，請隨時與我們聯繫，我們的客戶服務中心 24H 全天候為您服務。</p>
            </div>
            <div class="main-content">
              <div class="col-8 mx-auto">
                <template >    
                      <h4 class="title ">訂單摘要</h4>
                      <el-table
                        :data="$store.state.copyItemList"
                        style="width: 100%"
                        >
                        <el-table-column
                          prop="url"
                          label="商品"
                          width="180">
                          <template slot-scope="scope">
                            <img :src="scope.row.url" alt="" style="width: 50px;height: 50px">
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="名稱"
                          width="335">
                        </el-table-column>
                        <el-table-column
                          prop="itemCount"
                          sortable
                          label="數量"
                          width="140"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="price"
                          sortable
                          label="價格"
                          width="200"
                          >
                        </el-table-column>
                      </el-table>
                </template>
              </div>
              <div class="col-8 mx-auto">
                    <template>    
                      <el-table
                        :data="$store.state.info"
                        style="width: 100%"
                        >
                        <el-table-column
                          prop="customerName"
                          label="名稱"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          prop="adress"
                          label="地址"
                          width="230"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="email"
                          label="信箱"
                          width="265">
                        </el-table-column>
                        <el-table-column
                          prop="customerPhone"
                          label="電話號碼"
                          width="180"
                          >
                        </el-table-column>

                      </el-table>
                </template>
              </div>
              <div class="col-8 mx-auto">
                <template class="price">
                      <el-table
                        :data="$store.state.totalValue"
                        style="width: 100%"
                        >
                        <el-table-column
                          
                          prop="sum"
                          label="金額"
                          width="855">
                        </el-table-column>
                      </el-table>
                </template>
              </div>
              <div class="space"></div>
            </div>


            <div class="col-12 wrap footerContent">
                <div class="item" >
                      <h1 class="el-icon-truck"></h1>
                      <h5>免費送貨和退貨</h5>
                      <p>滿$800免運費</p>
                </div>
                <div class="item">
                      <h1 class="el-icon-time"></h1>          
                      <h5>退款保證</h5>
                      <p>非生物30天退款保證</p>
                </div>
                <div class="item">
                      <h1 class="el-icon-medal-1"></h1>
                      <h5>總是最優惠的價格</h5>
                      <p>最優惠的價格</p>
                </div>
                <div class="item">
                      <h1 class="el-icon-service"></h1>
                      <h5>(02)1234-5678</h5>
                      <p>24H 全天候支持</p>
                </div>
             </div>       
        </div>
       <div class="row" v-else >
              <div class="col-12 second-content" >
                  <h1>Order </h1>
                  <p class="mainText">目前沒有訂單。</p>
            </div>
       </div>
    </div>
    
</template>

<script>


  export default {
    data() {
      return{
          haveOder:false
      }
    },
    created(){
          if(this.$store.state.info.length == 0){
                    //第一次載入時畫面時,如果localStorage為空,則不沒有動作,如果有資料就載入    <h1>Order </h1>
                    if(localStorage.getItem('customerInfo') != null){
                        this.$store.state.info = JSON.parse(localStorage.getItem('customerInfo'))               
                    }
                }else{
                    //更新localStorage
                    localStorage.setItem('customerInfo',JSON.stringify(this.$store.state.info))
                }

         if(localStorage.getItem('customerInfo') != null){
                  this.haveOder = true
          }
    },
    beforeMount(){

                //判斷totalValue有沒有資料
                if(this.$store.state.totalValue.length == 0){
                    //第一次載入時畫面時,如果localStorage為空,則不沒有動作,如果有資料就載入
                    if(localStorage.getItem('price') != null){
                        //有資料
                        //  alert("有資料")
                        this.$store.state.totalValue = JSON.parse(localStorage.getItem('price'))
                    }
                }else{
                    //更新localStorage
                    localStorage.setItem('price',JSON.stringify(this.$store.state.totalValue))
                }

                              
                if(this.$store.state.copyItemList.length == 0){
                    //第一次載入時畫面時,如果localStorage為空,則不沒有動作,如果有資料就載入
                    if(localStorage.getItem('copytodo') != null){
                        //有資料
                        this.$store.state.copyItemList = JSON.parse(localStorage.getItem('copytodo'))
                    }
                }else{

                    //更新localStorage
                    localStorage.setItem('copytodo',JSON.stringify(this.$store.state.copyItemList))
                }

            }
  }
</script>
<style scoped >

  .title{
    background-color: #ccc;
    margin-top: 50px;
    padding: 5px;
  }
   .BGC H1{
     margin-top: 50px;
     text-align: left;
   }
   
  .mainText{
    margin-top: 100px;
    font-size: 24px;
    border: 1px solid #ccc;
    padding: 15px;
  }

 
  .space{
    display: flex;
    margin: 25px 0 ;
    min-height: 50px;
  }
  .wrap{
    display: flex;
    margin-bottom: 100px;
    background-color: rgb(231, 229, 229);
    justify-content: center;
  }

  .item{
    padding: 50px 0;
    margin: 0px 50px;
  }

  .second-content{
    min-height: 500px;
  }

 @media screen and (max-width:992px) {
  
  .mainText{
     margin-top: 50px;
     text-align: left;
     font-size: 25px;
     padding: 5px;
   }
   .item{
     width: 150px;
     height: 260px;
   }

   .footerContent{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0;
   }
   .bi-currency-exchange{
     width: 34px;
     height: 34px;
   }
 }

  @media screen and (max-width:767px) {

   .mainText{
     margin-top: 50px;
     text-align: left;
     font-size: 25px;
     padding: 5px;
   }
   .footerContent .item{
     margin: 20px;
   }
 }  
</style>