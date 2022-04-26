<template>
  <div class="lists">
	    <!-- <div class="box"><a href="#">TOP</a></div> -->
	    <div class="productList">
	    <ul>
		    <li  v-for="item in list" :key="item.id">
                <div class="sale">限時優惠</div>
                <img :src="item.url" alt="">
                <div class="middle-content">
                    <h2>{{item.name}}</h2>
                    <span>${{item.price}}</span>
                </div>
                <el-divider></el-divider>
                <el-button class="btn" style="background: #3acef3;"  @click="call(item.id,item.name,item.price,item.url,item.done)" type="primary" round>加入購物車</el-button>	
		    </li>
        </ul> 
    </div> 
  </div>
</template>

<script>
export default {
    name:'Wood',
    data(){
        return{
            list:[
                {
                    id:1,
                    name:'（長條型）16g單孔果凍皿木',
                    price:60,
                    url:'https://www.beetles.com.tw/product/pd05/pd05_152.jpg',
                    done:false,
                },
                {
                    id:2,
                    name:'天然原木-大孔躲藏',
                    price:150,
                    url:'https://www.beetles.com.tw/product/pd05/pd05_050.jpg',
                    done:false,
                },
                {
                    id:3,
                    name:'70g單孔果凍皿木',
                    price:70,
                    url:'https://www.beetles.com.tw/product/pd05/pd05_014.jpg',
                    done:false,
                },
                {
                    id:4,
                    name:'16g雙孔果凍皿木',
                    price:80,
                    url:'https://www.beetles.com.tw/product/pd05/pd05_013.jpg',
                    done:false,
                },
                {
                    id:5,
                    name:'16g單孔果凍皿木',
                    price:40,
                    url:'https://www.beetles.com.tw/product/pd05/pd05_012.jpg',
                    done:false,
                },
                {
                    id:6,
                    name:'天然原木-躲藏平台',
                    price:150,
                    url:'https://www.beetles.com.tw/product/pd05/pd05_053.jpg',
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
       }
    }

}
</script>

<style scoped>

*{
    box-sizing: border-box;
    background-color: #edffe4;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
.middle-content{
  min-height: 80px;
}
.lists{
    min-height: 807px;
}
.btn{
	  margin-top: 9px;

}
img{
  height: 135px;
  width: 135px;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* ---CSS reset is above--- */

.productList{
    
	width: 960px;
	/* margin: 120px auto; */
    
    margin: 0px auto;
    padding-top: 100px;
	z-index: 1;

}

.productList img{
	/* width: 60%; */
	margin-top: 30px;
	margin-left:30px;

}

.productList li{
	position: relative;
	float:left;
	width: 220px;
	height: 320px;
	border: 1px dotted #3acef3;
	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 20px;
	padding-right: 5px;
	padding-left: 10px;
}
/* 限時優惠 */
.productList .sale{
	position: absolute;
	top:0;
	left:0;
	background: #ff4c00;
	color:#fff;
	padding:8px;

}

/* 產品 */
.productList li h2{
	font-weight: bold;
	color: #f3b500;
  margin-bottom: 10px;  /* !! 123 !! */
	margin-top: 30px;

}

/* 價格 */
.productList li span{
	color: #ff0059;
	font-size: 20px;
  
  
}

  
</style>
