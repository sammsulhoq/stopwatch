/** EXAMPLES */
const Stopwatch = require("./src/Stopwatch");
const sw = new Stopwatch("h:m:s");

/** EXAMPLE #1
 * Timeouts for 2 seconds and then returns the duration of the time spent in the
 * format in which stopwatch object was initialized.
 */
sw.start();
setTimeout(() => {
  sw.stop();
  console.log(sw.duration);
}, 2000);

/** EXAMPLE #2
 * Set laps after every 2 seconds and then at the end of iteration displays the
 * duration of each of the laps.
 */
let i = 1;
var int = setInterval(() => {
  sw.setLap();
  i++;
  if (i == 5) {
    clearInterval(int);
    console.log(sw.getLaps);
  }
}, 2000);
