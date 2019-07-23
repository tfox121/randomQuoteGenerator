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
  $('#quotewrap').fadeOut('slow', function() {
    quoteSetter()
  }).fadeIn('slow')
  $('#quoter').fadeOut('slow').fadeIn('slow')
  //$('.color-changer').css('background-color', getRandomColor)
});

function quoteSetter() {
  let randomQuote = quoteGenerator(getRandomInt(json), json);
  $("#quote").html("&nbsp;" + randomQuote["quote"]);
  $("#quoter").html("- " + randomQuote["author"]);
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
