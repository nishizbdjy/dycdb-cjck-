// let bendishijian = {
// // 年份
// nf : sj.getFullYear(),
// //    方法
// bdsj : function(){
// //   调用
// let sj = new Date();
// }
// }
// ----------------------------------------
// 使用:调用 bendishijian0(形参); 
function bendishijian(x) {
    let sj = new Date();
    //  创建对象
    let dx = {};
    // 年份
    dx.nf = sj.getFullYear();
    //   月份
    dx.yf = sj.getMonth() + 1;
    //   日期
    dx.rq = sj.getDate();
    //   小时
    dx.xs = sj.getHours();
    //   分钟
    dx.fz = sj.getMinutes();
    //   秒数
    dx.ms = sj.getSeconds();
    //   毫秒
    dx.hm = sj.getMilliseconds();
    //  周
    dx.z = sj.getDay();
    //  方法 结合
    dx.bdsj = function (x) {
        let b = dx.nf + '-' + dx.yf + '-' + dx.rq + '  ' + dx.xs + ':' + dx.fz + ':' + dx.ms; 
        let d = b;
        let z = dx.z;
        let zz = '今天星期' + z + '(＾Ｕ＾)ノ~ＹＯ';
        // 当形参等于'z'时 d = 周
        // if (x == 'z') {
        //     d = z
        // }
        switch (x) {
            case 'z':
                d=z;
                break;
            case 'zj':
                d=zz;
            // default:
        }
        return d;
    }
    return dx.bdsj(x);
}