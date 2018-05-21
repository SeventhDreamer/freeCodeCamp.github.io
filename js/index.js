$(document).ready(function() {
  document.getElementById('query').focus();
 });


function searchWikipedia(){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + document.getElementById("query").value,
      function(result) {
        var html = "";
      
        for (var i = 0; i < result[1].length; i++) {
          html += '<br><a target="_blank" href="' + result[3][i] + '"><div id="link"><h2>';
          html += result[1][i];
          html += "</h2><h4>" + result[2][i];
          html += "</h4></div></a>";
        }
        $("#searchResult").html(html);
      }
    );
}

  $(".search2").on("click", function() {
    searchWikipedia();    
  });
  $(".search1").on('keyup', function(a){
    if (a.keyCode ==13)
      searchWikipedia();
  });
