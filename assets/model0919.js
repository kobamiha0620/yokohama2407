
async function supportsWebp() {
    if (!self.createImageBitmap) return false;
    
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
    
  }
  
  (async () => {
    if(await supportsWebp()) {
      console.log('does support');
    }
    else {
      console.log('does not support');
    }
  })();


  const addWebpDetectionClass = () => {
    if (supportsWebp()) {
      document.body.classList.add('is-webp');

    } else {
        document.body.classList.add('is-no-webp');
    }
  };
  
  addWebpDetectionClass(); 
  



//アコーディオン
$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.faq__blc .faq__blc--q').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.faq__blc--a').slideToggle();
    $(this).toggleClass("open");
  });

  $('.accordion__ttl').click(function(){
    console.log('test');
    $(this).next('.accordion').slideToggle();
    $(this).addClass("disable");
  });


  $('#goodsAccordionBtn').on('click', function(){
      $('#goodsAccordion').slideToggle();
  }); 
  //たぶ

  $('.tiket__tab .tab').on('click', function() {
    $('.tab, .panel').removeClass('active');
  
    $(this).addClass('active');
    
    let index = $('.tab').index(this);
    $('.panel').eq(index).addClass('active');
  });
  

  //メニュー
  $("#navBtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".gnavBg").toggleClass('active');
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  $("#gnavBg").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#navBtn").toggleClass('active');
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  $("#g-nav a").click(function () {
      $("#navBtn").removeClass('active');//ボタンの activeクラスを除去し
      $("#gnavBg").removeClass('active');
      $("#g-nav").removeClass('panelactive');
  });
});


const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }




// 要素が単一
// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
  let winScroll = $(window).scrollTop();
  let winHeight = $(window).height();
  let scrollPos = winScroll + winHeight;
  if (target.length) {
    var menuPos = target.offset().top;
  }
  if(menuPos < scrollPos) {
      setTimeout(function(){
          target.addClass('is-show');
      }, 900);
      
  }
}


$(window).on('load scroll', function() {
  add_class_in_scrolling($('.header'));
  add_class_in_scrolling($('.area__map'));
  add_class_in_scrolling($('.area__spot1--opacity'));
  add_class_in_scrolling($('.area__spot2'));
  add_class_in_scrolling($('.area__spot3'));
  add_class_in_scrolling($('.cafe__blc'));
  add_class_in_scrolling($('.cafe__blc'));
  add_class_in_scrolling($('.goods__test'));
  add_class_in_scrolling($('.area__spot1--topblc'));

  $('.fadein_block').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var target = $('.fadein_block');
    var speed = 360;
    if(scroll > elemPos - windowHeight){
        target.find('.fadein01').addClass('scrollin');
        setTimeout(function(){
            target.find('.fadein02').addClass('scrollin');
            setTimeout(function(){
                target.find('.fadein03').addClass('scrollin');
                setTimeout(function(){
                    target.find('.fadein04').addClass('scrollin');
                    setTimeout(function(){
                        target.find('.fadein05').addClass('scrollin');
                        setTimeout(function(){
                            target.find('.fadein06').addClass('scrollin');
                            setTimeout(function(){
                                target.find('.fadein07').addClass('scrollin');
                                setTimeout(function(){
                                    target.find('.fadein08').addClass('scrollin');
                                    setTimeout(function(){
                                        target.find('.fadein09').addClass('scrollin');
                                        setTimeout(function(){
                                            target.find('.fadein10').addClass('scrollin');
                                            setTimeout(function(){
                                                target.find('.fadein11').addClass('scrollin');
                                                setTimeout(function(){
                                                  target.find('.fadein12').addClass('scrollin');
                                                  setTimeout(function(){
                                                    target.find('.fadein13').addClass('scrollin');
                                                    setTimeout(function(){
                                                      target.find('.fadein14').addClass('scrollin');
                                                      setTimeout(function(){
                                                        target.find('.fadein15').addClass('scrollin');
                                                        
                                                    },speed);
                                                  },speed);
                                                },speed);
                                              },speed);
                                            },speed);
                                        },speed);
                                    },speed);
                                },speed);
                            },speed);
                        },speed);
                    },speed);
                },speed);
            },speed);
        },speed);
    }
});
});


const modalBtns = document.querySelectorAll(".modal-toggle");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  };
});
const closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};


/////////////////////モーダル
$('#modalClose').click(function () {
  $('#modalfinish').fadeOut();
});
$('#modalfinish').click(function () {
  $('#modalfinish').fadeOut();
});
$(window).on('load', function(){
    $('#modalfinish').fadeIn();

});