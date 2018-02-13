function myMap() {
var mapProp= {
    center:new google.maps.LatLng(30.2672,-97.7431),
    zoom:9,
};
var map=new google.maps.Map(document.getElementById("map"),mapProp);
}