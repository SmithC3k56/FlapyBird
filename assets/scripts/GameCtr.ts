import { _decorator, Component, Label, Node ,sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameCtr')
export class GameCtr extends Component {

    public Score: number =0;
    @property({type: Label})
    label: Label = null;
    start() {
        sys.localStorage.setItem("Score",this.Score.toString());
       
    }

    protected lateUpdate(dt: number): void {
        this.label.string = sys.localStorage.getItem("Score");
    }


}


