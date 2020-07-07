# Stopwatch (A JS Library)

Stopwatch is a JS library which basically works as a timer and can be used in the application to checkout for the time elaspsed. The library has a class `Stopwatch` and multiple instances could be created out of it.

#### How to install

Use the following command to install the library into your project:
`npm i Stopwatch`

#### How to create an object

In order to create an object pass the desired format in which you want to see the timer output. If the format is not passed, then default `s` format.
`const stopwatch = new Stopwatch();`

Following are the available formats:

- `"s"` Returns the output in seconds. This is the default format.
- `"m:s"` Returns the output in minutes and seconds.
- `"h:m"` Returns the output in hours and minutes.
- `"h:m:s"` Returns the output in hours, minutes and seconds.

#### Available methods

- **start()**: Starts the timer.
- **stop()**: Stops the timer.
- **reset()**: Resets the timer.
- **setLap()**: Sets a new lap and stores the lap data in an array.

#### Static members

- **duration**: Returns time spent from the moment timer started and ended.
- **getLaps**: Returns the array of lap recorded from the moment timer started and ended.
- **showLaps**: Displays the content of laps array into the console.

#### Examples

- Starts and stops the timer and the duration of time spent.

      const stopwatch = new Stopwatch("h:m:s");
      stopwatch.start();
      setTimeout(() => {
          stopwatch.stop();
          console.log("Time elapsed: ", stopwatch.duration);
      }, 2000);

- Sets lap 5 times

      const stopwatch = new Stopwatch("h:m:s");
      let i = 1;
      var int = setInterval(() => {
          sw.setLap();
          i++;
          if (i == 5) {
              clearInterval(int);
              console.log(sw.getLaps);
          }
      }, 2000);

**Note:** The library is at very early stage and can be modified as per use or more methods could be added later, which will be released soon.
