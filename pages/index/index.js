Page({
  onStartGame() {
    wx.showToast({
      title: '江湖之路即将开启',
      icon: 'none'
    })
  },

  goToSectSelect() {
    wx.navigateTo({
      url: '/pages/sect/index'
    })
  }
})
