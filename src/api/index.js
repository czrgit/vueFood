/*
*包含n个接口请求函数模块
* 返回值是promise对象
*
* */

import ajax from './ajax'
const BASE_URL = '/api'
// [1、 根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>

export let reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

// [2、 获取食品分类列表](#2 获取食品分类列表)<br/>

export let reqFoodCategorys = () => ajax(BASE_URL+'/index_category')

// [3、 根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>

export let reqShopLists = (latitude, longitude) => ajax(BASE_URL+'/shops', {latitude, longitude})

// [4、 根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>

export let reqSearchShops = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})



// [6、 用户名密码登陆](#6 用户名密码登陆)<br/>

export let reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')

// [7、 发送短信验证码](#7 发送短信验证码)<br/>

export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone})

// [8、 手机号验证码登陆](#8 手机号验证码登陆)<br/>

export let reqLoginSms = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')

// [9、 根据会话获取用户信息](#9 根据会话获取用户信息)<br/>

export let reqUserInfo = () => ajax(BASE_URL+'/userinfo')

// [10、 用户登出](#10 用户登出)<br/>

export let reqLogout = () => ajax(BASE_URL+'/logout')

//获取商家信息
export let reqShopInfo = () => ajax('/shop_info')

//获取商家评价
export let reqShopRatings = () => ajax('/shop_ratings')

//获取商家商品数组
export let reqShopGoods = () => ajax('/shop_goods')
