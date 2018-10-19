// 导入角色的基类
import Sprite from '../../base/sprite'
// 导入小鸟的基础配置
import config from '../../config'

// 导入图片资源
import databus from '../../databus'

const bird = config.gameInfo.bird

const MAX_HEIGHT = databus.screenHeight - config.gameInfo.land.height

const MAX_SPEED = 12

export default new Sprite({
  img: 'winnie',
  ...bird,

  // 小鸟的加速度
  a: 9.8,
  // 速度
  speed: 0,

  init() {
    this.x = bird.x
    this.y = bird.y
    this.speed = 0
  },

  // 解决思路：给小鸟添加自己的render方法，让自己的render来决定如何渲染
  render(ctx, delta) {

    this.speed = this.speed + this.a * delta
    this.y += (this.speed * delta + 1/2 * this.a * delta * delta) * 40

    if (this.y >= (MAX_HEIGHT)) {
      this.y = MAX_HEIGHT
    }

    ctx.save()

    // 进行小鸟的旋转，但是需要先平移
    ctx.translate(this.x, this.y)

    const img = databus.resources.images[this.img]
    ctx.drawImage(img, 
      0, 0, this.width, this.height,
      -1/2 * this.width, -1/2 * this.height, this.width, this.height)
    
    ctx.restore()
  }
})