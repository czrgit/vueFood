//mock随机数据
import Mock from 'mockjs'
import data from './data'

//返回goods
Mock.mock('/shop_goods',{code:0,data:data.goods})
//返回ratings
Mock.mock('/shop_ratings',{code:0,data:data.ratings})
//返回info
Mock.mock('/shop_info',{code:0,data:data.info})
