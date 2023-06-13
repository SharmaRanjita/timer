const notifier = require('node-notifier');

// Function to set an alarm
function setAlarm(timeInSeconds) {
  setTimeout(() => {
    console.log(`ALARM! Time: ${timeInSeconds} seconds`);
    notifier.notify({
      title: 'Alarm',
      message: `Time: ${timeInSeconds} seconds`,
      sound: true,
    });
  }, timeInSeconds * 1000);
}

// Get command-line arguments
const args = process.argv.slice(2);

// Set alarms for each specified time
args.forEach((arg) => {
  const timeInSeconds = parseInt(arg, 10);
  if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
    setAlarm(timeInSeconds);
  }
});