  function initMap(){
	  // Map options
      	var options = {
        zoom: 15,
        center: {lat:40.70256, lng:-73.98543}
      }
	  
	  // New map
      var map = new google.maps.Map(document.getElementById('map'), options);
	  
	  //Add marker
	  var marker = new google.maps.Marker({
		  position: {lat:40.701787, lng:-73.997085 },
		  map: map,
		  icon: 'images/camera.png'
	  });
	  
	  var infoWindow = new google.maps.InfoWindow({
		  content:'<h5>Brooklyn Outdoor Film festival</h5>'  
	  });
	  
	  marker.addListener('click', function(){
		  infoWindow.open(map, marker);
	  });
    }