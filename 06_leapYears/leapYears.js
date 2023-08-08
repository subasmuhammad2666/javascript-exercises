const leapYears = function() {
    if(arguments.length==1||typeof arguments[0]=='number')
    {
        let a=arguments[0];
        if(a%4==0&&a%100!==0||(a%400==0))
        {
            return true
        }
        else
        {
            return false
        }
    }
    else
    {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = leapYears;
