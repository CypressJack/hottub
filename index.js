var ds18b20 = require('ds18b20');
// ds18b20.sensors(function(err, ids) {
//   if (err) {
//     console.log('error', err);
//     return;
//   } else {
//     console.log('sensor id', ids);
//   }
// });

const sensorId = '28-011937c40830';

// ... async call
ds18b20.temperature(sensorId, function(err, value) {
  if (err) {
    console.log('error', error);
  } else {
    console.log('Current temperature is', value);
  }
});