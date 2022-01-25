<template>
  <div class="wedding-invitation" :class="{ 'invitation-bounce': canOpen }">
    <div class="invitation-container" :class="{ 'invitation-down': isOpening }">
      <div class="invitation-cover" @click="openInvitation">
        <!-- <div class="cover-content" :class="{ 'invitation-up': isOpening }">
          <div class="content-inside">
            <img class="content-inside-photo" src="../images/photo.jpg" />
            <p>我们结婚啦！</p>
            <p><b>Jun & undefined</b></p>
            <p>时间：invalid date value</p>
            <p>地点：<b>location can not be found</b></p>
            <div class="content-inside-bless">
              <input
                ref="wishInput"
                v-model="wish"
                placeholder="写下你的祝福"
                @keyup.enter="sendBarrage"
                @focus="isFocused = true"
                @blur=";(isFocused = false), (hasEntered = false)"
              />
              <p v-if="!wish && isFocused && hasEntered">请输入祝福哦</p>
              <div>
                <button @click="sendBarrage">发送祝福弹幕</button>
                <button @click="closeInvitation">关闭</button>
              </div>
            </div>
          </div>
        </div> -->
        <div class="cover-inside-left" :class="{ opening: isOpening }">
          <div class="invitation-word"><img src="../images/invitation.png" /></div>
        </div>
        <div class="cover-inside-right" :class="{ opening: isOpening }"></div>
        <img class="cover-inside-seal" src="../images/seal.png" :class="{ 'invitation-flight': isOpening }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['canOpen'],
  data() {
    return {
      isOpening: false,
      wish: '',
      isFocused: false,
      hasEntered: false
    }
  },
  methods: {
    // 打开邀请函
    openInvitation() {
      this.isOpening = true
    },
    closeInvitation() {
      this.isOpening = false
      setTimeout(() => {
        this.$emit('onClose')
      }, 660)
    },
    // 发送弹幕
    sendBarrage() {
      this.$nextTick(() => {
        this.hasEntered = true
        if (!this.wish) {
          return
        }
        this.isOpening = false
        this.$refs.wishInput.blur()
        setTimeout(() => {
          this.$emit('sendBarrage', this.wish)
        }, 660)
      })
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
  padding: 40px 20px;
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
        padding: 10px 20px;
        -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
        transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);

        &.invitation-up {
          -webkit-transform: translateY(-60px);
          transform: translateY(-60px);
        }

        .content-inside {
          height: 100%;
          padding: 20px;
          overflow: auto;
          color: #a9895d;
          text-align: center;
          background-color: #fff1de;

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
        background-size: auto;
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

      .cover-inside-seal {
        position: absolute;
        bottom: 100px;
        left: 70%;
        z-index: 7;
        width: 80px;
        height: 80px;
        margin-left: -40px;

        &.invitation-flight {
          opacity: 0;
        }
      }
    }
  }
}
</style>
