$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var question6 = parseInt($("#question6").val());

    var result = question1 + question2 + question3 + question4 + question5 + question6;

      $(".outputOther").hide();
      $(".outputCsharp").hide();
      $(".outputRuby").hide();
      $(".outputDesign").hide();


    if (result < 1) {
      $(".outputOther").show();
    } else if (result > 1 && result <= 5) {
      $(".outputCsharp").show();
    } else if (result > 5 && result < 10) {
      $(".outputRuby").show();
    } else if (result > 10) {
      $(".outputJava").show();
    }

  });
});
