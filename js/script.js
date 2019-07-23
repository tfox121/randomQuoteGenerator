let json

$(document).ready(function() {
  $.ajax({url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", success: function(result){
    json = JSON.parse(result)
    quoteSetter();
  }});
});

function quoteGenerator(num, json) {
  return json["quotes"][num];
}

function getRandomInt(json) {
  return Math.floor(Math.random() * (json["quotes"].length + 1));
}

$('#newQuote').on('click', function(){
  let newColor = getRandomColor()
  $('#quotewrap').fadeOut(null, function() {
    quoteSetter()
  }).fadeIn(null)
  $('#quoter').fadeOut(null).fadeIn(null)
  $('.color-changer').animate({
    backgroundColor: "yellow"
  })
  $('.font-color-changer').animate({
    color: "blue"
  })
  $('.button-color-changer').animate({
    backgroundColor: "yellow"
  })
  //$('.color-changer').css('background-color', getRandomColor) /*<<< trying to get colour change functionality  - doesn't quite work as EVERY colour ends up different! */
});

function quoteSetter() {
  let randomQuote = quoteGenerator(getRandomInt(json), json);
  $("#quote").html("&nbsp;" + randomQuote["quote"]);
  $("#quoter").html("- " + randomQuote["author"]);
}

/*function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}*/


function getRandomColor() {
  let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  return colors[Math.floor(Math.random() * colors.length)]
}
