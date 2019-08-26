var site = (function () {
  function initAOS(){
    AOS.init({
      duration: 600,
      disable: 'mobile',
    });
  }
  function initBurguerButton() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }
  function initHeroCarousel() {

    $('.hero-carousel').owlCarousel({
      loop: false,
      margin: 0,
      responsiveClass: true,
      lazyLoad: false,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      loop:true,
      responsive: {
        0: {
          items: 1,
          nav: false
        }
      }
    })
  }

  function initProjectCarousel() {
    $('.projects-carousel').owlCarousel({
      loop: true,
      margin: 15,
      responsiveClass: true,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: true
        },
        1200: {
          items: 3,
          nav: true,
          loop: true
        }
      }
    })

  }

function formatPostDates(){
  var dates = document.querySelectorAll(".post-list .date");

  dates.forEach(d=>{
    var formated = moment(d.innerText).format('DD MMM');
    var datetime = moment(d.innerText).format("YYYY-MM-DD HH:mm:ss");
    d.innerText = formated;
    d.setAttribute("data-date", datetime);
   });
}
  function featurePosts() {
    $("#do-stick").stick_in_parent({
      offset_top: 20
    });


  }

  function stickyHeader() {
    
    window.onscroll = function () {
      var header = document.getElementsByTagName("header")[0];
      var body = document.getElementsByTagName("body")[0];
      if (window.pageYOffset > 90) {
        header.classList.add("sticky");
        body.classList.add("sticked");
      } else {
        header.classList.remove("sticky");
        body.classList.remove("sticked");
      }
    }; 
  }

  return {
    init: function () {
      initBurguerButton();
      stickyHeader();
      initAOS();
      //formatPostDates();
    },
    indexPage: function () {
      initHeroCarousel();
      featurePosts();
    },
    aboutPage: function(){
      initProjectCarousel();
    }
  }
})();
