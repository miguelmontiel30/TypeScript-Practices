enum PhotoOrientation {
    Landscape = 'Landscape',
    Portrait = 'Portrait',
    Square = 'Square',
    Panorama = 'Panorama',
  }
  
  // interface Entity {
  //   id: number;
  //   title: string;
  // }
  
  // class Entity {
  //     id: number;
  //     title: string;
  //   }
  
  class Picture {
    id: number;
    title: string;
    orientation: PhotoOrientation;
  
    constructor(id: number, title: string, orientation: PhotoOrientation) {
      this.id = id;
      this.title = title;
      this.orientation = orientation;
    }
  
    // Comportamiento
    toString() {
      return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
  }
  
  class Album {
    id: number;
    title: string;
    pictures: Picture[] = [];
  
    constructor(id: number, title: string) {
      this.id = id;
      this.title = title;
      // this.pictures = [];
    }
  
    addPicture(picture: Picture) {
      this.pictures.push(picture);
    }
  }
  
  const picture: Picture = new Picture(100, 'cool', PhotoOrientation.Square);
  const picture1 = new Picture(201, 'korn', PhotoOrientation.Square);
  const album: Album = new Album(534, 'Family');
  console.log(picture);
  console.log(picture1);
  album.addPicture(picture);
  album.addPicture(picture1);
  
  console.log('album',album);