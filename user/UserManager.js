"use strict";
var User_1 = require('./User');
var UserManager = (function () {
    function UserManager() {
        this._userList = [];
    }
    Object.defineProperty(UserManager, "Instance", {
        get: function () {
            if (UserManager.instance == null) {
                UserManager.instance = new UserManager();
            }
            return UserManager.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserManager.prototype, "userList", {
        get: function () {
            return this._userList;
        },
        enumerable: true,
        configurable: true
    });
    UserManager.prototype.createUser = function (socket) {
        var user = new User_1.default(socket);
        this._userList.push(user);
        console.log('System:  ' + this._userList.length + ' users online.');
        return user;
    };
    UserManager.prototype.removeUser = function (uid) {
        for (var i = 0, l = this._userList.length; i < l; i++) {
            if (this._userList[i].uid === uid) {
                this._userList.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    UserManager.prototype.getUserCount = function () {
        return this._userList.length;
    };
    UserManager.prototype.getUserById = function (uid) {
        for (var i = 0, l = this._userList.length; i < l; i++) {
            if (this._userList[i].uid === uid) {
                return this._userList[i];
            }
        }
    };
    return UserManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserManager;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvVXNlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFpQixRQUFRLENBQUMsQ0FBQTtBQUUxQjtJQUlJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUlELHNCQUFrQix1QkFBUTthQUExQjtZQUNJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzdDLENBQUM7WUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdNLGdDQUFVLEdBQWpCLFVBQWtCLE1BQU07UUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHTSxnQ0FBVSxHQUFqQixVQUFrQixHQUFVO1FBQ3hCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25ELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdNLGtDQUFZLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFHTSxpQ0FBVyxHQUFsQixVQUFtQixHQUFVO1FBQ3pCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25ELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQTtBQXRERDs2QkFzREMsQ0FBQSIsImZpbGUiOiJ1c2VyL1VzZXJNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1hbmFnZXIge1xuICAgIC8vIOWcqOe6v+eUqOaIt+WIl+ihqFxuICAgIHByaXZhdGUgX3VzZXJMaXN0OkFycmF5PFVzZXI+O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl91c2VyTGlzdCA9IFtdO1xuICAgIH1cbiAgICBcbiAgICAvLyDljZXkvotcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVXNlck1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogVXNlck1hbmFnZXIge1xuICAgICAgICBpZiAoVXNlck1hbmFnZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgVXNlck1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgVXNlck1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVXNlck1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXJMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckxpc3Q7XG4gICAgfVxuICAgIFxuICAgIC8vIOWIm+W7uueUqOaIt1xuICAgIHB1YmxpYyBjcmVhdGVVc2VyKHNvY2tldCk6VXNlciB7XG4gICAgICAgIHZhciB1c2VyID0gbmV3IFVzZXIoc29ja2V0KTtcbiAgICAgICAgdGhpcy5fdXNlckxpc3QucHVzaCh1c2VyKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdTeXN0ZW06ICAnICsgdGhpcy5fdXNlckxpc3QubGVuZ3RoICsgJyB1c2VycyBvbmxpbmUuJyk7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cbiAgICBcbiAgICAvLyDliKDpmaTnlKjmiLdcbiAgICBwdWJsaWMgcmVtb3ZlVXNlcih1aWQ6c3RyaW5nKTpib29sZWFuIHtcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX3VzZXJMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5fdXNlckxpc3RbaV0udWlkID09PSB1aWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvLyDojrflj5bnlKjmiLfmlbBcbiAgICBwdWJsaWMgZ2V0VXNlckNvdW50KCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJMaXN0Lmxlbmd0aDtcbiAgICB9XG4gICAgXG4gICAgLy8g6I635Y+W5oyH5a6aaWTnlKjmiLdcbiAgICBwdWJsaWMgZ2V0VXNlckJ5SWQodWlkOnN0cmluZykge1xuICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fdXNlckxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLl91c2VyTGlzdFtpXS51aWQgPT09IHVpZCkgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlckxpc3RbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19
