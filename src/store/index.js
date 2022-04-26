import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    // updateSum(minStore,value){
        
    // }
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

}
const state = {
    totalValue : 0,
    carValue : 0,
    sumList:[0],
    ItemList:[]
    
}



export default new Vuex.Store({
    actions,
    mutations,
    state
})