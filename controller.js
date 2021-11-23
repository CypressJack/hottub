const rpio = require('rpio');
const ds18b20 = require('ds18b20');
const { Timer } = require("easytimer.js");

const runningTime = new Timer();


const sensorId = '28-011937c40830';
let setPoint = 78;

let status;

// Initialize GPIO pin as low
rpio.open(11, rpio.OUTPUT, rpio.LOW);

function manageTemp() {
    const curTempC = ds18b20.temperatureSync(sensorId);
    const curTempF = ( curTempC * (9/5) ) + 32;

    console.log('Temp Fahrenheit = ', curTempF);

    if (curTempF > setPoint) {
        rpio.write(11, rpio.LOW);
        status = rpio.read(11);
        runningTime.reset();
    }
    if (curTempF < setPoint && rpio.read(11) === 0){
        rpio.write(11, rpio.HIGH);
        status = rpio.read(11);
        runningTime.start();
    }

    console.log('rpio pin status = ', status);
  }


function logTimeValue(){
    console.log(runningTime.getTimeValues().seconds);
}
  
  setInterval(manageTemp, 1000);

  setInterval(logTimeValue, 5000);