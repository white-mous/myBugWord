import VueRouter from "vue-router";
// import bugLife from "../views/bugLife"
import BugLife from "../views/BugLife"
import Home from "../views/Home"
import StagBeetle from "../views/StagBeetle"
import Dynastinae from "../views/Dynastinae"
import CetoniaAurata from "../views/CetoniaAurata"
// 
import BacteriaBottle from "../views/BacteriaBottle"
import Humus from "../views/Humus"
import Jelly from "../views/Jelly"
import Nutrition from "../views/Nutrition"
import Sawdust from "../views/Sawdust"
import Wood from "../views/Wood"
import ShoppingCart from "../views/ShoppingCart"
import ItemSearch from "../views/ItemSearch"
import Checkout from "../views/Checkout"
import Odercheck from "../views/Odercheck"
import MyOder from "../views/MyOder"
import Mylove from "../views/Mylove"

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => error);
};

export default new VueRouter({
    // mode:'hash',
    routes:[
        {
            path:'*',
            redirect:'/home'
        },
        //甲蟲的一生
        {
            path:'/bugLife',
            component:BugLife
        },
        //首頁
        {
            path:'/home',
            component:Home
        },
        // 甲蟲列表
        {
            path:'/stagBeetle',
            component:StagBeetle
        },
        {
            path:'/dynastinae',
            component:Dynastinae
        },
        {
            path:'/cetoniaAurata',
            component:CetoniaAurata
        },
        //甲蟲食材列表
        {
            path:'/humus',
            component:Humus
        },
        {
            path:'/jelly',
            component:Jelly
        },
        {
            path:'/nutrition',
            component:Nutrition
        },
        {
            path:'/sawdust',
            component:Sawdust
        },
        {
            path:'/cetoniaAurata',
            component:CetoniaAurata
        },
        {
            path:'/wood',
            component:Wood
        },
        {
            path:'/bacteriaBottle',
            component:BacteriaBottle
        },
        //購物車
        {
            path:'/shoppingCart',
            component:ShoppingCart
        },
        //搜尋頁
        {
            path:'/itemSearch',
            component:ItemSearch
        },
        //結帳頁
        {
            path:'/checkout',
            component:Checkout
        },
        //訂單頁
        {
            path:'/odercheck',
            component:Odercheck
        },
        //訂單管理
        {
            path:'/myOder',
            component:MyOder
        },  
        //我的最愛
        {
            path:'/mylove',
            component:Mylove
        },  
    ]
})

