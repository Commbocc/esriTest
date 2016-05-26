# Hillsborough County Map

Map featured on the County's Homepage.

## Demos

[Demo](http://commbocc.github.io/esriTest/) | [jsFiddle](https://jsfiddle.net/ro6hm2f1/6/)

## Prerequisites

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

## Configuration

Place stylesheets and scripts on page.

```HTML
<link href="/css/hc-map-leaflet.min.css" rel="stylesheet">
<link href="/css/hc-map.css" rel="stylesheet">

<script src="/js/leaflet.min.js"></script>
<script src="/js/leaflet-locate.min.js"></script>
<script src="/js/leaflet-esri.min.js"></script>
<script src="/js/hc-map-config.js"></script>
```

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
