document.addEventListener("DOMContentLoaded",function(event){

  function PictureItem(description, image){
this.description = description;
this.image = image;


}
function buildModel(item, $list){
  $newPicture = $("<figure>");
  $newP = $("<figcaption>" + item.description + "</figcaption>") ;
  $pic = $("<img>");
  $pic.attr('src', item.image);
  $newPicture.append($pic);
  $newPicture.append($newP);
  $newPicture.attr('class', 'image');
  $list.append($newPicture);

}

var pictures = [new PictureItem("A picture of my favorite shoe", "./images/myshoe.jpg"), new PictureItem("Leaf with wooden background", "./images/combination.jpg"), new PictureItem("The Floor in the Ballroom", "./images/ballroom.jpg"), new PictureItem("Palm tree over a wood floor", "./images/fancyleaf.jpg"), new PictureItem("Sideways picture of flowers", "./images/flowers.jpg"), new PictureItem("Remastered Picture of a Hedge", "./images/hedge.png")];
$list = $(".row");
console.log($list);
console.log(pictures);
for(var i = 0; i < pictures.length; ++i){

  buildModel(pictures[i], $list);
}
$pictures = $("figure");
$box = $('div:first');
$pictures.on("click", function(e){
eventTarget = e.target;
console.log(eventTarget);
$box.attr('id',"lightbox");
$img = $("<img>");
$img.attr('src', eventTarget.src);
$("#one").append('<i>');
$('i').addClass("fa fa-arrow-circle-left");
$box.append($img);
$("#two").append('<i>');
$('i:last').addClass("fa fa-arrow-circle-right");
});
$box.on("click", function(){
  console.log("AAAA");
$box.empty();
$box.removeAttr("id", "lightbox");
});

});
