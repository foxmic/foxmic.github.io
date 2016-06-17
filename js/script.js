
$('#buttondiv a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;

  
  $('#content').remove();
  $('#container').load(url + ' #content').hide().fadeIn('slow');
});