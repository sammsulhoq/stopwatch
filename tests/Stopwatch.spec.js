const Stopwatch = require("../src/Stopwatch");

let stopwatch = null;
const timeoutDuration = 2000;

/** Test suite */
describe("Stopwatch test", () => {
  /** Initializes stopwatch object before each test */
  beforeEach(() => {
    stopwatch = new Stopwatch("h:m:s");
  });

  it("should return the duration spent", (done) => {
    stopwatch.start();

    setTimeout(() => {
      stopwatch.stop();

      expect(stopwatch.duration).toBe("0h 0m 2s");
      done();
    }, timeoutDuration);
  });

  it("should reset the stopwatch", (done) => {
    stopwatch.start();

    setTimeout(() => {
      stopwatch.stop();
      stopwatch.reset();

      expect(stopwatch.duration).toBe("0h 0m 0s");
      done();
    }, timeoutDuration);
  });

  it("should return array of laps", (done) => {
    stopwatch.start();

    setTimeout(() => {
      stopwatch.setLap();

      expect(Array.isArray(stopwatch.getLaps)).toBe(true);
      done();
    }, timeoutDuration);
  });
});
