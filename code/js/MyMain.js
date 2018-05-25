var neighborhoods = [
    {lat: 40.744809, lng: -74.025330},
    {lat: 40.744782, lng: -74.023910},
    {lat: 40.742680, lng: -74.026751}
];

var outNeighborhoods = [
    {lat: 40.742809, lng: -74.029027},
    {lat: 40.744875, lng: -74.028934},
    {lat: 40.736477, lng: -74.030839},
    {lat: 40.742147, lng: -74.029725},
    {lat: 40.752948, lng: -74.030471},
    {lat: 40.748151, lng: -74.027894},
    {lat: 40.742687, lng: -74.029025}
    
];

var briefOutContent=["Aether Game Cafe","Dunkin Donuts","CVS","Seven-Eleven","Rite Aid","Asia Chinese Cuisine","Bareburger"];


var contextstringIn = ['<div id="content1">'+
      '<h1 id="firstHeading" class="firstHeading">America Cup</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Grab a cup of coffee here!</b>'+'</p>'
      +'<button id = "direction1" onclick="MapsAC()">Direction</button>'+
      '<style type="text/css">'+
  '#content1'+'{width:150px;height:80px;}'+
  '#direction1'+'{position:absolute;right:20px;top:50px;}'
  +'#bodyContent'+'{text-decoration: none; color:black;}'+
   'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+'</style>'+'</div>'+ 
    '</div>'
     ,

      '<div id="content1">'+
      '<h1 id="firstHeading" class="firstHeading">Student Service Center</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Ask for help.</b></p>'+
      '<button id = "direction1" onclick="MapsSSC()">Direction</button>'+
      '<style type="text/css">'+
  '#content1'+'{width:150px;height:80px;}'+
  +'#bodyContent'+'{text-decoration: none; color:black;}'+
    '#direction1'+'{position:absolute;right:20px;top:50px;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+'</style>'+ 
      '</div>'+
      '</div>',

      '<div id="content1">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Campus Store</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Buy some cool stuff here!</b></p>'+
      '<button id = "direction1" onclick="MapsCS()">Direction</button>'+
      '<style type="text/css">'+
  '#content1'+'{width:150px;height:80px;}'+
  '#direction1'+'{position:absolute;right:20px;top:50px;}'+
  +'#bodyContent'+'{text-decoration: none; color:black;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+'</style>'+ 
      '</div>'+
      '</div>'];

