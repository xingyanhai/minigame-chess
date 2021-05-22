// import Main from './js/main'
//
// new Main()
// import './js/libs/weapp-adapter'
// import './js/libs/symbol'
import './js/music.js'
import './js/common.js'
import './js/play.js'
import './js/AI.js'
import './js/bill.js'
import './js/gambit.js'
const dataStr = require('./js/strData.js')

const init = async () => {
    console.log('  onload---------------')
    await com.init()
    com.bg=new com.class.Bg();
    com.dot = new com.class.Dot();
    com.pane=new com.class.Pane();
    com.btnArea = new com.class.BtnArea()
    com.pane.isShow=false;

    com.childList=[com.bg,com.dot,com.pane, com.btnArea];
    com.mans	 ={};		//棋子集合
    com.createMans(com.initMap)		//生成棋子
    com.bg.show();

// com.addEvent()
    com.gambit = dataStr.gambit.split(" ");
    AI.historyBill = com.gambit;

    com.store = dataStr.store.split(" ");

    setTimeout(()=> {
        play.isPlay=true ;
        play.depth = 3;
        play.init();
    }, 1000)
}
init()

wx.showShareMenu()







function timeout (time = 2000) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, time)
    })
}

// 广告
async function addInit () {
    const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    const addList = []


    // 创建 原生模板广告 广告实例，提前初始化
    let customAd = wx.createCustomAd({
        adUnitId: 'adunit-f227474a427d718f',
        adIntervals: 30, // 自动刷新频率不能小于30秒
        style: {
            left: (windowWidth * 0.2) / 2,
            top: windowHeight - 80,
        }
    })
    customAd.onError((err)=>{
        console.log('errrr',err)
    })
    addList.push(customAd)


    // 创建 原生模板广告 广告实例，提前初始化
    let customAd2 = wx.createCustomAd({
        adUnitId: 'adunit-9fcb3862f0265cf8',
        adIntervals: 30, // 自动刷新频率不能小于30秒
        style: {
            left: (windowWidth * 0.8) / 2,
            top: windowHeight - 80,
        }
    })
    customAd2.onError((err)=>{
        console.log('errrr',err)
    })
    addList.push(customAd2)



    // 创建 Banner 广告实例，提前初始化
    let bannerAd = wx.createBannerAd({
        adUnitId: 'adunit-ef3e752c3b086586',
        adIntervals: 30, // 自动刷新频率不能小于30秒
        style: {
            left: (windowWidth - 300) / 2,
            top: windowHeight - 80,
            width: 300
        }
    })
    bannerAd.onError((err)=>{
        console.log('errrr',err)
    })
    addList.push(bannerAd)



    let currentIndex = 0
    let preIndex = 0
    function showAdd() {
        addList[preIndex].hide()
        addList[currentIndex].show()
        preIndex = currentIndex
        currentIndex ++
        if(currentIndex >= addList.length) {
            currentIndex = 0
        }
    }
    setTimeout(showAdd,2000)
    setInterval(showAdd, 60000)

}
addInit()


