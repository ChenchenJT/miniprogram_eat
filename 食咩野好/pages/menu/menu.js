// pages/menu/menu.js
const App = getApp()

Page({
  data: {
    scroll_height: 0,
    itemData: wx.getStorageSync('menu')
  },
  onLoad: function(options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth - 120 - 30
    })
    wx.showModal({
      content: '菜单左滑可以删除哦\r\n菜单填好了就去首页吧\r\n让我来帮你解决问题',
      showCancel: false
    })
  },
  onShow: function() {
    App.globalData.topText = wx.getStorageSync('menu');
    this.setData({
      itemData: App.globalData.topText
    })
  },
  
  //实现左滑删除
  touchS: function(e) { // touchstart
    let startX = App.Touches.getClientX(e)
    startX && this.setData({
      startX
    })
  },
  touchM: function(e) { // touchmove
    let itemData = App.Touches.touchM(e, this.data.itemData, this.data.startX)
    itemData && this.setData({
      itemData
    })

  },
  touchE: function(e) { // touchend
    const width = 150 // 定义操作列表宽度
    let itemData = App.Touches.touchE(e, this.data.itemData, this.data.startX, width)
    itemData && this.setData({
      itemData
    })
  },

  //删除操作
  itemDelete: function(e) { // itemDelete
    let itemData = App.Touches.deleteItem(e, this.data.itemData)
    itemData && this.setData({
      itemData
    })
    App.globalData.topText = itemData;
    wx.setStorageSync('menu', App.globalData.topText)
  },

  //添加菜单
  addMenu: function() {
    wx.navigateTo({
      url: '../add/add'
    })
  },

  //分享
  onShareAppMessage: function() {
    return {
      title: '让我来帮你选择要吃什么吧',
      path: 'pages/login/login'
    }
  }
})