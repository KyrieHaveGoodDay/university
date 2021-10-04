AOS.init();
$(function () {
  // [側邊選單]
  var $sidenav = $('.sidenav');
  // [側邊選單]--// 收合
  $sidenav.on('click', '.sidenav__btn a', function (e) {
    e.preventDefault();
    $(this).parents('.sidenav').toggleClass('sidenav--hide');
  });

  // [右邊選單]
  var $rightNav = $('.sidenav--right');
  // [右邊選單]--// 側選單是否存在
  var $sidenavTop = $rightNav.length > 0 ? $rightNav.offset().top : 0;
  // [右邊選單]--// 手機版置頂
  function rightnavFixedTop() {
    var $windowTop = $(window).scrollTop();
    if ($windowTop > $sidenavTop) {
      $sidenav.addClass('fixed');
      $('.wrap').addClass('addPadding');
    } else {
      $sidenav.removeClass('fixed');
      $('.wrap').removeClass('addPadding');
    }
  }

  // [右邊GoTop]--// 滾動出現
  function goTopShow() {
    var $windowTop = $(window).scrollTop();
    $windowTop >= 100 ? $('.gotop').addClass('show') : $('.gotop').removeClass('show');
  }
  // [右邊GoTop]--// gotop
  $('.gotop').on('click', function () {
    $('html,body').animate({ scrollTop: '0px' }, 300);
  });

  // [錨點]--// 判斷滑動位置
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var headerH = $('.header').height();
    var sidenavH = $('.sidenav').height();
    var targetTop = $($(this).attr('href')).offset().top;
    var scrollPos = $(window).width() >= 768 ? targetTop : targetTop - headerH - sidenavH;
    $('html, body').stop().animate(
      {
        scrollTop: scrollPos,
      },
      300
    );
  });

  $(window)
    .on('scroll', function () {
      goTopShow();
      $(window).width() < 768 && rightnavFixedTop();
    })
    .scroll();
});

// 跑馬燈
$('.marquee_left_box').marquee({
  duplicated: true,
  duration: 10000

});
$('.marquee_right_box').marquee({
  duplicated: true,
  duration: 10000
});





$(document).ready(function () {
  var wdth = $(window).width();
  // 偵測寬度輪播
  if (wdth < 1630) {
    $('.activity_slide_box').addClass('swiper-container activity');
    $('.activity_slide').addClass('swiper-wrapper');
    $('.activity_img').addClass('swiper-slide');

    var swiper = new Swiper(".activity", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".slide_right",
        prevEl: ".slide_left",
      },
      breakpoints: {
        1600: {
          slidesPerView: 5.2
        },
        1200: {
          slidesPerView: 4.5
        },
        1000: {
          slidesPerView: 3.5
        },
      },

    });
  }


  // 桌機板dataset
  if (wdth > 768) {
    $('#igslide_box').marquee({
      pauseOnHover: true,
      duration: 14000,
      duplicated: true
    });


    // 電商小百科
    var ency_left = document.querySelector(".ency_left");
    var ency_right = document.querySelector(".ency_right");
    function ency(e) {
      
      var img_ecny = document.getElementById('img_ecny');
      var str = '';
      var num = e.target.dataset.num;
      // 如果是空值，不顯示
      if (!num == '') {
        // $('#university').css('overflow','hidden');
        $('.jump_ecny').css('display', 'block');

      } else {
        $('.jump_ecny').css('display', 'none');
      }
      // console.log(num);
      str = ` <img src="img/introduce${num}.png" alt=""> `;
      img_ecny.innerHTML = str;
    }
    ency_left.addEventListener("click", ency, false);
    ency_right.addEventListener("click", ency, false);
  }
  // 手機板dataset
  if (wdth < 769) {

    $('#igslide_box').marquee({
      pauseOnHover: true,
      duration: 8000,
      duplicated: true
    });

    // 電商小百科
    var ency_left = document.querySelector('.ency_left');
    var ency_right = document.querySelector('.ency_right');

    function ecnymb(e) {
      var img_ecny_mb = document.getElementById('img_ecny_mb');
      var str = '';
      var num = e.target.dataset.mbnum;
      // console.log(num);
      // 如果是空值，不顯示
      if (!num == '') {
        // $('#university').css('overflow','hidden');
        $('.ecny_mb').css('display', 'block');

      } else {
        $('.ecny_mb').css('display', 'none');
      }
      str = `<img src="img/ency_mb${num}.png" alt="">`;

      img_ecny_mb.innerHTML = str;
    }
    ency_left.addEventListener("click", ecnymb, false);
    ency_right.addEventListener("click", ecnymb, false);

    // 動畫
    gsap.to('.icon_arrow_1', { duration: 1, opacity: 1, repeat: -1 })
    const t5 = gsap.timeline({});
    t5.from('.boxman1024', { duration: 2, x: -700, y: -200, rotate: 350 })
      .from('.check_mb', { duration: 2, y: -200, rotate: 360 })
      .to('.check_mb', { duration: 1, rotate: 15, rotate: -15, yoyo: true, repeat: -1 })
      .to('.boxman1024', { duration: 2, y: 10, yoyo: true, repeat: -1 });


    // 雲
    gsap.to('.icon_cloud1', {
      duration: 1,
      y: 10,
      yoyo: true,
      repeat: -1
    });

    const t7 = gsap.timeline({ yoyo: true, repeat: -1 });
    t7.to('.icon_cloud4', { duration: 2, y: 20 })
    // t6.to('.icon_cloud5', { duration: 1, x: -100 })
    const t8 = gsap.timeline({ yoyo: true, repeat: -1 });
    t8.to('.icon_cloud5', { duration: 1.5, y: 20 })
  }




})

