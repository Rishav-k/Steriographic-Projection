console.log("Hello !! I am JavaScript");

const dd =  230 ;
const da =  20 ;

const dd1 = [ 90 , 150 , 210];
const da1 = [45 , 30 , 60];

const friction = 25;

var c = document.querySelector("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");
const circle = ()=>{
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(300, 300, 250, 0, 2 * Math.PI);
    ctx.stroke();
}
circle();


const ellipse = async(dd , da , colour )=>{
    var x = (250/90)*(90-da);
    var myReq = requestAnimationFrame(ellipse);
    ctx.strokeStyle = colour;
    ctx.beginPath();
    ctx.ellipse(300, 300, x , 250, dd*Math.PI/180 , 1.5*Math.PI, 0.5*Math.PI);
    ctx.stroke();
}
ellipse(dd,da , "red");
for(var i = 0; i < dd1.length ;i++){
    ellipse(dd1[i] , da1[i] , "blue");
}

// var x = 300;
// var y = 200;
// var vx = 200 ;

// var vy = 200;
/// var flag = false;
// circle();
// function circle(){
//      var myReq = requestAnimationFrame(circle);
//     //  ctx.clearRect(0,0nb ,innerWidth , innerHeight);

//     var ctx = c.getContext("2d");
//     //  Creating Circle
//      ctx.beginPath();
//      ctx.fillStyle = "black";
//      ctx.fillStyle = "rgba(0,255,255,0.6)";
//      ctx.strokeStyle = "black";

//      ctx.arc( vx , vy , 1 , 0 , 2*Math.PI);
//      ctx.stroke();
//      ctx.fill();
     
//      if(flag === false){
//         vx += 1 ;
//         vy = y - Math.sqrt(radius*radius - (x-vx)*(x-vx));
//      }
//      if(flag === true){
//         vx -= 1 ;
//         vy = Math.sqrt(radius*radius - (x-vx)*(x-vx)) + y ;
//         if(vx === x - radius){
//             console.log("End " + vx);
//             console.log(x - radius + " ok fine");
//             cancelAnimationFrame(myReq);
//         }
//      }
     
//     if(vx === x + radius){
//         console.log("Hello " + vx);
//         flag = true;
//     }
// }