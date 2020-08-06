import {
    wxToast
} from '@/util.js'
// const apiUrl = 'https://testapi.s-sbio.com/';
const apiUrl = 'https://api.s-sbio.com/'
const http = (url, params, method, sessionId) => {
  let sbioSessionId = sessionId ? sessionId : wx.getStorageSync('sessionId')
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${apiUrl}${url}`, // 服务器url+参数中携带的接口具体地址
      data: params, // 请求参数
      header: {
        sessionId: sbioSessionId
      },
      method: method || 'POST',
      success: function (res) {
        // 接口访问正常返回数据
        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            resolve(res.data)
          } else if (res.data.code === 400 || res.data.code === 401) {
            getSession()
            reject(res.data)
          } else {
            wxToast(res.data.msg)
            reject(res.data)
          }
        } else {
          wxToast('请求失败')
        }
      },
      fail: function (error) {
        wxToast('网络失败')
        reject(error);
      }
    }).onHeadersReceived(function (res) {
    })
  });
}
const getSession = () => {
  wx.login({
    success: res => {
      if (res.code) {
        http('user/api/wechat/getSession', { code: res.code, type: 0 }, 'Get').then(res => {
          wx.setStorageSync('sessionId', res.data.sessionId)
          wx.setStorageSync('authFlag', !res.data.authFlag ? true: false)
        }).catch(error => {
          console.log(error)
        })
      } else {
        console.log('获取失败！' + res.errMsg)
      }
    }
  })
}
module.exports = {
  $http: http,
  getSession: getSession
}
