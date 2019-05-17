// pages/add/add.js
const App = getApp()

Page({
  data: {
    textarea: "",
    Length: 0
  },
  //监控input
  textLength: function(e) {
    let length = e.detail.value.length
    this.setData({
      Length: length
    })
  },

  //完成添加到菜单
  formSubmit: function(e) {
    if (this.data.Length == 0) {
      wx.showModal({
        title: '提示',
        content: '菜名不能为空',
        showCancel: false
      })
    } else if (this.data.Length > 7) {
      wx.showModal({
        content: '菜单名太长啦\r\n修改一下名称吧',
        showCancel: false
      })
    } else {
      var arr = {
        name: 'test'
      };
      arr.name = e.detail.value["input"];
      App.globalData.topText.push(arr);
      this.setData({
        textarea: ""
      })
      if (App.globalData.topText[0].name == '请添加菜单哦') {
        App.globalData.topText.splice(App.globalData.topText[0], 1);
      }
      wx.setStorageSync('menu', App.globalData.topText);
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 400
      })
      setTimeout(function() {
        wx.switchTab({
          url: '../menu/menu',
        })
      }, 400)
    }
  },

  //分享
  onShareAppMessage: function() {
    return {
      title: '让我来帮你选择要吃什么吧',
      path: 'pages/login/login'
    }
  }
})