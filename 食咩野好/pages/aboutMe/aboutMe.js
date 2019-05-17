// pages/aboutMe/aboutMe.js
Page({
  jumpMiniProgram:function(){
    wx.navigateToMiniProgram({
      appId: 'wxab55adbdaabf555c',
      path: 'pages/index/index?appId=wxbba88c7302a2b63f',
      })
  },

  onShareAppMessage: function () {
    return {
      title: '让我来帮你选择要吃什么吧',
      path: 'pages/login/login'
    }
  }
})