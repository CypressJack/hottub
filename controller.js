var rpio = require('rpio');
var ds18b20 = require('ds18b20');

const sensorId = '28-011937c40830';

function manageTemp() {
    const curTemp = ds18b20.temperatureSync(sensorId);
    console.log(typeof curTemp);
  }
  
  setInterval(manageTemp, 5000);