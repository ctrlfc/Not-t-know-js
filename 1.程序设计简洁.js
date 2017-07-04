/**
 * Created by Ctrlf on 17/7/4.
 */

/*关于一个买手机的故事*/

const wozhunbeixiaofei = 200;
const shuilv = 0.08;
const shoujijiage = 99.99;
const peijianjiage = 9.99;

var youduoshaoqian = prompt("请输入你的余额!");
var hualeduoshaoqian = 0;


function zonggonggeideshui(hualeduoshaoqian) {
    return hualeduoshaoqian * shuilv;
}

function geshihua() {
    return "$" + hualeduoshaoqian.toFixed(2);
}

//还有钱就要继续买买买

while (hualeduoshaoqian < youduoshaoqian) {
    hualeduoshaoqian = hualeduoshaoqian + shoujijiage;
    if (hualeduoshaoqian < wozhunbeixiaofei) {
        hualeduoshaoqian = hualeduoshaoqian + peijianjiage
    }
}

//交税
hualeduoshaoqian = hualeduoshaoqian + zonggonggeideshui(hualeduoshaoqian);

console.log("你总共花了:" + geshihua(hualeduoshaoqian));

if (hualeduoshaoqian>youduoshaoqian){
    console.log("你没钱啊.:(");
}