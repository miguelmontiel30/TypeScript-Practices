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
    getIdFood() {
        return this.id_food;
    }
    setIdFood(id_food) {
        this.id_food = id_food;
    }
    getFoodName() {
        return this.food_name;
    }
    setFoodName(food_name) {
        this.food_name = food_name;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
}
class UserOrders {
    constructor(_id_order, _id_user, _order_status) {
        this._food_order = [];
        this._id_order = _id_order;
        this._id_user = _id_user;
        this._order_status = _order_status;
    }
    get id_order() {
        return this._id_order;
    }
    set id_order(_id_order) {
        this._id_order = _id_order;
    }
    get id_user() {
        return this._id_user;
    }
    set id_user(_id_user) {
        this._id_user = _id_user;
    }
    get order_status() {
        return this._order_status;
    }
    set order_status(_order_status) {
        this._order_status = _order_status;
    }
    get food_order() {
        return this._food_order;
    }
    addNewFoodToOrder(food) {
        this._food_order.push([food]);
    }
}
class User {
    constructor(_id_user, _user_name, _isPro) {
        this._id_user = _id_user;
        this._user_name = _user_name;
        this._isPro = _isPro;
    }
    get id_user() {
        return this._id_user;
    }
    set id_user(_id_user) {
        this._id_user = _id_user;
    }
    get user_name() {
        return this._user_name;
    }
    set user_name(_user_name) {
        this._user_name = _user_name;
    }
    get isPro() {
        return this._isPro;
    }
    set isPro(_isPro) {
        this._isPro = _isPro;
    }
}
const my_new_user = new User(1, 'Mike', true);
const my_new_user_2 = new User(2, 'Giselle', true);
console.table(my_new_user);
console.table(my_new_user_2);
const platillo_1 = new Food(1, 'Tortas', 20.00, 'Tortas de un Ingrediente');
console.table(platillo_1);
const platillo_2 = new Food(2, 'Enchiladas', 10.00, 'Orden de 4 enchiladas.');
console.table(platillo_2);
const nueva_orden = new UserOrders(1, my_new_user, OrderStatus.not_attended);
nueva_orden.addNewFoodToOrder(platillo_1);
nueva_orden.addNewFoodToOrder(platillo_2);
console.log(nueva_orden.food_order[0]);
const nueva_orden_2 = new UserOrders(2, my_new_user_2, OrderStatus.ready);
nueva_orden.addNewFoodToOrder(platillo_2);
console.log(nueva_orden_2);
