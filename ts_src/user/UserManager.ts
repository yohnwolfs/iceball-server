import User from './User';

export default class UserManager {
    // 在线用户列表
    private _userList:Array<User>;
    
    constructor() {
        this._userList = [];
    }
    
    // 单例
    private static instance: UserManager;
    public static get Instance(): UserManager {
        if (UserManager.instance == null) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    get userList() {
        return this._userList;
    }
    
    // 创建用户
    public createUser(socket):User {
        var user = new User(socket);
        this._userList.push(user);
        
        console.log('System:  ' + this._userList.length + ' users online.');
        return user;
    }
    
    // 删除用户
    public removeUser(uid:string):boolean {
        for(let i = 0, l = this._userList.length; i < l; i++) {
            if(this._userList[i].uid === uid) {
                this._userList.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    
    // 获取用户数
    public getUserCount():number {
        return this._userList.length;
    }
    
    // 获取指定id用户
    public getUserById(uid:string) {
        for(let i = 0, l = this._userList.length; i < l; i++) {
            if(this._userList[i].uid === uid) { 
                return this._userList[i];
            }
        }
    }
}