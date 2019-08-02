$(document).ready(function () {
  
  $('#request-link__more').on('click',function(){
    $('.project-block__more').toggleClass('project-block__more-active');
    $("#projectItemMore").slideToggle();
    
  });
  $("body").on('click', '[href*="#"]', function (e) {
    //  var fixed_offset = 200;
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
    e.preventDefault();
  });



});