import {
    wxToast
} from '@/tool/util.js'
const apiUrl = 'https://testapi.s-sbio.com/'
// const apiUrl = 'https://api.s-sbio.com/'
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
            reject(res.data)
          } else if (res.data.code === 303) {
            resolve(res.data)
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
  })
}
const downloadFile = (url, params) => {
  return new Promise((resolve, reject) => {
    let savePath = `${wx.env.USER_DATA_PATH}/${params.name}的检测报告.pdf`
    wx.downloadFile({
      url: `${apiUrl}${url}?sampleId=${params.sampleId}`,
      filePath: savePath,
      header: {
        'content-type': 'application/pdf',
        'sessionId':  wx.getStorageSync('sessionId')
      },
      success (res) {
        if (res.statusCode === 200) {  
          resolve(res)
        } else {
          wxToast('下载失败')
          reject(error)
        }
      },
      fail: function (error) {
        wxToast('网络失败')
        reject(error)
      }
    })
  })
}
module.exports = {
  $http: http,
  $downloadFile: downloadFile
}
