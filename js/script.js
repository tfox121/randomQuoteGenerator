$(document).ready(function() {
    function reqListener() {
      json = JSON.parse(this.responseText);
      function quoteGenerator(num) {
        return json["quotes"][num];
      }
  
      document.getElementById("newQuote").onclick = function() {
        $(".fader").removeClass("fade-in");
        $(".fader").addClass("fade-out");
        setTimeout(function() {
          function getRandomInt() {
            return Math.floor(Math.random() * (json["quotes"].length + 1));
          }
          let randomQuote = quoteGenerator(getRandomInt());
          document.getElementsByClassName("quote")[0].innerHTML =
            "&nbsp;" + randomQuote["quote"];
          document.getElementsByClassName("quoter")[0].innerHTML =
            "- " + randomQuote["author"];
          $(".fader").removeClass("fade-out");
          $(".fader").addClass("fade-in");
        }, 1500);
      };
    }
  
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open(
      "GET",
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    oReq.send();
  
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  });
  