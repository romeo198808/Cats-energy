'use strict';

(function () {
  var imgOne = document.querySelector('.example__img__inner--1');
  var imgTwo = document.querySelector('.example__img__inner--2');
  var rangeButton = document.querySelector('.range__button');
  var rangeLine = document.querySelector('.range__line');

  rangeButton.addEventListener('mousedown', function(evtDown) {
    var startCord = evtDown.offsetX;

    var mouseUp = function (evtUp) {
      rangeLine.removeEventListener('mousemove', mouseMove);
      rangeLine.removeEventListener('mouseup', mouseUp);
    };

    var mouseMove = function (evtMove) {
      var shift = startCord-evtMove.clientX;
      startCord = evtMove.offsetX;
      if (startCord<5) {
        startCord = 5;
      }
      if (startCord>78) {
        startCord = 78;
      }
      rangeButton.style.width = startCord + 'px';
      var x = Math.round((startCord/78)*100);
      var imgOneX = (x/100)*Number(imgOne.offsetWidth);
      var imgTwoX = (x/100)*Number(imgTwo.offsetWidth);
      imgOne.style.clip = 'rect(0, '+imgOneX+'px, 240px, 0)';
      imgTwo.style.clip = 'rect(0, 250px, 240px, '+imgTwoX+'px)';
    }
    rangeLine.addEventListener('mousemove', mouseMove);
    rangeLine.addEventListener('mouseup', mouseUp);
    // debugger
  });
})();
