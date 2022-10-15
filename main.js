canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_img="mars.jpg";
rover_img="rover.png";

function add(){
 background_image=new Image();
 background_image.onload=uploadbackground;
 background_image.src=background_img;

 rover_image=new Image();
 rover_image.onload=uploadrover;
 rover_image.src=rover_img;
}
function uploadbackground()
{
ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
        
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
        
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
        
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
        
    }
}
