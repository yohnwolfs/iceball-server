import User from './user/User';
import RoomManager from './room/RoomManager';

const TimerConfig = {
    time: 184
};

// 帧更新包
interface FramePack {
    keyframe: number;
    ctrls: Array<Ctrl>;
}

// 用户操作
interface Ctrl {
    id: string;
    ctrl: {
      angle: number,
      power: number
    }
}

/**
 * 游戏逻辑类
 */
export default class Game {
    private _tid: NodeJS.Timer;
    private _io: SocketIO.Server;
    private _rid: string;
    private _keyframe: number = 0;
    private _ctrlList: Array<Ctrl> = [];
    private _uidList: Array<string>;
    private _time: number = TimerConfig.time;
    private _frame: number = 0;
    
    constructor(rid: string, userlist: Array<User>) {
        this._rid = rid;
        this._uidList = [userlist[0].uid, userlist[1].uid];
        this._io = RoomManager.Instance.io;
    }
    
    public start() {
        let random = Math.random() > .5? 1 : 0;
        let directionList = [];
        for(let i = 0; i < 8; i++) {
            directionList.push(Math.random() > .5? 1 : 0);
        }
        RoomManager.Instance.io.to(this._rid).emit('game:start', {info: 'start', directions: directionList, id: random? this._uidList[0] : this._uidList[1]});

        this._tid = setInterval(() => {

            // 发送主要帧
            this.sendFrame();

            // 计时器
            this._frame++;
            if(this._frame >= 60) {
                this._frame = 0;
                this._time--;
                if(this._time <= 0) {

                    // 时间到游戏结束， 发送分数数据
                    let room = RoomManager.Instance.getRoom(this._rid);

                    RoomManager.Instance.io.to(this._rid).emit('game:scores', {scores: room.scoreHelper.getScore()});
                    RoomManager.Instance.removeRoom(this._rid);
                }
            }
        }, 16);
    }

    public stop() {
        clearInterval(this._tid);
    }

    /**
     * 发送游戏帧数据
     */
    private sendFrame() {
        let ctrls: Array<Ctrl> = [];
        let framepack: FramePack;

        if(this._ctrlList.length > 0) {
          ctrls = this._ctrlList.splice(0, this._ctrlList.length);
        }

        framepack = {
          keyframe:this._keyframe,
          ctrls: ctrls
        };

        this._io.to(this._rid).emit('frame:update', framepack);
        this._keyframe += 1;
    }

    public addCtrl(ctrl: Ctrl) {
        this._ctrlList.push(ctrl);
    }
}