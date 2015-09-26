$(document).ready(function(){

  $('.tempButton').click(function(e){
    e.preventDefault();
    e.stopPropagation();

    if($(this).hasClass('visible')) {
      $('.main').hide('fade', {direction: 'left'}, 1000);
      $(this).removeClass('visible');
    } else {
      $('.main').show('fade', {direction: 'left'}, 1000);
      $(this).addClass('visible');
    }

});
});
