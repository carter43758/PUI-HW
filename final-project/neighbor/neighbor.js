//MY CODE
function changePage() {
  window.location.href = 'https://carter43758.github.io/PUI-HW/final-project/location/new.html';
};

const buildingInfo = {
  "Wean Hall": {
    entranceFloor: 5,
    elevator: "Yes - walk straight from entrance. ~3 min wait",
    stairs: "2 mins to Floor 2, 2 mins to Floor 8",
    ramps: "No"
  },
  "Scaife Hall": {
    entranceFloor: 1,
    elevator: "Yes - walk straight from entrance. ~30 sec wait",
    stairs: "1 min to Floor 2, 2 mins to Floor 3",
    ramps: "Yes"
  },
  "Tepper School of Business": {
    entranceFloor: 2,
    elevator: "Yes - walk straight from entrance. ~1 min wait.",
    stairs: "2 mins to Floor 1, 1 min to Floor 3, 2 min to Floor 4",
    ramps: "Yes"
  },
  "Wiegand Gymnasium": {
    entranceFloor: 1,
    elevator: "Yes - make a left from entrance. ~1 min wait.",
    stairs: "1 min to Floor 2, 1 min to LL",
    ramps: "No"
  },
  "Newell-Simon Hall": {
    entranceFloor: 3,
    elevator: "Yes - make right from entrace. ~2 min wait.",
    stairs: "1 min to Floor 4, 3 mins to Floor 1",
    ramps: "No"
  },
  "Morewood Gardens": {
    entranceFloor: 1,
    elevator: "Yes",
    stairs: "2 mins to Floor 2",
    ramps: "No"
  },
  "Marketplace": {
    entranceFloor: 2,
    elevator: "Yes - make 2 rights from main floor. ~1 min wait",
    stairs: "1 min to Floor 1, 3 mins to LL",
    ramps: "No"
  },
  "Doherty Hall": {
    entranceFloor: 1,
    elevator: "Yes - 1-2 min wait",
    stairs: "2 min to A, 1 min to Floor 2",
    ramps: "Yes"
  },
};

function populateBuildingInfo(place) {
  const building = buildingInfo[place.name];
  
  //MIGHT REQUIRE A REFRESH TO LED THE PLACE DATA LOAD
  const waitForElement = () => {
    const floorElement = document.getElementById("floor");
    const elevatorElement = document.getElementById("elevators");
    const stairsElement = document.getElementById("stairs");
    const rampsElement = document.getElementById("ramps"); 

    if (floorElement) {
      floorElement.innerText = "Floor " + building.entranceFloor;
      elevatorElement.innerText = "" + building.elevator;
      stairsElement.innerText = "" + building.stairs;
      rampsElement.innerText = "" + building.ramps;
    }
    
    else {
      setTimeout(waitForElement, 200); // Check again after 100 milliseconds
    }
  };

  waitForElement();
}

//setting a clickable maps URL
let googleMapsUrl = 'https://www.google.com/maps/dir/?api=1';

function generateMapsUrl(place) {
  googleMapsUrl += `&origin=${coordinates.lat},${coordinates.lng}`;
  googleMapsUrl += '&destination=' + encodeURIComponent(place.name) + '&destination_place_id=' + place.placeId;
  googleMapsUrl += '&travelmode=walking';
  return googleMapsUrl;
}

//opening the maps url when clicking on step by step in place sidebar
function openMap(googleMapsUrl) {
  window.location.href = googleMapsUrl;
}

const coordinateString = localStorage.getItem('storedCoords');
const coordinates = JSON.parse(coordinateString);
let coords = coordinates;

function retrieveFromLocalStorage() {
  pos = coordinates;
}

window.onload = retrieveFromLocalStorage();

function initMap() {
  new NeighborhoodDiscovery(CONFIGURATION)
};

const CONFIGURATION = {
  capabilities: {
    search: false,
    distances: false,
    directions: true,
    contacts: false,
    atmospheres: false,
    thumbnails: false,
  },
  //place IDs for each building
  pois: [
    { placeId: "ChIJn5pnWB_yNIgR7tlvci143KQ" },
    { placeId: "ChIJxfF8WB_yNIgRbObXhM5pPuI" },
    { placeId: "ChIJe9AmGCHyNIgR--E-Po6lSNo" },
    { placeId: "ChIJC-Y9ayHyNIgRKBgkPnfnw50" },
    { placeId: "ChIJEQYGByHyNIgRhNMfl94i3fM" },
    { placeId: "ChIJpXDM6NvzNIgRFwbiGXDNMpE" },
    { placeId: "ChIJL5gxLSfyNIgRVoDlHmQNmlo" },
    { placeId: "ChIJBVTPFCLyNIgR-HhNbKRxhzw" },
  ],
  centerMarker: { icon: "circle" },
  mapRadius: 1000,
  mapOptions: {
    center: { lat: coordinates.lat, lng: coordinates.lng },
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 15,
    zoomControl: true,
    maxZoom: 20,
    //pulled from my Google Cloud Platform account
    mapId: "eb948bed203b7e98",
  },
  //pulled from my Google Cloud Platform account
  mapsApiKey: "AIzaSyDG6i5rd9f6cruPUZaHFLiINY8iCMAHfgg",
}

