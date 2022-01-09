"use strict";
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
class Album {
    constructor(id, title) {
        this.pictures = [];
        this.id = id;
        this.title = title;
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const picture = new Picture(100, 'cool', PhotoOrientation.Square);
const picture1 = new Picture(201, 'korn', PhotoOrientation.Square);
const album = new Album(534, 'Family');
console.log(picture);
console.log(picture1);
album.addPicture(picture);
album.addPicture(picture1);
console.log('album', album);
