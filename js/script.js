
$('#buttondiv a').on('click', function(e){
  e.preventDefault();
  var url = this.href;

  $('.speccontent').remove();
  $('.content').load(url + '.speccontent').hide().fadeIn('slow');
})