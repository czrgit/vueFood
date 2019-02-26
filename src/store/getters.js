/*
* 包含多个基于state的getter计算属性的对象
* */
export default {
  //购物车总数量
  totalCount(state){
    return state.cartFoods.reduce((PreTotal,food)=>PreTotal+food.count,0)
  },

  totalPrice(state){
    return state.cartFoods.reduce((PreTotal,food)=>PreTotal+food.count*food.price,0)
  },
  positiveSize(state){
    return state.ratings.reduce((PreTotal,rating)=>PreTotal+(rating.rateType===0?1:0),0)
  }
}
0
