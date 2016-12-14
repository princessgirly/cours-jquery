// Charger le lien de la librairie jquery dans header et animation.css
// Avant de commencer 1ère déclaration jquery

<script>
  $(document).ready(function() {
  });
</script>


// jquery sélectionne souvent un élément html = sélector (button)ex faire rebondir des boutons
// bounce est la classe de l'animation css

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
</script>

//sélectionner tous les elements de la classe .text-primary et la classe .text-primary mettre animation (bouge) animated shake ou bounce

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $(".text-primary").addClass("animated shake");
  });
</script>

//#target3 disparait
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
  });
</script>

//
