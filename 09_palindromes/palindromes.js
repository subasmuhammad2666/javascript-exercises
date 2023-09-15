const palindromes = function (string) {
    let procString=string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return procString.split("").reverse().join("")==procString;
};

// Do not edit below this line
module.exports = palindromes;