window.onload = initMap;

//GOOGLE API CODE
/** Hides place details when you click back button. */
function hideElement(el, focusEl) {
  el.style.display = "none"
  if (focusEl) focusEl.focus()
}

/** Shows places details when you click on place name or marker. */
function showElement(el, focusEl) {
  el.style.display = "block"
  if (focusEl) focusEl.focus()
}

//I Determined this
const ND_NUM_PLACES_INITIAL = 8

/**Defines an instance of the Neighborhood Discovery widget, to be instantiated when the Maps library is loaded.*/
function NeighborhoodDiscovery(configuration) {
  const widget = this
  const widgetEl = document.querySelector(".neighborhood-discovery")

  widget.center = configuration.mapOptions.center
  widget.places = configuration.pois || []

  // Initialize core functionalities 
  initializeMap()
  initializePlaceDetails()
  initializeSidePanel()
  initializeDistanceMatrix()
  initializeDirections()

  /** Initializes the interactive map and adds place markers. */
  function initializeMap() {
    const mapOptions = configuration.mapOptions
    widget.mapBounds = new google.maps.Circle({
      center: widget.center,
      radius: configuration.mapRadius,
    }).getBounds()
    mapOptions.restriction = { latLngBounds: widget.mapBounds }
    mapOptions.mapTypeControlOptions = { position: google.maps.ControlPosition.TOP_RIGHT, }
    widget.map = new google.maps.Map(widgetEl.querySelector(".map"), mapOptions)
    const markerPath = widgetEl
      .querySelector(".marker-pin path")
      .getAttribute("d")

    const drawMarker = function (title, position, fillColor, strokeColor, labelText) {
      return new google.maps.Marker({
        title: title,
        position: position,
        //taken from here https://developers.google.com/maps/documentation/javascript/symbols
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12, // Adjust size as needed
          fillColor: fillColor,
          fillOpacity: 0.5, // Ensure the fill is visible
          strokeColor: strokeColor,
          strokeWeight: 3, // Thickness of the stroke
        },
        labelText: labelText,
        map: widget.map,
      })
    }

    // Add marker at the center location (if specified).
    if (configuration.centerMarker && configuration.centerMarker.icon) {
      drawMarker(
        "Home",
        widget.center,
        "#1A73E8",
        "#185ABC",
        configuration.centerMarker.icon,
      )
    }

    // Add marker for the specified Place object.
    widget.addPlaceMarker = function (place) {
      place.marker = drawMarker(
        place.name,
        place.coords,
        "#EA4335",
        "#C5221F",
        place.icon,
      )
      place.marker.addListener("click", () => void widget.selectPlaceById(place.placeId),
      )
    }

    // Marker used to highlight a place from Autocomplete search.
    widget.selectedPlaceMarker = new google.maps.Marker({ title: "Building" })
  }

  /** Initializes Place Details service for the widget. */
  function initializePlaceDetails() {
    const detailsService = new google.maps.places.PlacesService(widget.map)
    const placeIdsToDetails = new Map() // Create object to hold Place results.

    for (let place of widget.places) {
      placeIdsToDetails.set(place.placeId, place)
      place.fetchedFields = new Set(["place_id"])
    }

    widget.fetchPlaceDetails = function (placeId, fields, callback) {
      if (!placeId || !fields) return

      // Check for field existence in Place object.
      let place = placeIdsToDetails.get(placeId)

      //loading missing fields (name, link to directions, walking time)
      const missingFields = fields.filter(
        (field) => !place.fetchedFields.has(field),
      )

      const request = { placeId: placeId, fields: missingFields }
      const processResult = function (result, status) {
        // Basic details.
        if (result.name) place.name = result.name
        if (result.geometry) place.coords = result.geometry.location
        callback(place)
      }
      detailsService.getDetails(request, processResult)
    }
  }

  /** Initializes the side panel that holds curated POI results. */
  function initializeSidePanel() {
    const detailsPanelEl = widgetEl.querySelector(".details-panel")
    const placeResultsEl = widgetEl.querySelector(".place-results-list")
    const detailsTemplate = Handlebars.compile(document.getElementById("nd-place-details-tmpl").innerHTML)
    const resultsTemplate = Handlebars.compile(document.getElementById("nd-place-results-tmpl").innerHTML)
    // Select a place by id and show details.
    let selectedPlaceId;

    widget.selectPlaceById = function (placeId, panToMarker) {
      if (selectedPlaceId === placeId) return
      selectedPlaceId = placeId
      //makes the active element (sidebar) what the screen focuses on (using FocusEl function)
      const prevFocusEl = document.activeElement;

      const showDetailsPanel = function (place) {
        detailsPanelEl.innerHTML = detailsTemplate(place)
        const backButtonEl = detailsPanelEl.querySelector(".back-button")
        backButtonEl.addEventListener("click", () => {
          hideElement(detailsPanelEl, prevFocusEl)
          selectedPlaceId = undefined
          window.location.reload();
        })
        showElement(detailsPanelEl, backButtonEl)
      }

      const processResult = function (place) {
        if (place.marker) {
          widget.selectedPlaceMarker.setMap(null)
        } else {
          widget.selectedPlaceMarker.setPosition(place.coords)
          widget.selectedPlaceMarker.setMap(widget.map)
        }
        if (panToMarker) {
          widget.map.panTo(place.coords)
        }
        showDetailsPanel(place)
        widget.fetchDuration(place, showDetailsPanel)
        widget.updateDirections(place)
      }

      //gets place details once you click on it
      widget.fetchPlaceDetails(
        placeId,
        [
          "name",
          "geometry.location",
        ],
        processResult,
      )
    }

    //Renders the specified place data for the first place.
    const renderPlaceResults = function (places, startIndex) {
      //fetches place text
      //clears place text so buildings don't repeat on place list (from Chat GPT)
      placeResultsEl.innerHTML = "";
      placeResultsEl.insertAdjacentHTML("beforeend", resultsTemplate({ places: places }),)

      //fetches place data and adds a marker
      placeResultsEl
        .querySelectorAll(".place-result")
        .forEach((resultEl, i) => {
          const place = places[i - startIndex]
          if (!place) return
          // MY CODE - clicking anywhere on the item selects the place and gets a google maps url for it.
          resultEl.querySelector(".name").addEventListener("click", (e) => {
            widget.selectPlaceById(place.placeId, /* panToMarker= */ true)
            generateMapsUrl(place);
            populateBuildingInfo(place);
          })
          widget.addPlaceMarker(place);
        })
    }

    // Index of next Place object to show in the POI list.
    let nextPlaceIndex = 0

    //Renders the specified place data for remaining places.
    const showNextPlaces = function (n) {
      const nextPlaces = widget.places.slice(nextPlaceIndex, nextPlaceIndex.length)
      // Keep track of the number of Places calls that have not finished.
      let count = nextPlaces.length
      for (let place of nextPlaces) {
        const processResult = function (place) {
          count--
          if (count > 0) return
          renderPlaceResults(nextPlaces, nextPlaceIndex)
        }

        widget.fetchPlaceDetails(
          place.placeId,
          ["name", "types", "geometry.location"],
          processResult,
        )
      }
    }
    showNextPlaces(ND_NUM_PLACES_INITIAL)
  }

  /** Initializes Distance Matrix service for the widget once you click on a place. */
  function initializeDistanceMatrix() {
    const distanceMatrixService = new google.maps.DistanceMatrixService()

    // Annotate travel times from the centered location to the specified place.
    widget.fetchDuration = function (place, callback) {
      if (!widget.center || !place || !place.coords || place.duration) return
      const request = {
        origins: [widget.center],
        destinations: [place.coords],
        travelMode: google.maps.TravelMode.WALKING,
      }
      distanceMatrixService.getDistanceMatrix(
        request,
        function (result, status) {
          if (status === google.maps.DistanceMatrixStatus.OK) {
            const trip = result.rows[0].elements[0]
            if (trip.status === google.maps.DistanceMatrixElementStatus.OK) {
              place.duration = trip.duration
              callback(place)
            }
          }
        },
      )
    }
  }

  /** Initializes Directions service for the widget when you click on a place. */
  function initializeDirections() {
    const directionsService = new google.maps.DirectionsService()
    const directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      preserveViewport: true,
    })

    // Update directions from the centered location to specified place.
    widget.updateDirections = function (place) {
      if (!widget.center || !place || !place.coords) {
        directionsRenderer.setMap(null)
        return
      }
      // Use existing results if available.
      if (place.directions) {
        directionsRenderer.setMap(widget.map)
        directionsRenderer.setDirections(place.directions)
        return
      }
      const request = {
        origin: widget.center,
        destination: place.coords,
        travelMode: google.maps.TravelMode.WALKING,
      }
      directionsService.route(request, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          place.directions = result
          directionsRenderer.setMap(widget.map)
          directionsRenderer.setDirections(result)
        }
      })
    }
  }
}
