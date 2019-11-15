function SuiJishiliou (){
    this.sjys = function(){
        let color = '#';
        let jz = '0123456789abcdef';
        for(let i = 0 ;i<6 ;i++){
        let r = Math.floor(Math.random()*16);
        color +=jz[r];
        }
        return color
    }
}