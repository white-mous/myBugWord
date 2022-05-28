<template>
    <div class="BGC container">
        <div class="row">        
            <div class="col" v-if="$store.state.oderFinish">
              <h1>訂單已確認</h1>
              <p class="txtCheck"><i class="el-icon-circle-check"></i>您的訂單已確認</p>
              <p class="mainText">訂單已確認，謝謝你，{{$store.state.info[0].customerName}}。您的訂單已確認。您的訂單尚未發貨，但我們會在發貨時向您發送一封電子郵件。</p>
              <button class="mybtn" @click="gotoMyOder">查看或管理您的訂單</button>
            </div>
            <div class="col" v-else>
              <h1>目前無訂單</h1>
            </div>
        </div>
    </div>
    
</template>

<script>
  export default {
    data() {
      return{

      }
    },
    methods:{
      gotoMyOder(){
        if(this.$store.state.info[0].oderFinish){
          this.$router.push({path:'/myOder'})
        }
      }
    },


       
    
  }
</script>
<style scoped >
   
  h1{
    text-align: left;
  }
  .txtCheck{
    text-align: left;
    font-size: 24px;
    margin: 2.5rem 0;
    padding: 1.25rem 2rem;
    background-color: #69c17d;
  }
  .mainText{
    margin-top: 200px;
    font-size: 24px;
  }
  .mybtn{
    margin-top: 200px;
    width: 300px;
    height: 50px;
    border: 1px solid #000;
    background-color: transparent;
  }
  .mybtn:hover{
    background-color: #000;
    color: #fff;
    
  }
   @media screen and (max-width:767px) {
     .BGC{
       min-height: 400px;
     }
     .mainText{
       text-align: left;
       padding: 20px;
       margin: 30px 0;
     }
     .mybtn{
       margin: 60px 0;
     }
   }

    @media screen and (max-width:992px) {
      .BGC{
       min-height: 600px;
     }
     h1{
       padding-top: 50px;
     }
     .mainText{
       text-align: left;
       padding: 20px;
       margin: 30px 0;
     }
     .mybtn{
       margin: 60px 0;
     }
    }

</style>