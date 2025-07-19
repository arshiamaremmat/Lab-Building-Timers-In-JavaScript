const countdownTimer = require('../src/countdown'); // Import countdownTimer

jest.useFakeTimers(); // Enable fake timers for Jest

describe('countdownTimer', () => {
  let clearIntervalMock;

  beforeEach(() => {
    // Mock clearInterval to spy on it
    clearIntervalMock = jest.spyOn(global, 'clearInterval');
  });

  afterEach(() => {
    // Clean up mocks and timers
    clearIntervalMock.mockRestore();
    jest.clearAllTimers();
  });

  test('should log remaining time at intervals and stop at 0', () => {
    console.log = jest.fn(); // Mock console.log to track its calls

    const startTime = 5; // 5 seconds
    const interval = 1000; // 1 second
    const timerId = countdownTimer(startTime, interval);

    // Fast-forward all timers by the total countdown time
    jest.advanceTimersByTime(startTime * interval);

    // Ensure clearInterval was called
    expect(clearIntervalMock).toHaveBeenCalledTimes(1); // Ensure clearInterval is called once
    expect(clearIntervalMock).toHaveBeenCalledWith(timerId); // Ensure it’s called with the correct timerId

    // Verify console.log was called the correct number of times
    expect(console.log).toHaveBeenCalledTimes(startTime);

    // Verify the correct values were logged (remaining time should be logged)
    for (let i = startTime; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(i);
    }
  });
});