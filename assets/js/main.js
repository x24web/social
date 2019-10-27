$('.login-sec .tabs > li').click(function(){
  $(this).addClass("active").siblings().removeClass('active');
  $('.login-sec #'+$(this).attr('data-target')).removeClass('d-none').siblings().addClass('d-none');
})

$('.brand-logo-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout: 2500,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

jQuery(document).ready(function($){moveNavigation();$(window).on('resize',function(){(!window.requestAnimationFrame)?setTimeout(moveNavigation,300):window.requestAnimationFrame(moveNavigation);});$('.cd-nav-trigger').on('click',function(event){event.preventDefault();if($('header').hasClass('nav-is-visible'))$('.moves-out').removeClass('moves-out');$('header').toggleClass('nav-is-visible');$('.cd-main-nav').toggleClass('nav-is-visible');$('.navbar-mobile').toggleClass('nav-is-visible');});$('.go-back').on('click',function(event){event.preventDefault();$('.cd-main-nav').removeClass('moves-out');});$('.cd-subnav-trigger').on('click',function(event){event.preventDefault();$('.cd-main-nav').toggleClass('moves-out');});function moveNavigation(){var navigation=$('.cd-main-nav-wrapper');var screenSize=checkWindowWidth();if(screenSize){navigation.detach();navigation.insertBefore('.cd-nav-trigger');$('body').css("padding-top",$('.Navbar-user').height());}else{navigation.detach();navigation.insertAfter('.navbar-mobile');}}
function checkWindowWidth(){var mq=window.getComputedStyle(document.querySelector('header'),'::before').getPropertyValue('content').replace(/"/g,'').replace(/'/g,"");return(mq=='mobile')?false:true;}});