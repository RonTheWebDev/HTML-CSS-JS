// **** Good Version - Shorter code that follows DRY compared to the one above ****

// Hide all content boxes on page load

$("#content-1, #content-2, #content-3, #content-4").hide();

// BEST Version - Show content boxes - Using Switch/Case statements

$("[id^=button]").click(function () {
  $("#content-heading").hide();
  $("#content-1, #content-2, #content-3, #content-4").css({
    width: "100%",
    color: "white",
    width: "100%",
    padding: "0 0 10px 10px",
  });

  switch (this.id) {
    case "button-1":
      $("#content-1").fadeIn(2000);
      $("#content-heading").hide();
      $("#content-1").css({
        "background-color": "darkorange",
      });

      break;

    case "button-2":
      $("#content-2").fadeIn(2000);
      $("#content-heading").hide();
      $("#content-2").css({
        "background-color": "blue",
      });

      break;

    case "button-3":
      $("#content-3").fadeIn(2000);
      $("#content-heading").hide();
      $("#content-3").css({
        "background-color": "red",
      });

      break;

    case "button-4":
      $("#content-4").fadeIn(2000);
      $("#content-heading").hide();
      $("#content-4").css({
        "background-color": "green",
      });
      
      break;
  }
});

/*
// Better Version - Show content boxes - Using If/Elsse If statements

$("[id^=button]").click(function () {
  $("#content-heading").hide();
  $("#content-1, #content-2, #content-3, #content-4").css({
    width: "100%",
    color: "white",
    width: "100%",
    padding: "0 0 10px 10px",
  });
  if (this.id == "button-1") {
    $("#content-1").fadeIn(2000);
    $("#content-heading").hide();
    $("#content-1").css({
      "background-color": "darkorange",
    });
  } else if (this.id == "button-2") {
    $("#content-2").fadeIn(2000);
    $("#content-heading").hide();
    $("#content-2").css({
      "background-color": "blue",
    });
  } else if (this.id == "button-3") {
    $("#content-3").fadeIn(2000);
    $("#content-heading").hide();
    $("#content-3").css({
      "background-color": "red",
    });
  } else if (this.id == "button-4") {
    $("#content-4").fadeIn(2000);
    $("#content-heading").hide();
    $("#content-4").css({
      "background-color": "green",
    });
  }
});
*/

/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
**** Bad Version 1 - Longer, more syntax, and does NOT follow DRY ****
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$(document).on("click", "#button-1", function () {
  $("#content-1").fadeIn(3000);
  $("#content-heading").hide();
  $("#content-1").show();
  $("#content-1").css({
    padding: "0 0 10px 10px",
    "background-color": "orange",
    width: "100%",
    color: "white",
  });
});

$(document).on("click", "#button-2", function () {
  $("#content-2").fadeIn(3000);
  $("#content-heading").hide();
  $("#content-2").show();
  $("#content-2").css({
    padding: "0 0 10px 10px",
    "background-color": "blue",
    width: "100%",
    color: "white",
  });
});

$(document).on("click", "#button-3", function () {
  $("#content-3").fadeIn(3000);
  $("#content-heading").hide();
  $("#content-3").show();
  $("#content-3").css({
    padding: "0 0 10px 10px",
    "background-color": "red",
    width: "100%",
    color: "white",
  });
});

$(document).on("click", "#button-4", function () {
  $("#content-4").fadeIn(3000);
  $("#content-heading").hide();
  $("#content-4").show();
  $("#content-4").css({
    padding: "0 0 10px 10px",
    "background-color": "green",
    width: "100%",
    color: "white",
  });
});

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
**** Bad Version 2 - Longer, more syntax, and does NOT follow DRY ****
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$("#button-1, #button-2, #button-3, #button-4").click(function () {
  if (this.id == "button-1") {
    $(document).on("click", "#button-1", function () {
      $("#content-1").fadeIn(3000);
      $("#content-heading").hide();
      $("#content-1").show();
      $("#content-1").css({
        padding: "0 0 10px 10px",
        "background-color": "darkorange",
        width: "100%",
        color: "white",
      });
    });
  } else if (this.id == "button-2") {
    $(document).on("click", "#button-2", function () {
      $("#content-2").fadeIn(3000);
      $("#content-heading").hide();
      $("#content-2").show();
      $("#content-2").css({
        padding: "0 0 10px 10px",
        "background-color": "blue",
        width: "100%",
        color: "white",
      });
    });
  } else if (this.id == "button-3") {
    $(document).on("click", "#button-3", function () {
      $("#content-3").fadeIn(3000);
      $("#content-heading").hide();
      $("#content-3").show();
      $("#content-3").css({
        padding: "0 0 10px 10px",
        "background-color": "red",
        width: "100%",
        color: "white",
      });
    });
  } else if (this.id == "button-4") {
    $(document).on("click", "#button-4", function () {
      $("#content-4").fadeIn(3000);
      $("#content-heading").hide();
      $("#content-4").show();
      $("#content-4").css({
        padding: "0 0 10px 10px",
        "background-color": "green",
        width: "100%",
        color: "white",
      });
    });
  }
});
*/
