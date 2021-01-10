////////////////////////////// THE VARIABLES ///////////////////////////////////

let input;
let chartId;
let chartsOnBoard = 1;
let heightVal;

////////////////////////////// THE FUNCTIONS ///////////////////////////////////

const determineGraph = function(chart, metric, colUp, colDown, heightVal) {

  if (input > 5) {

    $(`#${chart} .${colUp}`).find(`.${metric}`).attr(`style`,`height: ${heightVal}`);

// Hide upward score column and show downward arrow if opposing direction selected
    $(`#${chart} .${colUp}`).find('.arrow-up').attr('style','display: block;');
    $(`#${chart} .${colDown}`).find(`.${metric}`).attr('style','height: 0%');
    $(`#${chart} .${colDown}`).find('.arrow-down').attr('style','display: none;');

  }

  if (input < 5) {

    $(`#${chart} .${colDown}`).find(`.${metric}`).attr(`style`,`height: ${heightVal}`);

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

  $('input').val('');

  chartsOnBoard = 1;

};

////////////////////////////// THE BUSINESS ////////////////////////////////////

$('.verify').find('select').change(function() {

  chartId = $(this).parent().parent().parent().attr('id');
  input = Number($(this).find('option:selected').text());
  heightVal = $(this).find('option:selected').val();
  determineGraph(chartId, 'verify-sc', '1', '5', heightVal);

});

$('.authenticate').find('select').change(function() {

  chartId = $(this).parent().parent().parent().attr('id');
  input = Number($(this).find('option:selected').text());
  heightVal = $(this).find('option:selected').val();
  determineGraph(chartId, 'authenticate-sc', '2', '6', heightVal);

});

$('.complete').find('select').change(function() {

  chartId = $(this).parent().parent().parent().attr('id');
  input = Number($(this).find('option:selected').text());
  heightVal = $(this).find('option:selected').val();
  determineGraph(chartId, 'complete-sc', '3', '7', heightVal);

});

$('.improvise').find('select').change(function() {

  chartId = $(this).parent().parent().parent().attr('id');
  input = Number($(this).find('option:selected').text());
  heightVal = $(this).find('option:selected').val();
  determineGraph(chartId, 'improvise-sc', '4', '8', heightVal);

});


// Create chart button and function
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

// Reset chart button and function
$('#reset').click(function(){

  resetChart();

});
