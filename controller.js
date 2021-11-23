var rpio = require('rpio');
var ds18b20 = require('ds18b20');

const sensorId = '28-011937c40830';
let setPoint = 78;

// Initialize GPIO pin as low
rpio.open(11, rpio.OUTPUT, rpio.LOW);

function manageTemp() {
    const curTempC = ds18b20.temperatureSync(sensorId);
    const curTempF = ( curTempC * (9/5) ) + 32;

    console.log('Temp Fahrenheit = ', curTempF);

    if (curTempF > setPoint) {
        rpio.write(11, rpio.LOW);
    }
    if (curTempF < setPoint && rpio.read(11) === 0){
        rpio.write(11, rpio.HIGH);
    }

    console.log('rpio pin status = ', rpio.read(11));
  }
  
  setInterval(manageTemp, 5000);