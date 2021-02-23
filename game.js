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
    com.pane.isShow=false;

    com.childList=[com.bg,com.dot,com.pane];
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
