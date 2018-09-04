console.log('Hello World!')

$(function() {

  var symbol = " ";

//error handling: hide failed alertWindow
  $('#alertWindow').hide();

//wait to get a new Quote
  $("#stockButton").click(function(event){
  event.preventDefault()
  $('alertWindow').hide();

//set symbol variable to the input stockName and change input symbol to uppercase

  symbol = $('#stockName').val();
  symbol = symbol.toUpperCase();

//error handling

function failed () {
    $('#stockName').addClass('redText');
    $('#alertWindow').show();
    $('#name').text('NOT FOUND');
    $('.remove').text('--');
    $('#change').removeClass('greenText');
    $('changePercent').removeClass('greenText');
    $('#change').removeClass('redText');
    $('#changePercent').removeClass('redText');
    }

    if (!dataList[symbol] || dataList[symbol].Status != 'SUCCESS') {
    failed();
    } else {

//add stock full name
            $('#name').text(dataList[symbol].Name.toUpperCase());
//add lastPrice of current stock price
            $('#lastPrice').text(dataList[symbol].LastPrice.toFixed(2));


// make changes from green to red if negative int.
            function changeTextToRed () {
            $('#change').addClass('redText');
            $('#changePercent').addClass('redText');
            }
//make changes from red text to green if a positive int.

            function changeTextToGreen() {
              $('#change').addClass('greenText');
              $('#changePercent').addClass('greenText');
              $('#change').removeClass('redText');
              $('#changePercent').removeClass('redText');
            }
        if (dataList[symbol].Change < 0) {
        changeTextToRed();
      } else {
        changeTextToGreen();
      }

 //add stock info
    $('#change').text(dataList[symbol].Change.toFixed(2));
    $('#changePercent').text(` (${dataList[ symbol].ChangePercent.toFixed(2)}%)`);
    $('#low').text(`${dataList[symbol].Low.toFixed(2)}-`);
    $('#high').text(dataList[symbol].High.toFixed(2));
    $('#open').text(dataList[symbol].Open.toFixed(2));
    $('#volume').text(shorten(dataList[symbol].Volume));
    $('#marketCap').text(shorten(dataList[symbol].MarketCap));
    // $('#timeStamp').text( 'As of ' + moment.utc(symbol.Timestamp).format('LTS'))


    //add B, K, M to ends of large numbers; thousands, Mil., Bil.
      function shorten(data){
        if (data < 1000){
          var num = (data);
          return num;
      } else if (data < 1000000){
          var num = (data/1000).toFixed(2) + "K";
          return num;
      } else if (data >= 1000000 && data < 1000000000){
          var num = (data/1000000).toFixed(2) + "M";
          return num;
      } else if (data >= 1000000000 && data < 1000000000000){
        var num = (data/1000000000).toFixed(2) + "B";
        return num;
      }
     }
       //set time in correct time zone

      let AsOfTime = moment(dataList[symbol].Timestamp).format('LTS');
      $('#timeStamp').text(`As of ${AsOfTime}`);
      $('#stockName').val('');
   }
  });
  });
