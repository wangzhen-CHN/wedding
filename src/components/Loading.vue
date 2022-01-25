<template>
  <div class="wedding-loading">
    <header class="editor-header">
      <a href="javascript:;"></a>
      <a href="javascript:;" class="minimum"></a>
      <a href="javascript:;" class="maximum"></a>
    </header>
    <!-- 日期 -->
    <p class="code">
      Last login: <span>{{ startDate }}</span> on wz
    </p>
    <p class="loading-word">程序加载中...</p>
    <!--执行命令-->
    <p v-for="(execution, index) in executions" v-show="execution.visible" :key="index" class="code">
      [<span class="time">{{ execution.time }}</span
      >]
      <span class="task">{{ execution.name }}</span>
      <span v-if="execution.duration !== undefined" class="duration">{{ execution.duration }} ms</span>
    </p>
    <!--进度条-->
    <p v-show="isProcessed" class="code">
      {{ progressBarText }}
      <span class="percentage">{{ percentage }}%</span>
    </p> 
    <letter :canOpen="isLetter"/>
   
  </div>
  </div>
</template>

<script>
const executions = [
  {
    name: '初始化',
    time: '',
    duration: 0,
    visible: false
  },
  {
    name: '请求资源',
    time: '',
    duration: 0,
    visible: false
  },
  {
    name: '加载中',
    time: '',
    duration: 0,
    visible: false
  },
  {
    name: '解析中',
    time: '',
    duration: 0,
    visible: false
  },
  {
    name: '编译中...',
    time: '',
    visible: false
  }
]
import Letter from './Letter.vue'
export default {
  name: 'Loading',
  components: { Letter},
  data() {
    return {
      startDate: new Date().toDateString(),
      executions: executions,
      isProcessed: false,
      isLetter: false,
      progressBarText: '--------------------------'
    }
  },
  computed: {
    percentage() {
      const hashL = this.progressBarText.split('').filter((c) => c === '#').length
      const l = this.progressBarText.length
      return Math.floor((hashL * 100) / l)
    }
  },
  mounted() {
    this.runExecutions()
  },
  methods: {
    // 逐条执行命令
    runExecutions: async function () {
      for (const execution of this.executions) {
        await this.progressivelyRun(execution)
      }
      // 执行完命令，开始显示进度条
      await this.successProcessing(1000)
      // 执行最后一条命令
      this.isLetter = true
    },
    // 执行一条命令
    progressivelyRun(execution, customDuration) {
      return new Promise((resolve) => {
        const now = new Date(),
          duration = customDuration ? customDuration : Math.random() * 50 + 250,
          showCode = () => {
            execution.time = now.toLocaleTimeString()
            execution.duration = execution.duration !== undefined ? duration.toFixed(2) : undefined
            execution.visible = true
            resolve()
          }
        setTimeout(showCode, duration)
      })
    },
    // 显示进度条
    successProcessing(duration) {
      return new Promise((resolve) => {
        let start = null,
          progressing,
          progressingCount = 0
        this.isProcessed = true
        const step = (timestamp) => {
          if (start === null) {
            start = timestamp
          }
          const timeGap = timestamp - start
          if (progressingCount % 3 === 0) {
            this.progressBarText = this.progressBarText.replace('-', '#')
          }
          progressingCount++
          if (timeGap < duration) {
            progressing = requestAnimationFrame(step)
          } else {
            resolve()
            this.progressBarText = this.progressBarText.replace(/-/g, '#')
            cancelAnimationFrame(progressing)
          }
        }
        progressing = requestAnimationFrame(step)
      })
    }
  }
}
</script>

<style lang="less">
.wedding-loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 15px;
  padding-top: 50px;
  overflow: hidden;
  background: #2b2b48;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transition: all 1.6s cubic-bezier(0.4, 0, 1, 1);
  transition: all 1.6s cubic-bezier(0.4, 0, 1, 1);

  .editor-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    padding: 12px;
    overflow: hidden;
    background: #2b2b48;

    > a {
      display: block;
      float: left;
      width: 16px;
      height: 16px;
      margin-right: 5px;
      background: #fc615d;
      border-radius: 8px;

      &.minimum {
        background: #fdbc40;
      }

      &.maximum {
        background: #34c84a;
      }
    }
  }

  p.code {
    margin: 0;
    color: #bbb;
    font-weight: 500 !important;
    font-size: 16px !important;
    font-family: 'Roboto Mono', 'Menlo', 'Monaco', Courier, monospace !important;
    line-height: 1.2;
  }

  .loading-word {
    color: #68fcfb;
  }


  .time {
    color: #666;
  }

  .task {
    color: #009ab2;
  }

  .duration {
    margin-left: 10px;
    color: #bf36b7;
  }
}
</style>
