import { _decorator, Component, instantiate,v3, Node, Prefab, random, BoxCollider2D, Intersection2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeCtr')
export class PipeCtr extends Component {


    @property({ type: Number })
    minHeight: number = 0;


    @property({ type: Number })
    maxHeight: number = 0;

    @property({ type: Number })
    speed: number = 50;

  
    protected start(): void {
        this.scheduleOnce(this.DestroyNode, 16);
        this.node.setPosition(v3 (this.node.position.x,this.getRandomInt(this.minHeight,this.maxHeight),this.node.position.z)) ;
 
    }   

    update(deltaTime: number) {
        this.Move(deltaTime);    
    }

    Move(dt: number) {
        var temp = this.node.position.clone();
        temp.x = temp.x - this.speed * dt;
        this.node.position = temp;
    }

    DestroyNode() {
        this.node.destroy();
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


