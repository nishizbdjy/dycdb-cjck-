// 形参说明书 : 1.倒计时总数 2.倒计时下限 3. 时间+ 还是- 4.时间跳个数
            // 5.时间快慢
// 调用: let 对象名 = new DaoJiShi()  
// 倒计时: 对象名.djs(实参)

// 列如：
// let s = new DaoJiShi();
//  s.djs(10,0,false,1,1000)

// 用函数包装      按钮倒计时

// 一次性的
//   setTimeout(函数,间隔)
// 永久性的
//   setInterval(函数,间隔)
// 停止
// clearTimeout(定时器id)

// function 大写字母开头的名词(特征1,特征2,...){
//     this.属性1 = 特征1;
//     this.属性2 = 特征2;
//     ...
//     this.方法1 = function(){}
//     ...
//   }

// 调用
function DaoJiShi() {
    this.djs = function(_zongshijian,xiaxian,jiajian,shu,miaoshu){
        // 获取元素 按钮    scc选择器
    let btn = document.querySelector('.btn');
    // 注册点击事件
    btn.onclick = function () {
        // 总时间
        let zsj = _zongshijian;
        // 按钮动态显示 速度
        btn.value = '获取验证码('+zsj+')';
        // 禁用按钮
        btn.disabled = true;
        // 倒计时
        let djs = setInterval(function () {
        // 判断时间
        if(jiajian===true){
          zsj+=shu
        }else{
            zsj-=shu
        }  
        //  时间 加减
        //  zsj = w +jiajan;
         console.log(zsj);
        // zsj--;
        // 按钮动态显示
        btn.value = '获取验证码(' + zsj + ')';
        //  判断到多少停止
        if(zsj === xiaxian){
        // 停止计时
        clearTimeout(djs);
        // 启用按钮
        btn.disabled = false;
        // 恢复
        btn.value = '获取验证码';
        }
        }, miaoshu)
    }
    }
}