$(() => {
  var checkMod = function() {
    if (Modernizr.mq('(min-width: 1500px)')) {
      console.log('phone');
      $('.nav-circle').show();
      $('.white-box').hide();
      $('#yellow-display-2').hide();
    } else if (Modernizr.mq('(max-width: 768px)')) {
      console.log('tablet');
    } else {
      $('.nav-circle').hide();
      $('.white-box').show();
      $('#yellow-display-2').show();
      console.log('desktop');
    }
  };
  /* ==============================================================
              Modernizer Queries
================================================================= */

  $(window).resize(checkMod);
  checkMod();

  // delay anchors function. Waits one second before changing page
  // this is to allow animations to cycle fully

  function delayAnchors(anchorClass) {
    $(anchorClass).click(function(e) {
      e.preventDefault();
      var goTo = this.getAttribute('href');
      setTimeout(function() {
        window.location = goTo;
      }, 1000);
    });
  }

  // delayAnchor function calls

  delayAnchors('.link-to-main-menu');

  // animate when delay
  $('i').click(() => {
    delayAnchors('.gallery-href');
    $('#biggest-box').addClass('animated fadeOut');
    $('.yellow-box-div').addClass('animated slideOutRight');
    $('.sidebar').addClass('animated slideOutLeft');
    $('#yellow-display').addClass('animated fadeOut');
    $('.yellow-circle-2').addClass('animated fadeOut');
    $('.right-div').addClass('animated slideOutRight');
  });
  $('.gallery-href').click(() => {
    $('.fadeMe').addClass('animated fadeOut');
    $('.tall-div').addClass('animated slideOutRight');
    $('.yellow-circle').addClass('animated fadeOut');
  });
  /* Default Hides */
  $('.svg-book').hide();
  $('.svg-computer').hide();
  $('.svg-message').hide();
  $('.blue-circle').hide();
  $('.yellow-circle').hide();
  $('.orange-circle').hide();
  $('#adams-bar').hide();
  $('#vesco-box').hide();
  $('#sherris-insurance-box').hide();
  $('#javascript-calculator-box').hide();
  $('.try-me-p-1').hide();
  $('.try-me-p-2').hide();
  $('.try-me-p-3').hide();
  /* Big Box Sections default hidden*/

  /* Animation toggles */
  function turnOnAnimation(fadeIn, fadeOut, targetElement, time) {
    $(targetElement).removeClass(fadeOut);
    $(targetElement).toggleClass(fadeIn);
    $(targetElement).show();
  }
  function turnOffAnimation(fadeIn, fadeOut, targetElement, time, hide) {
    var defaultHide = false;
    defaultHide = hide;
    $(targetElement).toggleClass(fadeIn);
    $(targetElement).removeClass(fadeIn);
    $(targetElement).toggleClass(fadeOut);
    if (defaultHide === true) {
      setTimeout(function() {
        //do something special
      }, time);
    }
  }

  /* Gallery Transitions */

  // Gallery Image Changer -- Wireframe / Result

  $('#image-change').on('click', () => {
    const image =
      "./img/FireShot Capture 3 - Adam's Bar and Grill_ - file____C__Users_roger_Desktop_Port.jpg";
    const wireframe = './img/Wireframe - Adams Bar.jpg';

    $('#image-change').attr(
      'src',
      $('#image-change').attr('src') == image ? wireframe : image
    );
  });
  function hideSections() {
    const sections = [
      '#adams-bar-box',
      '#vesco-box',
      '#sherris-insurance-box',
      '#javascript-calculator-box',
      '#main-menu',
      '#contact-box',
      '#contact-div'
    ];
    sections.forEach(section => {
      $(section).addClass('animated fadeOut');
      $(section).removeClass('animated fadeIn');
      setTimeout(function() {
        //do something special
        $(section).hide();
        $(section).removeClass('animated fadeOut');
      }, 300);
    });
  }
  function displaySection(section) {
    hideSections();
    setTimeout(function() {
      //do something special
      $(section).show();
      $(section).addClass('animated fadeIn');
    }, 300);
  }
  /* Nav Displays */
  $('#nav-adams-bar').click(() => {
    displaySection('#adams-bar-box');
  });
  $('#nav-vesco').click(() => {
    displaySection('#vesco-box');
  });
  $('#nav-sherris-insurance').click(() => {
    displaySection('#sherris-insurance-box');
  });
  $('#nav-javascript-calculator').click(() => {
    displaySection('#javascript-calculator-box');
  });

  /* h3 */
  $('.h3-hover').hover(
    function() {
      setTimeout(function() {
        //do something special
        $('h3').css('color', '#427AA1');
      }, 1);
      $('#blue-div').addClass('blue-box-div');
      //SVG
      turnOnAnimation('animated fadeIn', 'animated fadeOut', '.svg-book');
      //Circle
      turnOnAnimation('animated fadeIn', 'animated fadeOut', '.blue-circle');
      // Side
      $('#blue-div').removeClass('animated slideOutRight');
      $('#blue-div').toggleClass('animated slideInRight');

      $('#try-me1').removeClass('animated slideOutRight colored1');
      $('#try-me1').toggleClass('animated slideInRight colored1');
      $('.try-me-p-1').show();
    },
    function() {
      setTimeout(function() {
        //do something special
        $('h3').css('color', 'black');
      }, 12);
      //SVG
      turnOffAnimation('animated fadeIn', 'animated fadeOut', '.svg-book');
      //Circle
      turnOffAnimation('animated fadeIn', 'animated fadeOut', '.blue-circle');
      //Side
      $('#blue-div').toggleClass('animated slideInRight');
      $('#blue-div').removeClass('animated slideInRight');
      $('#blue-div').toggleClass('animated slideOutRight');

      $('#try-me1').toggleClass('animated slideInRight colored1');
      $('#try-me1').removeClass('animated slideInRight colored1');
      $('#try-me1').toggleClass('animated slideOutRight colored1');
    }
  );

  /* h4-1 */
  var timer = 1000;

  $('#h4-hover-1').hover(
    function() {
      timer = 1;
      setTimeout(function() {
        //do something special
        $('#h4-hover-1').css('color', '#e9c46a');
      }, timer);
      $('#yellow-div').addClass('yellow-box-div');

      //Circle
      turnOnAnimation('animated fadeIn', 'animated fadeOut', '.yellow-circle');
      //SVG
      turnOnAnimation('animated fadeIn', 'animated fadeOut', '.svg-computer');

      // Side
      turnOnAnimation(
        'animated slideInRight',
        'animated slideOutRight',
        '#yellow-div'
      );

      // Line
      $('#try-me2').removeClass('animated slideOutRight colored2');
      $('#try-me2').toggleClass('animated slideInRight colored2');
      $('.try-me-p-2').show();
    },
    function() {
      setTimeout(function() {
        //do something special
        $('#h4-hover-1').css('color', 'black');
      }, 12);
      //Circle
      turnOffAnimation('animated fadeIn', 'animated fadeOut', '.yellow-circle');

      //SVG
      turnOffAnimation(
        'animated fadeIn',
        'animated fadeOut',
        '.svg-computer',
        500,
        true
      );
      // Side
      turnOffAnimation(
        'animated slideInRight',
        'animated slideOutRight',
        '#yellow-div',
        2000,
        false
      );
      // Line
      $('#try-me2').toggleClass('animated slideInRight colored2');
      $('#try-me2').removeClass('animated slideInRight colored2');
      $('#try-me2').toggleClass('animated slideOutRight colored2');
    }
  );
  /* h4-2 */
  $('#h4-hover-2').hover(
    function() {
      setTimeout(function() {
        //do something special
        console.log('hovered');
        $('#h4-hover-2').css('color', '#e76f51');
      }, 1);
      $('#orange-div').addClass('orange-box-div');
      turnOnAnimation('animated fadeIn', 'animated fadeOut', '.orange-circle');
      //SVG
      turnOnAnimation('animated fadeIn', 'animated fadeOut', '.svg-message');
      // Side
      $('#orange-div').removeClass('animated slideOutRight');
      $('#orange-div').toggleClass('animated slideInRight');

      $('#try-me3').removeClass('animated slideOutRight colored3');
      $('#try-me3').toggleClass('animated slideInRight colored3');
      $('.try-me-p-3').show();
    },
    function() {
      setTimeout(function() {
        //do something special
        $('#h4-hover-2').css('color', 'black');
      }, 12);
      turnOffAnimation('animated fadeIn', 'animated fadeOut', '.orange-circle');
      //SVG
      turnOffAnimation('animated fadeIn', 'animated fadeOut', '.svg-message');
      $('#orange-div').toggleClass('animated slideInRight');
      $('#orange-div').removeClass('animated slideInRight');
      $('#orange-div').toggleClass('animated slideOutRight');

      $('#try-me3').toggleClass('animated slideInRight colored3');
      $('#try-me3').removeClass('animated slideInRight colored3');
      $('#try-me3').toggleClass('animated slideOutRight colored3');
    }
  );
});
