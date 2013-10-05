$(document).ready(function() {


  $('.editable').click(function() {
    var startWords = $(this).text();
    var that = this;
    $(this).hide(); 
    var text = $('<textarea class="inputArea">' + startWords + '</textarea>');
    $(this).after(text);
    text.show();
    text.focus(); 
      
      text.blur(function() {
        var value = text.val();
        text.hide();

        $(that).show().text(value);
      });


  });


}); 