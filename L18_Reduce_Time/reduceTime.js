const lists = document.querySelectorAll("[data-time]");
const timeList = [...lists];
console.log(timeList);

const seconds = timeList
  .map((node) => node.dataset.time)
  .map((time) => {
    const [min, sec] = time.split(":").map(parseFloat);
    console.log({ min, sec });
    return min * 60 + sec;
  })
  .reduce((total, secs) => total + secs);

const remainedHours = Math.floor(seconds / 3600);
let remainedSecs = seconds % 3600;
const remainedMins = Math.floor(remainedSecs / 60);
remainedSecs = seconds % 60;

console.log({ remainedHours, remainedMins, remainedSecs });