var contextstringOut = ['<div id="content">'+'<div id="title">'+'<p>'+'<a href="http://aethergamecafe.com/" target="view_window">'+'<b>'+'Aether Game Cafe'+'</b>'+'</a>'+'</p>'+'</div>'+
  '<img src="img/aethergame.png">'+'<button id="direction1" onclick= "MapAGC()">direction</button>'+
  '<style type="text/css">'+'#direction1{position:absolute;top:110px;right:30px;margin:5px;}'+
  '#content'+'{width: 480px;height: 130px;}'+
  'img'+'{position: absolute;  margin: 0; }'+'#title'+'{text-decoration: none; color:black;background-color:  #00BBFF ;height: 20px;margin: 0;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+
  'a'+'{text-decoration: none;}'+ '</style>'+ '</div>'
  ,

  '<div id="content">'+'<div id="title">'+'<p>'+'<a href="http://www.dunkindonuts.com/" target="view_window">'+'<b>'+'Dunkin Donuts'+'</b>'+'</a>'+'</p>'+'</div>'+
  '<img src="img/dounkin.png">'+'<button id="direction1" onclick= "MapDD()">direction</button>'+
  '<style type="text/css">'+'#direction1{position:absolute;top:110px;right:30px;margin:5px;}'+
  '#content'+'{width: 480px;height: 130px;}'+
  'img'+'{position: absolute;   margin: 0;  }'+'#title'+'{text-decoration: none; color:black;background-color:  #00BBFF ;height: 20px;margin: 0;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+
  'a'+'{text-decoration: none;}'+ '</style>'+ '</div>',

  '<div id="content">'+'<div id="title">'+'<p>' +'<a href="http://cvs.com/" target="view_window">'+'<b>'+'CVS'+'</b>'+'</a>'+'</p>'+'</div>'+
  '<img src="img/cvs.png">'+'<button id="direction1" onclick= "MapCVS()">direction</button>'+'<style type="text/css">'+'#direction1{position:absolute;top:110px;right:30px;margin:5px;}'+
  '#content'+'{width: 480px;height: 130px;}'+
  'img'+'{position: absolute;   margin: 0;  }'+'#title'+'{text-decoration: none; color:black;background-color:  #00BBFF ;height: 20px;margin: 0;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+
  'a'+'{text-decoration: none;}'+ '</style>'+ '</div>',

  '<div id="content">'+'<div id="title">'+'<p>'+'<a href="http://7-eleven.com/" target="view_window">'+'<b>'+'Seven-Eleven'+'</b>'+'</a>'+'</p>'+'</div>'+
  '<img src="img/711.png">'+'<button id="direction1" onclick= "Map711()">direction</button>'+'<style type="text/css">'+'#direction1{position:absolute;top:110px;right:30px;margin:5px;}'+
  '#content'+'{width: 480px;height: 130px;}'+
  'img'+'{position: absolute;   margin: 0;  }'+'#title'+'{text-decoration: none; color:black;background-color:  #00BBFF ;height: 20px;margin: 0;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+
  'a'+'{text-decoration: none;}'+ '</style>'+ '</div>',

  '<div id="content">'+'<div id="title">'+'<p>' +'<a href="http://riteaid.com/" target="view_window">'+'<b>'+'Rite Aid'+'</b>'+'</a>'+'</p>'+'</div>'+
  '<img src="img/riteaid.png">'+'<button id="direction1" onclick= "MapRAD()">direction</button>'+'<style type="text/css">'+'#direction1{position:absolute;top:110px;right:30px;margin:5px;}'+
  '#content'+'{width: 480px;height: 130px;}'+
  'img'+'{position: absolute;   margin: 0;  }'+'#title'+'{text-decoration: none; color:black;background-color:  #00BBFF ;height: 20px;margin: 0;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+
  'a'+'{text-decoration: none;}'+ '</style>'+ '</div>',

  '<div id="content">'+'<div id="title">'+'<p>' +'<a href="#">'+'<b>'+'Asia Chinese Cuisine'+'</b>'+'</a>'+'</p>'+'</div>'+
  '<img src="img/AsiaChineseCin.png">'+'<button id="direction1" onclick= "MapACC()">direction</button>'+'<style type="text/css">'+'#direction1{position:absolute;right:30px;top:110px;margin:5px;}'+
  '#content'+'{width: 480px;height: 130px;}'+
  'img'+'{position: absolute;   margin: 0;  }'+'#title'+'{text-decoration: none; color:black;background-color:  #00BBFF ;height: 20px;margin: 0;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+
  'a'+'{text-decoration: none;}'+ '</style>'+ '</div>',

  '<div id="content">'+'<div id="title">'+'<p>' +'<a href="http://bareburger.com/" target="view_window">'+'<b>'+'Bareburger'+'</b>'+'</a>'+'</p>'+'</div>'+
  '<img src="img/bareburger.png">'+'<button id="direction1" onclick= "MapBB()">direction</button>'+'<style type="text/css">'+'#direction1{position:absolute;right:30px;top:110px;margin:5px;}'+
  '#content'+'{width: 480px;height: 130px;}'+
  'img'+'{position: absolute;   margin: 0;  }'+'#title'+'{text-decoration: none; color:black;background-color:  #00BBFF ;height: 20px;margin: 0;}'+
  'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+
  'a'+'{text-decoration: none;}'+ '</style>'+ '</div>'];

