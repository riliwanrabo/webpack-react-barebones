require("./stylesheets/main.scss");
import "babel-polyfill";
console.log("aye");
class Animal {
  sound(sound) {
    console.log(sound);
  }
}

const goat = new Animal();
goat.sound("bleat");
async function call_backend() {
  const response = await fetch("/api/backend");
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
}

call_backend();
