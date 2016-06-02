  function _id(e) {
      return document.getElementById(e);
  }

  function startLoading(e) {

      var banner = _id('banner');
      var primary_copy = _id('primary_copy');
      var supporting1_copy = _id('supporting1_copy');
      var closing_headline = _id('closing_headline');
      var summary_copy = _id('summary_copy');
      var urgency_message = _id('urgency_message');
      var cta = _id('cta');
      var cta_copy = _id('cta_copy');
      var legal = _id('legal');
      var legal_rollover = _id('legal_rollover');
      var legal_copy = _id('legal_copy');
      var background_color = _id('background_color');
      var text_color;
      var cta_copy_color;
      var cta_button_color;
      var cta_rollover_text_color;
      var cta_rollover_button_color;
      var image1 = _id('image1');

      primary_copy.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].primary_copy_300x250;
      supporting1_copy.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].supporting1_copy_300x250;
      image1.style.backgroundImage = 'url(' + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].Image1.Url + ')';
      legal_copy.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].Legal_Copy;
      legal_rollover.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].Legal_Rollover;
      closing_headline.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].closing_headline_300x250;
      summary_copy.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].summary_copy_300x250;
      urgency_message.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].urgency_message_300x250;
      background_color.style.backgroundColor = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].Background_Color;
      legal.style.backgroundColor = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].Background_Color;
      banner.style.color = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].Text_Color;
      cta_copy.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].CTA_copy;
      cta.style.backgroundColor = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].CTA_button_color;
      cta_copy.style.color = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].CTA_copy_color;

      if (e == 'devices') {
          var offer_eyebrow_copy = _id('offer_eyebrow_copy');
          offer_eyebrow_copy.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].offer_eyebrow_copy_300x250;
          var supporting2_copy = _id('supporting2_copy');
          supporting2_copy.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].supporting2_copy_300x250;
          var primary_copy2 = _id('primary_copy');
          primary_copy2.innerHTML = dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].primary_copy_300x250;
      }

      if (window.loaded = true) startAd(e);
  }

  /////////////////////////////original
  var _time = .45;
  var _ease = 'Power4.easeOut'


  function slideInRight(_id, _delay) {
      TweenMax.from(_id, _time, {
          delay: _delay,
          rotationX: '+=90',
          transformOrigin: "left top",
          ease: Back.easeOut,
          immediateRender: true
      });
  }

  function flipIn(_id, _delay) {
      TweenMax.from(_id, _time, {
          rotationX: "-=90",
          delay: _delay,
          transformOrigin: "left top"
      });

  }


  function flipOut(_id, _delay) {
      TweenMax.to(_id, _time, {
          delay: _delay,
          rotationX: "-=90",
          transformOrigin: "left top",
          alpha: 0
      });
  }

  function slideInLeft(_id, _delay) {
      TweenMax.from(_id, _time, {
          delay: _delay,
          x: '-30',
          alpha: 0,
          immediateRender: true
      });
  }


  function fadeOut(_id, _delay) {
      TweenMax.to(_id, _time, {
          delay: _delay,
          alpha: 0,
          immediateRender: true
      });
  }

  function fadeIn(_id, _delay) {
      TweenMax.from(_id, _time, {
          delay: _delay,
          alpha: 0,
          immediateRender: true
      });
  }

  function fallIn(_id, _delay) {
      TweenMax.from(_id, _time, {
          delay: _delay,
          alpha: 0,
          scale: 5,
          ease: Power4.easeOut,
          immediateRender: true
      });
  }

  function zoomOut(_id, _delay) {
      TweenMax.from(_id, _time, {
          scale: 2,
          autoAlpha: 0,
          rotationY: -180,
          transformOrigin: "50% 50%",
          ease: Back.easeOut
      });
  }

  function zoomIn(_id, _delay) {
      TweenMax.from(_id, _time, {
          delay: _delay,
          alpha: 0,
          scale: 0,
          ease: Back.easeOut,
          immediateRender: true
      });
  }

  function legalIn() {
      TweenMax.to(legal, _time, {
          alpha: 1
      });
      TweenMax.to(cta, _time, {
          alpha: 0
      });
  }

  function legalOut() {
      TweenMax.to(legal, _time, {
          alpha: 0
      });
      TweenMax.to(cta, _time, {
          alpha: 1
      });
  }

  function adOver() {
      //cta_copy.style.color = "#000";
      // cta.style.backgroundColor = "#FFF";
      cta_copy.style.color = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].CTA_Rollover_Text_Color;
      cta.style.backgroundColor = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].CTA_Rollover_button_Color;
  }

  function adOut() {
      //cta_copy.style.color = "#FFF";
      //cta.style.backgroundColor = "#000";
      cta_copy.style.color = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].CTA_copy_color;
      cta.style.backgroundColor = "#" + dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].CTA_button_color;
  }


  function setListeners() {
      stage.addEventListener('click', ctaHandler);
      legal_rollover.addEventListener('mouseover', legalIn);
      legal_rollover.addEventListener('mouseout', legalOut);
      stage.addEventListener('mouseover', adOver);
      stage.addEventListener('mouseout', adOut)
  }

  function ctaHandler() {
      Enabler.exitOverride("clickthrough", dynamicContent.Sprint_ZMOT_Dynamic_Feed_3[0].Exit_URL.Url);
  }

  function stopAll() {
      TweenMax.killAll();
  }

  function playStars() {
      for (i = 1; i < 300; i++) {
          var randomX = Math.floor(Math.random() * banner.offsetWidth);
          var randomY = Math.floor(Math.random() * banner.offsetHeight);
          var randomTime = Math.random() * .2;
          var randomSize = Math.random() * 100;
          var ranDelay = Math.random() * 14;

          var img = document.createElement("img");
          img.src = "star.svg";
          img.style.top = randomY + 'px';
          img.style.left = randomX + 'px';
          img.style.height = randomSize + 'px';
          img.style.width = randomSize + 'px';
          img.style.position = 'absolute';


          TweenMax.set(img, {
              rotation: Math.random() * 90
          })

          TweenMax.from(img, randomTime, {
              scale: 0,
              delay: ranDelay,
              repeat: 1,
              yoyo: true,
              ease: Circ.easeInOut
          });
          background_color.appendChild(img);

      }
      TweenMax.delayedCall(13, stopAll);
  };


  function startAd(e) {
      ///init
      setListeners();
      TweenMax.set(legal, {
          alpha: 0
      });
      TweenMax.defaultOverwrite = 'all';
      stage.style.visibility = 'visible';


      if (e == 'devices') {


          ///screen1
          playStars();
          TweenMax.from(image1, _time, {
              delay: .5,
              autoAlpha: 0,
              x: '-150',
          });
          slideInRight(offer_eyebrow_copy, .7);

          ///screen 2
          var screen2 = 2;
          TweenMax.to(offer_eyebrow_copy, _time, {
              delay: screen2,
              x: '+=1',
              y: '-=30',
              delay: screen2
          });

          flipIn(primary_copy, screen2 + _time);

          ///screen3
          var screen3 = 4;

          fadeOut(offer_eyebrow_copy, screen3);

          TweenMax.to(image1, _time, {
              delay: screen3,
              x: '+180',
          });


          TweenMax.to(primary_message, _time, {
              delay: screen3,
              x: '-100',
          });


          TweenMax.to(primary_message, _time, {
              delay: screen3 + .7,
              y: '-20',
          });


          flipIn(supporting1_copy, screen3 + .7);


          ///////////////////
          var screen4 = 6.5;
          flipOut(supporting1_copy, screen4);
          flipIn(supporting2_copy, screen4 + .1);
          /////////////////
          var screen5 = 9;


          TweenMax.to(image1, _time, {
              delay: screen5,
              x: '-5',
          });


          flipOut(primary_copy, screen5);
          flipOut(supporting2_copy, screen5);


          slideInRight(offer_message, screen5 + .2);
          slideInRight(summary_copy, screen5 + .4);
          slideInRight(urgency_message, screen5 + .7);
          slideInRight(cta, screen5 + .5);
          slideInRight(legal_rollover, screen5 + .6);
      } else {
          playStars();
          TweenMax.from(image1, _time, {
              delay: .3,
              autoAlpha: 0,
              x: '-150',
          });
          flipIn(primary_copy, .3);

          var screen2 = 2.5;
          TweenMax.to(primary_message, _time, {
              delay: screen2 + .1,
              y: "-15",
              ease: Back.easeOut
          });
          flipIn(supporting1_copy, screen2 + .2);

          var screen3 = 6;
          flipOut(supporting1_copy, screen3 + .2);
          flipOut(primary_copy, screen3 + .4);

          var screen4 = 6.5;
          slideInRight(closing_headline, screen4);
          slideInRight(summary_copy, screen4 + .2);

          slideInRight(urgency_message, screen4 + .3);
          TweenMax.from(cta, _time, {
              delay: screen4 + .5,
              scale: 0,
              ease: Back.easeOut
          });
          slideInRight(legal_rollover, screen4 + .7);

      }


  };