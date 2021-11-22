var ds18b20 = require('ds18b20');
ds18b20.sensors(function(err, ids) {
  if (err) {
    console.log('error', err);
    return;
  } else {
    console.log('sensor id', ids);
  }
});

const sensorId = '28-011937c40830';

//... sync call

function getTemp() {
  console.log('Current temperature is ' + ds18b20.temperatureSync(sensorId));
}

setInterval(getTemp, 5000);
