<template>
  <div class="wedding-invitation" :class="{ 'invitation-bounce': canOpen }">
    <div class="invitation-container" :class="{ 'invitation-down': isOpening }">
      <div class="invitation-cover">
        <div>
          <div class="cover-inside-left" :class="{ opening: isOpening }">
            <div class="invitation-word"><img src="../images/invitation.png" /></div>
          </div>
          <div class="cover-inside-right" :class="{ opening: isOpening }"></div>
          <div v-if="!isOpening" class="open-box" @click="openInvitation">
            <div class="wave"></div>
            <img class="cover-inside-seal" src="../images/seal.png" />
          </div>
        </div>
        <div class="cover-content" :class="{ 'invitation-up': isOpening }">
          <div class="content-inside">
            <swiper :options="swiperOption" class="swiper-box">
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo0.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo1.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo2.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo3.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo4.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo5.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo6.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo7.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
              <swiper-slide>
                <img data-src="http://img.coder.wang/photo8.png" class="swiper-lazy content-inside-photo" />
                <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
            </swiper>
            <div class="bottom-inside">
              <div class="bottom-inside-bg">
                <img class="" src="../images/fo.svg" />
              </div>
              <div class="bottom-inside-content">
                <p><img class="bottom-inside-content-word" src="../images/word.png" /></p>
                <p class="name">汪振 & 方婷婷</p>
                <div class="bottom-inside-date">
                  <img class="" src="../images/left.svg" />
                  <div class="date">2022.02.10 (正月初十)</div>
                  <img class="" src="../images/right.svg" />
                </div>
                <p><b>河南・信阳</b></p>
                <p class="last-word1">陪伴我们走过许多岁月的亲人、朋友</p>
                <p class="last-word2">诚邀您见证和分享我们的幸福时刻</p>
                <!-- <div class="content-inside-qr">
                  <img src="../images/qr.png" />
                  长按扫描二维码查看照片
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PF from './pf'
export default {
  props: ['canOpen'],
  data() {
    return {
      isOpening: false,
      wish: '',
      isFocused: false,
      isLoadImg: false,
      hasEntered: false,
      swiperOption: {
        // 设置自动轮播
        autoplay: {
          delay: 5000 // 5秒切换一次
        },
        effect: 'fade',
        //预加载
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 2
        },
        // 设置轮播可循环
        loop: true
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoadImg = true
    }, 1000)
  },
  methods: {
    // 打开邀请函
    openInvitation() {
      this.isOpening = true
      const pf = new PF({
        life: 200
      })
      setTimeout(() => {
        pf.init()
        pf.start()
      }, 400)
      setTimeout(() => {
        pf.clear()
      }, 4000)
    },
    closeInvitation() {
      this.isOpening = false
      setTimeout(() => {
        this.$emit('onClose')
      }, 660)
    }
  }
}
</script>

