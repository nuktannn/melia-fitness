//drawer
jQuery('.drawer-icon').on('click', function(e){
  e.preventDefault()

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
 });

  $('.drawer-content-item a[href]').on('click', function(event) {
  $('.drawer-icon').trigger('click');
});


//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    speed: 800 //自動再生のスピード
},
});

  //qa
  //最初は閉じておく
  $(".qa-box-a").hide();
  
  jQuery('.qa-box-q').click(function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa-box-icon').toggleClass( 'is-open' );
  });


  //google form
  let $form = $( '#js-form' )
  $form.submit(function(e) {
    $.ajax({
      url:$form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          // 送信に成功した時の処理
          $form.slideUp()
          $( '#js-success' ).slideDown()
        },
        200: function () {
          // 送信に失敗した時の処理
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      }
    });
    return false;
    
  });

  //スムーススクロール
  // #から始まるURLがクリックされた時
jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#'){
  var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate({
      scrollTop: position
    },
    300);

  return false;
});

   //top-button(スムーススクロール)
   jQuery(window).on('scroll',function() {
    if ( 100 < jQuery(this).scrollTop()) {
     jQuery('.to-top').addClass('is-show');
    } else{
     jQuery('.to-top').removeClass('is-show');
    }
   });

  // wow.js
  new WOW().init()

  //modal
jQuery('.js-close-button').on('click',function(e) {
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).hide();
});

jQuery('.js-open-button').on('click',function(e) {
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).show();
});

