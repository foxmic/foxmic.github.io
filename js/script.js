
function fetchJSON() {
var url = 'https://api.spotify.com/v1/tracks/1zHlj4dQ8ZAtrayhuDDmkY';
var success_callback = function (songFromAPIRequest){
  // The response has already been parsed for us.
  alert("Song Name: " + songFromAPIRequest.name);
};
 
$.getJSON(url, success_callback);
}