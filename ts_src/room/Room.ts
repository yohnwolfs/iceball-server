import User from '../user/User';
import Game from '../Game';
import ScoreHelper from './ScoreHelper';
import RoomManager from './RoomManager';
import UserManager from '../user/UserManager';

export default class Room {
    private _rid:string;
    private _userList: Array<User>;
    private _socketList: Array<SocketIO.Socket>;
    private _readyList: Array<string> = [];
    private _scoreHelper: ScoreHelper;
    private _game: Game;
    // 房间状态值， 1：正常运行状态 0：至少有一个玩家断线，房间停止状态
    public status: number = 1;
    
    constructor(rid:string, user1:User, user2:User) {

        // 初始化房间号、用户队列、端口队列
        this._rid = rid;
        this._userList = [user1, user2];
        this._socketList = [user1.socket, user2.socket];
        
        this._userList[0].rid = this._rid;
        this._userList[1].rid = this._rid;
        this._socketList[0].join(this._rid);
        this._socketList[1].join(this._rid);

        // 初始化分数管理器
        this._scoreHelper = new ScoreHelper(user1.uid, user1.name, user2.uid, user2.name);

        // 随机方向
        let direction = Math.random() < 0.5? 0 : 1;

        // 房间创建成功，发送消息到客户端
        // 初始化比赛球的初始方向，发送球初始化消息
        this._socketList[0].emit('room:created', {opponent: user2.name, ballDirection: direction});
        this._socketList[1].emit('room:created', {opponent: user1.name, ballDirection: 1 - direction});

        console.log('System:  create room for [' + this._userList[0].uid + ' and ' + this._userList[1].uid + ']');
        console.log('<=== emit room:created to [' + this._userList[0].uid + ' and ' + this._userList[1].uid + ']');

        // console.log(UserManager.Instance.userList.length);
        // console.log(RoomManager.Instance.roomList.length);
    }

    get rid() {
        return this._rid;
    }

    get game() {
        return this._game;
    }

    get scoreHelper() {
        return this._scoreHelper;
    }
    
    /**
     * 一个用户准备
     */
    public getReady(uid: string) {
        this._readyList.push(uid);
        if(this._readyList.length === 2) {   

            // 双方玩家准备就绪， 初始化游戏实例
            this._game = new Game(this._rid, this._userList);
            this._game.start();

            // 清空准备队列
            this._readyList = [];
        }
    }

    /**
     * 停止游戏
     */
    public stopGame() {
        this.status = 0;
        if(this._game) this._game.stop();
    }

    // 清理房间数据
    public destroy() {
        this.stopGame();
        
        if(this._socketList[0]) this._socketList[0].leave(this._rid);
        if(this._socketList[1]) this._socketList[1].leave(this._rid);
    }

    // 判断两个对象是否值相等
    private isObjectValueEqual(a: Object, b: Object) {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
 
        if (aProps.length != bProps.length) {
            return false;
        }
    
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        return true;
    }
}