// Dinh nghia con meo 
class conMeo {

  constructor(mau, canNang){
    this.mau = mau;
    this.canNang = canNang;
    console.log('Dang tao con meo '+ mau);
  }

  an() {
    console.log('an');
    return this;
  }

  di() {

  }
}

// Chua co 1 con meo cu the 
var Tom = new conMeo('den', 1); // la mot instance cua class conMeo 
Tom.an();

console.log(Tom.canNang)

class website {
  constructor(){

  }
}

class game {
  constructor(){
    loadHinhAnh();
    loadLevel();
    loadMap();
  }
}


class menu {

}

class user {

}


class website {
  constructor() {
    this.menuTop = new menu();
    this.menuLeft = new menu();
    this.user = new user();
  }

  listenMenuClick() {
    this.menuTop.click( () => {
      user.logout();
    });
  }
}


// class ke thua
class dongVat {
  constructor(name) {
    this.name = name;
  }
  di() {
    console.log('Di')
  }
}

class conMeo extends dongVat {
  constructor() {
    super(name);
  }
}

class conCho extends dongVat {
  constructor() {

  }
}


// Vi du khac 
class menu {

}

class verticalMenu extends menu {

}


// Tao game dua xe
// Oto, xe may, xe dap

class xe {
  constructor(ten, tocDo) {
    this.ten = ten;
    this.tocDo = tocDo;
  }
}

class oto extends xe {
  constructor(ten, tocDo){
    super(ten, tocDo);
  }
}

class xeMay extends xe {
  constructor(ten, tocDo){
    super(ten, tocDo);
  }
}

class xeDap extends xe {
  constructor(ten, tocDo){
    super(ten, tocDo);
  }
}