// 跳出視窗
$('.ecny_out').click(function (e) {
  // $('#university').css('overflow','visible');
  $('.jump_ecny').css('display', 'none');
})
$('.ecny_out_mb').click(function (e) {
  // $('#university').css('overflow','visible');
  $('.ecny_mb').css('display', 'none');
})

// gsap動畫
function animationMax() {
  const t1 = gsap.timeline({});
  t1.to('.icon_womon', { duration: 2, opacity: 1 },0.3)
    .to('.icon_light', { duration: 0.5, opacity: 1, repeat: 1 })
    .to('.wind', { keyframes: [{ duration: 1, width: '0' }, { duration: 1, width: '100%' }] },0.3)
    .to('.man', { duration: 0.5, opacity: 1 })
    .to('.check', { duration: 1, rotate: 0, opacity: 1 })
    .to('.check', {duration: 1, y: -20, y: 20 , repeat: -1, yoyo: true})
    .to('.boxman', { duration: 3, x: 0, rotate: 360 },0.3)
    .to('.boxman', { duration: 2, y: 50, yoyo: true, repeat: 1 })
    
    .to('.icon_mouse', {duration: 1,y: 50,yoyo: true, repeat: -1});
  // // 滑鼠
  // gsap.to('.icon_mouse', {
  //   duration: 1,
  //   y: 50,
  //   yoyo: true,
  //   repeat: -1
  // });

  // //女人
  // const t2 = gsap.timeline({});

  // t2.to('.icon_womon', { duration: 2, opacity: 1 })
  //   .to('.icon_light', { duration: 0.5, opacity: 1, repeat: 1 });

  // //男人
  // const t3 = gsap.timeline({});
  // t3.to('.wind', { keyframes: [{ duration: 1, width: '0' }, { duration: 1, width: '100%' }] })
  //   .to('.man', { duration: 0.5, opacity: 1 })
  //   .to('.check', { duration: 1, rotate: 0, opacity: 1 });

  // //boxman
  // const t4 = gsap.timeline({});
  // t4.to('.boxman', { duration: 3, x: 0, rotate: 360 })
  //   .to('.boxman', { duration: 2, y: 50, yoyo: true, repeat: 1 });
  // // 版頭我要報名
  // const t5 = gsap.timeline({ duration: 1, repeat: -1, yoyo: true });
  // t5.to('.check', { y: -20, y: 20 });
}
// 延遲兩秒載入動畫，等資源圖片都載入好
setTimeout('animationMax()', 2000);








// 燈箱離開
$('.out_jump_main').click(function () {
  $('.jump_main').fadeOut();
});

// teresa
$('#jump_main6').fadeOut();
$('.card1, .hint1_1').click(function (e) {
  $('#jump_main6').fadeIn();
})
// summer
$('#jump_main4').fadeOut();
$('.card2, .hint1_2').click(function (e) {
  $('#jump_main4').fadeIn();
})
// jessica
$('#jump_main5').fadeOut();
$('.card3, .hint1_3').click(function (e) {
  $('#jump_main5').fadeIn();
})

// 男生8832跳窗
$('.jump_main2').fadeOut();
$('.lecturer4, .hint4_1').click(function (e) {
  $('.jump_main2').fadeIn();
})
$('.out_jump_main2 ').click(function (e) {
  $('.jump_main2').fadeOut();
})

// jerry
$('.jump_main3').fadeOut();
$('.lecturer5,.hint4_2').click(function (e) {
  $('.jump_main3').fadeIn();
})
$('.out_jump_main3 ').click(function (e) {
  $('.jump_main3').fadeOut();
})