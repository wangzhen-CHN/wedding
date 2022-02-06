<template>
  <Loading></Loading>
</template>

<script>
import Loading from './components/Loading.vue'
// import wx from 'weixin-js-sdk'
import axios from 'axios'
export default {
  components: { Loading },
  data() {
    return {}
  },
  async created() {
    // const appid = 'wx36b60db883245c38'
    // const res = await axios({
    //   method: 'get',
    //   url: `api/getWxShareConfig`,
    //   params: {
    //     appid,
    //     url: window.location.href.split('#')[0]
    //   }
    // })
    // const { nonceStr, timestamp, signature } = res.data.data
    // wx.config({
    //   debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //   appId: appid, // 必填，公众号的唯一标识
    //   timestamp: '1644107914', // 必填，生成签名的时间戳
    //   nonceStr: 'wwwzzz', // 必填，生成签名的随机串
    //   signature: '0a6383713a344632be2ec7a6949d5e5b56444a16', // 必填，签名
    //   jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
    // })
    // wx.error(function (res) {
    //   console.log('🏳️‍🌈 <输出> 111111', res)
    //   // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    // })
    // wx.ready(function () {
    //   wx.onMenuShareTimeline({
    //     title: '测试分享', // 分享标题
    //     link: 'http://wedding.coder.wang/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //     imgUrl: 'http://wedding.coder.wang/wedding/invitation.png', // 分享图标
    //     success: function () {
    //       // 用户点击了分享后执行的回调函数
    //     }
    //   })
    //   wx.onMenuShareAppMessage({
    //     title: '测试分享', // 分享标题
    //     desc: '一个测试的分享!!!', // 分享描述
    //     link: 'http://wedding.coder.wang/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //     imgUrl: 'http://wedding.coder.wang/wedding/invitation.png', // 分享图标
    //     type: '', // 分享类型,music、video或link，不填默认为link
    //     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    //     success: function (res) {
    //       console.log('🏳️‍🌈 <输出> success', res)
    //       // 用户点击了分享后执行的回调函数
    //     },
    //     complete: function (res) {
    //       console.log('🏳️‍🌈 <输出> complete', res)
    //       // 用户点击了分享后执行的回调函数
    //     },
    //     cancel: function (res) {
    //       console.log('🏳️‍🌈 <输出> cancel', res)
    //       // 用户点击了分享后执行的回调函数
    //     },
    //     fail: function (res) {
    //       console.log('🏳️‍🌈 <输出> fail', res)
    //     }
    //   })
    // })
  }
}
</script>
