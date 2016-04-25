// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","esri/geometry/geometryEngine"],function(d,a,b,e,f){return a([d],{declaredClass:"layerQueryDetails",layer:null,fields:null,intersectField:null,valueIn:null,valueOut:null,numberOfRequest:0,requestComplete:0,numberOfHits:0,totalRecords:0,currentNumber:0,deferreds:[],complete:!1,hasError:!1,constructor:function(b){a.safeMixin(this,b)},addDeferred:function(a,d){a.then(b.hitch(this,function(a){a&&e.forEach(d,b.hitch(this,
function(c){e.forEach(a.features,b.hitch(this,function(a){f.intersects(c.geometry,a.geometry)&&(e.forEach(this.fields,function(b){a.attributes[b]&&(c.attributes[b]=a.attributes[b])},this),c.attributes[this.intersectField]=this.valueIn,c.symbol=this.valueInSym,this.numberOfHits++)}));this.currentNumber++;this.requestComplete++}));this.currentNumber=this.currentNumber;this.requestComplete=this.requestComplete;this.numberOfHits=this.numberOfHits;this.emit("requestComplete",{layerID:this.layer.id,currentNumber:this.currentNumber,
totalRecords:this.totalRecords,intesected:this.numberOfHits,name:this.layer.label});this.isComplete()&&this.emit("complete",{layerID:this.layer.id})}),b.hitch(this,function(a){this.hasError=!0;console.log("error: "+a);this.emit("error",{layerID:this.layer.id});return a}));this.deferreds.push(a)},isComplete:function(){return this.complete=this.numberOfRequest===this.requestComplete?!0:!1}})});