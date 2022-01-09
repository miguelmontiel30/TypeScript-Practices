"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["not_attended"] = 0] = "not_attended";
    OrderStatus[OrderStatus["attended"] = 1] = "attended";
    OrderStatus[OrderStatus["ready"] = 2] = "ready";
    OrderStatus[OrderStatus["done"] = 3] = "done";
})(OrderStatus || (OrderStatus = {}));
class Food {
    constructor(id_food, food_name, price, description) {
        this.id_food = id_food;
        this.food_name = food_name;
        this.price = price;
        this.description = description;
    }
}
class UserOrders {
    constructor(id_order, id_user, order_status) {
        this.food_order = [];
        this.id_order = id_order;
        this.id_user = id_user;
        this.order_status = order_status;
    }
    addNewFoodToOrder(food) {
        this.food_order.push([food]);
    }
}
class User {
    constructor(id_user, user_name, isPro) {
        this.id_user = id_user;
        this.user_name = user_name;
        this.isPro = isPro;
    }
    getMyUser() {
        console.log(this.id_user, this.user_name, this.isPro);
    }
}
const my_new_user = new User(1, 'Mike', true);
console.table(my_new_user);
const platillo_1 = new Food(1, 'Tortas', 20.00, 'Tortas de un Ingrediente');
console.table(platillo_1);
const platillo_2 = new Food(2, 'Enchiladas', 10.00, 'Orden de 4 enchiladas.');
console.table(platillo_2);
const nueva_orden = new UserOrders(1, my_new_user, OrderStatus.not_attended);
nueva_orden.addNewFoodToOrder(platillo_1);
nueva_orden.addNewFoodToOrder(platillo_2);
console.log(nueva_orden.food_order);
