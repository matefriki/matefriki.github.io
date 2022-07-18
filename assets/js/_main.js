/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});

ready(event => {
  setTheme();
  var container = document.getElementById('container');
  var footer = document.getElementById('footer');
  var modal = document.getElementById('menuModal');
  addMenuModalListener();
  addThemeButtonListener();
});

function setTheme() {
  if(sessionStorage.getItem('theme') === 'dark') {
    bodyClassList = document.body.classList;
    bodyClassList.remove('light');
    bodyClassList.add('dark');
  }
}


function addMenuModalListener() {
  menuButton = document.querySelectorAll("a#showMenu");
  menuButton.forEach(function(button) {
    button.onclick = function(ev) {
      var modal = document.getElementById('menuModal');
      container.classList.add('modalBlur');
      footer.classList.add('modalBlur');
      modal.classList.remove('closed');
      button.classList.add('hidden');
    }
  });
  document.getElementById('closeMenu').onclick = function() {
    var modal = document.getElementById('menuModal');
    var menuButton = document.getElementById('showMenu');
    modal.classList.add('closed');
    container.classList.remove('modalBlur');
    footer.classList.remove('modalBlur');
    menuButton.classList.remove('hidden');
  }
};


function addThemeButtonListener() {
  var themeButton = document.getElementById('themeButton');
  bodyClassList = document.body.classList;
  themeButton.onclick = function() {
    if(bodyClassList.contains('dark')) {
      bodyClassList.remove('dark')
      bodyClassList.add('light')
      sessionStorage.setItem('theme', 'light')
      themeButton.innerHTML = "Dark Theme"
      themeButton.classList.add('button--darkGrey')
      themeButton.classList.remove('button--ruedaGrey')
      themeButton.classList.remove('button--dark-font')
    } else {
      bodyClassList.remove('light')
      bodyClassList.add('dark')
      sessionStorage.setItem('theme', 'dark')
      themeButton.innerHTML = "Light Theme"
      themeButton.classList.add('button--ruedaGrey')
      themeButton.classList.remove('button--darkGrey')
      themeButton.classList.add('button--dark-font')
    }
  }
};
