## Prerequisites

Assumes jQuery is applied.

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```

Assumes Bootstrap files are applied.

```HTML
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
```

Assumes FontAwesome is applied.

```HTML
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
```

## Configuration

Place stylesheets and scripts on page.

```HTML
<link rel="stylesheet" href="/css/esri/init.css">
<link rel="stylesheet" href="/css/esri/config.css">

<script src="/js/esri/init.js"></script>
<script src="/js/esri/config.js"></script>
```

Place HTML on page.

```HTML
<section class="container">
	<div class="text-right" style="position: relative;">
		<a id="map-overlays-trigger" data-toggle="collapse" data-parent="#accordion" href="#map-overlays" class="btn btn-sm btn-default">
			<i class="fa fa-fw fa-map-marker"></i>
			<span class="hidden-xs">Select</span> Map Overlays
		</a>
	</div>

	<div id="container-map">
		<div id="map-overlays" class="collapse">
			<div id="layerListPane">
				<div id="layerList"></div>
			</div>
		</div>

		<div id="homeMap"></div>
	</div>
</section>
```
