// JavaScript Document

// JavaScript - Google Maps initialization
/* when the page is loaded, the initMap() function is called 
		- this is done by the Google Maps' addDomListener() function
	in this function, we declare the location we want to centre our map on 
		- first number is the latitude, the second one is the longitude
	then we get the mapCanvas element. This is our <div id="map"> from the HTML code.
	we define some basic map options (zoom level, map type)
	and we create new Google maps object and pass our configuration to it in new google.maps.Map(mapCanvas, mapOptions);
	and google map is rendered to our page. */

$(function () {

    function initMap() {
		
		

        var location = new google.maps.LatLng(40.7016652,-73.9977885);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = '/images/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h4>Brooklyn Outdoor Film Festival</h4>' +
                '<div class="info-content">' +
                '<p> We show films from August 5th to 8th every 2 hours from 18:00 till midnight at Brooklyn Bridge Park. Join us !</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }
    google.maps.event.addDomListener(window, 'load', initMap);
});

/* Adding Marker with custom icon and pop-up shown on click

	We have the map being rendered, it is the right time to add a marker with pop-up window to our map now.

	We'll do it as follows:

	first, we define the filepath to our marker icon in the markerImage variable. 
	then we add it to the map by calling new google.maps.Marker; we will pass to it a location, a map object and the path to the icon
	then we define in the contentString variable the content of the info window we want to be shown after the user clicks on the marker
	now we create the info window object by calling new google.maps.InfoWindow
	last thing we need to do is to link the info window to the marker and add a function that will wait to show it only after the user clicks on the marker - marker.addListener */

//document.forms.regForm.nameTheElement
// Working with textFields
/* main events
	-onfocus
	-onblur
	-onchange
	-onkeypress
	-onkeydown
	-onkeyup*/


// how to do select list in js 






