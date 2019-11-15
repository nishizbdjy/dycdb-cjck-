function RGB() {
    this.rgbsjys = function (max,min) {
       let sj = Math.floor(Math.random()*(max-min+1)+min);
        let r = sj;
        let g = sj;
        let b = sj;
        let rgb = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
        return rgb
    }
}
// 没成功
// 继续加油