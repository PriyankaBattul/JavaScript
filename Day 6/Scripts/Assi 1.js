

console.log("change the color of screen every after 5sec")
var c=["blue","green","yellow","red"];
  function changeColor(){
        var randomcolor = c[Math.floor(Math.random() * c.length)];
        document.body.style.backgroundColor = randomcolor;
            
        }
function start(){
             setInterval(changeColor, 5000);
  }
  
  start()