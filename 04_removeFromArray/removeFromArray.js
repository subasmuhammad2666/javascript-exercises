const removeFromArray = function(arr, ... manyArgs) {
    for(let i=0;i<manyArgs.length;i++){
        let index=arr.indexOf(manyArgs[i]);
        if(index!==-1)
        {
            arr.splice(index,1);
        }
        
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
