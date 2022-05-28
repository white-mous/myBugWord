import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}
const mutations = {
    ADDITEM(state,obj){
        state.carValue ++
        state.sumList.splice(obj.id,1,obj.price)
        state.ItemList.push(obj)
    },
    ALLPRICELIST(state,obj){
        state.sumList.splice(obj.id,1,obj.price)
    },
    CHANGECOUNT(state,index){
        console.log(index)
        state.ItemList[index].itemCount= state.ItemList[index].itemCount+1
    },
    CHEACKBOX(state,name){
        state.ItemList.forEach(element => {
            if(element.name == name ){
                element.done = !element.done
            }
        });
    },
    DELETEITEM(state,index){
        state.ItemList.splice(index,1)
    },
    CHECKALLTODO(state,done){
        state.ItemList.forEach(element => {
            element.done = done
        })
    },
    CLEARALLTODO(state){
        state.ItemList = state.ItemList.filter((item)=>{
            return !item.done
        })
    },
    SEARCHVALUE(state,val){
        state.filterList = state.list.filter((p)=>{
            return p.name.indexOf(val) !== -1
        })
        state.keyword = val
        
    },
    ADDLIST(state,obj){
        state.SortList = obj
    },
    SORTLIST(state,value){
        if(value){
            state.SortList.sort((p1,p2)=>{
            return value === 1 ? p2.price-p1.price : p1.price-p2.price
          })
        }
    },
    TOTALVALUE(state,value){
        state.totalValue.splice(0,1,value)
    },
    SAVEODER(state,value){
        state.oderFinish = true
        state.info.splice(0,1,value)
        state.copyItemList = [...state.ItemList]

    },
    ADDLOVE(state,obj){
        state.LoveList.push(obj)
    },
    DELETELOVE(state,index){
        state.LoveList.splice(index,1)
    },

}
const state = {
    copyItemList:[],
    LoveList:[],
    ItemList:[],
    info:[],
    date:'',
    oderCode:'',
    oderFinish:false,
    keyword : '',
    totalValue : [],
    carValue : 0,
    sumList:[0],

    filterList:[],
    SortList:[],
    list:[
        // -------------------鍬形蟲---------------------------
        {
            id:1,
            name:'彩虹鍬形蟲-成蟲',
            price:200,
            url:'https://www.beetles.com.tw/product/pd03/pd03_027.JPG',
            
            done:false,
        },
        {
            id:2,
            name:'(綠色型)彩虹鍬形蟲成蟲',
            price:300,
            url:'https://www.beetles.com.tw/product/pd03/pd03_365.JPG',
            done:false,
            
        },
        {
            id:3,
            name:'(黑色型)彩虹鍬形蟲成蟲',
            price:400,
            url:'https://www.beetles.com.tw/product/pd03/pd03_392.JPG',
            done:false,
        },
        {
            id:4,
            name:'高砂鋸鍬形蟲-成蟲(飼育品)',
            price:50,
            url:'https://www.beetles.com.tw/product/pd01/pd01_045.JPG',
            done:false,
        },
        {
            id:5,
            name:'麥克蘭鋸鍬形蟲-成蟲',
            price:200,
            url:'https://www.beetles.com.tw/product/pd03/pd03_849.JPG',
            done:false,
        },
        {
            id:6,
            name:'(紅色型)彩虹鍬形蟲成蟲',
            price:250,
            url:'https://www.beetles.com.tw/product/pd03/pd03_847.JPG',
            done:false,
        },
        // -------------------兜蟲---------------------------
        {
            id:7,
            name:'南洋大兜蟲C.c.c成蟲-(中.短角型)',
            price:150,
            url:'https://www.beetles.com.tw/product/pd03/pd03_404.JPG',
            done:false,
        },
        {
            id:8,
            name:'D.H.L長戟大兜-成蟲',
            price:500,
            url:'https://www.beetles.com.tw/product/pd03/pd03_293.JPG',
            done:false,
        },
        {
            id:9,
            name:'長戟大兜蟲 D.h.h 成蟲（單母）',
            price:600,
            url:'https://www.beetles.com.tw/product/pd03/pd03_859.JPG',
            done:false,
        },
        {
            id:10,
            name:'撒旦大兜蟲-成蟲',
            price:1500,
            url:'https://www.beetles.com.tw/product/pd03/pd03_315.JPG',
            done:false,
        },
        {
            id:11,
            name:'南洋大兜蟲C.c.c成蟲（長角專區）',
            price:1000,
            url:'https://www.beetles.com.tw/product/pd03/pd03_011.JPG',
            done:false,
        },
        {
            id:12,
            name:'長戟大兜赫克力士亞種-(河野血統)-母成蟲',
            price:1500,
            url:'https://www.beetles.com.tw/product/pd03/pd03_426.JPG',
            done:false,
        },
                        {
            id:13,
            name:'長戟大兜蟲 D.H.E成蟲',
            price:800,
            url:'https://www.beetles.com.tw/product/pd03/pd03_319.JPG',
            done:false,
        },
                        {
            id:14,
            name:'長戟大兜蟲 D.H.R(Baudri type) 成蟲',
            price:1200,
            url:'https://www.beetles.com.tw/product/pd03/pd03_394.JPG',
            done:false,
        },
                        {
            id:15,
            name:'長戟大兜蟲 D.h.o-成蟲',
            price:600,
            url:'https://www.beetles.com.tw/product/pd03/pd03_360.JPG',
            done:false,
        },
                        {
            id:16,
            name:'毛大象大兜蟲MEE-成蟲',
            price:800,
            url:'https://www.beetles.com.tw/product/pd03/pd03_059.JPG',
            done:false,
        }, 
        // -------------------花金龜---------------------------
        {
            id:17,
            name:'綠艷大角花金龜(托卡塔)-成蟲',
            price:1000,
            url:'https://www.beetles.com.tw/product/pd03/pd03_194.JPG',
            done:false,
        },
        {
            id:18,
            name:'烏干達長角金龜(特殊色系)55～59mm成蟲',
            price:400,
            url:'https://www.beetles.com.tw/product/pd03/pd03_410.JPG',
            done:false,
        },
        {
            id:19,
            name:'烏干達長角金龜（特殊色系）65～69mm成蟲',
            price:900,
            url:'https://www.beetles.com.tw/product/pd03/pd03_443.JPG',
            done:false,
        },
        {
            id:20,
            name:'中國陽長臂金龜-成蟲',
            price:1000,
            url:'https://www.beetles.com.tw/product/pd03/pd03_124.JPG',
            done:false,
        },
        {
            id:21,
            name:'(GOP)白紋大角花金龜-幼蟲',
            price:1200,
            url:'https://www.beetles.com.tw/product/pd04/pd04_608.JPG',
            done:false,
        },
        // -------------------果凍---------------------------
        {
            id:22,
            name:'綜合果凍(四種口味)',
            price:100,
            url:'https://www.beetles.com.tw/product/pd05/pd05_058.JPG',
            done:false,
        },
        {
            id:23,
            name:'黑糖樹液果凍',
            price:50,
            url:'https://www.beetles.com.tw/product/pd05/pd05_023.jpg',
            done:false,
        },
        {
            id:24,
            name:'高蛋白果凍',
            price:400,
            url:'https://www.beetles.com.tw/product/pd05/pd05_029.jpg',
            done:false,
        },
        {
            id:25,
            name:'半顆果凍台(對切型果凍台)',
            price:50,
            url:'https://www.beetles.com.tw/product/pd05/pd05_060.jpg',
            done:false,
        },
        {
            id:26,
            name:'乳酸果凍',
            price:100,
            url:'https://www.beetles.com.tw/product/pd05/pd05_056.jpg',
            done:false,
        },
        {
            id:27,
            name:'香蕉乳酸果凍',
            price:100,
            url:'https://www.beetles.com.tw/product/pd05/pd05_038.jpg',
            done:false,
        },
        {
            id:28,
            name:'黑糖-大果凍【70g】',
            price:120,
            url:'https://www.beetles.com.tw/product/pd05/pd05_043.jpg',
            done:false,
        },
        {
            id:29,
            name:'綜合果凍(四種口味)箱裝',
            price:340,
            url:'https://www.beetles.com.tw/product/pd05/pd05_059.jpg',
            done:false,
        },
        // -------------------皿木---------------------------
        {
            id:30,
            name:'（長條型）16g單孔果凍皿木',
            price:60,
            url:'https://www.beetles.com.tw/product/pd05/pd05_152.jpg',
            done:false,
        },
        {
            id:31,
            name:'天然原木-大孔躲藏',
            price:150,
            url:'https://www.beetles.com.tw/product/pd05/pd05_050.jpg',
            done:false,
        },
        {
            id:32,
            name:'70g單孔果凍皿木',
            price:70,
            url:'https://www.beetles.com.tw/product/pd05/pd05_014.jpg',
            done:false,
        },
        {
            id:33,
            name:'16g雙孔果凍皿木',
            price:80,
            url:'https://www.beetles.com.tw/product/pd05/pd05_013.jpg',
            done:false,
        },
        {
            id:34,
            name:'16g單孔果凍皿木',
            price:40,
            url:'https://www.beetles.com.tw/product/pd05/pd05_012.jpg',
            done:false,
        },
        {
            id:35,
            name:'天然原木-躲藏平台',
            price:150,
            url:'https://www.beetles.com.tw/product/pd05/pd05_053.jpg',
            done:false,
        },
        // -------------------木屑---------------------------
        {
            id:36,
            name:'【超級V2】強效木屑-5L',
            price:200,
            url:'https://www.beetles.com.tw/product/pd06/pd06_051.jpg',
            done:false,
        },
        {
            id:37,
            name:'微粒子發酵木屑-黃包',
            price:150,
            url:'https://www.beetles.com.tw/product/pd06/pd06_038.jpg',
            done:false,
        },
        {
            id:38,
            name:'【技】大夢超級技術木屑',
            price:280,
            url:'https://www.beetles.com.tw/product/pd06/pd06_208.jpg',
            done:false,
        },
        {
            id:39,
            name:'【玉】大夢超級產卵木屑',
            price:220,
            url:'https://www.beetles.com.tw/product/pd06/pd06_207.jpg',
            done:false,
        },
        {
            id:40,
            name:'AK木屑（AK D土）',
            price:300,
            url:'https://www.beetles.com.tw/product/pd06/pd06_068.jpg',
            done:false,
        },
        {
            id:41,
            name:'優質櫟木發酵木屑5L(買一送一=二包)',
            price:150,
            url:'https://www.beetles.com.tw/product/pd06/pd06_202.jpg',
            done:false,
        },
        {
            id:42,
            name:'楓香發酵木屑5L-(買一送一=二包)',
            price:120,
            url:'https://www.beetles.com.tw/product/pd06/pd06_016.jpg',
            done:false,
        },
        {
            id:43,
            name:'SANKO 特級育成專用 【木屑】 -10L',
            price:150,
            url:'https://www.beetles.com.tw/product/pd06/pd06_209.jpg',
            done:false,
        },
        // -------------------腐質土---------------------------
        {
            id:44,
            name:'【超級V2】紅包-大兜幼蟲專用(DH屬.M屬專用)',
            price:150,
            url:'https://www.beetles.com.tw/product/pd15/pd15_021.jpg',
            done:false,
        },
        {
            id:45,
            name:'【超級V2】綠包',
            price:150,
            url:'https://www.beetles.com.tw/product/pd15/pd15_020.jpg',
            done:false,
        },
        {
            id:46,
            name:'活菌兜蟲專用土-60L',
            price:500,
            url:'https://www.beetles.com.tw/product/pd15/pd15_105.jpg',
            done:false,
        },
        {
            id:47,
            name:'【超級三倍V2】-紅包-大兜幼蟲專用(DH屬.M屬專用)　',
            price:250,
            url:'https://www.beetles.com.tw/product/pd15/pd15_204.jpg',
            done:false,
        },
        {
            id:48,
            name:'【超級三倍V2】-綠包(南洋.五角大兜幼蟲專用)',
            price:250,
            url:'https://www.beetles.com.tw/product/pd15/pd15_203.jpg',
            done:false,
        },
        {
            id:49,
            name:'【超級V2】紫包 花金龜專用土',
            price:150,
            url:'https://www.beetles.com.tw/product/pd15/pd15_103.jpg',
            done:false,
        },
        {
            id:50,
            name:'SANKO 特級兜蟲育成專用土-10L',
            price:370,
            url:'https://www.beetles.com.tw/product/pd15/pd15_016.jpg',
            done:false,
        },
         // -------------------營養添加---------------------------
         {
            id:51,
            name:'大王花金龜幼蟲專用飼料',
            price:100,
            url:'https://www.beetles.com.tw/product/pd17/pd17_007.jpg',
            done:false,
        },
        {
            id:52,
            name:'飼料',
            price:50,
            url:'https://www.beetles.com.tw/product/pd17/pd17_006.jpg',
            done:false,
        },
        // -------------------菌瓶---------------------------
        {
            id:53,
            name:'【超級V2】日菌雲芝菌(純櫟木)--窄口1.1L',
            price:60,
            url:'https://www.beetles.com.tw/product/pd08/pd08_146.JPG',
            done:false,
        },
        {
            id:54,
            name:'【超級V2】鍬形蟲極大菌瓶-日菌鮑魚菇(純櫟木)-2100cc',
            price:200,
            url:'https://www.beetles.com.tw/product/pd08/pd08_134.JPG',
            done:false,
        },
        {
            id:55,
            name:'【超級V2】日菌雲芝菌(純櫟木)--寬口1.1L',
            price:80,
            url:'https://www.beetles.com.tw/product/pd08/pd08_133.JPG',
            done:false,
        },
        {
            id:56,
            name:'【超級V2】日菌鮑魚菇-25CC菌杯',
            price:30,
            url:'https://www.beetles.com.tw/product/pd08/pd08_130.JPG',
            done:false,
        },
        {
            id:57,
            name:'【超級V2】日菌鮑魚菇(純櫟木)-1.1L( 寬口)',
            price:80,
            url:'https://www.beetles.com.tw/product/pd08/pd08_127.JPG',
            done:false,
        },
        {
            id:58,
            name:'【超級V2】日菌鮑魚菇(純櫟木)-1.1L( 窄口)',
            price:60,
            url:'https://www.beetles.com.tw/product/pd08/pd08_126.JPG',
            done:false,
        },
    ],
    
}



export default new Vuex.Store({
    actions,
    mutations,
    state
})