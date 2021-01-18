"use strict";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    return UserAccount;
}());
;
var Me = new UserAccount("Danilo", 30);
console.log(Me);
