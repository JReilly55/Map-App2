  require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "satellite"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 13,
          center: [-74.15, 40.76] // longitude, latitude
        });
      });
