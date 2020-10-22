/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable promise/param-names */
const validateIdCard = idCard => {
	var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
	var flag = false
	// 如果通过该验证，说明身份证格式正确，但准确性还需计算
	if (idcardReg.test(idCard)) {
			flag = true
	} else {
			flag = false
	}
	return flag
}
const checkMobile = mobile => {
    let reg = /^1[3456789]\d{9}$/;
    let flag = false;
    if (!reg.test(mobile)) {
        flag = false
    } else {
        flag = true
    }
    return flag;
};
const checkNum = num => {
    let reg = /^[1-9]\d*$/
    let flag = false;
    if (!reg.test(num)) {
        flag = false
    } else {
        flag = true
    }
    return flag
};
const compressImg = (photoSrc, ratio = 2) => {
	let obj = {
			url: '',
			cWidth: 0,
			cHeight: ''
	}
	return new Promise((resolve, reject) => {
		wx.getImageInfo({
			src: photoSrc,
			success (res) {
				let canvasWidth = res.width // 图片原始长宽
				let canvasHeight = res.height
				canvasWidth = 300
				canvasHeight = 200
				obj.cWidth = canvasWidth + 100
				obj.cHeight = canvasHeight + 100
				// ----------绘制图形并取出图片路径--------------
				var ctx = wx.createCanvasContext('canvas')
				ctx.drawImage(res.path, 0, 0, canvasWidth, canvasHeight)
				ctx.draw(
					false,
					setTimeout(() => {
						wx.canvasToTempFilePath({
							canvasId: 'canvas',
							destWidth: canvasWidth,
							destHeight: canvasHeight,
							success: function (res) {
								obj.url = res.tempFilePath
								resolve(obj)
							},
							fail: function (res) {
								console.log(res.errMsg)
							}
						}, this)
					}, 100)
				)
			},
			fail: function (res) {
					console.log(res.errMsg)
			}
		})
	})
}
const wxToast = title => {
	return wx.showToast({
		title: title,
		icon: 'none',
		duration: 3000
	})
}
const wxNavigateTo = url => {
	wx.navigateTo({
		url,
		fail: () => {
			wxReLaunch(url)
		}
	})
}
const wxRedirectTo = url => {
	wx.redirectTo({
		url
	})
}
const wxSwitchTab = url => {
	wx.switchTab({
		url
	})
}
const wxReLaunch = url => {
	wx.reLaunch({
		url
	})
}
const getArray = obj => {
	let arr = []
	for (let key in obj) {
		arr.push(obj[key])
	}
	return arr
}
const wxShowModal = (content, title, confirmText) => {
	return new Promise((resove, rejcet) => {
		wx.showModal({
			title: title || '操作提示',
			content: content,
			confirmText: confirmText || '确定',
			cancelColor: '#666666',
			confirmColor: '#f56666',
			showCancel: false,
			success (res) {
				if (res.confirm) {
					resove()
				} else if (res.cancel) {
					rejcet()
				}
			}
		})
	})
}
const isJSON = (str) => {
	if (typeof str === 'string') {
		try {
		let obj = JSON.parse(str)
		return !!(typeof obj === 'object' && obj)
		} catch (e) {
		return false
		}
	}
}
const filterSpace = name => {
  return name.replace(/\s+/g, '')
}
const videoUrl = () => {
  return 'https://video.s-sbio.com/sample_prod.mp4'
}
module.exports = {
	validateIdCard: validateIdCard,
	checkMobile: checkMobile,
	wxToast: wxToast,
	compressImg: compressImg,
	wxNavigateTo: wxNavigateTo,
	wxRedirectTo: wxRedirectTo,
	wxSwitchTab: wxSwitchTab,
	wxReLaunch: wxReLaunch,
	getArray: getArray,
	wxShowModal: wxShowModal,
	isJSON: isJSON,
	checkNum: checkNum,
	filterSpace: filterSpace,
	videoUrl: videoUrl
}
