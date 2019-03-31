import UserManager from './user/UserManager';
import RoomManager from './room/RoomManager';

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
      power: number,
      bulletType: string
    }
}

var ClientEvent = {
    
    'disconnect': function() {
        
        let uid = this.user.uid;
        let rid = this.user.rid;
        let room = RoomManager.Instance.getRoom(rid);

        // 通知其他玩家用户离开并发送分数数据
        if(room) {
            RoomManager.Instance.io.to(rid).emit('game:scores', {scores: room.scoreHelper.getScore(), msg: '你的对手离开了游戏'});
            RoomManager.Instance.removeRoom(rid);
        }
        
        // 清理残留用户数据
        UserManager.Instance.removeUser(uid);
        RoomManager.Instance.removeFromWaitList(uid);
        
        console.log('===> [user ' + this.socket.id + '] disconnect');
    },
    
    // 以用户名登录
    'user:login': function(data:{name:string}) {
        this.user.name = data.name;
        this.socket.emit('user:loginSuccess', {uid: this.user.uid, username: data.name});
        console.log('System:  [name: ' + this.user.name + '] log in.');
    },
    
    // 用户准备
    'user:ready': function() {
        let rid = this.user.rid;
        let uid = this.user.uid;
        let room = RoomManager.Instance.getRoom(rid);
        
        if(room) room.getReady(uid);
    },

    // 用户操作
    'user:ctrl': function(ctrl: Ctrl) {
        let game;
        let rid = this.user.rid;
        let room = RoomManager.Instance.getRoom(rid);

        if(!room || room.status === 0) {
            this.socket.emit('sys:msg', {msg: 'room not exist'});
            return;
        }

        game = room.game;

        if(game) game.addCtrl(ctrl);
        else {
            this.socket.emit('sys:msg', {msg: 'game not exist'});
        }
    },
    
    // 开始匹配对手
    'room:match': function() {
        RoomManager.Instance.addToWaitList(this.user);
    },
    
    // 加入房间
    'room:join': function() {
        
    },
    
    // 创建房间
    'room:create': function() {
        
    },

    // // 子弹爆炸得分
    // 'game:explosion': function(data: {id: string}) {
    //     let rid = this.user.rid;
    //     let room = RoomManager.Instance.getRoom(rid);

    //     room.scoreHelper.causeExplosion(data.id);

    //     RoomManager.Instance.io.to(rid).emit('game:scorein', {id: this.user.uid, scores: room.scoreHelper.getScore(this.user.uid)});
    // },

    // // 进球得分
    // 'game:ballin': function(data: {id: string}) {
    //     let rid = this.user.rid;
    //     let room = RoomManager.Instance.getRoom(rid);

    //     let result = room.scoreHelper.ballIn(data.id);

    //     RoomManager.Instance.io.to(rid).emit('game:scorein', {id: this.user.uid, scores: room.scoreHelper.getScore(this.user.uid)});

    //     if(result) {
    //         RoomManager.Instance.io.to(rid).emit('game:scores', {scores: room.scoreHelper.getScore()});
    //         RoomManager.Instance.removeRoom(rid);
    //     }
    // },

    // 得分进账
    'game:scorein': function(data: {id: string, type: string}) {
        let rid = this.user.rid;
        let room = RoomManager.Instance.getRoom(rid);

        switch(data.type) {
            case 'bulletExplosion': {
                room.scoreHelper.scorein(data.id, 'bulletExplosion');
                RoomManager.Instance.io.to(rid).emit('game:scorein', {id: this.user.uid, scores: room.scoreHelper.getScore(this.user.uid)});
                break;
            }
            case 'ballin': {
                room.scoreHelper.scorein(data.id, 'ballin');
                // RoomManager.Instance.io.to(rid).emit('game:balldirection', {id: this.user.uid, direction: Math.random() > .5? 1 : 0});
                RoomManager.Instance.io.to(rid).emit('game:scorein', {id: this.user.uid, scores: room.scoreHelper.getScore(this.user.uid)});

                if(room.scoreHelper.checkWin(data.id)) {
                    RoomManager.Instance.io.to(rid).emit('game:scores', {scores: room.scoreHelper.getScore()});
                    RoomManager.Instance.removeRoom(rid);
                }
                break;
            }
        }
    }
};

export default class ConnectionManager {
    private user;
    private socket;
    
    constructor() {
        
    }
    
    public initSocketEvent(socket, user) {
        this.socket = socket;
        this.user = user;
        
        for(let i in ClientEvent) {
            socket.on(i, ClientEvent[i].bind(this));
        }
    }
}