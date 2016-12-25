$(document).ready(function() {

  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    $('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
    $('.content-wrapper').addClass('animated panel-cover--collapsed');
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').removeClass('panel-cover').addClass('panel-corver--collapsed');
    $('.panel-main').removeClass('panel-main').addClass('panel-corver--collapsed');

     $('.panel-cover--overlay').removeClass('.panel-cover--overlay').addClass('panel-corver--collapsed');
  }

  if (window.location.pathname != "/") {       // if hexo in subdir of site, should change this line
    $('.panel-cover').removeClass('panel-cover').addClass('panel-corver--collapsed');
         $('.panel-cover--overlay').removeClass('.panel-cover--overlay').addClass('panel-corver--collapsed');
         $('.panel-main').removeClass('panel-main').addClass('panel-corver--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    // $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

});
