"use strict";
var User = (function () {
    function User(socket) {
        this._uid = socket.id;
        this._name = 'noname';
        this._rid = '';
        this._socket = socket;
    }
    Object.defineProperty(User.prototype, "uid", {
        get: function () {
            return this._uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "rid", {
        get: function () {
            return this._rid;
        },
        set: function (rid) {
            this._rid = rid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "socket", {
        get: function () {
            return this._socket;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFNSSxjQUFZLE1BQU07UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQUkscUJBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUJBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFVRCxVQUFRLEdBQVc7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7T0FaQTtJQUVELHNCQUFJLHNCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBVUQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7OztPQVpBO0lBRUQsc0JBQUksd0JBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBU0wsV0FBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ0Q7c0JBb0NDLENBQUEiLCJmaWxlIjoidXNlci9Vc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgICBwcml2YXRlIF91aWQ6c3RyaW5nO1xuICAgIHByaXZhdGUgX25hbWU6c3RyaW5nO1xuICAgIHByaXZhdGUgX3NvY2tldDogU29ja2V0SU8uU29ja2V0O1xuICAgIHByaXZhdGUgX3JpZDpzdHJpbmc7XG4gICAgXG4gICAgY29uc3RydWN0b3Ioc29ja2V0KSB7XG4gICAgICAgIHRoaXMuX3VpZCA9IHNvY2tldC5pZDtcbiAgICAgICAgdGhpcy5fbmFtZSA9ICdub25hbWUnO1xuICAgICAgICB0aGlzLl9yaWQgPSAnJztcbiAgICAgICAgdGhpcy5fc29ja2V0ID0gc29ja2V0O1xuICAgIH1cbiAgICBcbiAgICBnZXQgdWlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdWlkO1xuICAgIH1cblxuICAgIGdldCByaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yaWQ7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIGdldCBzb2NrZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb2NrZXQ7XG4gICAgfVxuICAgIFxuICAgIHNldCByaWQocmlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcmlkID0gcmlkO1xuICAgIH1cblxuICAgIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9XG59Il19
