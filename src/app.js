/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  let frase =
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom];
  document.getElementById("excuse").innerHTML = frase;

  if (whoRandom === 0) {
    document.getElementById("img").src =
      "https://img.freepik.com/vector-gratis/perro-lindo-alegre-sobre-fondo-blanco_1308-132745.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699401600&semt=ais";
  } else if (whoRandom === 1) {
    document.getElementById("img").src =
      "https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170920392/86318431-dise%C3%B1o-gr%C3%A1fico-de-feliz-abuela-dibujos-animados-vector-ilustraci%C3%B3n.jpg";
  } else if (whoRandom === 2) {
    document.getElementById("img").src =
      "https://static.vecteezy.com/system/resources/thumbnails/005/561/633/small/turtle-cartoon-clipart-illustration-free-vector.jpg";
  } else {
    document.getElementById("img").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK84hnjgEPiN0c0Co2J21YAuDeKQCJ83VuNzfgbsl3chBAfKRjywS1A3F9nqowj2tuRk&usqp=CAU";
  }
};
