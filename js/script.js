
function fetchJSON() {
var url = 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj';
var success_callback = function (songFromAPIRequest){
  // The response has already been parsed for us.
  alert("Song Name: " + songFromAPIRequest.name);
};
 
$.getJSON(url, success_callback);
}