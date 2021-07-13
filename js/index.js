console.log("Your index.js file is loaded correctly!");



$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "60") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 8000, function(){
   
        window.location.hash = hash;
      });
    }
  });
});
