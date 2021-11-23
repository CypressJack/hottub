var rpio = require('rpio');
var ds18b20 = require('ds18b20');

const sensorId = '28-011937c40830';
let setPoint = 100;

// Initialize GPIO pin as low
rpio.open(11, rpio.OUTPUT, rpio.LOW);

function manageTemp() {
    const curTempC = ds18b20.temperatureSync(sensorId);
    const curTempF = ( curTempC * (9/5) ) + 32;
    console.log('Temp Fahrenheit = ', curTempF);
    if (curTempF < setPoint){
        rpio.write(11, rpio.HIGH);
    } else {
        rpio.write(11, rpio.LOW);
    }
    console.log('rpio pin status = ', rpio.read(11));
  }
  
  setInterval(manageTemp, 5000);