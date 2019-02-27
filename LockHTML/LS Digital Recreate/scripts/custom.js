$(document).ready(() => {
  window.onload = function () {
    clock();
    function clock() {
      const now = new Date();
      const TwentyFourHour = now.getHours();
      let hour = now.getHours();
      let min = now.getMinutes();
      let mid = 'PM';
      if (min < 10) {
        min = `0${min}`;
      }
      if (hour > 12) { // If you want the time to be in 24 hour format change "12" to "24".
        hour -= 12;
      }
      if (hour == 0) {
        hour = 12;
      }
	  if (hour < 10) {
        hour = "0" + hour;
      }
      if (TwentyFourHour < 12) {
        mid = 'AM';
      }
      document.getElementById('time').innerHTML = `${hour}:${min}`; // If you want to display AM and PM add ${mid} after ${min}.
      setTimeout(clock, 1000);
    }
  };
});