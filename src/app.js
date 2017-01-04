
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据1
    var logs = wx.getStorageSync('logs') || [];
    var that = this;
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //获取位置信息
  },
  gpsCity:""
});
