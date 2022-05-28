<template>

    <div class="BGC">
        <div class="container pb-4" v-if="haveLoveitem" >
            <div class="row ">
                    <div class="col-6 col-md-2 mt-5 mb-3 item" v-for="item in $store.state.LoveList" :key="item.id">
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
                                        <el-col :span="4"><button class="el-icon-close DeleteBtn" @click="handleDelete(item.name)"></button></el-col>
                                    </el-row>
                                </li>
                            </ul>
                    </div>
                    </div>
            </div>
        </div>
        <div class="container hidecontent" v-else>
            <h1>尚未新增內容</h1>
        </div>
    </div>
</template>


<script>

export default {
    name:'StagBeetle',
    data(){
        return{
            haveLoveitem:false,
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

        },
        //刪除商品前先跳出提示視窗
        handleDelete(name){
                    this.$confirm('將從最愛移除, 是否繼續?', '提示', {
                        confirmButtonText: '確定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!',                     
                        })
                        this.$store.state.LoveList.some(item=>{
                            if(item.name == name ){
                                //找到該數據是在數組中第幾個位置
                                let ItemIndex = this.$store.state.LoveList.indexOf(item)
                                //將index傳給mutations
                                this.$store.commit('DELETELOVE',ItemIndex)
                                localStorage.setItem('loveitme',JSON.stringify(this.$store.state.LoveList))
                            }
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
        }
    },
    mounted(){
        this.$store.commit('ADDLIST',this.$store.state.filterList)

    },
    created(){
        if(this.$store.state.info.length == 0){
                    //第一次載入時畫面時,如果localStorage為空,則不沒有動作,如果有資料就載入    <h1>Order </h1>
                    if(localStorage.getItem('loveitme') != null){
                        this.$store.state.LoveList = JSON.parse(localStorage.getItem('loveitme'))               
                    }
                }else{
                    //更新localStorage
                    localStorage.setItem('loveitme',JSON.stringify(this.$store.state.LoveList))
                }
        // 如果本地儲存沒資料，則顯示為新增內容的畫面
        if(localStorage.getItem('loveitme') != null && localStorage.getItem('loveitme')!='[]'){
                    this.haveLoveitem = true
            }else{this.haveLoveitem = false}
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
    min-height: 700px;
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

.DeleteBtn{
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 50%;
    font: inherit;

}
.my-love:hover{
    background-color: #ff0;
}
.hidecontent{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(250px);
}

  @media screen and (max-width:767px) {

    .item{
         margin-right: 0px;
      }
    .item .bt{
        font-size: 14px;
        width: 110px;
    }
    .item .DeleteBtn{
        font-size: 13px;
        width: 25px;
    }
    .BGC{
        min-height: 500px;
    }
    .hidecontent{
        transform: translateY(200px);
    }
  }

    @media screen and (max-width:992px) {

    .item{
        
         margin-right: 40px;
         width: 200px;
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
