function MenuItem(name, price, description, image){
this.name = name;
this.price = price;
this.description = description;
this.image = image;


}
function buildModel(item, list){
  var newPicture = document.createElement("figure");
  var newP = document.createElement("figcaption");
  var pic = document.createElement("img");
  var newText = document.createTextNode(item.price + " " + item.name + " - " + item.description);

  pic.setAttribute('src', item.image);
  newPicture.appendChild(pic);
  newP.appendChild(newText);
  newPicture.appendChild(newP);
  newPicture.setAttribute('class', 'image');
  list[0].appendChild(newPicture);
}

var menu = [new MenuItem("Biscuit", "$25", "Beautiful and Awesome", "./images/biscuit.png"), new MenuItem("Bacon", "$5", "So crispy!", "./images/bacon.jpg"), new MenuItem("Coffee", "$2", "For all y'all non-LDS folks", "./images/coffee.jpg"), new MenuItem("Salad", "$7", "It's healthy. You should eat it.", "./images/salad.jpg")];
var list = document.getElementsByClassName("row");
console.log(list);
console.log(menu);
for(var i = 0; i < menu.length; ++i){

  buildModel(menu[i], list);


}
