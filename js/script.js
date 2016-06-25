
$('#buttondiv a').on('click', function(e) {
  var url = this.href;
  e.preventDefault();

  $('a.active').removeClass('active');
  $(this).addClass('active')

  
  $('#content').remove();
  $('#container').load(url + ' #content').hide().fadeIn(500);

});