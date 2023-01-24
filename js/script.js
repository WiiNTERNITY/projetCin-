
//alert("js connecté");
//

window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000"
    },
    "button": {
      "background": "#FF8D1B",
     	  "color" : "white"
    }
  },
  "theme": "classic",
  "content": {
    "message": "Ce site utilise des cookies. ",
    "dismiss": "Je suis d'accord",
    "link": "Lire plus &gt;",
    "href": "index.html"
  }
})});


$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});


// trie
// tous les films
$('#tous_films').click(function() {

  $('.policier_film').show()
  $('.action_film').show()

})


// policiers
$('#policier_films').click(function() {

  $('.policier_film').show()
  $('.action_film').hide()
})

// Action
$('#action_films').click(function() {

  $('.policier_film').hide()
  $('.action_film').show()
})


