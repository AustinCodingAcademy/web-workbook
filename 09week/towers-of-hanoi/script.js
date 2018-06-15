'use strict';

$(document).ready(function() {
  let $clickedBlock = null;
  let $clickedBlockSize = null;


  $('[data-stack]:eq(0)').click(function() {
  let $stackOne = $(this).children().last().data('block');

  let $clickedBlockSize = $(this).children().last().data('block');
    if ($(this).children().last().data('block') === undefined) {
      $clickedBlockSize = null;
    }

    if ($clickedBlock) {
      $(this).append($clickedBlock);
      $clickedBlock = null;
      $clickedBlockSize = null;

    } else {
      $clickedBlock = $(this).children().last().detach();
    }
    console.log('$stackOne ' + $stackOne)

    $('[data-stack]:eq(1)').click(function() {
    let $stackTwo = $(this).children().last().data('block');

    let $clickedBlockSize = $(this).children().last().data('block');
      if ($(this).children().last().data('block') === undefined) {
        $clickedBlockSize = null;
      }

      if ($clickedBlock) {
        $(this).append($clickedBlock);
        $clickedBlock = null;
        $clickedBlockSize = null;

      } else {
        $clickedBlock = $(this).children().last().detach();
      }

      console.log('$stackTwo ' + $stackTwo)      

      $('[data-stack]:eq(2)').click(function() {
      let $stackThree = $(this).children().last().data('block');

      let $clickedBlockSize = $(this).children().last().data('block');
        if ($(this).children().last().data('block') === undefined) {
          $clickedBlockSize = null;
        }

        if ($clickedBlock) {
          $(this).append($clickedBlock);
          $clickedBlock = null;
          $clickedBlockSize = null;

        }
        else {
          $clickedBlock = $(this).children().last().detach();
        }

        console.log('$stackThree ' + $stackThree)

      });
    });
});
});
/*  $blockSize < $('[data-block]').children().first().data('block') */
/* $blockSize < $('[data-block]').children().last().data('block')*/
/* $blockSize = $(this).children().last().data('block'); */
/* $stackCount = $(this).children().length; */
