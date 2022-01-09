"use strict";
let phone_number = 30.5;
let zip_code = 43612;
let data_oct = 0x845;
let data_binary = 0b101;
let data_hex = 0x101;
console.log({ phone_number, zip_code, data_oct, data_binary, data_hex });
let firstName = 'Miguel Angel';
let last_name = 'Ortega';
let userPro = true;
let userCommon = false;
let whatever = 'string';
console.log(whatever);
const myFunction = () => {
    console.log('Hello void functions');
};
myFunction();
const myNeverFunction = () => {
    let m_never_function_var;
};
let my_undefined_var;
console.log('my-undefined:', my_undefined_var);
let my_null_var;
console.log('my-null:', my_null_var);
let user_properties;
user_properties = {};
user_properties = {
    firstName,
    last_name,
    zip_code,
    userPro
};
const isObjectInstance = user_properties instanceof Object;
console.log('isInstance : ', isObjectInstance);
console.log('my_object:', user_properties.firstName);
let new_user_properties = {
    firstName,
    last_name,
    zip_code,
    userPro
};
const isInstance = new_user_properties instanceof Object;
console.log('isInstance : ', isInstance);
console.log('new_user_properties:', new_user_properties.firstName);
let users_id_array;
users_id_array = [15, 20, 35, 200];
console.log('Users ID Array', users_id_array);
let user_data_array;
user_data_array = [firstName, last_name, zip_code];
console.log('data_array:', user_data_array);
let tuple_way_1;
tuple_way_1 = [firstName, last_name, zip_code, new_user_properties];
console.log('tupla_1:', tuple_way_1);
let tuple_way_2;
tuple_way_2 = [[firstName, zip_code, userPro]];
console.log('tupla_2:', tuple_way_2);
let arrayDeTuplas = [];
arrayDeTuplas.push([1, 'Erik']);
arrayDeTuplas.push([2, 'Logan']);
arrayDeTuplas.push([3, 'Xavier']);
console.log('arrayDeTuplas: ', arrayDeTuplas);
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "cero";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
const square = PhotoOrientation.Square;
console.log('landscape: ', landscape);
console.log('Square: ', PhotoOrientation[square]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log('Portrait: ', PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "BOL";
    Country["Colombia"] = "COL";
    Country["Mexico"] = "MEX";
    Country["EEUU"] = "USA";
    Country["Espana"] = "ESP";
})(Country || (Country = {}));
const mexico = Country.Mexico;
console.log('México: ', mexico);
let idUser;
idUser = 10;
idUser = '10';
function getUsernameById(id) {
    return 'luixaviles';
}
getUsernameById(20);
getUsernameById('20');
let idUser_2;
idUser_2 = 10;
idUser_2 = '10';
function getUsernameById_2(id) {
    return 'luixaviles';
}
getUsernameById_2(20);
getUsernameById_2('20');
let smallPicture = '100x100';
let mediumPicture = '500x500';
let my_name = '';
my_name = 'miguel';
console.log('asercion de tipo', my_name.toUpperCase());
const my_favorite_number = '15';
const sum = (my_favorite_number_pharam, optional_value) => {
    const number_1 = 10;
    console.log(optional_value);
    return number_1 + parseInt(my_favorite_number_pharam);
};
console.log('my function :', sum(my_favorite_number, 'parametro opcional'));
