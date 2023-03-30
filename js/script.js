// Slider

jQuery(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 320,
                    settings: {
                        dots: false
                    }
          }
        ]
    });
  });

  jQuery(document).ready(function(){
    $('.slider-calendar').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1300,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
          },
          {
            breakpoint: 831,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            }
          },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  dots: false
              }
            }
        ]
    });
  });

  jQuery(document).ready(function(){
    $('.slider-calendar-4').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1016,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
              }
          },
          {
            breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: false
              }
          },
          {
            breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false
              }
          }
        ]
    });
  });

  jQuery(document).ready(function(){
    $('.slider-card').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: '.slider-card-nav'
    });
    $('.slider-card-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-card',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });
  });

  jQuery(document).ready(function(){
    $('.slider-category').slick({
        autoplay: false,
        arrows: false,
        dots: true,
        infinite: true,
    });
  });



  // hamburger

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list_footer'),
    menuItem = document.querySelectorAll('.nav__item_footer'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__list_footer_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__list_footer_active');
        })
    })
})



// filterCategory

// const filterCategory = document.querySelectorAll('.catalog__item_prod');
// document.querySelector('.category__name').addEventListener('click', (event) =>{
//     if(event.target.className !== 'category__li') return false;

//     let filterClass = event.target.dataset['f'];

//     filterCategory.forEach((elem) => {
//       elem.classList.remove('hide');
//       if(!elem.classList.contains(filterClass)){
//           elem.classList.add('hide');
//       }
//     });
// });

// comment
window.addEventListener('DOMContentLoaded', () => {
  const comment = document.querySelector('.wrapper-comment');
  const commentForm = document.querySelector('.btn_promo-reviews');

  commentForm.addEventListener('click', () =>{
    comment.classList.toggle('wrapper-comment_active');
  });
});

// open press

window.addEventListener('DOMContentLoaded', () => {
  const open = document.querySelector('.pressAbout__item');
  const openMore = document.querySelector('.btn_promo-press');

  openMore.addEventListener('click', () =>{
    open.classList.toggle('pressAbout__item_open');
  });
});

// video press
jQuery(document).ready(function(){
  $('.video-list').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1015,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
      },
      {
        breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
      }
    ]
  });
});

// СМИ
$(document).ready(function () {

    var gWidth = 300;
    if ($(window).width() <= 780) {
        gWidth = 100;
    }

    $('.pressAbout__item').justifiedGallery({
        rowHeight: gWidth,
        lastRow: 'nojustify',
        margins: 10,

    });
    /*
    $('.fancybox').fancybox({
        selector: '.services-images .fancybox',
        hash: false,
        backFocus: false,
        loop : true,
    });*/
});