let input;

const determineGraph = function(metric, colUp, colDown) {

  if (input > 5) {

    if (input === 6) {
    $(`.${colUp}`).find(`.${metric}`).attr('style','height: 25%');
    }

    if (input === 7) {
    $(`.${colUp}`).find(`.${metric}`).attr('style','height: 50%');
    }

    if (input === 8) {
    $(`.${colUp}`).find(`.${metric}`).attr('style','height: 75%');
    }

    if (input === 9) {
    $(`.${colUp}`).find(`.${metric}`).attr('style','height: 100%');
    }

// Hide upward score column and show downward arrow if opposing direction selected
    $(`.${colUp}`).find('.arrow-up').attr('style','display: block;');
    $(`.${colDown}`).find(`.${metric}`).attr('style','height: 0%');
    $(`.${colDown}`).find('.arrow-down').attr('style','display: none;');

  }

  if (input < 5) {

    if (input === 4) {
    $(`.${colDown}`).find(`.${metric}`).attr('style','height: 25%');
    }

    if (input === 3) {
    $(`.${colDown}`).find(`.${metric}`).attr('style','height: 50%');
    }

    if (input === 2) {
    $(`.${colDown}`).find(`.${metric}`).attr('style','height: 75%');
    }

    if (input === 1) {
    $(`.${colDown}`).find(`.${metric}`).attr('style','height: 100%');
    }

// Hide upward score column and show downward arrow if opposing direction selected
    $(`.${colDown}`).find('.arrow-down').attr('style','display: block;');
    $(`.${colUp}`).find(`.${metric}`).attr('style','height: 0%');
    $(`.${colUp}`).find('.arrow-up').attr('style','display: none;');

  }

  if (input === 5) {

    $(`.${colUp}`).find(`.${metric}`).attr('style','height: 10%');
    $(`.${colDown}`).find(`.${metric}`).attr('style','height: 10%');

    $(`.${colUp}`).find('.arrow-up').attr('style','display: block;');
    $(`.${colDown}`).find('.arrow-down').attr('style','display: block;');

  }

};

const resetChart = function() {

  $('.verify-sc').attr('style','height: 100%');
  $('.authenticate-sc').attr('style','height: 100%');
  $('.complete-sc').attr('style','height: 100%');
  $('.improvise-sc').attr('style','height: 100%');

  $('select').val('start');

  $('.col').find('.arrow-up').attr('style','display: block;');
  $('.col').find('.arrow-down').attr('style','display: block;');

}

$('.verify').find('select').change(function() {

  input = Number($(this).find('option:selected').text());

  determineGraph('verify-sc', '1', '5');

});

$('.authenticate').find('select').change(function() {

  input = Number($(this).find('option:selected').text());

  determineGraph('authenticate-sc', '2', '6');

});

$('.complete').find('select').change(function() {

  input = Number($(this).find('option:selected').text());

  determineGraph('complete-sc', '3', '7');

});

$('.improvise').find('select').change(function() {

  input = Number($(this).find('option:selected').text());

  determineGraph('improvise-sc', '4', '8');

});



$('#reset').click(function(){

  resetChart();

});
