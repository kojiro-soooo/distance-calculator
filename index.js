function deg2rad(deg) {
  return deg * (Math.PI/180)
}


function getDistanceFromLatLonInKm() {
  let lat1, lon1, lat2, lon2;

  const getValues = () => {
    let aCoordinates = document.getElementById("a").value
    let bCoordinates = document.getElementById("b").value
  
    let aCoordArray = aCoordinates.replace(/\s/g, "").split(",")
    let bCoordArray = bCoordinates.replace(/\s/g, "").split(",")
  
    lat1 = aCoordArray[0] 
    lon1 = aCoordArray[1]
    lat2 = bCoordArray[0] 
    lon2 = bCoordArray[1]
  }

  getValues()

  console.log(lat1, lon1, lat2, lon2)

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = (R * c).toFixed(2); // Distance in km

  document.getElementById("result").innerHTML=`Distance: ${d}km`;
  // console.log(d);
}


document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault() // Cancel the default action
      getDistanceFromLatLonInKm();
  });
});
