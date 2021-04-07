// Initiialize and add the map
      function initMap() {
        //   Your location
        const loc = { lat: 44.799081, lng: -93.488942};
        // Centered map on location
        const map = new google.maps.Map(document.querySelector('.map'), {
          center: loc,
          zoom: 14
        });
        // The Marker, positioned at location
        const marker = new google.maps.Marker({ position: loc, map:map });
      }
