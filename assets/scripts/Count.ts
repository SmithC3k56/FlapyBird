import { _decorator,sys, BoxCollider2D, Intersection2D, Component, Node, AudioSource } from 'cc';
import { UIManager } from './UIManager';
import { Constants } from './Constants';
const { ccclass, property } = _decorator;

@ccclass('Counter')
export class Counter extends Component {

    isCount: boolean = true;
    point: number;

    playerCol: BoxCollider2D = null;
    creasePointCol: BoxCollider2D = null;

    constants:Constants;
    @property({type:AudioSource})
    pointAU: AudioSource = null;
    protected onLoad(): void {
        this.point = parseInt(sys.localStorage.getItem("Score"));
        
    }
    start() {

        this.playerCol = this.node.parent.parent.parent.getChildByName("Player").getComponent(BoxCollider2D);
        this.creasePointCol = this.node.getComponent(BoxCollider2D);
        
    }

    lateUpdate(deltaTime: number) {
        if(this.playerCol && this.creasePointCol){
            if (Intersection2D.polygonPolygon(this.playerCol.worldPoints, this.creasePointCol.worldPoints)) {
               
                
                if (this.isCount) { 
                    this.pointAU.play();
                    this.constants.count += 1;
                    console.log("point:"+ this.point);
                    sys.localStorage.setItem("Score",this.point.toString());
                    this.isCount = false;
                }
            }
        }
    }
}


