import { _decorator, Prefab, math,instantiate, Component, Node, BoxCollider2D, Intersection2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeSpawner')
export class PipeSpawner extends Component {

    @property({ type: Prefab })
    pipePre: Prefab;


    @property({ type: Number })
    timer: number = 0;



    @property({ type: Number })
    waitTime: number = 0;




    update(deltaTime: number) {
        this.createPrefab(deltaTime);
        
    }

    createPrefab(dt: number) {
        this.timer += dt;
        if (this.timer > this.waitTime) {
            this.timer = 0;
            if (this.pipePre) {
                const pipe = instantiate(this.pipePre);
             

                this.node.addChild(pipe);
            }
        }
    }

    



}


