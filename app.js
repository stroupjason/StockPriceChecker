console.log('Hello World!')

$(function() {
    var symbol = "";

    $('#alertWindow').hide();

    $('#stockButton').click(function(event){
        event.preventDefault();
        $('#alertWindow').hide();
    });

});
