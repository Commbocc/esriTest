require([
	"esri/arcgis/utils",
	"esri/dijit/LayerList",
	"esri/dijit/Search",
	"dijit/layout/ContentPane",
	"dojo/domReady!"
], function(
	arcgisUtils,
	LayerList,
	Search
) {
	arcgisUtils.createMap("35c7b90b6a194cb98d3187e4e54259e5", "homeMap").then(function(response){

		response.map.enableScrollWheelZoom();
		// response.map.disableScrollWheelZoom();

		response.map.infoWindow.setTitle("Coordinates");

		// var search = new Search({
		// 	map: response.map
		// }, "search");
		// search.startup();

		var layerList = new LayerList({
			map: response.map,
			layers: arcgisUtils.getLayerList(response)
		},"layerList");
		layerList.startup();

	});
});
