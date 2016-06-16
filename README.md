# Hillsborough County Maps

## *Prerequisites*

Assumes jQuery is included.

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```

Assumes Bootstrap files are included.

```HTML
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
```

Assumes FontAwesome is included.

```HTML
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
```

__Place stylesheets and scripts in layout.__

```HTML
<link href="/css/hc-map-leaflet.min.css" rel="stylesheet">
<link href="/css/hc-map.css" rel="stylesheet">

<script src="/js/leaflet.min.js"></script>
<script src="/js/leaflet-locate.min.js"></script>
<script src="/js/leaflet-esri.min.js"></script>
<script src="/js/hc-map-config.js"></script>
```

## Home

[Demo](http://commbocc.github.io/sitecore_designs/layouts/home/) | [jsFiddle](https://jsfiddle.net/ev1rvsa5/1/)

### Home Configuration

Place HTML on page.

```HTML
<section id="map-container">
  <div id="btn-map-overlays" class="panel-group">
    <div class="panel panel-default">
      <a class="panel-heading" role="button" data-toggle="collapse" data-parent="#btn-map-overlays" href="#map-overlays" aria-expanded="true" aria-controls="map-overlays">
        <i class="fa fa-chevron-down pull-right text-primary"></i>
        <i class="fa fa-map-marker fa-fw"></i> Select Map Overlays
      </a>
      <div id="map-overlays" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
        <div id="map-overlay-toggles" class=""></div>
      </div>
    </div>
  </div>
  <div id="home-map"></div>
</section>
```

## Single Layer

[Demo](http://commbocc.github.io/sitecore_designs/single-layer-map/) | [jsFiddle](https://jsfiddle.net/ne5144u9/1/)

### Single Layer Configuration

Place HTML on page.

__Requires a unique id and an integer from the [Acceptable Layers](#acceptable-layers) list below in the layer data attribute__

```HTML
<div class="embed-responsive embed-responsive-16by9 thumbnail">
	<div id="aUniqueIdentifier" class="hc-map" data-layer="2"></div>
</div>
```

### Acceptable Layers

[ESRI Map Service](https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesignMap_20160609/MapServer)

* 0 - Clerk of Court Locations
* 1 - Community Collection Centers
* 2 - Community Resource Centers
* 3 - Consumer Protection Offices
* 4 - County Center
* 5 - Fire Stations
* 6 - Hillsborough County Sheriff Office Locations
* 7 - Hospitals
* 8 - Libraries
* 9 - Parks
* 10 - Pet Resource Center
* 11 - Property Appraiser Locations
* 12 - Customer Service Center for Public Utilities
* 13 - Community Collection Centers
* 14 - Supervisor of Elections Locations
* 15 - Tax Collector Locations
* 16 - Veterans Services Offices
