import { _decorator, Component, director, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {

    @property({type:Node})
    Menu: Node = null;

    @property({type:Node})
    startImg: Node = null;

    @property({type:Node})
    endImg: Node = null;

    @property({type:Label})
    lbBtn: Label = null;

    public isStartgame: boolean = false;
    protected onLoad(): void {
        cc.uIManager = this;
    }
    start() {
        director.loadScene("mainGame", () => {
            console.log("New scene loaded!");
            // You can add any code that needs to run after the scene is loaded here
        });
        director.pause();
        this.endImg.active = false;
        this.lbBtn.string ="Play"
    }

    public onPlay(){
        this.Menu.active = false;
        director.resume();
        // this.gameManager.upauseGame();
    }
    
    public onEnd(){
        // 
        
        this.Menu.active = true;
        this.endImg.active = true;
        this.startImg.active = false;
        this.lbBtn.string ="Again";
       
    }
}