// var briefOutContent=["Dunkin Donuts","CVS","Seven-Eleven","Aether Game Cafe","Rite Aid","Asia Chinese Cuisine","Bareburger"];
var titleListener;
var latlng;
var markers = [];
var map;
var markers1 = [];
var markersOut = [];
var titles = ["1","2","3","4"];
var directionsDisplay= null;
var flag = 0;
// var infowincontent1 = '<div id="content">'+'<div id="title">'+'<p>';
// var infowincontent2 = '<style type="text/css">'+
//   '#content'+'{width: 480px;height: 105px;}'+
//   'img'+'{position: absolute;   margin: 0;  }'+'#title'+'{text-decoration: none; color:black;background-color:  #00BBFF ;height: 20px;margin: 0;}'+
//   'p'+'{position: absolute;left: 20px;margin: 0;font-family: sans-serif;}'+
//   'a'+'{text-decoration: none;}'+ '</style>'+ '</div>';

function dropInSchool() {
    clearMarkers();
    clearMarkers1();
    clearMarkersOut();
    for (var i = 0; i < neighborhoods.length; i++) {
        addMarkerWithTimeoutIn(neighborhoods[i], i * 200,contextstringIn[i],i);
    }
}

function dropOutSchool(){
     clearMarkers();
    clearMarkers1();
     clearMarkersOut();
    for (var i = 0; i < outNeighborhoods.length; i++) {
        addMarkerWithTimeoutOut(outNeighborhoods[i], i * 200,briefOutContent[i],i);
    }
}

function addMarkerWithTimeoutIn(position, timeout,content,i) {
  if (directionsDisplay!= null) {
 directionsDisplay.setMap(null);
}
    window.setTimeout(function() {
        markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP,
            icon:'img/bulemark.png'
        }));
    var infoWindow = new google.maps.InfoWindow({
    content: content,
    size : new google.maps.Size(300, 130),
    });
   
     infoWindow.open(map, markers[i]);
     google.maps.event.addListener(markers[i], 'click', function() {
infoWindow.open(map, markers[i]);

});
    }, timeout);
}

function addMarkerWithTimeoutOut(position, timeout,content,i) {
  if (directionsDisplay!= null) {
 directionsDisplay.setMap(null);
} 
    window.setTimeout(function() {
        markersOut.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    var infoWindow = new google.maps.InfoWindow({
    content: content,
    size : new google.maps.Size(300, 130),
    });
     infoWindow.open(map, markersOut[i]);
      var infoWindow1 = new google.maps.InfoWindow({
    content: contextstringOut[i],
    });
     google.maps.event.addListener(markersOut[i], 'click', function() {
      infoWindow.close(map,markersOut[i]);
infoWindow1.open(map,markersOut[i]);
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
});
    }, timeout);
}


function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function clearMarkers1() {
    for (var i = 0; i < markers1.length; i++) {
        markers1[i].setMap(null);
    }
    markers1 = [];
}
function clearMarkersOut() {
    for (var i = 0; i < markersOut.length; i++) {
        markersOut[i].setMap(null);
    }
    markersOut = [];
}

// function clearInfo() {
//     for (var i = 0; i < infowin1.length; i++) {
//         infowin1[i].setMap(null);
//     }
//     infowin1 = [];
// }
function CenterControl(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.marginRight = '30px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '13px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '3px';
        controlText.style.paddingRight = '3px';
        controlText.innerHTML = 'My location';
        controlUI.appendChild(controlText);

        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function() {
          map.panTo(latlng);
        });

      }



