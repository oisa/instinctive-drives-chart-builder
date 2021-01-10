////////////////////////////// THE VARIABLES ///////////////////////////////////

let input;
let chartId;
let chartsOnBoard = 1;

////////////////////////////// THE FUNCTIONS ///////////////////////////////////

const determineGraph = function(chart, metric, colUp, colDown) {

  if (input > 5) {

    if (input === 6) {
    $(`#${chart} .${colUp}`).find(`.${metric}`).attr('style','height: 25%');
    }

    if (input === 7) {
    $(`#${chart} .${colUp}`).find(`.${metric}`).attr('style','height: 50%');
    }

    if (input === 8) {
    $(`#${chart} .${colUp}`).find(`.${metric}`).attr('style','height: 75%');
    }

    if (input === 9) {
    $(`#${chart} .${colUp}`).find(`.${metric}`).attr('style','height: 100%');
    }

// Hide upward score column and show downward arrow if opposing direction selected
    $(`#${chart} .${colUp}`).find('.arrow-up').attr('style','display: block;');
    $(`#${chart} .${colDown}`).find(`.${metric}`).attr('style','height: 0%');
    $(`#${chart} .${colDown}`).find('.arrow-down').attr('style','display: none;');

  }

  if (input < 5) {

    if (input === 4) {
    $(`#${chart} .${colDown}`).find(`.${metric}`).attr('style','height: 25%');
    }

    if (input === 3) {
    $(`#${chart} .${colDown}`).find(`.${metric}`).attr('style','height: 50%');
    }

    if (input === 2) {
    $(`#${chart} .${colDown}`).find(`.${metric}`).attr('style','height: 75%');
    }

    if (input === 1) {
    $(`#${chart} .${colDown}`).find(`.${metric}`).attr('style','height: 100%');
    }

// Hide upward score column and show downward arrow if opposing direction selected
    $(`#${chart} .${colDown}`).find('.arrow-down').attr('style','display: block;');
    $(`#${chart} .${colUp}`).find(`.${metric}`).attr('style','height: 0%');
    $(`#${chart} .${colUp}`).find('.arrow-up').attr('style','display: none;');

  }

  if (input === 5) {

    $(`#${chart} .${colUp}`).find(`.${metric}`).attr('style','height: 10%');
    $(`#${chart} .${colDown}`).find(`.${metric}`).attr('style','height: 10%');

    $(`#${chart} .${colUp}`).find('.arrow-up').attr('style','display: block;');
    $(`#${chart} .${colDown}`).find('.arrow-down').attr('style','display: block;');

  }

};

const resetChart = function() {

  $('.verify-sc, .authenticate-sc, .complete-sc, .improvise-sc').attr('style','height: 5%');

  $('select').val('start');

  $('.col').find('.arrow-up').attr('style','display: block;');
  $('.col').find('.arrow-down').attr('style','display: block;');

  $('#i2').hide();
  $('#i3').hide();

  chartsOnBoard = 1;

};

////////////////////////////// THE BUSINESS ////////////////////////////////////

$('.verify').find('select').change(function() {

  chartId = $(this).parent().parent().parent().attr('id');
  input = Number($(this).find('option:selected').text());
  determineGraph(chartId, 'verify-sc', '1', '5');

});

$('.authenticate').find('select').change(function() {

  chartId = $(this).parent().parent().parent().attr('id');
  input = Number($(this).find('option:selected').text());
  determineGraph(chartId, 'authenticate-sc', '2', '6');

});

$('.complete').find('select').change(function() {

  chartId = $(this).parent().parent().parent().attr('id');
  input = Number($(this).find('option:selected').text());
  determineGraph(chartId, 'complete-sc', '3', '7');

});

$('.improvise').find('select').change(function() {

  chartId = $(this).parent().parent().parent().attr('id');
  input = Number($(this).find('option:selected').text());
  determineGraph(chartId, 'improvise-sc', '4', '8');

});

$('#i2').hide();
$('#i3').hide();

$('#create').click( function() {

  if (chartsOnBoard === 1) {
    $('#i2').show();
    chartsOnBoard++;
    return;
  }

  if (chartsOnBoard >= 2) {
    $('#i3').show();
  }

});


$('#reset').click(function(){

  resetChart();

});
