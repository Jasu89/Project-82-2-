var mouseEvent="empty";
var last_postion_of_x, last_postion_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=2;


canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}


canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last postion of x and y coardinates=");
        console.log("x=" + last_postion_of_x + "y=" + last_postion_of_y);
        ctx.moveTo(last_postion_of_x, last_postion_of_y);
        console.log("current position of x and y coardinates=");
        console.log("x=" + current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    }
    last_postion_of_x=current_position_of_mouse_x;
    last_postion_of_y=current_position_of_mouse_y;
}


function clearArea(){
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}

canvas.addEventListener("mouseup", my_mouseup); 
function my_mouseup(e) { mouseEvent = "mouseUP"; }
canvas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e) { mouseEvent = "mouseleave"; }


