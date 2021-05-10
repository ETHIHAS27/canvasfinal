canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var last_position_of_x,last_position_of_y;

color ="blue";


canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup(e){
    mouseEvent = "mouseUp"
}

canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
    mouseEvent = "mouseLeave"
}

canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e){
    current_mouse_postion_x = e.clientX - canvas.offsetLeft;
    current_mouse_postion_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        console.log("last position of x and y cordinates =");
        console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
        
        ctx.moveTo(last_position_of_x,last_position_of_y);
        
        console.log("current position of x and y cordinates =");
        console.log("x =" + current_mouse_postion_x + "y =" + current_mouse_postion_y);

        ctx.arc(current_mouse_postion_x,current_mouse_postion_y,40,0,2*Math.PI)

        ctx.stroke();
        
    }
    /*last_position_of_x = current_mouse_postion_x;
    last_position_of_y = current_mouse_postion_y;*/
}

