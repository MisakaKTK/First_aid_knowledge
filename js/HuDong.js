var box  = new Object;
box = document.getElementById('NeiRong');
setInterval("box.style.height = window.innerHeight + 'px';"
, 500);//设定内容div高度为视口高度

var text = document.getElementById('text');//获取文本框按钮和图片
var figure = document.getElementById('UI_figure');
var SelectButton = document.getElementsByClassName('SelectButton');

var printing = false;//判断是否在打印文字
var lines = new Array();//保存台词的二维数组
var lines_row = 0;
var lines_col = 0;
var questions = new Array();//保存选项和答案的二维数组
var questions_row = 0;
var questions_col = 1;


lines[0] = new Array();
lines[0][0] = '我好难受...有东西...卡住了...呼吸好难......';
lines[0][1] = '谁能来帮帮我......';
lines[0][2] = '喉咙......卡住了......';
lines[0][3] = '喘...喘不上气......';
lines[0][4] = '(她看上去有些不对劲，试着去帮助她吧)';

lines[1] = new Array();
lines[1][0] = '呜...你是谁！';
lines[1][1] = '你要干嘛！';
lines[1][2] = '...你再过来我报警了啊！';
lines[1][3] = '......';
lines[1][4] = '(我们应该尝试去帮助她)';

lines[2] = new Array();
lines[2][0] = '有变态啊！';
lines[2][1] = '救命啊！';
lines[2][2] = '咸湿佬!!咳咳......';
lines[2][3] = '要...要死了......';
lines[2][4] = '(总不能放着她不管，救人要紧......)';

lines[3] = new Array();
lines[3][0] = '咳咳！！！';
lines[3][1] = '呜......';
lines[3][2] = '咳咳......';
lines[3][3] = '......';
lines[3][4] = '(让我们继续)';

lines[4] = new Array();
lines[4][0] = '谢谢你！变态先生！';
lines[4][1] = '得救了！';
lines[4][2] = '是你救了我的命！';
lines[4][3] = '如果不是你来救我，事情就大条啦~';

lines[5] = new Array();
lines[5][0] = '刚才那个是海姆立克法对吧！真的很有用呢！我也想要用海姆立克法去救别人！！';
lines[5][1] = '我也想要学习更多急救知识，去帮助更多的人！';


questions[0] = new Array();
questions[0][0] = 1;
questions[0][1] = "站在她背后，以前腿弓、后腿蹬的姿势站稳";
questions[0][2] = "站在她面前，以前腿弓、后腿蹬的姿势站稳";
questions[0][3] = "站在她侧面，以前腿弓、后腿蹬的姿势站稳";

questions[1] = new Array();
questions[1][0] = 3;
questions[1][1] = "用两手环绕她的头部";
questions[1][2] = "用两手环绕她的腿部";
questions[1][3] = "用两手环绕她的腰部";

questions[2] = new Array();
questions[2][0] = 2;
questions[2][1] = "握实心拳，用食指侧顶住她腹部左边肚脐上方两横指处，另一手抓住握拳的手";
questions[2][2] = "握空心拳，用拇指侧顶住她腹部正中线肚脐上方两横指处，另一手抓住握拳的手";
questions[2][3] = "握空心拳，用小指侧顶住她腹部正中线肚脐下方两横指处，另一手抓住握拳的手";

questions[3] = new Array();
questions[3][0] = 3;
questions[3][1] = "快速向内、向下挤压冲击她的腹部。约每秒一次";
questions[3][2] = "快速向内、向上挤压冲击她的腹部。约每秒十次";
questions[3][3] = "快速向内、向上挤压冲击她的腹部。约每秒一次";

questions[4] = new Array();
questions[4][0] = -1;//特殊情况时答案取-1
questions[4][1] = "不用谢";
questions[4][2] = "我才不是变态！";
questions[4][3] = "哪有你这样感谢别人的......";

questions[5] = new Array();
questions[5][0] = -1;
questions[5][1] = "一起加油！";
questions[5][2] = "不要再乱叫别人变态就好了";
questions[5][3] = "随便你吧...";

SelectButton[0].innerHTML = questions[0][1]; //初始化选择按钮
SelectButton[1].innerHTML = questions[0][2];
SelectButton[2].innerHTML = questions[0][3];

