// Create a class that uses the User interface
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManager.prototype.listUsers = function () {
        this.users.forEach(function (user) {
            console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email));
        });
    };
    return UserManager;
}());
// Instantiate and use the class
var manager = new UserManager();
manager.addUser({ id: 1, name: "Lidia Aliso", email: "lidia@example.com" });
manager.addUser({ id: 2, name: "Alex", email: "alex@example.com" });
manager.listUsers();
