/**
 * A utility object to implement common stopwatch functionalities.
 * @param   {String}    format    Desired time format. Default is "s" (seconds)
*/
const Stopwatch = function (format = "s") {
    let isRunning = false, duration = 0, laps = [], lapStart, lapCount = 0, start, end, resultFormat = format;

    /**
     * Returns the formatted time string.
     * @return  {String}    Time elapsed in given format provided while object initialization
    */
    formatTime = function (start, end, duration) {
        let result = "", hr, hmin, min, sec;
        let totalTimeElapsed = duration > 0 ? duration : Math.round((end - start) / 1000);
        switch (resultFormat) {
            case "s":
                result = `${totalTimeElapsed}s`;
                break;
            case "m:s":
                min = Math.round(totalTimeElapsed / 60);
                sec = totalTimeElapsed % 60;
                result = `${min}m ${sec}s`;
                break;
            case "h:m":
                hr = Math.round(totalTimeElapsed / 3600);
                hmin = Math.round((totalTimeElapsed - (hr)) / 60);
                result = `${hr}h ${hmin}m`;
                break;
            case "h:m:s":
                hr = Math.round(totalTimeElapsed / 3600);
                hmin = Math.round((totalTimeElapsed - (hr)) / 60);
                sec = totalTimeElapsed % 60;
                result = `${hr}h ${hmin}m ${sec}s`;
                break;
        }
        return result;
    }

    /**
     * Starts the stopwatch.
    */
    this.start = function () {
        if (isRunning) { throw new Error("[ERR] Stopwatch is already running for this instance."); }

        isRunning = true; start = lapStart = new Date();
    }

    /**
     * Stops the stopwatch
    */
    this.stop = function () {
        if (!isRunning) { throw new Error("[ERR] Stopwatch has already stopped for this instance."); }

        isRunning = false; end = new Date();
        duration += Math.round((end - start) / 1000);
    }

    /**
     * Resets the stopwatch.
    */
    this.reset = function () {
        isRunning = false; duration = 0;
        laps = []; lapCount = 0;
    }

    /**
     * Sets a lap and initializes new lap timing.
    */
    this.setLap = function () {
        let lapDuration = formatTime(lapStart, new Date());
        laps[lapCount++] = lapDuration;
        lapStart = new Date();
    }

    /**
     * Returns the total duration of the stopwatch instance, i.e. from start() to stop()
     * @return  {Number}    Total time in seconds.
    */
    Object.defineProperty(this, 'duration', {
        get: function () { return formatTime(null, null, duration); }
    });

    /**
     * Returns the laps set during the execution.
     * @return  {Array}     List of lap entries.
    */
    Object.defineProperty(this, 'getLaps', {
        get: function () { return laps; }
    });

    /**
     * Prints the lap entries on the console.
    */
    Object.defineProperty(this, 'showLaps', {
        get: function () {
            for (let index in laps) {
                console.log(`Lap-${index}`, laps[index]);
            }
        }
    });
}

module.exports = Stopwatch;