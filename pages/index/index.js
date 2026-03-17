Page({
  onStartGame() {
    wx.showToast({
      title: '执剑启程，江湖见',
      icon: 'none'
    })
  },

  goToSectSelect() {
    wx.navigateTo({
      url: '/pages/sect/index'
    })
  }
})
