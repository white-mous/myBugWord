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
