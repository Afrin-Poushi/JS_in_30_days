function setTime() {
  const timeNow = new Date();
  // get every second, minute and hour value
  const sec = timeNow.getSeconds();
  const min = timeNow.getMinutes();
  const hour = timeNow.getHours();
  console.log(sec);
  // to convert the second to degree and
  // add 90 degree as div is rotated (offset) to 90 degree
  secDegree = (sec / 60) * 360 + 90;
  console.log("degree " + secDegree);
  secHand = document.querySelector(".second");
  secHand.style.transform = `rotate(${secDegree}deg)`;

  // set mintue
  console.log("min " + min);
  minHand = document.querySelector(".minute");
  // every 15 min clock changes 90 degree
  minDegree = (min / 15) * 90 + 90;
  minHand = document.querySelector(".minute");
  minHand.style.transform = `rotate(${minDegree}deg)`;

  // set hour
  console.log("hour " + hour);
  minHand = document.querySelector(".hour");

  // hourDegree = hour + 1 + 90;
  hourDegree = (hour / 12) * 360 + 90;
  console.log("hour " + hourDegree);
  hourHand = document.querySelector(".hour");
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setTime, 1000);
