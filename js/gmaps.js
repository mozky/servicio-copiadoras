function initialize() {
	var myLatlng = new google.maps.LatLng(21.5080672,-104.904226);
	var mapOptions = {
		mapTypeControl: false,
		overviewMapControl: false,
		scrollwheel: false,
		zoom: 16,
		center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Servicio - Copiadoras!'
	});
}

google.maps.event.addDomListener(window, 'load', initialize);