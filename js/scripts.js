var quiz = function(language) {
  debugger;
  if (language < 1) {
    return "#other";
  } else if (language > 1 && language <= 5) {
    return "#Csharp";
  } else if (language > 5 && language < 10) {
    return "#ruby";
  } else if (language > 10) {
    return "#java";
  }

}



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

    var language = quiz(result).toString();

    $(".output").hide();
    $(language).show();

  });
});
