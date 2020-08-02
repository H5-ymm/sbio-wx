import {
    wxToast
} from '@/util.js'
// const apiUrl = 'https://testapi.s-sbio.com/';
const apiUrl = 'https://api.s-sbio.com/'
const http = (url, params, method, sessionId) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${apiUrl}${url}`, // 服务器url+参数中携带的接口具体地址
      data: params, // 请求参数
      header: {
        sessionId: sessionId?sessionId:wx.getStorageSync('sessionId')
      },
      method: method || 'POST',
      success: function (res) {
        // 接口访问正常返回数据
        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            resolve(res.data)
          } else {
            wxToast(res.data.msg)
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
};
const uploadFile = (tempFilePaths) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: `${apiUrl}/Constant/moreupload`,
      filePath: tempFilePaths[0],
      name: 'image',
      success: res => {
          if (res.data) {
              resolve(JSON.parse(res.data));
          }
      },
      fail: error => {
          reject(error);
      }
    });
  });
};
module.exports = {
  $http: http,
  uploadFile: uploadFile
}
