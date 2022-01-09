"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log({ picture });
}
let myPic = {
    title: 'My first Photo',
    date: '2022-03-15',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'My second Photo',
    date: '2021-02-25',
    orientation: PhotoOrientation.Panorama,
});
let newUser;
newUser = {
    id_user: 1,
    userName: 'Mike',
    userPro: true
};
console.log('Interface User:', newUser);
let new_liked_food;
new_liked_food = {
    id_liked_food: 15,
    comment: 'Tasty Food',
    id_user: 1,
    userName: 'Mike',
    userPro: true
};
console.log('Extended Interface:', new_liked_food);
