(function() {
  $(function() {
    var $mapElem, addFeatureLayer, defaultPopupTemplate, layers, map, overlay_toggles_elem;
    $mapElem = $('#home-map');
    map = L.map($mapElem.attr('id')).setView([27.988945, -82.507324], 10);
    L.control.locate().addTo(map);
    L.esri.basemapLayer('Streets').addTo(map);
    overlay_toggles_elem = document.getElementById('map-overlay-toggles');
    layers = [
      {
        name: 'Hospitals',
        visible: true,
        url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/County_Webmap/MapServer/0',
        iconClass: 'hc-map-icon-hospital'
      }, {
        name: 'Senior Centers',
        visible: false,
        url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/County_Webmap/MapServer/1',
        iconClass: 'hc-map-icon-senior-center'
      }, {
        name: 'Fire Stations',
        visible: false,
        url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/County_Webmap/MapServer/2',
        iconClass: 'hc-map-icon-fire-station'
      }
    ];
    defaultPopupTemplate = "<h4 class=\"popover-title\">{NAME}</h4>\n\n<div class=\"popover-content\">\n	<p>{ADDRESS}</p>\n\n	<p>\n		<a href=\"#\" class=\"btn btn-secondary btn-sm btn-block\">Learn More</a>\n	</p>\n\n</div>";
    addFeatureLayer = function(layer, obj) {
      var toggle;
      toggle = document.createElement('a');
      toggle.href = '#';
      toggle.className = 'map-overlay-toggle';
      toggle.innerHTML = '<div class="hc-map-icon ' + obj.iconClass + '"></div> ' + obj.name;
      if (obj.visible) {
        layer.addTo(map);
        toggle.className = 'map-overlay-toggle active';
      }
      toggle.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (map.hasLayer(layer)) {
          map.removeLayer(layer);
          this.className = 'map-overlay-toggle';
        } else {
          map.addLayer(layer);
          this.className = 'map-overlay-toggle active';
        }
      };
      overlay_toggles_elem.appendChild(toggle);
    };
    return $.each(layers, function(index, layer) {
      var new_layer;
      new_layer = L.esri.featureLayer({
        url: layer.url,
        pointToLayer: function(esriFeature, latlng) {
          return L.marker(latlng, {
            icon: L.divIcon({
              className: 'hc-map-icon ' + layer.iconClass
            })
          });
        }
      });
      new_layer.bindPopup(function(e) {
        var properties;
        properties = e.feature.properties;
        return L.Util.template(defaultPopupTemplate, properties);
      });
      addFeatureLayer(new_layer, layer);
    });
  });

}).call(this);
