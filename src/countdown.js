/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */

// src/countdown.js
function countdownTimer(startTime, interval) {
  let remainingTime = startTime;

  // Set up a timer using setInterval to log the remaining time
  const timerId = setInterval(() => {
    console.log(remainingTime); // Log the remaining time
    remainingTime -= 1; // Decrease the remaining time

    // Stop the timer when time reaches 0
    if (remainingTime < 0) {
      clearInterval(timerId); // Stop the interval when the timer reaches 0
    }
  }, interval);

  return timerId; // Return the timer ID for validation in tests
}

module.exports = countdownTimer;