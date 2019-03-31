/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/express/express.d.ts"/>
/// <reference path="../typings/socket.io/socket.io.d.ts"/>


import express = require('express');
import http = require('http');
import socketio = require('socket.io');

import room = require('./room/Room');
import UserManager from './user/UserManager';
import RoomManager from './room/RoomManager';
import ConnectionManager from './ConnectionManager';

let app = express();
let server = http.createServer(app);
let io = socketio(server);

let userManager = UserManager.Instance;
let roomManager = RoomManager.Instance;

roomManager.io = io;

// 开始监测房间请求队列
roomManager.startWatching();

// 配置socket.io
io.on('connection', function(socket: SocketIO.Socket) {
	  console.log('===> [user ' + socket.id + '] connected');
    
    // 连接同时创建用户
    let user = userManager.createUser(socket); 
    
    // 初始化socket事件
    new ConnectionManager().initSocketEvent(socket, user);
    
});

app.get('/', function(req, res){
  res.send('welcome, but you go the wrong way.');
});

server.listen(process.env.PORT || (process.env.PORT = 3100), function(){
  console.log('System:  listening on ' + process.env.PORT);
});