var CompMaps=function(){return{init:function(){$(".gmap").css("height","350px"),new GMaps({div:"#gmap-top",lat:-33.865,lng:151.2,zoom:15,disableDefaultUI:!0,scrollwheel:!1}),new GMaps({div:"#gmap-terrain",lat:0,lng:0,zoom:1,scrollwheel:!1}).setMapTypeId(google.maps.MapTypeId.TERRAIN),new GMaps({div:"#gmap-satellite",lat:0,lng:0,zoom:1,scrollwheel:!1}).setMapTypeId(google.maps.MapTypeId.SATELLITE),new GMaps({div:"#gmap-markers",lat:0,lng:0,zoom:3,scrollwheel:!1}).addMarkers([{lat:20,lng:-31,title:"Marker #1",animation:google.maps.Animation.DROP,infoWindow:{content:"<strong>Marker #1: HTML Content</strong>"}},{lat:-10,lng:0,title:"Marker #2",animation:google.maps.Animation.DROP,infoWindow:{content:"<strong>Marker #2: HTML Content</strong>"}},{lat:-20,lng:85,title:"Marker #3",animation:google.maps.Animation.DROP,infoWindow:{content:"<strong>Marker #3: HTML Content</strong>"}},{lat:-20,lng:-110,title:"Marker #4",animation:google.maps.Animation.DROP,infoWindow:{content:"<strong>Marker #4: HTML Content</strong>"}}]),new GMaps.createPanorama({el:"#gmap-street",lat:50.059139,lng:-122.958407,pov:{heading:300,pitch:5},scrollwheel:!1});var e=new GMaps({div:"#gmap-geolocation",lat:0,lng:0,scrollwheel:!1});GMaps.geolocate({success:function(t){e.setCenter(t.coords.latitude,t.coords.longitude),e.addMarker({lat:t.coords.latitude,lng:t.coords.longitude,animation:google.maps.Animation.DROP,title:"GeoLocation",infoWindow:{content:'<div class="text-success"><i class="fa fa-map-marker"></i> <strong>Your location!</strong></div>'}})},error:function(e){alert("Geolocation failed: "+e.message)},not_supported:function(){alert("Your browser does not support geolocation")},always:function(){}})}}}();