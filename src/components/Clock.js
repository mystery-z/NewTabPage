import React from 'react';
import './styling/Clock.css'

function formatTime (unixTime) {
  var time = [];

  var date = new Date(unixTime);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var days = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
  let day = date.getDay();
  var hour = date.getHours()
  var min = date.getMinutes()
  var sec = date.getSeconds()
  var currentDate = date.getDate().toString();

  var dateEnding = "th";
  var periodOfDay = "AM";

  if (hour > 12) {
    hour = hour - 12;
    periodOfDay = "PM";
  }

  if (currentDate.slice(-1) == "1") {
    dateEnding = "st";
  } else if (currentDate.slice(-1) == "2") {
    dateEnding = "nd";
  } else if (currentDate.slice(-1) == "3") {
    dateEnding = "rd";
  }

  if (hour.toString().length < 2) { hour = "0" + hour; }
  if (min.toString().length < 2) { min = "0" + min; }
  if (sec.toString().length < 2) { sec = "0" + sec; }
  if (currentDate.toString().length < 2) { currentDate = "0" + currentDate; }

  
  time.push(hour);
  time.push(min);
  time.push(sec);
  time.push(periodOfDay);
  time.push(days[day]);
  time.push(months[date.getMonth()]);
  time.push(currentDate);
  time.push(date.getFullYear());
  time.push(dateEnding);

  return time;
}

function update (){
  let currentTime = formatTime(Date.now());
  document.getElementById("hour").innerHTML = currentTime[0];
  document.getElementById("min").innerHTML = currentTime[1];
  document.getElementById("sec").innerHTML = currentTime[2];
  document.getElementById("periodOfDay").innerHTML = currentTime[3];
  document.getElementById("day").innerHTML = currentTime[4];
  document.getElementById("month").innerHTML = currentTime[5];
  document.getElementById("date").innerHTML = currentTime[6];
  document.getElementById("year").innerHTML = currentTime[7];
  document.getElementById("dateEnding").innerHTML = currentTime[8];

}

const Clock = () => {
  var timeUpdate = setInterval(() => {
    update();
  }, 1000);

  return (
      <div className='timeInformation'>
          <h1 id="hour"></h1>
          <h1 id="min"></h1>
          <h1 id="sec"></h1>
          <h1 id="periodOfDay"></h1>

          <h1 id="seperator"></h1>

          <h1 id="day"></h1>
          <h1 id="month"></h1>
          <h1 id="date"></h1>
          <h1 id="year"></h1>
          <h1 id="dateEnding"></h1>
          <h1 id="weatherIcon"></h1>
      </div>
    );

};

export default Clock;
