//initialize map variables
var list = document.getElementById('list');
var zipErrorMessage = document.getElementById('zip-error');
var map;
var defaultCenter = {lat: 31.9503896, lng: -95.8581661};
var defaultZoom = 6;
var markers = [];


/********************************************************
*********************************************************

SAMPLE STORE INFO 

*********************************************************
********************************************************/
var locations = [
  {
    "Store": 701,
    "Name": "Spring Market of Mamou",
    "Address": "1445 Old Hwy 13",
    "City": "Mamou",
    "State": "LA",
    "Zip": 70554,
    "Phone": "(337) 468-2980",
    "Fax": "(337) 468-2981",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 30.643087,
    "Longitude": -92.420776,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "Y",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 702,
    "Name": "Spring Market of Lake Arthur",
    "Address": "620 N Hwy 26",
    "City": "Lake Arthur",
    "State": "LA",
    "Zip": 70549,
    "Phone": "(337) 774-2376",
    "Fax": "(337) 774-2378",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 30.08833,
    "Longitude": -92.671591,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "Y",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 703,
    "Name": "Spring Market of Colfax",
    "Address": "1506 Main St",
    "City": "Colfax",
    "State": "LA",
    "Zip": 71417,
    "Phone": "(318) 627-6272",
    "Fax": "(318) 627-6274",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 31.524679,
    "Longitude": -92.686872,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "Y",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 704,
    "Name": "Spring Market of Iowa",
    "Address": "501 W Hwy 90",
    "City": "Iowa",
    "State": "LA",
    "Zip": 70647,
    "Phone": "(337) 582-2087",
    "Fax": "(337) 582-1792",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 30.230854,
    "Longitude": -93.019892,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "Y",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 705,
    "Name": "Spring Market of Zwolle",
    "Address": "1495 Obrie St",
    "City": "Zwolle",
    "State": "LA",
    "Zip": 71486,
    "Phone": "(318) 645-7031",
    "Fax": "(318) 645-7033",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 31.642005,
    "Longitude": -93.641406,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "Y",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 706,
    "Name": "Spring Market of Waskom",
    "Address": "1005 Texas Avenue E",
    "City": "Waskom",
    "State": "TX",
    "Zip": 75692,
    "Phone": "(903) 687-4222",
    "Fax": "(903) 687-4220",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.47259,
    "Longitude": -94.046739,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 707,
    "Name": "Spring Market of Redwater",
    "Address": "114 Redwater Blvd W",
    "City": "Maud",
    "State": "TX",
    "Zip": 75567,
    "Phone": "(903) 671-3159",
    "Fax": "(903) 671-3160",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 33.363118,
    "Longitude": -94.251887,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 708,
    "Name": "Spring Market of De Kalb",
    "Address": "12522 FM 1840",
    "City": "De Kalb",
    "State": "TX",
    "Zip": 75559,
    "Phone": "(903) 667-7527",
    "Fax": "(903) 667-9017",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 33.504985,
    "Longitude": -94.608474,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 709,
    "Name": "Spring Market of Hughes Springs",
    "Address": "870 Taylor St",
    "City": "Hughes Springs",
    "State": "TX",
    "Zip": 75656,
    "Phone": "(903) 639-3746",
    "Fax": "(903) 639-7720",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 33.007509,
    "Longitude": -94.631445,
    "HealthAndBeauty": "Y",
    "Beer": "N",
    "Wine": "N",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 710,
    "Name": "Spring Market of Naples",
    "Address": "504 Wl Doc Dodson",
    "City": "Naples",
    "State": "TX",
    "Zip": 75568,
    "Phone": "(903) 897-1461",
    "Fax": "(903) 897-9518",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 33.196635,
    "Longitude": -94.689102,
    "HealthAndBeauty": "Y",
    "Beer": "N",
    "Wine": "N",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 711,
    "Name": "Spring Market of Lone Star",
    "Address": "914 N Main St",
    "City": "Lone Star",
    "State": "TX",
    "Zip": 75668,
    "Phone": "(903) 656-1235",
    "Fax": "(903) 656-1721",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.9557,
    "Longitude": -94.709359,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 712,
    "Name": "Spring Market of Diana",
    "Address": "1787 US Hwy 259 S",
    "City": "Diana",
    "State": "TX",
    "Zip": 75640,
    "Phone": "(903) 663-0043",
    "Fax": "(903) 663-0057",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.702383,
    "Longitude": -94.751142,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 713,
    "Name": "Spring Market of Frankston",
    "Address": "440 E Pine St",
    "City": "Frankston",
    "State": "TX",
    "Zip": 75763,
    "Phone": "(903) 876-1841",
    "Fax": "(903) 876-2449",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.051046,
    "Longitude": -95.5002,
    "HealthAndBeauty": "Y",
    "Beer": "N",
    "Wine": "N",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 714,
    "Name": "Spring Market of Edgewood",
    "Address": "504 W Pine St",
    "City": "Edgewood",
    "State": "TX",
    "Zip": 75117,
    "Phone": "(903) 896-1002",
    "Fax": "(903) 896-1005",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.696804,
    "Longitude": -95.894416,
    "HealthAndBeauty": "Y",
    "Beer": "N",
    "Wine": "N",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 715,
    "Name": "Spring Market of Kemp",
    "Address": "221 S State Hwy 274",
    "City": "Kemp",
    "State": "TX",
    "Zip": 75143,
    "Phone": "(903) 498-3015",
    "Fax": "(903) 498-3017",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.428337,
    "Longitude": -96.230146,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 716,
    "Name": "Spring Market of Leonard",
    "Address": "420 S US 69",
    "City": "Leonard",
    "State": "TX",
    "Zip": 75452,
    "Phone": "(903) 587-0020",
    "Fax": "(903) 587-0022",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 33.3743,
    "Longitude": -96.2376,
    "HealthAndBeauty": "Y",
    "Beer": "N",
    "Wine": "N",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 717,
    "Name": "Spring Market of Whitewright",
    "Address": "301 Hwy 69 S",
    "City": "Whitewright",
    "State": "TX",
    "Zip": 75491,
    "Phone": "(903) 364-0123",
    "Fax": "(903) 364-0125",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 33.500553,
    "Longitude": -96.395424,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 718,
    "Name": "Spring Market of Palmer",
    "Address": "428 N Dallas St",
    "City": "Palmer",
    "State": "TX",
    "Zip": 75152,
    "Phone": "(972) 449-2010",
    "Fax": "(972) 449-2012",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.437114,
    "Longitude": -96.669121,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 719,
    "Name": "Spring Market of Italy",
    "Address": "721 Dale Evans Dr",
    "City": "Italy",
    "State": "TX",
    "Zip": 76651,
    "Phone": "(972) 483-1002",
    "Fax": "(972) 483-1005",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.1948,
    "Longitude": -96.897253,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 720,
    "Name": "Spring Market of Grandview",
    "Address": "416 N 3rd St",
    "City": "Grandview",
    "State": "TX",
    "Zip": 76050,
    "Phone": "(817) 866-4458",
    "Fax": "(817) 866-2805",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.277206,
    "Longitude": -97.179391,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 721,
    "Name": "Spring Market of Godley",
    "Address": "501 N Main",
    "City": "Godley",
    "State": "TX",
    "Zip": 76044,
    "Phone": "(817) 389-3647",
    "Fax": "(817) 389-3925",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.455309,
    "Longitude": -97.52103,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 722,
    "Name": "Spring Market of Haskell",
    "Address": "5 N 14th St",
    "City": "Haskell",
    "State": "TX",
    "Zip": 79521,
    "Phone": "(940) 864-3127",
    "Fax": "(940) 864-3942",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 33.16989,
    "Longitude": -99.72786,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 723,
    "Name": "Spring Market of Anson",
    "Address": "122 Commercial Ave",
    "City": "Anson",
    "State": "TX",
    "Zip": 79501,
    "Phone": "(325) 823-2002",
    "Fax": "(325) 823-2012",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.767624,
    "Longitude": -99.896997,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 724,
    "Name": "Spring Market of Winters",
    "Address": "1010 N Main St",
    "City": "Winters",
    "State": "TX",
    "Zip": 79567,
    "Phone": "(325) 754-1009",
    "Fax": "(325) 754-1012",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 31.969694,
    "Longitude": -99.962563,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
  {
    "Store": 725,
    "Name": "Spring Market of Merkel",
    "Address": "1003 Telephone Cir",
    "City": "Merkel",
    "State": "TX",
    "Zip": 79536,
    "Phone": "(325) 928-3743",
    "Fax": "(325) 928-9754",
    "Hours": "Daily: 7am-9pm ",
    "Latitude": 32.47948,
    "Longitude": -100.01037,
    "HealthAndBeauty": "Y",
    "Beer": "Y",
    "Wine": "Y",
    "Liquor": "N",
    "Fuel": "Y",
    "Opens": "Now Open",
  },
];
/*********************************************************
END OF STORE INFO DATA
*********************************************************/




/********************************************************
*********************************************************

MAP STUFF

*********************************************************
********************************************************/

var markerIndex = 0;

//fill dropdown with cities from store list
var dropdown = document.getElementById('city-select');
var optionList = [];
for (var i = 0; i < locations.length; i++) {
    optionList.push('<option name="' + locations[i].Name + '" value="' + i + '">' + locations[i].Name.substr(16) + ', ' + locations[i].State + '</option>');
}
optionList.sort();
dropdown.innerHTML = '<option value="none" selected>-Select City-</option>' + optionList;

var error = document.getElementById('error');


//initialize map
window.initMap = function(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultCenter,
        zoom: defaultZoom
    });


    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    markers = [];

    //Build an array of markers
    for (var i = 0; i < locations.length; i++) {
        var position = {
            lat: locations[i].Latitude,
            lng: locations[i].Longitude
        };
        var title = locations[i].Name;
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            icon: './img/marker.png',
            animation: google.maps.Animation.DROP,
            id: i
        });
        markers.push(marker);

        bounds.extend(marker.position);

		//call info popup when clicking each marker
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
    }

    
	//show marker for selected store in dropdown
	//zooms in to location
    dropdown.addEventListener('change', function() {
        markers[markerIndex].setMap(null);
        list.innerHTML = "";
        document.getElementById('zip').value = "";
        zipErrorMessage.innerHTML = "";

        if (this.value == "none")
            initMap();
        else {
            markerIndex = this.value;
            markers[markerIndex].setMap(map);
            map.setCenter({
                lat: locations[markerIndex].Latitude,
                lng: locations[markerIndex].Longitude
            });
            map.setZoom(15);
            populateInfoWindow(markers[markerIndex], largeInfowindow);
            showInList(markerIndex);
        }
    });

	//add click listeners to submit and show all buttons
    document.getElementById('submit').addEventListener('click', findNearest);
    document.getElementById('all').addEventListener('click', showAllMarkers);


	//populate popup info windows for wach marker
    function populateInfoWindow(marker, infowindow) {
        var phoneNumber = opening = "";

        if (locations[marker.id].Phone != null)
            phoneNumber = '<p class="infowindow-phone">Phone: '+ locations[marker.id].Phone + '</p>';

		if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('<h2 class="marker-heading">' + marker.title + '</h2>' +
                opening +
                '<p class="marker-address"><a href="https://maps.google.com?q=' + locations[marker.id].Latitude + "," + locations[marker.id].Longitude +  '" target="_blank">' + locations[marker.id].Address + '<br>' +
                locations[marker.id].City + ', ' + locations[marker.id].State + " " + locations[marker.id].Zip + '</a></p>' +
                phoneNumber +
                "<p class='marker-hours'>Hours: " + locations[marker.id].Hours + '</p>');
            infowindow.open(map, marker);

            infowindow.addListener('closeclick', function() {
              infowindow.setMarker(null); 
            });
        }
    }

	document.addEventListener('keydown', function(evt) {
		if (evt.keyCode == 13 && document.getElementById('zip').value != "")
			findNearest();
	});


	function findNearest() {
		document.getElementById('all').removeEventListener('click', showAllMarkers);
		document.getElementById('submit').removeEventListener('click', findNearest);

		resetMarkers();
		dropdown.value = "none";
		var distanceMatrixService = new google.maps.DistanceMatrixService;
		var zip = document.getElementById('zip').value;

		if (!zip || !Number(zip) > 0)
		{
			zipErrorMessage.innerHTML = "Please enter a valid zip code.";
		}
		else {
			zipErrorMessage.innerHTML = " ";
			var origins = [];
			for (var i = 0; i < markers.length; i++) {
				origins[i] = markers[i].position;
			}

			var destination = zip;
			distanceMatrixService.getDistanceMatrix({
				origins: origins,
				destinations: [destination],
				travelMode: google.maps.TravelMode['DRIVING'],
				unitSystem: google.maps.UnitSystem.METRIC,
			}, function(response, status) {
				if (status !== google.maps.DistanceMatrixStatus.OK) {
					zipErrorMessage.innerHTML = "Something went wrong try refreshing the page"; //'Error was: ' + status;
					location.reload();
				} else {
					list.innerHTML = "";
					map.setZoom(defaultZoom);
					map.setCenter(defaultCenter);
					displayMarkersWithinArea(response);
				}
			});
		}

	//add click listeners to submit and show all buttons
	document.getElementById('all').addEventListener('click', showAllMarkers);
	document.getElementById('submit').addEventListener('click', findNearest);

		return;
	} //end findNearest

	//display only the markers within the zip code radius selected
	function displayMarkersWithinArea(response) {
		for (var i = 0; i < response.rows.length; i++) {
		   locations[i].distance = response.rows[i].elements[0].distance.value;
		}

		var maxDistance = document.getElementById('maxDistance').value * 1609.34; //convert miles to km
		var origins = response.originAddresses;
		var destinations = response.destinationAddresses;

		var atLeastOne = false;
		
		var locationsSort = JSON.parse(JSON.stringify(locations));

		locationsSort.sort(function (a, b){
		  return a.distance - b.distance;
		});

		for (var i = 0; i < locationsSort.length; i++) {
		  if(locationsSort[i].distance <= maxDistance && checkService(markers[locationsSort[i].Store - 701])) {
			markers[ locationsSort[i].Store - 701 ].setMap(map);
			showInList( locationsSort[i].Store - 701, locationsSort[i].distance/1609.34 ); //convert km back to miles for display
			atLeastOne = true;

		  }
		}

		//check that at least one location was returned
		//or show error message
		if (atLeastOne) {
			zipErrorMessage.innerHTML = "";
		}
		else {
			zipErrorMessage.innerHTML = "This search returned no results.";
		}

	} //end displayMarkersWithinArea

	//reset the map to on page load state
	function resetMarkers() {
		for (var i = 0; i < locations.length; i++)
			markers[i].setMap(null);
	}

	
	//filters stores and markers by available store services
    function checkService(marker) {

        var services = true;

        var checkboxes = document.getElementsByName('services');
        
        if (checkboxes[0].checked && locations[marker.id].Beer == 'N')
            services = false;

        if (checkboxes[1].checked && locations[marker.id].Liquor == 'N')
            services = false;

        if (checkboxes[2].checked && locations[marker.id].Fuel == 'N')
            services = false;

        return services;

    } //end checkService()
	
	function showFilteredMarkers() {
		resetMarkers();
		for (var i = 0; i < locations.length; i++) {
			if (checkService(markers[i]))
			{
				markers[i].setMap(map);
				showInList(i);
				console.log(i);
			}
		}
			
	}

	//show all store markers on the map
	function showAllMarkers() {
		document.getElementById('submit').removeEventListener('click', findNearest);
		document.getElementById('all').removeEventListener('click', showAllMarkers);
		dropdown.value = "none";
		document.getElementById('zip').value = "";

		initMap();
		list.innerHTML = "";
		zipErrorMessage.innerHTML = "";
		var checkboxes = document.getElementsByName('services');
		//hack fix for alpha order | FIND BETTER ALTERNATIVE!!!
		if (checkboxes[0].checked || checkboxes[1].checked) {
			showFilteredMarkers();
		}
		else {
			var alphaOrder = [22, 2, 7, 11, 13, 12, 20, 19, 21, 8, 3, 18, 14, 1, 15, 10, 0, 24, 9, 17, 6, 5, 16, 23, 4];
			for (var i = 0; i < alphaOrder.length; i++) {
				markers[ alphaOrder[i] ].setMap(map);
				showInList( alphaOrder[i] );
			}
		}
	}
	
	//add event listeners to buttons
	document.getElementById('submit').addEventListener('click', findNearest);
	document.getElementById('all').addEventListener('click', showAllMarkers);

	return;
} //end initMap()





