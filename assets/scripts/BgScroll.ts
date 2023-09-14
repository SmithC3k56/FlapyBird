import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgScroll')
export class BgScroll extends Component {

    @property({type:Node})
    ground:Node = null;

    @property({type:Node})
    ground1:Node = null;

    @property({type:Node})
    ground2:Node = null;

    @property({type:Number})
    speed: number= 1;


    protected start(): void {
        this.ground = this.node.getChildByName("ground");
        this.ground1 = this.node.getChildByName("ground1");
        this.ground2 = this.node.getChildByName("ground2");
    }
    update(deltaTime: number) {
        this.scrolling(deltaTime);
    }
    scrolling(dt:number){
        var temp:Vec3 = this.ground.position.clone();
        var temp1:Vec3 = this.ground1.position.clone();
        var temp2:Vec3 = this.ground2.position.clone();
        if(temp1.x <= 0){
            temp.x = 1438.34 //pos of ground2
        }
        if(temp2.x<=0){
            temp1.x = 1438.34 
        }
        temp.x -= this.speed*dt;
        temp1.x -= this.speed*dt;
        temp2.x -= this.speed* dt;

        console.log(temp.x);
        console.log(temp1.x);
        console.log(temp2.x);
     
        this.ground.position=(temp)  ;
        this.ground1.position=(temp1);
        this.ground2.position=(temp2);

        console.log(this.ground.position.x);
        console.log(this.ground1.position.x);
        console.log(this.ground2.position.x);
    }

}


