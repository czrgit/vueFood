/*
* 通过mutation间接更新state的多个方法的对象
* */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS

} from './mutation-type'

import {
  reqAddress,
  reqFoodCategorys,
  reqShopLists,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqSearchShops
} from '../api'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    let geohash = state.latitude + ',' + state.longitude;
    let result = await reqAddress(geohash);
    if(result.code === 0){
      let address = result.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类
  async getCategorys({commit}){
    let result = await reqFoodCategorys();
    if(result.code === 0){
      let categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    let {latitude,longitude} = state
    let result = await reqShopLists(latitude,longitude);
    if(result.code === 0){
      let shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  //同步userInfo信息
  recordUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //异步获取userInfo
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code ===  0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  //异步登出
  async logout({commit}){
    const result = await reqLogout()
    if(result.code ===  0){
      commit(RESET_USER_INFO)
    }
  },
  //异步获取商家商品
  async getShopGoods({commit},callback){
    const result = await reqShopGoods()
    if(result.code ===  0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      //数据更新通知组件
      callback&&callback()
    }
  },
  //异步获取商家信息
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code ===  0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  //异步获取商家评价
  async getShopRatings({commit},callback){
    const result = await reqShopRatings()
    if(result.code ===  0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      //数据更新通知组件
      callback&&callback()
    }
  },

  //同步更新food中的count的值
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  //同步清空购物车
  clearCart({commit}){
    commit(CLEAR_CART)
  },
  //异步获取商家信息
  async searchShops({commit,state},keyword){
    let geohash = state.latitude + ',' + state.longitude;
    const result = await reqSearchShops(geohash, keyword)
    if(result.code ===  0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{searchShops})
    }
  },

}
