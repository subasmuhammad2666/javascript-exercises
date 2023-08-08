const convertToCelsius = function() {
  if(arguments.length===1||typeof arguments[0]==='number')
  {
    let f=arguments[0];
    let c=null;
    c=(5/9)*(f-32);
    let roundedC=c.toFixed(1);
    let convertedC=parseFloat(roundedC);
    return convertedC

  }
  else{
    return "ERROR"
  }
};

const convertToFahrenheit = function() {
  if(arguments.length===1||typeof arguments[0]==='number')
  {
    let c=arguments[0];
    let f=null;
    f=((9/5)*c)+32;
    let roundedF=f.toFixed(1);
    let convertedF=parseFloat(roundedF);
    return convertedF
  }
  else{
    return "ERROR"
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
