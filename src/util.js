import $moment from 'moment'
let canNavigateTo = true
const manglingFormatCardNumber = (cardNumber) => {
    if (cardNumber && cardNumber.length > 8) {
        return `${cardNumber.substring(0, 4)} ${'*'
            .repeat(cardNumber.length - 8)
            .replace(/(.{4})/g, `
        $1 `)}${
            cardNumber.length % 4 ? ' ' : ''
            }${cardNumber.slice(-4)}`;
    }
    return cardNumber
};
const validateIdCard = idCard => {
    var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    var flag = false;
    // 如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (idcardReg.test(idCard)) {
        flag = true;
    } else {
        flag = false;
    }
    return flag;
};

const checkMobile = mobile => {
    let reg = /^1[3456789]\d{9}$/;
    let flag = false;
    if (!reg.test(mobile)) {
        flag = false;
    } else {
        flag = true;
    }
    return flag;
};
const checkNum = num => {
    let reg = /^[1-9]\d*$/;
    let flag = false;
    if (!reg.test(num)) {
        flag = false;
    } else {
        flag = true;
    }
    return flag;
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
                                console.log(res.tempFilePath)
                                obj.url = res.tempFilePath
                                resolve(obj)
                            },
                            fail: function (res) {
                                console.log(res.errMsg)
                            }
                        },
                            this
                        )
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
        url
    })
}
const wxRedirectTo = url => {
    setTimeout(() => {
        wx.redirectTo({
            url: url // 页面 A
        })
    }, 300)
}
const wxSwitchTab = url => {
    setTimeout(() => {
        wx.switchTab({
            url: url // 页面 A
        })
    }, 300)
}
const wxReLaunch = url => {
    setTimeout(() => {
        wx.reLaunch({
            url: url // 页面 A
        })
    }, 300)
}
const getArray = obj => {
    let arr = []
    for (let key in obj) {
        arr.push(obj[key])
    }
    return arr
}
const getKeyValue = obj => {
    for (let key in obj) {
        if (key === 'job_array') {
            obj[key] = getArray(obj[key])
        }
    }
    return obj
}
const wxShowModal = (title, content, confirmText) => {
    return new Promise((resove, rejcet) => {
        wx.showModal({
            title: title || '操作提示',
            content: content,
            confirmText: confirmText || '确定',
            cancelColor: '#666666',
            confirmColor: '#1890FF',
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
const getList = (list, key, formatType) => {
    let type = formatType || 'YYYY-MM-DD'
    return list.map(item => {
        let flag
        let reg = /^[0-9]+.?[0-9]*$/
        if (item[key] && reg.test(item[key])) {
            flag = true
        }
        item[key] = flag ? $moment.unix(item[key]).format(type) : $moment(item[key]).format(type)
        return item
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
const throttle = (fn, gapTime) => {
    if (gapTime == null || gapTime == undefined) {
        gapTime = 1500
    }
    let _lastTime = null
    return function () {
        let _nowTime = + new Date()
        console.log(_nowTime)
        console.log(_nowTime - _lastTime)
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn.apply(this, arguments)
            _lastTime = _nowTime
        }
    }
}
module.exports = {
    manglingFormatCardNumber: manglingFormatCardNumber,
    validateIdCard: validateIdCard,
    checkMobile: checkMobile,
    wxToast: wxToast,
    compressImg: compressImg,
    wxNavigateTo: wxNavigateTo,
    wxRedirectTo: wxRedirectTo,
    wxSwitchTab: wxSwitchTab,
    wxReLaunch: wxReLaunch,
    getArray: getArray,
    getKeyValue: getKeyValue,
    wxShowModal: wxShowModal,
    getList: getList,
    isJSON: isJSON,
    checkNum: checkNum,
    throttle: throttle
};
