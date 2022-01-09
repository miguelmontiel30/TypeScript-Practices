// INTERFACES
/*  Las interfaces son una forma poderosa de definir 'contratos'
    tanto para tu proyecto, como para el codigo externo.
        "Una interfaz es como un molde para un objeto.
        Si el objeto no encaja en el molde, te va a dar error."
*/

// Funcion para mostrar una Fotografia
export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string,
    date: string,
    orientation?: PhotoOrientation //INDICAMOS QUE UN VALOR ES OPCIONAL CON '?'
}

function showPicture(picture: Picture) {
    console.log({picture});
}

let myPic = {
    title: 'My first Photo',
    date: '2022-03-15',
    orientation: PhotoOrientation.Landscape
}
showPicture(myPic);

showPicture({
    title: 'My second Photo',
    date: '2021-02-25',
    orientation: PhotoOrientation.Panorama,
    // extra: 'test'   // --> Error
}); // objecto anonimo



// PRACTICA CON INTERFACES Y HERENCIA
interface User {
    id_user: number;
    userName: string;
    userPro?: boolean;
}

interface LikedFood extends User{
    id_liked_food: number;
    comment?: string;
}

let newUser: User;
newUser = {
    id_user: 1,
    userName: 'Mike',
    userPro: true
}
console.log('Interface User:', newUser);

let new_liked_food: LikedFood;
new_liked_food = {
    id_liked_food: 15,
    comment: 'Tasty Food',
    id_user: 1,
    userName: 'Mike',
    userPro: true
}
console.log('Extended Interface:', new_liked_food);

