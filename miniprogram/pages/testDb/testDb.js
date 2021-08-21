// pages/testDb.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodList: [],
        goodName: "",
        goodPrice: ""
    },
    getCloudFunction: function (e) {
        console.log(12)
        wx.cloud.callFunction({
            name: "getTest"
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    doNothing: function (e) {

    },
    addGood: function (e) {
        let that = this
        const db = wx.cloud.database()
        const good = db.collection('good')
        good.add({
            data: {
                name: that.data.goodName,
                price: that.data.goodPrice
            }
        }).then(res => {
            // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
            console.log("添加成功")
            console.log(that.data.goodName)
            console.log(that.data.goodPrice)
            console.log(res)
            this.setData({
                goodName: "",
                goodPrice: ""
            })
        }).catch(err => {
            console.log(err)
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const db = wx.cloud.database()
        const good = db.collection('good')
        good.get().then(res => {
            // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
            console.log(res.data)
            this.setData({
                goodList: res.data
            })
            // console.log(this.goodList.length)
        }).catch(err => {
            console.log(err)
        })
        this.getCloudFunction()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})