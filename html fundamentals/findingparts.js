//regresa todos los elementos que tienen esa clase
document.getElementsByClassName("img-responsive");

// toma un selector de css , solo regresa el primer match
document.querySelector(".img-responsive");

// regresa un arreglo con todos los matches
document.querySelectorAll(".img-responsive");

//obtener el primer hijo de una lista
document.querySelectorAll("#example-container li:firstchild");

//querySelectors regresan una NodeList la cual no puede ser iterada como un array

//for de toda la vida
for (var i = 0; i < items.length; i++) {
  console.log(items[i].innerText);
}

//foreach

var forEach = Array.prototype.forEach;
var items = document.querySelectorAll("#example-container li");

forEach.call(items, (item) => {
  console.log(item.innerText);
});

//

var list = document.querySelector("#example-container ul");

//llamar a este metodo nos regresara una variable viva que se actualizara si le cambiamos algo de esa seleccion
var items = document.getElementsByClassName("feature");

var newitem = document.createElement("li");
//agregarle la clase feature a ese elemento
newitem.className = "feature";
newitem.innerText = "new live feature";

//append this newitem to the list of items
list.appendChild(newitem);
