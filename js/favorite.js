
var filter = document.getElementById("filter");
var highlight = document.getElementById("highlight");
var items = document.getElementsByClassName('favorite-item');

filter.onclick = function(){
  var toDelete = items[0];
  toDelete.parentNode.removeChild(toDelete);

}
highlight.onclick = function(){

items[0].style.backgroundColor = "#1f1f7a";
items[0].style.color = "white";
console.log(items[0].backgroundColor);




}