/********************************************************
*********************************************************

LIST VIEW STUFF

*********************************************************
********************************************************/

//build info shown in list view
function showInList(locationId, dist) {
    if (dist)
        var distance = "Distance: " + Math.round(dist) + " miles<br>";
    else
        var distance ="";

    var opening = phone = beer = liquor = "";

    if (locations[locationId].Beer == 'Y')
         beer = "<li>Beer & Wine</li>";
    if (locations[locationId].Liquor == 'Y')
        liquor = "<li>Liquor</li>";

    if (locations[locationId].Phone != null)
        phone = "Phone: " + locations[locationId].Phone + "<br>";

    var storeServices = "<li>Baked Goods</li>" + beer + "<li>Dairy</li><li>Frozen</li><li>Fuel</li><li>Gift Cards</li><li>Health & Beauty</li>" + liquor +
                        "<li>Meat</li><li>Pet</li><li>Produce</li>" ;

    var storeInfo = '<h2>' + locations[locationId].Name + '</h2>' +
                    '<p style="margin-top:.25em;"><a href="https://maps.google.com?q=' + locations[locationId].Latitude + ',' + locations[locationId].Longitude + '" target="_blank">' + locations[locationId].Address + '<br>' +
                    locations[locationId].City + ', ' + locations[locationId].State + ' ' + locations[locationId].Zip + '</a></p>' +
                    '<a href="' + buildURL( locations[locationId].Store ) + '" target="_blank"><button class="red-button">View Circular</button></a>' +
                    '<div class="store-info">Hours: ' + locations[locationId].Hours + '<br>' +
                    phone + 
                    'Services: <ul class="services-list">' + storeServices + '</ul></div>' + 
                    distance +
                    '<a href="https://maps.google.com?q=' + locations[locationId].Latitude + ',' + locations[locationId].Longitude + '" target="_blank">Get Directions</a><br><hr>';

    list.innerHTML += storeInfo;
}




