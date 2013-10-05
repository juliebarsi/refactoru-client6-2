$(document).ready(function() {


  $(".inputArea").hide();

  $('.text').click(function() {
    $(".text").hide();
    $(".inputArea").show();
    $(".inputArea").focus();
  });

  $( ".inputArea" ).blur(function() {
    var value = $(".inputArea").val();
    $('.inputArea').hide();
    $('.text').show().text(value);
  });


});


//on blur
// get val of textarea
// insert val into .text div
// hide textarea
// show .text