// Initiialize and add the map
      function initMap() {
        //   Your location
        const loc = { lat: 44.93634354055058, lng: -93.26215366650439};
        // Centered map on location
        const map = new google.maps.Map(document.querySelector('.map'), {
          center: loc,
          zoom: 12
        });
        // The Marker, positioned at location
        const marker = new google.maps.Marker({ position: loc, map:map });
      }


     