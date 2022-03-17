var box  = new Object;
box = document.getElementById('NeiRong');
setInterval("box.style.height = window.innerHeight + 'px';"
, 500);//设定内容div高度为视口高度

var text = document.getElementById('text');//获取文本框按钮和图片
var figure = document.getElementById('UI_figure');
var SelectButton = document.getElementsByClassName('SelectButton');
var tips = document.getElementById('tips');

var printing = false;//判断是否在打印文字
var lines = new Array();//保存台词的二维数组
var lines_row = 0;
var lines_col = 0;
var questions = new Array();//保存选项和答案的二维数组
var questions_row = 0;
var questions_col = 1;

lines[0] = new Array();
lines[0][0] = '(初次见面，我叫dialog)';
lines[0][1] = '(也就是你现在在看的这个框框)';
lines[0][2] = '(先不管我为什么能跟你对话)';
lines[0][3] = '(你看到那个印堂发黑的人了吗，她好像被食物卡住了气管)';
lines[0][4] = '(只要你在左边选择正确的行动，就能救下她了吧)';
lines[0][5] = '(现在做出你认为正确的选择吧)';

lines[1] = new Array();
lines[1][0] = '我好难受...有东西...卡住了...呼吸好难......';
lines[1][1] = '谁能来帮帮我......';
lines[1][2] = '喉咙......卡住了......';
lines[1][3] = '喘...喘不上气......';
lines[1][4] = '(她看上去好像被食物卡住了气管，我们试着使用<b>海姆立克法</b>去帮助她吧)';

lines[2] = new Array();
lines[2][0] = '呜...你是谁！';
lines[2][1] = '你要干嘛！';
lines[2][2] = '...你再过来我报警了啊！';
lines[2][3] = '(她好像误会了什么...)';

lines[3] = new Array();
lines[3][0] = '有变态啊！';
lines[3][1] = '救命啊！';
lines[3][2] = '咸湿佬!!咳咳......';
lines[3][3] = '要...要死了......';
lines[3][4] = '(总不能放着她不管，救人要紧......)';

lines[4] = new Array();
lines[4][0] = '咳咳！！！';
lines[4][1] = '呜...救...';
lines[4][2] = '咳咳......';
lines[4][3] = '(让我们继续)';

lines[5] = new Array();
lines[5][0] = '谢谢你！变态先生！';
lines[5][1] = '得救了！';
lines[5][2] = '是你救了我的命！';
lines[5][3] = '如果不是你来救我，事情就大条啦~';
lines[5][4] = '(她的态度变得还真快)';

lines[6] = new Array();
lines[6][0] = '刚才那个是海姆立克法对吧！真的很有用呢！我也想要用海姆立克法去救别人！！';
lines[6][1] = '我也想要学习更多急救知识，去帮助更多的人！';
lines[6][2] = '(总之人没事就好)';

questions[0] = new Array();
questions[0][0] = -1;
questions[0][1] = "我知道了";
questions[0][2] = "我完全了解了";
questions[0][3] = "继续吧";

questions[1] = new Array();
questions[1][0] = 1;
questions[1][1] = "站在她<b>背后</b>，以前腿弓、后腿蹬的姿势站稳";
questions[1][2] = "站在她<b>面前</b>，以前腿弓、后腿蹬的姿势站稳";
questions[1][3] = "站在她<b>侧面</b>，以前腿弓、后腿蹬的姿势站稳";

questions[2] = new Array();
questions[2][0] = 3;
questions[2][1] = "用两手环绕她的<b>头部</b>";
questions[2][2] = "用两手环绕她的<b>腿部</b>";
questions[2][3] = "用两手环绕她的<b>腰部</b>";

questions[3] = new Array();
questions[3][0] = 2;
questions[3][1] = "握<b>实心拳</b>，用拇指侧顶住她腹部<b>左边肚脐上方</b>两横指处，另一手抓住握拳的手";
questions[3][2] = "握<b>空心拳</b>，用拇指侧顶住她腹部<b>正中线肚脐上方</b>两横指处，另一手抓住握拳的手";
questions[3][3] = "握<b>空心拳</b>，用拇指侧顶住她腹部<b>正中线肚脐下方</b>两横指处，另一手抓住握拳的手";

questions[4] = new Array();
questions[4][0] = 3;
questions[4][1] = "快速向内、<b>向下挤压</b>冲击她的腹部。约<b>每秒一次</b>";
questions[4][2] = "快速向内、<b>向上挤压</b>冲击她的腹部。约<b>每秒十次</b>";
questions[4][3] = "快速向内、<b>向上挤压</b>冲击她的腹部。约<b>每秒一次</b>";

questions[5] = new Array();
questions[5][0] = -1;//特殊情况时答案取-1
questions[5][1] = "不用谢";
questions[5][2] = "我才不是变态！";
questions[5][3] = "哪有你这样感谢别人的......";

questions[6] = new Array();
questions[6][0] = -1;
questions[6][1] = "让我们一起加油！";
questions[6][2] = "不要再乱叫别人变态就好了";
questions[6][3] = "随便你吧...";

SelectButton[0].innerHTML = questions[0][1]; //初始化选择按钮
SelectButton[1].innerHTML = questions[0][2];
SelectButton[2].innerHTML = questions[0][3];
SelectButton[0].disabled = true;
SelectButton[1].disabled = true;
SelectButton[2].disabled = true;

function print_line() {
    if(!printing){
        printing = true;
        if(lines_row != 0){
            figure.style.setProperty('animation', 'tada 0.8s');
            figure.style.setProperty('-moz-animation', 'tada 0.8s');
            figure.style.setProperty('-webkit-animation', 'tada 0.8s');
            figure.addEventListener("animationend", function name() {
                figure.style.removeProperty('animation');
                figure.style.removeProperty('-moz-animation');
                figure.style.removeProperty('-webkit-animation');
            });
        }
        let i = 1;
        let temp;
        if(lines_col > lines[lines_row].length - 1){
            lines_col = 0;
        }
        else if(lines_col > lines[lines_row].length - 2){
            SelectButton[0].disabled = false;
            SelectButton[1].disabled = false;
            SelectButton[2].disabled = false;
            tips.innerHTML = '请做出选择，或者点击此处继续对话......';
        }
        var print = setInterval(function(){
            temp = lines[lines_row][lines_col].substr(0,i);
            text.innerHTML = temp;
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
        if(questions_row == 4 && !printing){   //在特定对话时插入演出
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
    if (!printing) {
        printing = true;
        let i = 1;
        let temp;
        lines_col = 0;
        tips.innerHTML = '点击此处继续对话......';
        var print = setInterval(function(){
            temp = lines[lines_row][0].substr(0,i);
            text.innerHTML = temp;
            i++;
            if (i > lines[lines_row][0].length) {
                clearInterval(print);
                printing = false;
                lines_col++;
            }
        }, 50);
    }    
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
            text.innerHTML = temp;
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
            });
    });
    
}