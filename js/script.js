
$('#buttondiv a').on('click', function(e) {
  var url = this.href;
  e.preventDefault();

  
  $('#content').remove();
  $('#container').load(url + ' #content').hide().fadeIn('slow');
});