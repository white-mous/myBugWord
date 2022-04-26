<template>
    <div>
        <h1>我的購物車明細</h1>
        <el-divider></el-divider>
        <el-row  :gutter="24">
                    <el-col :span="3"><p></p></el-col>
                    <el-col :span="8"><p>商品</p></el-col>
                    <el-col :span="4"><p>單價</p></el-col>
                    <el-col :span="4"><p>數量</p></el-col>
                    <el-col :span="4"><p>總共</p></el-col>
        </el-row>
        <div>
           
            <ul  v-for="i in $store.state.ItemList" :key="i.name" >

                <el-row class="rowList" :gutter="25">
                     <el-divider></el-divider>
                    <el-col :span="2"> <input type="checkbox" v-model="i.done" @click="checkItem(i.name)" name="" id=""></el-col>    
                    <el-col :span="3"><img :src="i.url"></el-col>             
                    <el-col :span="8"><p>商品名稱 : {{i.name}}</p></el-col>
                    <el-col :span="4"><p>價格 : {{i.price}}</p></el-col>    
                    <el-col :span="4"> <el-input-number v-model="i.itemCount"  :min="1" :max="10"  value="1" label="描述文字"></el-input-number></el-col>
                    <el-col :span="4"><p>價格 : {{i.itemCount*i.price}}</p></el-col>   
                    <el-button class="DeleteBtn"  @click="handleDelete(i.name)" type="danger" icon="el-icon-delete" circle></el-button> 
                    <!-- <el-divider></el-divider>          -->
                </el-row>
            </ul>
        </div>
<!-- itemCount   InputNumber-->
        <el-divider></el-divider>
            <el-row class="gg" v-show="total" :gutter="25">
                    <el-col :span="3"><input v-model="isAll" type="checkbox"  name="" id=""></el-col>
                    <el-col :span="5"><p >總計金額 :   {{toval}} </p></el-col>
                    <el-col :span="5"><p>已勾選 ： {{doneTotal}} ／ 總數量 ： {{total}}</p></el-col>
                    <el-col :span="5"><el-button type="success">我要結帳</el-button></el-col>
                    <el-button @click="clearAllTodo" type="danger">刪除勾選項目</el-button>
                    <el-divider></el-divider>
            </el-row>       
            <div v-show="!total" style="min-height: 530px;">
            </div>
        <el-divider></el-divider>
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
                

            
        }

    },
    //每次畫面變化都會更新總金額
    updated(){
         
            let sum = 0
            this.$store.state.ItemList.forEach(i=>{
                sum+=(i.price*i.itemCount)
            })
            this.toval = sum     
    },
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

<style>
    .ab{
        /* display:flex; */
        text-align: center;
        justify-content: center;
        border-style: ridge;

    }
    .ab li{
        /* line-height: 150px; */
        justify-content: center;
        align-content: center;
        text-align: center;
        margin-left: 50px ;
         
    }
    .rowList:hover{
        background-color: #ddd;
    }
    .DeleteBtn{
           display: none;
    }
    .rowList:hover .DeleteBtn{
           display: block ;
    }
    .gg{
        min-height: 326px
    }
</style>