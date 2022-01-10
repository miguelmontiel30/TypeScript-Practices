// CLASSES
/*  Las clases y en general la POO pueden ser usadas
    a partir de ES5, así como todos sus conceptos.
*/

/**
 * A partir de un ejemplo con una aplicacion de pedidos de comida
 * existen varias entidades:
 * Usuarios: Quies hacen los pedidos
 * order_status: Enum con estado de los pedidos
 * Pedidos: La conjuncion de los pedidos que se van a ordenar
 * Comida: La comida que se esta pidiendo
 *          Usuario ---> Comida --> Orden --> Status
 */

// tipo de dato enum para almacenar es estado de las ordenes
enum OrderStatus {
    not_attended = 0,
    attended = 1,
    ready = 2,
    done = 3
}

// CLASE DE FOOD PARA CREAR NUEVOS ALIMENTOS
class Food {

    private id_food: number;
    private food_name: string;
    private price: number;
    private description: string;

    constructor(
        id_food: number,
        food_name: string,
        price: number,
        description: string
    ) {
        this.id_food = id_food;
        this.food_name = food_name;
        this.price = price;
        this.description = description;
    }

    getIdFood(){
        return this.id_food;
    }

    setIdFood(id_food: number){
        this.id_food = id_food;
    }

    getFoodName(){
        return this.food_name;
    }

    setFoodName(food_name: string){
        this.food_name = food_name;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price: number){
        this.price = price;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description: string){
        this.description = description;
    }
}

// CLASE PARA GUARDAR LAS ORDENES DE LOS USUARIOS
class UserOrders {
    private _id_order: number;
    private _id_user: User;
    private _order_status: OrderStatus;
    private _food_order: Array<[Food]> = [];

    constructor(_id_order: number, _id_user: User, _order_status: OrderStatus) {
        this._id_order = _id_order;
        this._id_user = _id_user;
        this._order_status = _order_status;
    }

    public get id_order(): number {
        return this._id_order;
    }

    public set id_order(_id_order: number) {
        this._id_order = _id_order;
    }

    public get id_user(): User {
        return this._id_user;
    }

    public set id_user(_id_user: User) {
        this._id_user = _id_user;
    }

    public get order_status(): OrderStatus {
        return this._order_status;
    }

    public set order_status(_order_status: OrderStatus) {
        this._order_status = _order_status;
    }

    public get food_order(): Array<[Food]> {
        return this._food_order;
    }

    addNewFoodToOrder(food: Food) {
        this._food_order.push([food]);
    }
}

//CLASE DE USER PARA MANEJAR A LOS USUARIOS
class User {

    private _id_user: number;
    private _user_name: string;
    private _isPro: boolean;

    constructor(_id_user: number, _user_name: string, _isPro: boolean) {
        this._id_user = _id_user;
        this._user_name = _user_name;
        this._isPro = _isPro;
    }

    public get id_user(): number {
        return this._id_user;
    }
    public set id_user(_id_user: number) {
        this._id_user = _id_user;
    }

    public get user_name(): string {
        return this._user_name;
    }
    public set user_name(_user_name: string) {
        this._user_name = _user_name;
    }

    public get isPro(): boolean {
        return this._isPro;
    }
    public set isPro(_isPro: boolean) {
        this._isPro = _isPro;
    }
}

// CREAMOS NUESTRO USUARIO QUE CREARA LOS PEDIDOS
const my_new_user: User = new User(1, 'Mike', true);
const my_new_user_2: User = new User(2, 'Giselle', true);
console.table(my_new_user);
console.table(my_new_user_2);

// CREAMOS LOS PLATILLOS EXISTENTES
const platillo_1: Food = new Food(1, 'Tortas', 20.00, 'Tortas de un Ingrediente');
console.table(platillo_1);
const platillo_2: Food = new Food(2, 'Enchiladas', 10.00, 'Orden de 4 enchiladas.');
console.table(platillo_2);

// CREAMOS UNA NUEVA ORDEN DE COMIDA
const nueva_orden: UserOrders = new UserOrders(1, my_new_user, OrderStatus.not_attended)
nueva_orden.addNewFoodToOrder(platillo_1);
nueva_orden.addNewFoodToOrder(platillo_2);
console.log(nueva_orden.food_order[0]);

const nueva_orden_2: UserOrders = new UserOrders(2, my_new_user_2, OrderStatus.ready)
nueva_orden.addNewFoodToOrder(platillo_2);
console.log(nueva_orden_2);