let instance

/**
 * 统一的音效管理器
 */
class Music {
  constructor() {
    if (instance) return instance

    instance = this

    // this.bgmAudio = new Audio()
    // this.bgmAudio.loop = true
    // this.bgmAudio.src = 'audio/bgm.mp3'
    // this.playBgm()

    this.clickAudio = new wx.createInnerAudioContext()
    this.clickAudio.src = 'audio/click.wav'

    this.selectAudio = new wx.createInnerAudioContext()
    this.selectAudio.src = 'audio/select.wav'


  }

  // playBgm() {
  //   this.bgmAudio.play()
  // }

  playClick() {
    this.clickAudio.currentTime = 0
    this.clickAudio.play()
  }

  playSelect() {
    this.selectAudio.currentTime = 0
    this.selectAudio.play()
  }
}

GameGlobal.music = new Music()


