require([
	"esri/arcgis/utils",
	"esri/dijit/LocateButton",
	"esri/dijit/LayerList",
	"esri/renderers/SimpleRenderer",
	"esri/symbols/TextSymbol",
	"esri/symbols/Font",
	"esri/Color",
	"dojo/domReady!"
], function(
	arcgisUtils, LocateButton, LayerList,
	SimpleRenderer, TextSymbol, Font, Color
) {

	arcgisUtils.createMap("d185554a5c764080a85eb23286543b36", "homeMap", {
		usePopupManager: true
	}).then(function(response){

		// enable scroll wheel zoom, defaults to panning if not set
		response.map.enableScrollWheelZoom();

		// alter popup on marker click
		response.map.infoWindow.on("show", function(e) {
			attrs = e.target.features[0].attributes
			console.log(attrs);
			response.map.infoWindow.setTitle(attrs.NAME);
			response.map.infoWindow.setContent(attrs.ADDRESS);
		});

		// create map overlays, toggleable layers
		var layerList = new LayerList({
			map: response.map,
			layers: arcgisUtils.getLayerList(response)
		}, "layerList");

		// fontawesome icons
		symbols = [];
		symbols['Hospitals'] = '';
		symbols['Senior Centers'] = '';
		symbols['Fire Stations'] = '';
		symbols['Libraries'] = '';
		symbols['Tax Collector'] = '';
		symbols['Clerk of the Circuit Court'] = '';
		symbols['Schools'] = '';
		symbols['Parks & Recreation'] = '';
		var color = new Color("#fff");
		var font = new Font("1.5em", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD,"FontAwesome");

		// set symbols of each layer
		$.each(layerList.layers, function(i,info){
			var symbol = new TextSymbol(symbols[info.title], font, color);
			info.layer.setRenderer( new SimpleRenderer(symbol) );
		});

		// init map overlays
		layerList.startup();

		// find my location button
		geoLocate = new LocateButton({
        map: response.map
      }, "LocateButton");
      geoLocate.startup();

	});
});
