var releaseDay = new Date("March 20, 2020").getTime();
var interval = setInterval(function () {
  var today = new Date().getTime();
  var dist = releaseDay - today;
  //1000 miliseconds per second, 60 seconds per minute, 60 minutes per hour, 24 hours per day, 7 days per week
  var wk = Math.floor(dist / (1000 * 60 * 60 * 24 * 7));
  //modulo weeks equation to get remainder, then divide that by days equation
  var d = Math.floor(dist % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
  var hr = Math.floor(dist % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var m = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60));
  var s = Math.floor(dist % (1000 * 60) / (1000));

  document.getElementById('counter').innerHTML = wk + " weeks, " + d + " days, "
   + hr + " hours, " + m + " minutes, and " + s + " seconds";

   if (dist < 0) {
    clearInterval(interval);
    document.querySelector('p').innerHTML = "is out";
    document.getElementById('counter').innerHTML = "RIGHT NOW!!!";
  }
}, 1000);

if (document.documentElement.clientWidth < 510) {
  document.querySelector('img').src = "acpics/img4.png";
  document.querySelector('h1').innerHTML = "";
}
