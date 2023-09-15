const fibonacci = function(count) {
    if(count<0) return "OOPS";
    if(count===0) return 0;

    let firstNum=1;
    let secondNum=0;
    for(let i=2;i<=count;i++)
    {
        let current=firstNum+secondNum;
        secondNum=firstNum;
        firstNum=current;
    }
    return firstNum;
};
// 1,1,2,3,5,8,13,21
// Do not edit below this line
module.exports = fibonacci;