function print_line() {
    if(!printing){
        printing = true;
        figure.style.setProperty('animation', 'tada 0.8s');
        figure.style.setProperty('-moz-animation', 'tada 0.8s');
        figure.style.setProperty('-webkit-animation', 'tada 0.8s');
        figure.addEventListener("animationend", function name() {
            figure.style.removeProperty('animation');
            figure.style.removeProperty('-moz-animation');
            figure.style.removeProperty('-webkit-animation');
        });
        let i = 1;
        let temp;
        if(lines_col > lines[lines_row].length - 1){
            lines_col = 0;
        }
        var print = setInterval(function(){
            temp = lines[lines_row][lines_col].substr(0,i);
            text.innerText = temp;
            i++;
            if (i > lines[lines_row][lines_col].length) {
                clearInterval(print);
                printing = false;
                lines_col++;
            }
        }, 50);
    }
}

function check(ans){
    if(ans == questions[questions_row][0]){
        if(questions_row == 3 && !printing){
            perform();
        }
        else if (!printing) {
            questions_row++;
            lines_row++;
            switch_figure();
            switch_questions_row();
            switch_text_row();
        }
    }
    else if(questions_row == questions.length - 1){
        alert("恭喜你成功完成此情景！");
        window.open("./HuDong.html", "_self");
    }
    else if(ans * questions[questions_row][0] < 0){
        if (!printing) {
            questions_row++;
            lines_row++;
            switch_figure();
            switch_questions_row();
            switch_text_row();
        }
    }
    else{
        print_str('(似乎没有什么作用，试试使用其他方法吧)','(似乎没有什么作用，试试使用其他方法吧)'.length);
    }
}
function switch_figure() {
    figure.style.setProperty('animation', 'fade 0.5s');
    figure.style.setProperty('-moz-animation', 'fade 0.5s');
    figure.style.setProperty('-webkit-animation', 'fade 0.5s');
    figure.addEventListener("animationend", function name() {
        figure.src = "img/UI_figure" + questions_row + ".png";
        figure.style.setProperty('animation', 'appear 0.5s');
        figure.style.setProperty('-moz-animation', 'appear 0.5s');
        figure.style.setProperty('-webkit-animation', 'appear 0.5s');
    });
    figure.addEventListener("nimationend", function name() {
        figure.style.removeProperty('animation');
        figure.style.removeProperty('-moz-animation');
        figure.style.removeProperty('-webkit-animation');
    });
    
}
function switch_questions_row() {
    SelectButton[0].disabled = true;
    SelectButton[1].disabled = true;
    SelectButton[2].disabled = true;
    SelectButton[0].style.setProperty('animation', 'fade 0.6s');
    SelectButton[0].style.setProperty('-moz-animation', 'fade 0.6s');
    SelectButton[0].style.setProperty('-webkit-animation', 'fade 0.6s');
    SelectButton[1].style.setProperty('animation', 'fade 0.8s');
    SelectButton[1].style.setProperty('-moz-animation', 'fade 0.8s');
    SelectButton[1].style.setProperty('-webkit-animation', 'fade 0.8s');
    SelectButton[2].style.setProperty('animation', 'fade 1s');
    SelectButton[2].style.setProperty('-moz-animation', 'fade 1s');
    SelectButton[2].style.setProperty('-webkit-animation', 'fade 1s');
    SelectButton[0].addEventListener("animationend", function name() {
        for (questions_col = 1; questions_col < questions[questions_row].length; questions_col++) {
            SelectButton[questions_col-1].innerHTML = questions[questions_row][questions_col];
        }
        SelectButton[0].style.setProperty('animation', 'appear 0.6s');
        SelectButton[0].style.setProperty('-moz-animation', 'appear 0.6s');
        SelectButton[0].style.setProperty('-webkit-animation', 'appear 0.6s');
        SelectButton[1].style.setProperty('animation', 'appear 0.8s');
        SelectButton[1].style.setProperty('-moz-animation', 'appear 0.8s');
        SelectButton[1].style.setProperty('-webkit-animation', 'appear 0.8s');
        SelectButton[2].style.setProperty('animation', 'appear 1s');
        SelectButton[2].style.setProperty('-moz-animation', 'appear 1s');
        SelectButton[2].style.setProperty('-webkit-animation', 'appear 1s');
        SelectButton[0].disabled = false;
        SelectButton[1].disabled = false;
        SelectButton[2].disabled = false;
        SelectButton[2].addEventListener("animationend", function name() {
            SelectButton[0].style.removeProperty('animation');
            SelectButton[0].style.removeProperty('-moz-animation');
            SelectButton[0].style.removeProperty('-webkit-animation');
            SelectButton[1].style.removeProperty('animation');
            SelectButton[1].style.removeProperty('-moz-animation');
            SelectButton[1].style.removeProperty('-webkit-animation');
            SelectButton[2].style.removeProperty('animation');
            SelectButton[2].style.removeProperty('-moz-animation');
            SelectButton[2].style.removeProperty('-webkit-animation');
        });
    });
    
}
function switch_text_row() {
    let i = 1;
    let temp;
    lines_col = 0;
    var print = setInterval(function(){
        temp = lines[lines_row][0].substr(0,i);
        text.innerText = temp;
        i++;
        if (i > lines[lines_row][0].length) {
            clearInterval(print);
            printing = false;
            lines_col++;
        }
    }, 50);
}
function print_str(str, time) {
    if(!printing){
        printing = true;
        let temp;
        let i = 1;
        var print = setInterval(function(){
            if (str.substr(0,i)) {
                temp = str.substr(0,i);
            } 
            text.innerText = temp;
            i++;
            if (i > time) {
                clearInterval(print);
                printing = false;
            }
        }, 40);
    }
}