<style lang="less">
.wedding-invitation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  padding: 40px 10px;
  overflow: hidden;
  background: #2b2b48;
  background-size: 100%;
  -webkit-transform: scale(0.05);
  transform: scale(0.05);
  opacity: 0;
  -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.26, 1.84, 0.39, 0.61), opacity 0.5s linear;
  transition: transform 0.8s cubic-bezier(0.26, 1.84, 0.39, 0.61), opacity 0.5s linear;

  &.invitation-bounce {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  .invitation-container {
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
    transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);

    &.invitation-down {
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }

    .invitation-cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ad3638;
      border-radius: 10px;
      box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.15);
      perspective: 500px;

      .cover-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 10px 15px;
        -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
        transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);

        &.invitation-up {
          -webkit-transform: translateY(-60px);
          transform: translateY(-60px);
        }

        .content-inside {
          height: 100%;
          // padding: 20px;
          overflow: auto;
          color: #a9895d;
          text-align: center;
          background-color: #fff;

          .content-inside-photo {
            width: 100%;
            margin-bottom: 10px;
            padding: 5px;
            border: 1px solid #f7debb;
          }

          p {
            margin-top: 0;
            margin-bottom: 5px;
          }

          .content-inside-bless {
            input {
              width: 100%;
              height: 35px;
              margin-bottom: 10px;
              color: #a9895d;
              font-size: 16px;
              background: transparent;
              border: none;
              border-bottom: 1px solid #f7debb;
              outline: none;

              &::-webkit-input-placeholder {
                color: #e8d1b1;
                font-size: 12px;
              }

              &::-moz-placeholder {
                color: #e8d1b1;
                font-size: 12px;
              }

              &:-ms-input-placeholder {
                color: #e8d1b1;
                font-size: 12px;
              }

              &:-moz-placeholder {
                color: #e8d1b1;
                font-size: 12px;
              }
            }

            > div {
              display: flex;

              button {
                width: 100%;
                height: 35px;
                color: #a9895d;
                background: #f7debb;
                border: none;
                outline: none;

                &:disabled {
                  opacity: 0.8;
                }

                &:first-child {
                  flex: 1;
                  margin-right: 10px;
                }

                &:last-child {
                  width: 60px;
                  background: transparent;
                  border: 1px solid #f7debb;
                }
              }
            }
          }
        }
      }

      .invitation-word {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 195px;
        height: 100%;
        margin: 0 auto;
        margin-top: -100px;
        color: #fae3c3;
        font-weight: 700;
        font-size: 60px;
        pointer-events: none;
      }

      .cover-inside-left {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 6;
        width: 70%;
        height: 100%;
        text-align: center;
        // background-color: #ad3638;
        background-image: url('../images/invitation-bg-left.png');
        background-size: cover;
        border-radius: 10px;
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        -webkit-transition: -webkit-transform 0.5s;
        transition: transform 0.5s;

        &.opening {
          -webkit-transform: rotate3d(0, 1, 0, -140deg);
          transform: rotate3d(0, 1, 0, -140deg);
        }
      }

      .cover-inside-right {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 5;
        width: 40%;
        height: 100%;
        background-image: url('../images/invitation-bg-right.png');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
        box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        -webkit-transition: -webkit-transform 0.5s;
        transition: transform 0.5s;
        pointer-events: none;

        &.opening {
          -webkit-transform: rotate3d(0, 1, 0, 140deg);
          transform: rotate3d(0, 1, 0, 140deg);
        }
      }

      .open-box {
        position: absolute;
        bottom: 100px;
        left: 70%;
        z-index: 7;
        width: 80px;
        height: 80px;
        margin-left: -40px;
        -webkit-animation-name: scaleDraw;
        /*动画播放的次数*/
        -webkit-animation-duration: 2s;
        /*关键帧名称*/
        -webkit-animation-timing-function: ease-in-out;
        /*动画的速度曲线*/
        -webkit-animation-iteration-count: infinite;
        /*动画所花费的时间*/
      }

      .cover-inside-seal {
        width: 80px;
        height: 80px;

        &.invitation-flight {
          opacity: 0;
        }
      }
    }
  }
}
@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(1);
    /*开始为原始大小*/
  }

  25% {
    transform: scale(1.2);
    /*放大1.1倍*/
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.2);
  }
}

.bottom-inside {
  position: relative;
  z-index: 2;
}

.bottom-inside-bg {
  position: absolute;
  top: -200px;
  width: 100%;
  height: 100%;
}

.bottom-inside-content {
  position: absolute;
  top: -100px;
  width: 100%;
  text-align: center;

  .name {
    margin-bottom: 10px !important;
    font-weight: 600;
    font-size: 20px;
  }
}

.bottom-inside-content-word {
  width: 150px;
}

.bottom-inside-date {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  .date {
    padding: 0 5px;
  }

  img {
    height: 10px;
  }
}

.last-word1 {
  padding-top: 10px;
}

.last-word2 {
  padding-bottom: 10px;
}

.content-inside-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
  }
}

.swiper-box {
  min-height: 200px;
  --swiper-preloader-color: #fff; /* 单独设置预加载圆圈的颜色 */
}

.wave {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f7debb;
  border-radius: 50%;
  opacity: 0;
}

.wave:first-child {
  animation: circle-opacity 2s infinite;
}

@keyframes circle-opacity {
  from {
    transform: scale(1);
    opacity: 0.5;
  }

  to {
    transform: scale(2);
    opacity: 0;
  }
}

.swiper-slide {
  min-height: 300px;
}
</style>
