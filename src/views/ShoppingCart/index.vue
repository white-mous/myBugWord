<template>

    <div class="BGC" >
        <div class="container">
            <div class="row">
                <div class="step">
                    <el-steps :active="1"   finish-status="success" simple  style="margin-top: 15px">
                    <el-step title="購物車" ></el-step>
                    <el-step title="填寫資料" ></el-step>
                    <el-step title="訂單確認" ></el-step>
                    </el-steps>
                </div>
                <el-divider></el-divider>
                <h1>購物車明細</h1>
                <el-divider></el-divider>
                <div class="row ">  
                            <p class="col-3 me-4"></p>
                            <p class="col-4 ">商品</p>
                            <p class="col-2 ">單價</p>
                            <p class="col-2 ">總共</p>
                </div>
                <div>
                
                    <ul  v-for="i in $store.state.ItemList" class="col-12" :key="i.name" >

                        <el-row class="rowList" >
                            <el-divider></el-divider>
                            <div class="message row">
                                <input type="checkbox" class="checkInput col-1" v-model="i.done" @click="checkItem(i.name)" name="" id="">
                                <img class="col-2" :src="i.url">
                                <p class="col-4">{{i.name}}</p>
                                <p class="col-2">$ {{i.price}}</p> 
                                <p class="col-2">$ {{i.itemCount*i.price}}</p>
                            </div>
                            <el-input-number class="col" v-model="i.itemCount"  :min="1" :max="10"  value="1" label="描述文字"></el-input-number>
                            <el-button class="DeleteBtn"  @click="handleDelete(i.name)" type="danger" icon="el-icon-delete" circle></el-button> 
                       </el-row>
                    </ul>
                </div>
            </div>
                        <p class="paddingbottom"></p>
                        <el-divider></el-divider>
            <div class="row footerContent">
                        <input class="col-2" v-model="isAll" type="checkbox"  name="" id="">
                        <p class="col-5" >總計金額 :   {{toval}} </p>
                        <p class="col-5">已勾選：{{doneTotal}}／總數量：{{total}}</p>
                        <el-button class="col-5 bt" type="success" @click="gotoCheck">我要結帳</el-button>
                        <el-button class="col-5 bt" @click="clearAllTodo" type="danger">刪除勾選項目</el-button>              
            </div>
                        <div v-show="!total" style="min-height: 530px;"> </div>
                        <el-divider></el-divider>
                        <p class="paddingbottom"></p> 
        </div>
    </div>
    
</template>

<script>
export default {
    name:'ShoppingCart',
    data(){
        return{
                toval : 0,
                // 'this.$store.state.ItemList':JSON.parse(localStorage.getItem('todos'))||[]
        }

    },
    
    mounted(){
        //第一次載入時畫面更新總金額
            let sum = 0
            this.$store.state.ItemList.forEach(i=>{ sum+=(i.price*i.itemCount) })
            this.toval = sum
            this.$store.commit('TOTALVALUE',{sum})
        //第一次載入時畫面時,如果localStorage為空,則不沒有動作,如果有資料就載入
        if(localStorage.getItem('todos') != null){
            //有資料
            this.$store.state.ItemList = JSON.parse(localStorage.getItem('todos'))
        }
        
    },
    computed:{
        total(){
            return this.$store.state.ItemList.length
        },
        doneTotal(){
                //判斷清單中幾個商品有勾選
                return this.$store.state.ItemList.reduce( (pre,current)=> pre+(current.done ? 1 : 0) ,0 )
        },
        isAll:{
            get(){
            return this.doneTotal === this.total
            },
            set(value){
                this.$store.commit('CHECKALLTODO',value)
            }
        },
    }
    ,
    methods:{
        //勾選
        checkItem(name){
            this.$store.commit('CHEACKBOX',name)
        },
        //刪除商品前先跳出提示視窗
        handleDelete(name){
                    this.$confirm('將從購物車移除此商品, 是否繼續?', '提示', {
                        confirmButtonText: '確定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!',                     
                        })
                        this.$store.state.ItemList.some(item=>{
                            if(item.name == name ){
                                //找到該數據是在數組中第幾個位置
                                let ItemIndex = this.$store.state.ItemList.indexOf(item)
                                //將index傳給mutations
                                this.$store.commit('DELETEITEM',ItemIndex)
                            }
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
        },
        //刪除已勾選的物品
        clearAllTodo(){
                //至少要有一個勾選才能觸發
                let minCheck =this.$store.state.ItemList.some(i=>{
                    return i.done == true
                    
                })
                //當陣列中只要有一個勾選就能觸發
                if(minCheck){
                    this.$confirm('是否刪除已勾選的商品?', '提示', {
                        confirmButtonText: '確定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                        
                    })
                    this.$store.commit('CLEARALLTODO')
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                    });
                //如果全部都沒勾選則跳提示
                }else{
                    this.$alert('請至少勾選一個商品', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                        type: 'info',
                        message: `已取消删除`
                            })
                        }
                    })
                }
        },
        //前往訂單頁面
        gotoCheck(){
            this.$router.push({path:'/checkout'})
            
        }


    },
    //每次畫面變化都會更新總金額
    updated(){
         
            let sum = 0
            this.$store.state.ItemList.forEach(i=>{
                sum+=(i.price*i.itemCount)
            })
            this.toval = sum     
            this.$store.commit('TOTALVALUE',{sum})
    },
    watch:{
       '$store.state.ItemList':{
           deep:true,
           handler(value){
                //如果state的清單沒資料就清空
                if(this.$store.state.ItemList.length == 0){
                    localStorage.removeItem('todos')
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
    .BGC{
        padding-top: 50px;
        background-color: #f7f7f7;
        min-height: 830px;
    }

    .BGC H1{
        /* display: none; */
        /* margin: auto; */
        text-align: center;
    }

    .paddingbottom{
        padding-bottom: 50px;
    }

    .DeleteBtn{
           display: none;
    }
    .rowList{
        position: relative;
    }
    .rowList:hover{
        background-color: #ddd;
    }

    .rowList:hover .DeleteBtn{
           display: block ;
           position: absolute;
           right: 0;
           top: 0;
    }
    .footerContent{
        justify-content: center;
    }
    img{
        height: 135px;
        width: 135px;
    }
    

    
  @media screen and (max-width:767px) {
    .el-message-box{
        width: 300px;
        background-color: #f00;
    }



    .rowList{
        width: 100%;
    }
    .rowList p{
        display: flex;
        flex-wrap: wrap;
        font-size: 1rem;
    
    }
    .rowList .el-input-number{
        transform: scale(0.8);
    }

    .rowList img{
         height: 80px;
         width: 80px;
      }

    .footerContent{
        display: flex;
        flex-wrap: wrap;
    }
    .footerContent p{
        width: 155px;
        font-size: 13px;
    }
    .footerContent .bt{
        margin: 6px 50px;
        width: 200px;
    }


  }

</style>

<style>
    @media screen and (max-width:767px) {
        .el-message-box{
            width: 80%;
        }
    }
</style>