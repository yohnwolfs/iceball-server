
export default class User {
    private _uid:string;
    private _name:string;
    private _socket: SocketIO.Socket;
    private _rid:string;
    
    constructor(socket) {
        this._uid = socket.id;
        this._name = 'noname';
        this._rid = '';
        this._socket = socket;
    }
    
    get uid() {
        return this._uid;
    }

    get rid() {
        return this._rid;
    }

    get name() {
        return this._name;
    }

    get socket() {
        return this._socket;
    }
    
    set rid(rid: string) {
        this._rid = rid;
    }

    set name(name: string) {
        this._name = name;
    }
}