$(document).ready(function() {
  $("#height-info").submit(function(event) {
    event.preventDefault();

    let feetInput = parseInt($("#feet").val())*12;
    let inchInput = parseInt($("#inches").val());
    let totalHeight = feetInput + inchInput;
    
    if(totalHeight < 48) {

      $("#short-rides").removeClass("off-limits");
      $("#med-rides").addClass("off-limits");
      $("#tall-rides").addClass("off-limits");

      $(".med-heading").after("<p>Sorry, you need to be taller to go on these rides.</p>");
      $(".tall-heading").after("<p>Sorry, you need to be taller to go on these rides.</p>");

    } else if(totalHeight >= 48 && totalHeight <=65) {

      $("#med-rides").removeClass("off-limits");
      $("#short-rides").addClass("off-limits");
      $("#tall-rides").addClass("off-limits");

      $(".short-heading").after("<p>Sorry, you need to be taller to go on these rides.</p>");
      $(".tall-heading").after("<p>Sorry, you need to be taller to go on these rides.</p>");
      
    } else if( totalHeight > 65 && totalHeight <=84 ) {

      $("#tall-rides").removeClass("off-limits");
      $("#med-rides").addClass("off-limits");
      $("#short-rides").addClass("off-limits");

      $(".med-heading").after("<p>Sorry, you need to be taller to go on these rides.</p>");
      $(".short-heading").after("<p>Sorry, you need to be taller to go on these rides.</p>");

    } else {
      // $("#tall-rides").removeClass("off-limits");
      // $("#med-rides").removeClass("off-limits");
      // $("#short-rides").removeClass("off-limits");
      $(".ride-list").hide();
      $("div.form").after("<h2>You may be either too short or too tall to enjoy our rides. Sorry!</p>");
    }

  });
});