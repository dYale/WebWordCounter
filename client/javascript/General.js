$(document).ready(function () {

  //this is the example ajax call that connects our browser to our server API
  $.ajax({
    url: "API/general", success: function (result) {
      $("#start").html(result);
    }
  });

});
