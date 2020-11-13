// JavaScript file for the web page "Planet Info"

$(document).ready(function() {
  $("#query-form").submit(function(event) { searchPlanet(event); });
  $("#query-form-set").submit(function(event) { setPlanet(event); });
});

// This functions returns list of planets
function searchPlanet(event) {
  var request;
  event.preventDefault();
  if (request) {
      request.abort();
  }
  var $form = $(this);
  disableFieldsAndButtons(true);
  $("#search-results-heading").text("Searching for Planets");
  $("#results").text("");
  var settings = {
    "url": "http://localhost:8080/planets/all",
    "method": "GET",
    "timeout": 0,
  };

  var myResults = "";
  $.ajax(settings).done(function (response) {
      var i;
      for (let i in response){
        myResults = myResults + "<p>" + response[i].name + "  " + response[i].type + "</p>";
      }
      $("#results").html("<p>" + myResults + "</p>");
  });
  $("#search-results-heading").text("List of Planets:");
  disableFieldsAndButtons(false)
}


// This functions inserts new planet into database
function setPlanet(event) {
  var request;
  event.preventDefault();
  if (request) {
    request.abort();
  }
  var $form = $(this);
  disableFieldsAndButtons(true);
  $("#search-results-heading").text("Setting Planet Values");
  $("#results").text("");

  var urlString = "http://localhost:8080/planets/add?name=" + $("#planet").val() + "&type=" + $("#type").val();
  console.log("urlString ");
  console.log(urlString);
  var settings = {
  "url": urlString,
  "method": "POST",
  "timeout": 0
  };

  $.ajax(settings).done(function (response) {
  });
  disableFieldsAndButtons(false)
}

function resetResults() {
  $("#search-results-heading").text("");
  $("#results").text("");
}

function disableFieldsAndButtons(statusToSet) {
  document.getElementById("planet").disabled = statusToSet;
  document.getElementById("type").disabled = statusToSet;
  document.getElementById("resetButton").disabled = statusToSet;
  document.getElementById("searchButton").disabled = statusToSet;
}

