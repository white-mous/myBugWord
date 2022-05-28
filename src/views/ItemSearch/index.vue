<template>

    <div class="BGC">
        <div class="container pb-4" >
            <div class="row ">
                    <div class="col-6 col-md-2 mt-5 mb-3 item" v-for="item in $store.state.filterList" :key="item.id">
                    <div class="card">
                        <img :src="item.url" class="card-img-top" alt="...">
                        <div class="card-body" >
                            <h5 class="card-title">{{item.name}}</h5>
                            <p class="card-text">${{item.price}}</p>
                        </div> <!-- 以下有兩個功能,分別為購物車及我的最愛  -->
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item ">
                                    <el-row :gutter="10">              
                                        <el-col :span="20"><button class="el-icon-shopping-cart-2 bt" @click="call(item.id,item.name,item.price,item.url,item.done)" > 加入購物車</button></el-col>
                                        <el-col :span="4"><button class="el-icon-star-off my-love "></button></el-col>
                                    </el-row>
                                </li>
                            </ul>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name:'StagBeetle',
    data(){
        return{

        }
    },
    methods:{
		//加入購物車功能
        call(id,name,price,url,done){

            let result = this.$store.state.ItemList.some(item=>{
                if(item.name == name ){
                    //找到該數據是在數組中第幾個位置
                    let ItemIndex = this.$store.state.ItemList.indexOf(item)
                    //將index傳給mutations
                    this.$store.commit('CHANGECOUNT',ItemIndex)
                    return true 
                }
            })
            if (result){
                // console.log('資料中已經有了 : ',name)
            }else{  
                let itemCount = 1
                // console.log("資料中沒有重複,已將資料添加進數組中 : ",name)
                this.$store.commit('ADDITEM',{id,name,price,url,itemCount,done})
            }

        }
    },
    mounted(){
        this.$store.commit('ADDLIST',this.$store.state.filterList)

    },
    //監視商品清單,如果內容發生變動則更新LocalStorage的內容
    watch:{
       '$store.state.ItemList':{
           deep:true,
           handler(value){
                //如果state的清單沒資料就清空
                if(this.$store.state.ItemList.length == 0){
                    localStorage.clear()
                }else{
                    //更新localStorage
                    localStorage.setItem('todos',JSON.stringify(value))
                }
           }
       }
    }

}
</script>

<style scoped>

.item{
    margin-right: 110px;
}

.BGC{
    background-color: #f7f7f7;
}

img{
    height: 195px;
    /* width: 135px; */
    
}
.card-title{
    height: 60px;
    font-size: 15px;
    
}

.card-text{
    color:  #d7503d;
}

.card:hover img{
    transform: scale(.9);
    transition: .6s ease-in-out;
}

.bt{
    background-color: transparent ;
    height: 30px;
    width: 130px;
    border: 2px solid #ccc;
    border-radius: 10px;
    
}

.bt:hover{
    background-color: #f18678;
}
.btn{
    text-align: center;
    color: #d7503d;
    width: 120px;

}

.my-love{
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 50%;
    font: inherit;

}
.my-love:hover{
    background-color: #ff0;
}

  @media screen and (max-width:767px) {

    .item{
         margin-right: 0px;
      }
    .item .bt{
        font-size: 14px;
        width: 110px;
    }
    .item .my-love{
        font-size: 13px;
        width: 25px;
    }
 
  }
</style>
