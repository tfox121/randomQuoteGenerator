$(document).ready(function() {
  let json
  let randomQuote
  $.ajax({url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', success: function(result){
    json = JSON.parse(result)
    let randomQuote = quoteGenerator(getRandomInt(json), json);
    quoteChanger(json, randomQuote);
    tweetComposer(json, randomQuote)
  }});
  $('#new-quote').on('click', function(){
    randomQuote = quoteGenerator(getRandomInt(json), json);
    quoteChanger(json, randomQuote)
    tweetComposer(json, randomQuote)
  });
});

function quoteGenerator(num, json) {
  return json['quotes'][num];
}

function getRandomInt(json) {
  return Math.floor(Math.random() * (json['quotes'].length + 1));
}

function quoteSetter(json, randomQuote) {
  $('#text').html('&nbsp;' + randomQuote['quote']);
  $('#author').html('- ' + randomQuote['author']);
}

function getRandomColor() {
  let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
  return colors[Math.floor(Math.random() * colors.length)]
}

function quoteChanger(json, randomQuote) {
  let newColor = getRandomColor()
  $('.button-color-changer').animate({
    backgroundColor: newColor
  }).delay(50)
  $('#quote').fadeOut(null, function() {
    $('.font-color-changer').css('color', newColor)
    $('.color-changer').animate({
      backgroundColor: newColor
    })
    quoteSetter(json, randomQuote)
  }).fadeIn(null)
  $('#author').fadeOut(null).fadeIn(null)
}

function tweetComposer(json, randomQuote) {
  let tweet = 'https://twitter.com/intent/tweet?hashtags=quotes&text='
  let text = randomQuote['quote']
  let author = randomQuote['author']
  text = text.replace(/\s/gi, '+')
  author = author.replace(/\s/gi, '+')
  tweet += '"'+text+'"+'+author
  $('#tweet-quote').attr("href", tweet)
}

