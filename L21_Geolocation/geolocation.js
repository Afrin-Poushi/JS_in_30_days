const compass = document.querySelector(".compass");
const speed = document.querySelector(".speed");

function success(position) {
  console.log(position);
  console.log(
    "lat " + position.coords.latitude,
    " lng " + position.coords.longitude
  );
  /**getting speed value */
  const speedValue = position.coords.speed;
  speedValue ? (speed.textContent = speedValue) : "";
  /**getting heading - heading 0 means heading to north,
   * Nan means device is incompatiable
   */
  if (position.coords.heading)
    compass.style.transform = `rotate(${position.coords.heading}deg)`;
}

function error() {
  alert("Sorry, no position available.");
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
};

document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
  // navigator.geolocation.getCurrentPosition() will give current lat lng
  const watchID = navigator.geolocation.watchPosition(success, error, options);
  console.log(watchID);
});
