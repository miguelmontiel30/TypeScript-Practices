//// ********* THOSE ARE SOME OF THE PRIMITIVE DATA TYPES IN TYPESCRIPT  ********* ////
//// ********* number, string, boolean, null, undefined ********* ////

// ********* type number ********* //
let phone_number: number = 30.5;
let zip_code: number = 43612;
let data_oct: number = 0x845;
let data_binary: number = 0b101;
let data_hex: number = 0x101;

console.log({ phone_number, zip_code, data_oct, data_binary, data_hex });

// ********* type string ********* //
let firstName = 'Miguel Angel';
let last_name: string = 'Ortega';

// ********* type boolean ********* //
let userPro: boolean = true;
let userCommon: boolean = false;


// ********* type any ********* //
let whatever: any = 'string';
// whatever = 15;
console.log(whatever);


// VOID & NEVER TYPES

// ********* void ********* //
const myFunction = (): void => {
    console.log('Hello void functions');
}
myFunction();

// ********* never ********* //
const myNeverFunction = (): never => {
    let m_never_function_var: never;
}
myNeverFunction();


//type undefined & null
// ********* undefined ********* //
let my_undefined_var: undefined;
console.log('my-undefined:', my_undefined_var);

// ********* null ********* //
let my_null_var: null;
// my_null_var = 'Hello!'
console.log('my-null:', my_null_var);


//********* type object ********* //
// --- object ---- shouldn't be used in your code. It's unusable
let user_properties: object;
user_properties = {}
user_properties = {
    firstName,
    last_name,
    zip_code,
    userPro
}
const isObjectInstance = user_properties instanceof Object; // trueo o false
console.log('isInstance : ', isObjectInstance);
// console.log('my_object:', user_properties.firstName);

// ---- Object -- It´s an instance and can be used to create real objects
let new_user_properties = {
    firstName,
    last_name,
    zip_code,
    userPro
}
const isInstance = new_user_properties instanceof Object; // trueo o false
console.log('isInstance : ', isInstance);
console.log('new_user_properties:', new_user_properties.firstName);


// ********* type Array ********* //
// We have two different ways to declare an Array

// type[] (string[], number[], boolean[], any[])
let users_id_array: number[];
users_id_array = [15, 20, 35, 200];
console.log('Users ID Array', users_id_array);

// Array<type> (Array<string>, Array<number>, Array<boolean>)
let user_data_array: Array<any>;
user_data_array = [firstName, last_name, zip_code];
console.log('data_array:', user_data_array);


// ********* type tuples ********* //
// Now we can specify the datatypes that an array should be store

// [type] ([string, number, boolean, any])
let tuple_way_1: [string, string, number, Object];
tuple_way_1 = [firstName, last_name, zip_code, new_user_properties];
console.log('tupla_1:', tuple_way_1);

// Array<[type]> (Array<[string, number, boolean]>)
let tuple_way_2: Array<[string, number, boolean]>;
tuple_way_2 = [[firstName, zip_code, userPro]];
console.log('tupla_2:', tuple_way_2);


// my_data_tuple = [firstName, zip_code, userPro];
//* Arreglo de Tuplas
let arrayDeTuplas: [number, string][] = []
arrayDeTuplas.push([1, 'Erik']) //*0
arrayDeTuplas.push([2, 'Logan']) //*1
arrayDeTuplas.push([3, 'Xavier']) //*2
console.log('arrayDeTuplas: ', arrayDeTuplas)



// ********* type enum ********* //
//*Una forma más inteligente de declarar constantes
enum PhotoOrientation {
    Landscape = 'cero', //* Podemos asignar un valor en particular
    Portrait = 1, //* 1
    Square = 2, //* 2
    Panorama = 3 //* 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
const square: PhotoOrientation = PhotoOrientation.Square;

console.log('landscape: ', landscape) //* Accede al valor
console.log('Square: ', PhotoOrientation[square]) //* Accede al nombre

//*Siempre tenemos valores consecutivos que incrementan de 1 en 1
enum PictureOrientation {
    Landscape = 10,
    Portrait, //* 11
    Square, //* 12
    Panorama,// *13
}

console.log('Portrait: ', PictureOrientation.Portrait) //* valor 11

//* Es la misma lógica que: { key, value }
enum Country {
    Bolivia = 'BOL',
    Colombia = 'COL',
    Mexico = 'MEX',
    EEUU = 'USA',
    Espana = 'ESP'
}

const mexico: Country = Country.Mexico
console.log('México: ', mexico)
//Country.Mexico = 'MX' //!Esto da un error, no podemos modificar su valor



// ********* UNION DE TIPOS, ALIAS Y TIPOS LITERALES ********* //

/* En TypeScript se puede definir una variable con multiple tipos de datos: Union Type
 * - Se usa el simbolo de pipe ('|') entre los tipos
 */
let idUser: number | string;
idUser = 10;
idUser = '10';
// Buscar username dado un ID
function getUsernameById(id: number | string) {
    // logica de negocio, find the user
    return 'luixaviles';
}
getUsernameById(20);
getUsernameById('20');


/* Alias de Tipos: El alias se puede aplicar tambien a un conjunto o combinacion de tipos */
// alias de tipos: TS
type IdUser = number | string;
type Username = string;
let idUser_2: IdUser;
idUser_2 = 10;
idUser_2 = '10';

// Buscar username dado un ID
function getUsernameById_2(id: IdUser): Username {
    // logica de negocio, find the user
    return 'mike';
}
getUsernameById_2(20);
getUsernameById_2('20');

/* Tipos literales */
// permiten declarar los posibles valores que almacenara la variable
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';   // string | number
// let smallPicture: SquareSize = '200x200'; // --> Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';


// ********* ASERCIONES DE TIPO (CONVERSION DE TIPO DE DATO) Y FUNCIONES ********* //

let my_name: any = '';
my_name = 'miguel'
console.log('asercion de tipo', (my_name as string).toUpperCase());


const my_favorite_number: any = '15';
const sum = (my_favorite_number_pharam: number, optional_value?: string): number => {
    const number_1: number = 10;
    console.log('optional_value: ', optional_value);
    return number_1 + parseInt(my_favorite_number_pharam);
}
console.log('my function :', sum(my_favorite_number as number, 'parametro opcional'));

