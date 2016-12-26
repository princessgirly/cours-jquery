
$(document).ready(function(){         //Je déclare tous mes éléments en JQuery et je les masque
  $('#premier').hide();               //Mes 3 blocs de texte
  $('#second').hide();
  $('#troisieme').hide();
  $('#list').hide();          //les lettres de JOYEUX ANNIVERSAIRE sous forme de liste (ul et li)
  $('#play').hide();       //la musique
                                      //Quand je cliquerais sur un élément un événement démarrera
  $('button').click(function(){
      $('#premier').show('slow');
      });
  $('#premier').click(function(){
      $('#second').show('slow');
  });
  $('#second').click(function(){
      $('#troisieme').show('slow');
  });
  $('#troisieme').click(function(){
      $('#list').show('slow');
      $('body, html').css('background', 'url(img/images.jpg)');
      $('#play').show('slow');
  })
});
