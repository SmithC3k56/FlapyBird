import { _decorator, Input, input, AudioSource,PhysicsSystem2D, IPhysics2DContact,Collider2D,Contact2DType,Intersection2D, v2, BoxCollider2D, PHYSICS_2D_PTM_RATIO, math, Component, RigidBody2D, Vec2, Tween, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;
import { UIManager } from './UIManager';
@ccclass('PlayerCtr')
export class PlayerCtr extends Component {

    rigidbody: RigidBody2D 
     
    isRotated: boolean = false;

    @property({ type: Prefab })
    pipePrefab: Prefab = null;

    @property({type:AudioSource})
    hitAu: AudioSource = null;

    @property({type:AudioSource})
    dieAu: AudioSource = null;


    onLoad() {
        PhysicsSystem2D.instance.gravity = v2(0, -50 * PHYSICS_2D_PTM_RATIO);

        input.on(Input.EventType.MOUSE_DOWN, this.onClickedDown, this);
        
        this.rigidbody = this.node.getComponent(RigidBody2D);
    }

    protected start(): void {
        let collider = this.getComponent(BoxCollider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

  

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when the contact between two colliders just about to end.
        console.log('onBeginContact'+ otherCollider.name);
        this.dieAu.play();
        this.hitAu.play();
       cc.uIManager.onEnd();
    }

    protected update(dt: number): void {
        
    }

    onClickedDown() {
        this.isRotated = true
        this.rigidbody.applyForce(new math.Vec2(0, 10000), new math.Vec2(0, 0), true);
    }


}


