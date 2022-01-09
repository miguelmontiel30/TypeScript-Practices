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
 * 
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

    id_food: number;
    food_name: string;
    price: number;
    description: string;

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
}


// CLASE PARA GUARDAR LAS ORDENES DE LOS USUARIOS
class UserOrders {
    id_order: number;
    id_user: User;
    order_status: OrderStatus;
    food_order: Array<[Food]> = [];

    constructor(id_order: number, id_user: User, order_status: OrderStatus) {
        this.id_order = id_order;
        this.id_user = id_user;
        this.order_status = order_status;
    }

    addNewFoodToOrder(food: Food) {
        this.food_order.push([food]);
    }
}

//CLASE DE USER PARA MANEJAR A LOS USUARIOS
class User {

    id_user: number;
    user_name: string;
    isPro: boolean;

    constructor(id_user: number, user_name: string, isPro: boolean) {
        this.id_user = id_user;
        this.user_name = user_name;
        this.isPro = isPro;
    }

    getMyUser() {
        console.log(this.id_user, this.user_name, this.isPro);
    }
}

// CREAMOS NUESTRO USUARIO QUE CREARA LOS PEDIDOS
const my_new_user: User = new User(1, 'Mike', true);
console.table(my_new_user);

// CREAMOS LOS PLATILLOS EXISTENTES
const platillo_1: Food = new Food(1, 'Tortas', 20.00, 'Tortas de un Ingrediente');
console.table(platillo_1);
const platillo_2: Food = new Food(2, 'Enchiladas', 10.00, 'Orden de 4 enchiladas.');
console.table(platillo_2);

// CREAMOS UNA NUEVA ORDEN DE COMIDA
const nueva_orden: UserOrders = new UserOrders(1, my_new_user, OrderStatus.not_attended)
nueva_orden.addNewFoodToOrder(platillo_1);
nueva_orden.addNewFoodToOrder(platillo_2);
console.log(nueva_orden.food_order);