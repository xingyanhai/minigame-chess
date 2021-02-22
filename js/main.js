const canvas = wx.createCanvas()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.render()
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    console.log(window)

    const context = canvas.getContext('2d') // 创建一个 2d context
    context.fillStyle = '#1aad19' // 矩形颜色
    context.fillRect(0, 0, 100, 100) // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)
  }

}
