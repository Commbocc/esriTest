(function() {
  $(function() {
    var $mapElem, addFeatureLayer, defaultPopupTemplate, layers, map, overlay_toggles_elem;
    $mapElem = $('#home-map');
    if (typeof $mapElem !== 'undefined' && $mapElem !== null) {
      map = L.map($mapElem.attr('id'), {
        scrollWheelZoom: false
      }).setView([27.988945, -82.507324], 10);
      L.control.locate().addTo(map);
      L.esri.basemapLayer('Streets').addTo(map);
      map.on('click', function() {
        if (map.scrollWheelZoom.enabled()) {
          map.scrollWheelZoom.disable();
        } else {
          map.scrollWheelZoom.enable();
        }
      });
      layers = [
        {
          name: 'County Public Offices',
          visible: true,
          urls: ['https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/2', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/3', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/12', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/10', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/4', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/16'],
          iconClass: 'hc-map-icon-public-office'
        }, {
          name: 'Community Collection Centers',
          visible: false,
          urls: ['https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/1'],
          iconClass: 'hc-map-icon-collection-center'
        }, {
          name: 'Senior Centers',
          visible: false,
          urls: ['https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/13'],
          iconClass: 'hc-map-icon-senior-center'
        }, {
          name: 'Parks and Recreation Sites',
          visible: false,
          urls: ['https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/9'],
          iconClass: 'hc-map-icon-park'
        }, {
          name: 'Constitutional Offices',
          visible: false,
          urls: ['https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/15', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/0', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/14', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/6', 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/11'],
          iconClass: 'hc-map-icon-const-office'
        }, {
          name: 'Fire Stations',
          visible: false,
          urls: ['https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/5'],
          iconClass: 'hc-map-icon-fire-station'
        }, {
          name: 'Libraries',
          visible: false,
          urls: ['https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer/8'],
          iconClass: 'hc-map-icon-library'
        }
      ];
      overlay_toggles_elem = document.getElementById('map-overlay-toggles');
      defaultPopupTemplate = function(properties) {
        var directions_str, out;
        directions_str = [properties.WEB_ADDRESS, properties.WEB_CITY, 'FL', properties.WEB_ZIP].join('+').replace(/[^0-9a-z]/gi, '+').replace(' ', '+');
        out = "<h4 class=\"popover-title\">{WEB_NAME}</h4>\n<div class=\"popover-content\">\n	<p>\n		{WEB_ADDRESS}<br>\n		{WEB_CITY}, FL {WEB_ZIP}<br>\n		<a href=\"https://www.google.com/maps/dir//" + directions_str + "\" target=\"_blank\" class=\"small pull-right\">Directions</a>\n</p>";
        if (properties.WEB_URL !== null && properties.WEB_URL !== '') {
          out += "<p>\n	<a href=\"{WEB_URL}\" class=\"btn btn-secondary btn-sm btn-block\">Learn More</a>\n</p>";
        }
        out += "</div>";
        return out;
      };
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
        var layer_group;
        layer_group = L.layerGroup();
        $.each(layer.urls, function(l_index, url) {
          var new_layer;
          new_layer = L.esri.featureLayer({
            url: url,
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
            return L.Util.template(defaultPopupTemplate(properties), properties);
          });
          layer_group.addLayer(new_layer);
        });
        addFeatureLayer(layer_group, layer);
      });
    }
  });

}).call(this);
