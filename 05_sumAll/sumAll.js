const sumAll = function() {
    if(arguments.length!==2 || typeof arguments[0]!== 'number' || typeof arguments[1]!== 'number'||arguments[0]<0||arguments[1]<0)
    {
        return "ERROR"
    }
    let a=Math.min(arguments[0],arguments[1]);
    let b=Math.max(arguments[0],arguments[1]);
    let sum=0;
    for(let i=a;i<=b;i++)
    {
        sum+=i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
