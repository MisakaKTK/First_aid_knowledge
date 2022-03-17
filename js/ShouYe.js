var NeiRong = document.getElementById("NeiRong");
var box = new Object;
box = document.getElementById("box");
box.style.left = -1*(2000 - (window.innerWidth / 2)) + 'px';
box.style.top = -1*(1284 - (window.innerHeight / 2)) + 'px';

var getXY;
var ine;
box.onmousedown = function(ev){
    var oEvent = ev;
    oEvent.preventDefault();
    var disX = oEvent.clientX - box.offsetLeft;
    var disY = oEvent.clientY - box.offsetTop;
    var mouse = new Object();
    mouse.oldX = oEvent.clientX;
    mouse.oldY = oEvent.clientY;
    mouse.newX = oEvent.clientX;
    mouse.newY = oEvent.clientY;
    var speed = new Object();
    speed.X = 0;
    speed.Y = 0;
    box.onmousemove = function(ev){
        box.style.left = ev.pageX - disX + 'px';
        box.style.top = ev.pageY - disY + 'px';
        
        clearInterval(ine);

        getXY = setInterval(function(){GetNewXY(mouse)}, 100);
        function GetNewXY(mouse) {
            mouse.oldX = mouse.newX;
            mouse.oldY = mouse.newY;
            mouse.newX = ev.clientX;
            mouse.newY = ev.clientY;
        }
        console.log('oldX:', mouse.oldX, 'newX:',mouse.newX, mouse.newX - mouse.oldX ,',',mouse.newY - mouse.oldY);
        // console.log(box.style.left, box.style.top);  
        
        if (box.style.left > '0%') {
            box.style.left = '0%';
        }
        if (box.style.top > '0%') {
            box.style.top = '0%';
        }
        if ((4000 - NeiRong.offsetWidth + (ev.pageX - disX)) < 0) {
            box.style.left = -1*(4000 - NeiRong.offsetWidth) + 'px';
        }
        if ((ev.pageY - disY - window.innerHeight + 2569) < 0) {
            box.style.top = -1  * (2569 - window.innerHeight) + 'px';
        }    
    }
    box.onmouseup = function(ev){
        // console.log('old:'+mouse.oldX+','+mouse.oldY);
        // console.log('new:'+mouse.newX+','+mouse.newY);
        //惯性开始
        // clearInterval(getXY);
        // if(mouse.oldX && mouse.newX && mouse.oldY && mouse.newY){ 
        //     speed.X = Math.abs(mouse.newX - mouse.oldX)/10;
        //     speed.Y = Math.abs(mouse.newY - mouse.oldY)/10;
        //     let aX = 0;
        //     let aY = 0;
        //     let a = 30;
        //     mouse.newX - mouse.oldX < 0 ? aX = -1 : aX = 1;
        //     mouse.newY - mouse.oldY < 0 ? aY = -1 : aY = 1;
        //     ine = setInterval(function(){inertia()}, 10);
        //     function inertia(){
        //         if(speed.X > 0){
        //             box.style.left = Number(box.style.left.slice(0,-2)) + ((a*speed.X*aX) / 100) + 'px';
        //             a -= 0.2;
        //         }
        //         if (speed.Y > 0) {
        //             box.style.top = Number(box.style.top.slice(0,-2)) + ((a*speed.Y*aY) / 100) + 'px';
        //             a -= 0.2;
        //         }
        //         // console.log('new:', box.style.left, box.style.top);
        //         // console.log(speed.X+','+speed.Y);
        //         // console.log('a:'+a);
            
        //         // if(speed.X <= 0.1 && speed.Y <= 0.1){
        //         //     clearInterval(ine);
        //         // }
        //         if(a <= 0){
        //             clearInterval(ine);
        //             console.log(aX,aY);
        //         }
        //         if (box.style.left > '0%') {
        //             clearInterval(ine);
        //             box.style.left = '0%';
        //         }
        //         if (box.style.top > '0%') {
        //             clearInterval(ine);
        //             box.style.top = '0%';
        //         }
        //         if ((4000 - NeiRong.offsetWidth + (ev.pageX - disX)) < 0) {
        //             clearInterval(ine);
        //             box.style.left = -1*(4000 - NeiRong.offsetWidth) + 'px';
        //         }
        //         if ((ev.pageY - disY - window.innerHeight + 2569) < 0) {
        //             clearInterval(ine);
        //             box.style.top = -1  * (2569 - window.innerHeight) + 'px';
        //         } 
        //     }
        // }
        // mouse.oldX = ev.clientX;
        // mouse.oldY = ev.clientY;
        // mouse.newX = ev.clientX;
        // mouse.newY = ev.clientY;
        //惯性到此为止
        box.onmousemove = null;
        box.onmouseup = null;
    }
}

var kids = document.getElementsByClassName('kids');
var printing = false;
var dialog = document.getElementById('dialog');
var text = document.getElementById('text');
var kids_text = new Array();
kids_text[0] = "摸鱼喽！！摸鱼喽！！";
kids_text[1] = "姐就是女王！";
kids_text[2] = "躺平了";
kids_text[3] = "卷死你们";
kids_text[4] = "布丁~布丁~布丁~";
kids_text[5] = "真相只有一个！";
kids_text[6] = "fuwa~fuwa~fuwa~";

var appear = false;
function kids_talk(num) {
        if(!appear){
            dialog.style.setProperty('animation', 'appear 0.5s');
            dialog.style.setProperty('-moz-animation', 'appear 0.5s');
            dialog.style.setProperty('-webkit-animation', 'appear 0.5s');
            dialog.style.setProperty('opacity', '1');
        }
        
            print_str(kids_text[num], kids_text[num].length, 0);
            // var print = setInterval(function(){
            //     if (kids_text[num].substr(0, i)) {
            //         temp = kids_text[num].substr(0,i);
            //     } 
            //     text.innerHTML = temp;
            //     i++;
            //     if (i > 50) {
                    
            //         console.log('1');
            //         dialog.style.setProperty('opacity', '0');
            //         printing = false;
            //         clearInterval(print);
            //     }
            // }, 50);
       
    
}
function print_str(str, time, type) {
    if(!appear){
        dialog.style.setProperty('animation', 'appear 0.5s');
        dialog.style.setProperty('-moz-animation', 'appear 0.5s');
        dialog.style.setProperty('-webkit-animation', 'appear 0.5s');
        dialog.style.setProperty('opacity', '1');
    }
    if(!printing){
        printing = true;
        let temp;
        let i = 1;
        var print = setInterval(function(){
            if (str.substr(0,i)) {
                temp = str.substr(0,i);
            }
            text.innerHTML = temp;
            i++;
            if (i > time) {
                clearInterval(print);
                printing = false;
                if(type == 1){
                    window.open('./JiJiuZhiShiYe.html', '_self');
                }
                else if(type == 2){
                    window.open('./HuDong.html', '_self');
                }
            }
        }, 50);
    }
}