function initMap() {
    $("button").hide();
    if (navigator.geolocation) 
    {
        //获取当前地理位置
        navigator.geolocation.getCurrentPosition(function (position) {
            var coords = position.coords;
            // console.log(position);

            latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
            var myOptions = {
                zoom: 16,    //设定放大倍数
                center: latlng,  //将地图中心点设定为指定的坐标点
                mapTypeId: google.maps.MapTypeId.ROADMAP //指定地图类型
            };
            //创建地图，并在页面map中显示
            var mapdiv = document.getElementById("map");
            map =  new google.maps.Map(mapdiv, myOptions);
            //在地图上创建标记
             titleListener = google.maps.event.addListener(map,'tilesloaded',closeLoading);

            var marker = new google.maps.Marker({
                position: latlng,    //将前面设定的坐标标注出来
                map: map, //将该标注设置在刚才创建的map中
                icon: 'http://maps.google.com/mapfiles/kml/pal3/icon49.png'
            });
            //标注提示窗口
            var infoWindow = new google.maps.InfoWindow({
                content:"currently where you are!",
                size : new google.maps.Size(300, 300),
            // disableAutoPan:true
                //提示窗体内的提示信息
            });
            google.maps.event.addListener(marker, 'mouseover', function() {
                infoWindow.open(map, marker);
            });
            google.maps.event.addListener(marker, 'mouseout', function() {
                infoWindow.close(map, marker);
            });
             var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(centerControlDiv);
        },
        function (error) {
        //处理错误
        switch (error.code) {
            case 1:
                alert("location service denied.");
                break;
            case 2:
                alert("The location information is temporarily unavailable.");
                break;
            case 3:
                alert("Get information timeout。");
                break;
            default:
                alert("unknown error");
                break;
        }
    });

    } 
    else 
    {
        alert("Your browser does not support HTML5 to get geo-location information.");
    }
}
function hidebutton(){
  $("button").hide();
}

function closeLoading(){

   $("#loading").hide();
   $("button").show();
}

function direction(request) {
directionsDisplay = new google.maps.DirectionsRenderer({
map: map,
suppressMarkers: true
});
var directionsService = new google.maps.DirectionsService();
directionsService.route(request, function(response, status) {
if (status == 'OK') {
// Display the route on the map.
directionsDisplay.setDirections(response);
}
});
}

var infowin = null;
var infowin1= [];
function infowindow1(content){
    
    infowin1 = markers.pop();
var infoWindow = new google.maps.InfoWindow({
content: content,
size : new google.maps.Size(100, 100)

});
infoWindow.open(map, infowin1);

google.maps.event.addListener(infowin1, 'click', function() {
infoWindow.open(map, infowin1);
});
// google.maps.event.addListener(infowin1, 'click', function() {
// infoWindow.close(map, infowin1);
// });
}

function infowindow (content) {
infowin = markers1.pop();

  var infoWindow = new google.maps.InfoWindow({
content: content,
size : new google.maps.Size(500, 130),
});

// google.maps.event.addListener(infowin, 'click', function() {
infoWindow.open(map, infowin);
// });
google.maps.event.addListener(infowin, 'click', function() {
infoWindow.open(map, infowin);
});
// google.maps.event.addListener(infowin, 'click', function() {
// infoWindow.close(map, infowin);
// });

}

function MapDD() {
var dunkinDonuts = {lat: 40.744875, lng: -74.028934};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers();
clearMarkers1();
 clearMarkersOut();

markers1.push( new google.maps.Marker({
position: dunkinDonuts,
map: map,
animation: google.maps.Animation.DROP
}));

map.panTo(dunkinDonuts);


var request = {
destination: latlng,
origin: dunkinDonuts,
travelMode: 'WALKING'
};

direction(request);
infowindow( contextstringOut[1]);

}

function MapCVS() {
var CVS = {lat: 40.736477, lng: -74.030839};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
 clearMarkersOut();
clearMarkers1();
clearMarkers();
markers1.push(new google.maps.Marker({
position: CVS,
map: map,
animation: google.maps.Animation.DROP
}));
map.panTo(CVS);

var request = {
destination: latlng,
origin: CVS,
travelMode: 'WALKING'
};
direction(request);
infowindow(contextstringOut[2]);



}


