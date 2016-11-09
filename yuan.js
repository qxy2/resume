/**
 * Created by qin on 2016/10/12.
 */



function timer(id,start,end,interval){
    window.setTimeout(function(){
        circle(id,start/100);
        start++;
        if(start<end+1){
            timer(id,start,end,interval);
        }
    },interval);
}



function circle(id,percent){
    var p=(percent*100).toFixed(0);         //把数字四舍五入为指定小数位数的数字
    var c=document.getElementById(id);
    var cxt=c.getContext("2d");           //返回一个用在画布上画图的环境，二维环境



    //生成圆形（底圆）
    cxt.fillStyle="lightgray";             //用于填充绘画的颜色，渐变和模式
    cxt.beginPath();                 //开始一条新的路径
    cxt.moveTo(75, 75);              //移动到位置（75，75）
    cxt.arc(75,75,65,0,Math.PI*2,false);
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    //x,y中心坐标，r半径，sAngle起始角，eAngle结束角，counterclockwise顺or逆时针
    cxt.closePath();                    //创建从当前点到开始点的路径
    cxt.fill();                     //填充图像


    //生成扇形
    cxt.fillStyle="#0268BD";
    cxt.beginPath();
    cxt.moveTo(75, 75);
    if(percent==1){
        cxt.arc(75,75,65,0,Math.PI*2,false);
    }else if(percent==0){
        cxt.arc(75,75,65,0,0,true);
    }else{
        cxt.arc(75,75,65,Math.PI*1.5,Math.PI*1.5+Math.PI*2*percent,false);
    }
    cxt.closePath();
    cxt.fill();




    //生成圆形（上层园）
    cxt.fillStyle="#FFFFFF";
    cxt.beginPath();
    cxt.moveTo(75, 75);
    cxt.arc(75,75,50,0,Math.PI*2,false);
    cxt.closePath();
    cxt.fill();



    //生成中间百分比文字
    cxt.font="24px arial";
    cxt.fillStyle="darkslategray";
    cxt.fillText(p+"%",55,80);
//  cxt.fillText("0%",160,75);
}
timer('er_skill1',0,80,10);
timer('er_skill2',0,80,10);
timer('er_skill3',0,70,10);
timer('er_skill4',0,60,10);
