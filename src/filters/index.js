// import moment from 'moment'
import format from 'date-fns/format'
import Vue from 'vue'

Vue.filter('dateString',function (value,formatStr) {
  // return moment(value).format(format||'YYYY-MM-DD HH:mm:ss')
  return format(value,formatStr||'YYYY-MM-DD HH:mm:ss')
})

Vue.filter('text',function (value) {
  return value.trim()
})