function Map711() {
  flag = 1;
var location711 = {lat: 40.742147, lng: -74.029725};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers1();
clearMarkers();
markers1.push(new google.maps.Marker({
position: location711,
map: map,
animation: google.maps.Animation.DROP
}));
map.panTo(location711);
var request = {
destination: latlng,
origin: location711,
travelMode: 'WALKING'
};
direction(request);
infowindow(contextstringOut[3]);

}

function MapAGC() {
var locationAetherGameCafe = {lat: 40.742809, lng: -74.029027};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers1();
clearMarkers();
clearMarkersOut();
markers1.push(new google.maps.Marker({
position: locationAetherGameCafe,
map: map,
animation: google.maps.Animation.DROP
}));
map.panTo(locationAetherGameCafe);
var request = {
destination: latlng,
origin: locationAetherGameCafe,
travelMode: 'WALKING'
};
direction(request);

infowindow(contextstringOut[0]);

}

function MapsAC() {
var locationAmericasCup = {lat: 40.744809, lng: -74.025330};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers1();
clearMarkers();
 clearMarkersOut();
markers1.push(new google.maps.Marker({
position: locationAmericasCup,
map: map,
animation: google.maps.Animation.DROP,
icon: 'img/bulemark.png',
}));
map.panTo(locationAmericasCup);
var request = {
destination: latlng,
origin: locationAmericasCup,
travelMode: 'WALKING'
};
direction(request);
infowindow(contextstringIn[0]);

}

function MapRAD() {
var riteAD = {lat: 40.752948, lng: -74.030471};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers1();
clearMarkers();
 clearMarkersOut();
markers1.push(new google.maps.Marker({
position: riteAD,
map: map,
animation: google.maps.Animation.DROP
}));
map.panTo(riteAD);
var request = {
destination: latlng,
origin: riteAD,
travelMode: 'WALKING'
};
direction(request);
infowindow(contextstringOut[4]);
}

function MapACC() {
var locationAsiaChineseCuisine = {lat: 40.748151, lng: -74.027894};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers1();
clearMarkers();
 clearMarkersOut();
markers1.push(new google.maps.Marker({
position: locationAsiaChineseCuisine,
map: map,
animation: google.maps.Animation.DROP
}));
map.panTo(locationAsiaChineseCuisine);
var request = {
destination: latlng,
origin: locationAsiaChineseCuisine,
travelMode: 'WALKING'
};
direction(request);
infowindow(contextstringOut[5]);
}

function MapsSSC() {
var studentServiceCenter = {lat: 40.744782, lng: -74.023910};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers1();
clearMarkers();
 clearMarkersOut();
markers1.push(new google.maps.Marker({
position: studentServiceCenter,
map: map,
animation: google.maps.Animation.DROP,
icon:'img/bulemark.png'
}));
map.panTo(studentServiceCenter);
var request = {
destination: latlng,
origin: studentServiceCenter,
travelMode: 'WALKING'
};

direction(request);
infowindow(contextstringIn[1]);
}

function MapBB() {
var locationBareburger = {lat: 40.742687, lng: -74.029025};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers1();
clearMarkers();
 clearMarkersOut();
    markers1.push(new google.maps.Marker({
        position: locationBareburger,
        map: map,
        animation: google.maps.Animation.DROP
    }));
map.panTo(locationBareburger);
var request = {
destination: latlng,
origin: locationBareburger,
travelMode: 'WALKING'
};
direction(request);
infowindow(contextstringOut[6]);
}

function MapsCS() {
var campusStore = {lat: 40.742680, lng: -74.026751};
if (infowin != null) {
 infowin.setMap(null);
}
if (directionsDisplay!= null) {

 directionsDisplay.setMap(null);
}
clearMarkers1();
 clearMarkersOut();
clearMarkers();
markers1.push(new google.maps.Marker({
position: campusStore,
map: map,
icon:'img/bulemark.png',
animation: google.maps.Animation.DROP
}));
map.panTo(campusStore);
var request = {
destination: latlng,
origin: campusStore,
travelMode: 'WALKING'
};
direction(request);
infowindow(contextstringIn[2]);
}