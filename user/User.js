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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFNSSxjQUFZLE1BQU07UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQUkscUJBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUJBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFVRCxVQUFRLEdBQVc7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7T0FaQTtJQUVELHNCQUFJLHNCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBVUQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7OztPQVpBO0lBRUQsc0JBQUksd0JBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBU0wsV0FBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ0Q7c0JBb0NDLENBQUEiLCJmaWxlIjoidXNlci9Vc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gICAgcHJpdmF0ZSBfdWlkOnN0cmluZztcclxuICAgIHByaXZhdGUgX25hbWU6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc29ja2V0OiBTb2NrZXRJTy5Tb2NrZXQ7XHJcbiAgICBwcml2YXRlIF9yaWQ6c3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXQpIHtcclxuICAgICAgICB0aGlzLl91aWQgPSBzb2NrZXQuaWQ7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9ICdub25hbWUnO1xyXG4gICAgICAgIHRoaXMuX3JpZCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHVpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdWlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc29ja2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb2NrZXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCByaWQocmlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9yaWQgPSByaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
