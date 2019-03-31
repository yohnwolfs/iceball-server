import Room from './Room';
import User from '../user/User';

export default class RoomManager {
    private _roomList: Array<Room>;
    private _waitList: Array<User>;
    private _io: SocketIO.Server;
    
    constructor() {
        this._roomList = [];
        this._waitList = [];
    }
    
    // 单例
    private static instance: RoomManager;
    public static get Instance(): RoomManager {
        if (RoomManager.instance == null) {
            RoomManager.instance = new RoomManager();
        }
        return RoomManager.instance;
    }
    
    get io() {
        return this._io;
    }

    set io(io: SocketIO.Server) {
        this._io = io;
    }

    get roomList() {
        return this._roomList;
    }

    // 计算房间id
    private generateRid(user1: User, user2: User) {
        return user1.uid + user2.uid; 
    }
    
    // 根据房间id创建房间
    public createRoom(rid: string, user1: User, user2: User): Room {
        let room = new Room(rid, user1, user2);
        this._roomList.push(room);
        return room;
    }
    
    // 根据房间id获取房间
    public getRoom(rid: string): Room {
        for(let i = 0, l = this._roomList.length; i < l; i++) {
            if(this._roomList[i].rid === rid) {
                return this._roomList[i];
            }
        }
    }
    
    // 移除房间
    public removeRoom(rid: string): boolean {
        for(let i = 0, l = this._roomList.length; i < l; i++) {
            if(this._roomList[i].rid === rid) {
                this._roomList[i].destroy();
                this._roomList.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    
    // 开始监测排队队列
    public startWatching() {
        
        var t = setInterval(() => {
            if(this._waitList.length >= 2) {
                let users = this._waitList.splice(0, 2);
                let rid = this.generateRid(users[0], users[1]);
                this.createRoom(rid, users[0], users[1]);
            }
        }, 2000);
    }
    
    // 加入等待队列
    public addToWaitList(user: User) {
        this._waitList.push(user);
        
        console.log('System:  ' + this._waitList.length + ' users waiting.');
    }
    
    // 移出等待队列
    public removeFromWaitList(uid: string) {
        for(let i = 0, l = this._waitList.length; i < l; i++) {
            if(this._waitList[i].uid === uid) {
                this._waitList.splice(i, 1);
            }
        }
    }
}