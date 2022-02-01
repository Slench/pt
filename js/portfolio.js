$(document).ready(function() {
  $('a.myLinkModal').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });

  $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('lock');
  });

  $('.menu__item').click(function(){
    $('.menu-burger__header').removeClass('open-menu');
        $('.header__nav').removeClass('open-menu');
        $('body').removeClass('lock');
  }); 

  $('a.myLinkModal__hire-me').click( function(event){
    event.preventDefault();
    $('#myOverlay__hire-me').fadeIn(297, function(){
      $('#myModal__hire-me') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal_close__hire-me, #myOverlay__hire-me').click( function(){
    $('#myModal__hire-me').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay__hire-me').fadeOut(297);
    });
  });

  $('.slider').slick({
    arrows:true,
    dots:false,
    slidesToShow:1,
    infinite:false,
    adaptiveHeight: true,
    touchTreshhold:150,
  });

  $('.slider-blog').slick({
    infinite:false,
    arrows:true,
    slidesToShow:1,
    adaptiveHeight: true,
    touchTreshhold:150,
  });

  $('a.menu__item').on('click', function (event) {
    var $anchor = $(this)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top,
        },
        {
          duration: 1500,
          specialEasing: {
            width: 'linear',
            height: 'easeInOutCubic',
          }
        },
      )
    event.preventDefault();  
  });

  event.preventDefault();	
});

document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs-triggers__item').forEach(
        (child) => child.classList.remove('tabs-triggers__item--active')
    );
    document.querySelectorAll('.tabs-content__item').forEach(
        (child) => child.classList.remove('tabs-content__item--active')
    );

    item.classList.add('tabs-triggers__item--active');
    document.getElementById(id).classList.add('tabs-content__item--active');
  })
);

document.querySelector('.tabs-triggers__item').click();