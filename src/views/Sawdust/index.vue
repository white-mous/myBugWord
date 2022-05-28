<template>


    <div class="BGC">
        <div class="container pb-4" >
            <div class="row ">
                    <div class="col-6 col-md-2 mt-5 mb-3 item" v-for="item in list" :key="item.id">
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
                                        <el-col :span="4"><button class="el-icon-star-off my-love "  @click="addlove(item.id,item.name,item.price,item.url,item.done)"></button></el-col>
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
    name:'sawdust',
    data(){
        return{
            list:[
                {
                    id:1,
                    name:'【超級V2】強效木屑-5L',
                    price:200,
                    url:'https://www.beetles.com.tw/product/pd06/pd06_051.jpg',
                    done:false,
                },
                {
                    id:2,
                    name:'微粒子發酵木屑-黃包',
                    price:150,
                    url:'https://www.beetles.com.tw/product/pd06/pd06_038.jpg',
                    done:false,
                },
                {
                    id:3,
                    name:'【技】大夢超級技術木屑',
                    price:280,
                    url:'https://www.beetles.com.tw/product/pd06/pd06_208.jpg',
                    done:false,
                },
                {
                    id:4,
                    name:'【玉】大夢超級產卵木屑',
                    price:220,
                    url:'https://www.beetles.com.tw/product/pd06/pd06_207.jpg',
                    done:false,
                },
                {
                    id:5,
                    name:'AK木屑（AK D土）',
                    price:300,
                    url:'https://www.beetles.com.tw/product/pd06/pd06_068.jpg',
                    done:false,
                },
                {
                    id:6,
                    name:'優質櫟木發酵木屑5L(買一送一=二包)',
                    price:150,
                    url:'https://www.beetles.com.tw/product/pd06/pd06_202.jpg',
                    done:false,
                },
                {
                    id:7,
                    name:'楓香發酵木屑5L-(買一送一=二包)',
                    price:120,
                    url:'https://www.beetles.com.tw/product/pd06/pd06_016.jpg',
                    done:false,
                },
                {
                    id:8,
                    name:'SANKO 特級育成專用 【木屑】 -10L',
                    price:150,
                    url:'https://www.beetles.com.tw/product/pd06/pd06_209.jpg',
                    done:false,
                },
            ]
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
        addlove(id,name,price,url,done){

            let result = this.$store.state.LoveList.some(item=>{
                if(item.name == name ){
                    //找到該數據是在數組中第幾個位置
                    let ItemIndex = this.$store.state.LoveList.indexOf(item)
                    return true 
                }
            })
            if (result){
                // console.log('資料中已經有了 : ',name)
            }else{  
                // console.log("資料中沒有重複,已將資料添加進數組中 : ",name)
                this.$store.commit('ADDLOVE',{id,name,price,url,done})
                this.$message({
                            type: 'success',
                            message: '添加成功!',                     
                })
            }
            

        }
    },
    mounted(){
        this.$store.commit('ADDLIST',this.list)

        if(localStorage.getItem('loveitme') != null){
            //有資料
            this.$store.state.LoveList = JSON.parse(localStorage.getItem('loveitme'))
        }

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
       },
       '$store.state.LoveList':{
           deep:true,
           handler(value){
                //如果state的清單沒資料就清空
                if(this.$store.state.LoveList.length == 0){
                    localStorage.removeItem('loveitme')
                }else{
                    //更新localStorage
                    localStorage.setItem('loveitme',JSON.stringify(value))
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



    @media screen and (max-width:767px) {

    .item{
        
        margin: auto;
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