/********************************************************
*********************************************************

CIRCULAR INTEGRATION FOR LIST BUTTONS

*********************************************************
********************************************************/
var currentDate = new Date();
var pastWednesday = getLastWednesday();
console.log("Previous Ad Date: " + pastWednesday);

//finds the date of the previous Wednesday
//or returns today if it is currently Wednesday
function getLastWednesday () {
  var currentDayOfWeek = currentDate.getDay();  
  var wednesday = 3; // 0 = Sun, 3 = Wed, 6 = Sat  
  var goBackDays;
  var pastWednesday;

  if (currentDayOfWeek >= wednesday) {  
    goBackDays = currentDayOfWeek - wednesday;  
  }  
  else {  
    goBackDays = (7 - wednesday) + currentDayOfWeek;  
  }  

  // Convert days to milliseconds  
  goBackDays = goBackDays * 24 * 60 * 60 * 1000;  

  //set past wednesday
  pastWednesday = new Date(currentDate.getTime() - goBackDays);


  return pastWednesday;
 }
 
 
 //creates the 6 digit date string appended to the pdf filename
 function createDateString () {
  var dateString = "" + (pastWednesday.getMonth() + 1) + pastWednesday.getDate() + (pastWednesday.getYear() - 100);
  
  if (pastWednesday.getMonth() < 10)
    dateString = "0" + dateString;

  if (pastWednesday.getDate() < 10) {
	var temp = dateString.slice(0, 2) + "0" + dateString.slice(2);
	dateString = temp;
  }

  return dateString;
}

//get the user friendly month for url
//adds a 0 for Jan - Sept
function getMonthForURL () {
  var urlMonth = pastWednesday.getMonth() + 1;
  
  //if pastWdnesday is on the first of the month
  //circulars would have been uploaded in the previous month
  //changing the url string
  if (pastWednesday.getDate() == 1)
	urlMonth--;

  if (urlMonth < 10)
    urlMonth = "0" + (urlMonth);

  return urlMonth;
}

//checks for the edge case where the previous Wednesday
//falls on January 1 meaning the circular upload would have
//actually been in the previous year.
function getYearForURL () {
  var urlYear = pastWednesday.getFullYear();

  if (pastWednesday.getDate() == 1 && pastWednesday.getMonth() == 0)
    urlYear--;

  return urlYear;
}

//uses date for past Wednesday to build
//full url for a selected store's pdf 
function buildURL (storeNumber) {
  var urlString = "http://www.spring-market.com/wp-content/uploads/" + getYearForURL() + "/" + getMonthForURL() + "/" + storeNumber + "_" + createDateString() + ".pdf";

  console.log( urlString );

  return urlString;
}