var statements = ['"The pictures that Heidi made are beautiful and awesome." - My number one fan',
'"This company is the best I have ever worked with!" - Me',
'"Looking at these pictures just makes the world better." - Everyone in the world',
'"These pictures make my heart leap with joy." - Dad',
'"If I had a penny every time my clients admired these paintings, I\'d be broke." - Someone smarter than me.']
var random = Math.floor(Math.random() * (statements.length));

var container = document.getElementById("testimonial");
container.innerText = statements[random];
