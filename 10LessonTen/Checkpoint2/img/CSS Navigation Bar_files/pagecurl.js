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
  /////////////////////////////original animation functions


  var _time = .5;
  var _ease = 'Power4.easeInOut'


  function fadeOut(_id, _delay) {
      TweenMax.to(_id, _time / 2, {
          delay: _delay,
          alpha: 0
      });
  }


  function fadeIn(_id, _delay) {
      TweenMax.from(_id, _time / 2, {
          delay: _delay,
          alpha: 0,
          immediateRender: true
      });
  }

  function fallIn(_id, _delay) {
      TweenMax.from(_id, _time * 2, {
          delay: _delay,
          autoAlpha: 0,
          scale: 2,
          ease: Power4.easeOut,
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

  ///////////////////////////////////////pagegurl
  function startAd(e) {
      setListeners();
      TweenMax.set(legal, {
          alpha: 0
      });
      TweenMax.defaultOverwrite = 'all';
      stage.style.visibility = 'visible';
      pageTime = .46;


      if (e == 'devices') {


          fallIn(offer_eyebrow_copy, .3);
          TweenMax.to([page1, page1curl], .5, {
              delay: 1,
              x: '-=70',
              y: '-=50',
              repeat: 1,
              yoyo: true,
              ease: Circ.easeOut

          });

          ///////////////// screen 2
          var screen2 = 2.5;

          TweenMax.to([page1, page1curl], 4, {
              delay: screen2,
              x: '-=500',
              y: '-=500',
              ease: Circ.easeOut

          });
          TweenMax.to(offer_eyebrow_copy, 0, {
              y: "-=40",
              width: 240,
              scale: .6,
              transformOrigin: 'top left',
              delay: screen2 + pageTime + .1
          });
          fadeIn(primary_copy, screen2 + .4);


          //////////////////screen 3
          var screen3 = 5.5;

          TweenMax.to([page2, page2curl], 4, {
              delay: screen3,
              x: '-=500',
              y: '-=500',
              ease: Circ.easeOut

          });

          fadeOut(offer_eyebrow_copy, screen3 + pageTime);

          TweenMax.to(primary_message, _time, {
              delay: screen3 + pageTime,
              y: "-20"
          });

          fadeIn(supporting1_copy, screen3 + pageTime);


          /////////////////// screen4
          var screen4 = 9;
          TweenMax.to([page3, page3curl], 4, {
              delay: screen4,
              x: '-=500',
              y: '-=500',
              ease: Circ.easeOut

          });

          fadeOut(supporting1_copy, screen4 + pageTime);
          fadeIn(supporting2_copy, screen4 + pageTime);


          /////////////////screen 5
          var screen5 = 12;
          TweenMax.to([page4, page4curl], 4, {
              delay: screen5,
              x: '-=500',
              y: '-=500',
              ease: Circ.easeOut

          });
          fadeIn(urgency_message, screen5 + pageTime)
          fallIn(cta, screen5 + .9)
          fadeOut([primary_copy, supporting2_copy], screen5 + pageTime);
          fadeIn(legal_rollover, screen5 + 1);

      } else {

          TweenMax.set([primary_message, primary_copy], {
              css: { zIndex: 30 }
          });
          TweenMax.set([page3, page4, page3curl, page4curl], {
              alpha: 0
          });
          fallIn(primary_copy, .3);
          // fallIn(image1, .3);


          TweenMax.to([page1, page1curl], .5, {
              delay: 1,
              x: '-=70',
              y: '-=50',
              repeat: 1,
              yoyo: true,
              ease: Circ.easeOut

          });


          var screen2 = 2.5;

          TweenMax.to([page1, page1curl], 4, {
              delay: screen2,
              x: '-=500',
              y: '-=500',
              ease: Circ.easeOut

          });
          TweenMax.to(primary_message, _time, {
              delay: screen2 + pageTime,
              y: "-20"
          });
          fadeIn(supporting1_copy, screen2 + pageTime);


          var screen3 = 6;
          fadeOut(supporting1_copy, screen3 + .2);
          fadeOut(primary_copy, screen3 + .4);

          TweenMax.to([page2, page2curl], 4, {
              delay: screen3,
              x: '-=500',
              y: '-=500',
              ease: Circ.easeOut
          });


          var screen4 = 6.1;
          fadeIn(offer_message, screen4);
          fadeIn(closing_headline, screen4);
          fadeIn(summary_copy, screen4 + .2);

          fadeIn(urgency_message, screen4 + pageTime)
          fallIn(cta, screen4 + .9)
          fadeOut([primary_copy, supporting2_copy], screen4 + pageTime);
          fadeIn(legal_rollover, screen4 + 1);


      }


  }