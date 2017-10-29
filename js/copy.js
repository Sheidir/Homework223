var copy = document.getElementById('copy');
var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear()
copy.innerText = "Copyright: " + month + "/" + day + "/" + year;
