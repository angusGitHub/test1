// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    loadtext: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.ProgressBar)
    loadBar: cc.ProgressBar = null;


    addTimeNum: number = 0
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    updateLoadBar (){
        let BarProgres: number = this.loadBar.progress
        cc.log("==========updateLoadBar=========BarProgres:"+BarProgres)

        if(BarProgres <= 0.9){
            BarProgres += 0.1
            this.loadtext.string = "资源加载中 " + Math.ceil(BarProgres * 100) + "% ..."
            this.loadBar.progress = BarProgres
            cc.log("==========2=========")
        }
        else{
            cc.log("==========3========")
            this.loadtext.string = "资源加载中 " + 100 + "% ..."
            this.unschedule(this.updateLoadBar)
        }
      
    }

    start () {
        this.loadBar.progress = 0
        this.loadtext.string = "资源加载中 0% ..."
        cc.log("==========1=========")
        this.schedule(this.updateLoadBar, 0.5)
    }

    update (dt:number) {
        this.addTimeNum += dt;
    }
}
