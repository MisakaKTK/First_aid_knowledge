var questions = new Array();//保存选项和答案的二维数组，保存题目答案的是从 行1 到 行4 ，其它是普通对白，每行的序号0的值是题目的答案
questions[0] = new Array();
questions[0][0] = null;
questions[0][1] = null;
questions[0][2] = null;
questions[0][3] = null;

questions[1] = new Array();//行1
questions[1][0] = 1;//答案的序号
questions[1][1] = "站在她<b>背后</b>，以前腿弓、后腿蹬的姿势站稳";//选项的文本
questions[1][2] = "站在她<b>面前</b>，以前腿弓、后腿蹬的姿势站稳";
questions[1][3] = "站在她<b>侧面</b>，以前腿弓、后腿蹬的姿势站稳";

questions[2] = new Array();//行2
questions[2][0] = 3;
questions[2][1] = "用两手环绕她的<b>头部</b>";
questions[2][2] = "用两手环绕她的<b>腿部</b>";
questions[2][3] = "用两手环绕她的<b>腰部</b>";

questions[3] = new Array();//行3
questions[3][0] = 2;
questions[3][1] = "握<b>实心拳</b>，用拇指侧顶住她腹部<b>左边肚脐上方</b>两横指处，另一手抓住握拳的手";
questions[3][2] = "握<b>空心拳</b>，用拇指侧顶住她腹部<b>正中线肚脐上方</b>两横指处，另一手抓住握拳的手";
questions[3][3] = "握<b>空心拳</b>，用拇指侧顶住她腹部<b>正中线肚脐下方</b>两横指处，另一手抓住握拳的手";

questions[4] = new Array();//行4
questions[4][0] = 3;
questions[4][1] = "快速向内、<b>向下挤压</b>冲击她的腹部。约<b>每秒一次</b>";
questions[4][2] = "快速向内、<b>向上挤压</b>冲击她的腹部。约<b>每秒十次</b>";
questions[4][3] = "快速向内、<b>向上挤压</b>冲击她的腹部。约<b>每秒一次</b>";

questions[5] = new Array();
questions[5][0] = null;
questions[5][1] = null;
questions[5][2] = null;
questions[5][3] = null;

questions[6] = new Array();
questions[6][0] = null;
questions[6][1] = null;
questions[6][2] = null;
questions[6][3] = null;

var text_paper = new Array(7);//答案数组
for (let index = 0; index < text_paper.length; index++) {//初始化答案数组，防止没有答案传入，因为前面互动有7次选择，所以数组长度为7，实际上答题只有1-4
    text_paper[index] = 0;
}
var index = 0;
get_paper();
function get_paper() {//从url获取答案
    let reg;
    for (; index < text_paper.length; index++) {
        reg = new RegExp('(^|&)' + 'text_paper' + index + '=([^&]*)(&|$)', "i");//new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        text_paper[index] = window.location.search.substr(1).match(reg)[2];
    }
}