function perform() {
    //按钮闪三下
    SelectButton[0].disabled = true;
    SelectButton[1].disabled = true;
    SelectButton[2].disabled = true;
    printing = true;
    let dialog = document.getElementById('dialog');
    text.innerHTML = "咳咳！！！！！！";
    SelectButton[0].style.setProperty('animation', 'cough 2s');
    SelectButton[0].style.setProperty('-moz-animation', 'cough 2s');
    SelectButton[0].style.setProperty('-webkit-animation', 'cough 2s');
    SelectButton[1].style.setProperty('animation', 'cough 2s');
    SelectButton[1].style.setProperty('-moz-animation', 'cough 2s');
    SelectButton[1].style.setProperty('-webkit-animation', 'cough 2s');
    SelectButton[2].style.setProperty('animation', 'cough 2s');
    SelectButton[2].style.setProperty('-moz-animation', 'cough 2s');
    SelectButton[2].style.setProperty('-webkit-animation', 'cough 2s');
    //咳嗽三下
    figure.style.setProperty('animation', 'cough 2s');
    figure.style.setProperty('-moz-animation', 'cough 2s');
    figure.style.setProperty('-webkit-animation', 'cough 2s');
    //咳嗽完，发抖一下
    figure.addEventListener("animationend", function name() {
            flag1 = false;
            figure.style.removeProperty('animation');
            figure.style.removeProperty('-moz-animation');
            figure.style.removeProperty('-webkit-animation');

            figure.style.setProperty('animation', 'tada 1s');
            figure.style.setProperty('-moz-animation', 'tada 1s');
            figure.style.setProperty('-webkit-animation', 'tada 1s');

            dialog.style.setProperty('animation', 'tada 1s');
            dialog.style.setProperty('-moz-animation', 'tada 1s');
            dialog.style.setProperty('-webkit-animation', 'tada 1s');
            //发抖完后
            dialog.addEventListener("animationend", function name() {
                    flag2 =false;
                    SelectButton[0].style.removeProperty('animation');
                    SelectButton[0].style.removeProperty('-moz-animation');
                    SelectButton[0].style.removeProperty('-webkit-animation');
                    SelectButton[1].style.removeProperty('animation');
                    SelectButton[1].style.removeProperty('-moz-animation');
                    SelectButton[1].style.removeProperty('-webkit-animation');
                    SelectButton[2].style.removeProperty('animation');
                    SelectButton[2].style.removeProperty('-moz-animation');
                    SelectButton[2].style.removeProperty('-webkit-animation');
                    figure.style.removeProperty('animation');
                    figure.style.removeProperty('-moz-animation');
                    figure.style.removeProperty('-webkit-animation');
                    dialog.style.removeProperty('animation');
                    dialog.style.removeProperty('-moz-animation');
                    dialog.style.removeProperty('-webkit-animation');
                    printing = false;
                    questions_row++;
                    lines_row++;
                    switch_text_row();
                    switch_figure();
                    switch_questions_row();
                
                    SelectButton[0].disabled = false;
                    SelectButton[1].disabled = false;
                    SelectButton[2].disabled = false;
            });
    });
    
}