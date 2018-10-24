// 导入音乐资源
import databus from '../databus'
let audios = databus.resources.audios
var n 
/**
 * const scoreList = [
  'score1',
  'score2',
  'score3',
  'score4',
  'score5',
  'score6',
  'score7',
  'score8',
  'score9',
  'score10',
  'score11',
  'score12',
  'score13',
  'score14',
  'score15',
  'score16',
  'score17',
  'score18',
  'score19',
  'score20',
  'score21'
]
 */

export default {
  /**
   * 播放嗖嗖声
   */
  playOuch() {
    audios.crash.currentTime = 0
    audios.crash.play()
  },
  /**
   * 播放小鸟飞动声音
   */
  playFlap() {
    audios.flap.currentTime = 0
    audios.flap.play()
  },
  /**
   * 播放积分声
   */
    /**
  playScore() {
    audios.currentTime = 0,
    n = Math.round(Math.random() * 20 + 1);
    const bb = scoreList[n]
    console.log(bb)
    audios[bb].play()
  },//这个也可以
     */

  playScore() {
    audios.currentTime = 0,
      n = Math.round(Math.random() * 21 + 1);
    let sre_index = "score" + n;
    let bb = audios[sre_index];
    console.log(sre_index)
    bb.play()
  },
   
  /**
   * 播放小鸟碰撞后的死亡声
   */
  playGameover() {
    audios.ouch.currentTime = 0
    audios.ouch.play()
    
    audios.gameover.currentTime = 0
    audios.gameover.play()
  }
}
