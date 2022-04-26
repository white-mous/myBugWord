<template>
  <div class="lists">
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
    name:'Dynastinae',
    data(){
        return{
            list:[
                {
                    id:1,
                    name:'南洋大兜蟲C.c.c成蟲-(中.短角型)',
                    price:150,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_404.JPG',
                    done:false,
                },
                {
                    id:2,
                    name:'D.H.L長戟大兜-成蟲',
                    price:500,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_293.JPG',
                    done:false,
                },
                {
                    id:3,
                    name:'長戟大兜蟲 D.h.h 成蟲（單母）',
                    price:600,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_859.JPG',
                    done:false,
                },
                {
                    id:4,
                    name:'撒旦大兜蟲-成蟲',
                    price:1500,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_315.JPG',
                    done:false,
                },
                {
                    id:5,
                    name:'南洋大兜蟲C.c.c成蟲（長角專區）',
                    price:1000,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_011.JPG',
                    done:false,
                },
                {
                    id:6,
                    name:'長戟大兜赫克力士亞種-(河野血統)-母成蟲',
                    price:1500,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_426.JPG',
                    done:false,
                },
                                {
                    id:7,
                    name:'長戟大兜蟲 D.H.E成蟲',
                    price:800,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_319.JPG',
                    done:false,
                },
                                {
                    id:8,
                    name:'長戟大兜蟲 D.H.R(Baudri type) 成蟲',
                    price:1200,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_394.JPG',
                    done:false,
                },
                                {
                    id:9,
                    name:'長戟大兜蟲 D.h.o-成蟲',
                    price:600,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_360.JPG',
                    done:false,
                },
                                {
                    id:10,
                    name:'毛大象大兜蟲MEE-成蟲',
                    price:800,
                    url:'https://www.beetles.com.tw/product/pd03/pd03_059.JPG',
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
    min-height: 1150px;
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

*{
	box-sizing: border-box;
}

.productList{
	width: 960px;
	margin: 0px auto;
	z-index: 1;
    padding-top: 100px;

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
