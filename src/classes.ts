// CLASSES
/*  Las clases y en general la POO pueden ser usadas
    a partir de ES5, así como todos sus conceptos.
*/

enum OrderStatus {
    not_attended = 0,
    attended = 1,
    ready = 2,
    done = 3
}

class User {

    id_user: number;
    user_name: string;
    isPro: boolean;

    constructor(id_user: number, user_name: string, isPro: boolean) {
        this.id_user = id_user;
        this.user_name = user_name;
        this.isPro = isPro;
    }
}