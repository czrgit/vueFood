/*
*包含n个接口请求函数模块
* 返回值是promise对象
*
* */

import ajax from './ajax'
// [1、 根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>

export let reqAddress = (geohash) => ajax(`/position/${geohash}`)

// [2、 获取食品分类列表](#2 获取食品分类列表)<br/>

export let reqFoodTypes = () => ajax('/index_category')

// [3、 根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>

export let reqShopLists = (latitude, longitude) => ajax('/shops', {atitude, longitude})

// [4、 根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>

export let reqSearchShops = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})

// [5、 获取一次性验证码](#5 获取一次性验证码)<br/>

export let reqCaptcha = () => ajax('/captcha')

// [6、 用户名密码登陆](#6 用户名密码登陆)<br/>

export let reqLogin = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')

// [7、 发送短信验证码](#7 发送短信验证码)<br/>

export let reqSendCode = phone => ajax('/sendcode', {phone})

// [8、 手机号验证码登陆](#8 手机号验证码登陆)<br/>

export let reqLoginSms = (phone, cade) => ajax('/login_sms', {phone, cade}, 'POST')

// [9、 根据会话获取用户信息](#9 根据会话获取用户信息)<br/>

export let reqUser = () => ajax('/userinfo')

// [10、 用户登出](#10 用户登出)<br/>

export let reqLogout = () => ajax('/logout')
