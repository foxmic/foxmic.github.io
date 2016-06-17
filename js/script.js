
$('.buttondiv a').on('click', function(e){
  e.preventDefault();
  var url = this.href;

  $('.content').remove();
  $('.content').load(url + '.content').hide().fadeIn('slow');
})