// Avant de commencer 1ère phrase à écrire

<script>
  $(document).ready(function() {
  });
</script>


// jquery sélectionne souvent un élément html avec un selector ex faire rebondir des boutons

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
