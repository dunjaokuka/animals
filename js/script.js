

$('.home-page-button').click(function(){
  var input = $('input').val();
  if (input.indexOf('@') > -1){
    alert('Thank you for registering, let\'s save the animals!');
  } else {
    alert('Please put correct email address format.');
  }

});


$('.donate-input').keyup(function(){
  var indonate = $(this).val();
  var total = indonate*1.15;
  $('.total-donate').text(total.toFixed(2));
});
  $('.carousel').slick();


$('.carousel img').click(function(){
  var description = $(this).attr('data-desc');
  var string = '<div class="item-description">'+ description +'</div>';
  $(this).parent().append(string);
  $(this).hide();
});

$('#about-us-video').click(function(){
  window.open('https://www.youtube.com/watch?v=7k8CcAU2Lt0');
});
