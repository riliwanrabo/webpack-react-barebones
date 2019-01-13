require("./stylesheets/main.scss");
console.log("aye");
class Animal {
  sound(sound) {
    console.log(sound);
  }
}

const goat = new Animal();
goat.sound("bleat");
