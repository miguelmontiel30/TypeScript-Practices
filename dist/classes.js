"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["not_attended"] = 0] = "not_attended";
    OrderStatus[OrderStatus["attended"] = 1] = "attended";
    OrderStatus[OrderStatus["ready"] = 2] = "ready";
    OrderStatus[OrderStatus["done"] = 3] = "done";
})(OrderStatus || (OrderStatus = {}));
class User {
    constructor(id_user, user_name, isPro) {
        this.id_user = id_user;
        this.user_name = user_name;
        this.isPro = isPro;
    }
}
