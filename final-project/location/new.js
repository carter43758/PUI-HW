function changePage() {
  window.location.href = 'https://carter43758.github.io/PUI-HW/final-project/location/new.html';
};

let map, infoWindow, pos;

function saveToLocalStorage() {
  const coordinateString = JSON.stringify(pos);
  localStorage.setItem('storedCoords', coordinateString);
}

function initMap() {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: 40.44512, lng: -79.94327 },
    zoom: 17,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Get Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  //creating neighborhood button
  const neighborButton = document.createElement("button");
  neighborButton.textContent = "Open Campus Map";
  neighborButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(neighborButton);

  locationButton.addEventListener("click", () => {
    // Tries geolocation and updates/displays location if it finds something
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("You are here: " + pos.lat.toFixed(5) + ", " + pos.lng.toFixed(5));
          infoWindow.open(map);
          map.setCenter(pos);
          saveToLocalStorage();
        })
    }
    else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });

  neighborButton.addEventListener("click", () => {
    //from ChatGPT    
    window.location.href = 'https://carter43758.github.io/PUI-HW/final-project/neighbor/neighbor.html';
  })

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}

window.initMap = initMap;