$(function() {

  var $allAccordions = $('.accordion__data');
  var $allAccordionItems = $('.accordion__item');

  $allAccordionItems.on('click', function() {
    if($(this).hasClass('open'))
    {
      $(this).removeClass('open');
      $(this).next().slideUp('slow');
    }
    else
    {
      $(this).addClass('open');
      $(this).next().slideDown('slow');
    }
  });
});

