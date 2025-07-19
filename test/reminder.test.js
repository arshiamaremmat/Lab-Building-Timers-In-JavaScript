const delayedReminder = require('../src/reminder'); // Import the function

jest.useFakeTimers(); // Use fake timers for setTimeout

describe('delayedReminder', () => {
  test('should log the message after the specified delay', () => {
    console.log = jest.fn(); // Mock console.log to capture the log output

    const message = 'This is a reminder!';
    const delay = 1000; // 1 second delay

    // Call delayedReminder and get the promise
    const reminderPromise = delayedReminder(message, delay);

    // Fast-forward the timer by the delay
    jest.advanceTimersByTime(delay);

    // Check that console.log was called with the correct message
    expect(console.log).toHaveBeenCalledWith(message);

    // Ensure the promise resolves correctly
    return reminderPromise.then((resolvedMessage) => {
      expect(resolvedMessage).toBe(message); // The promise resolves with the message
    });
  });
});