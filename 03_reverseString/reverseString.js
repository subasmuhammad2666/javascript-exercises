const reverseString = function(word) {
    if(word=="")
    {
        return ""
    }
    let splitString=word.split("");
    let reversed=splitString.reverse();
    let joined=reversed.join("");
    return joined
};

// Do not edit below this line
module.exports = reverseString;
