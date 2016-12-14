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

//De la même façon , vous pouvez ajouter des classes à un élément avec jQuery addClass()fonction, vous pouvez les supprimer avec jQuery removeClass()fonction.
//Voici comment vous feriez cela pour un bouton spécifique:
//Enlevons la btn-default classe de tous nos buttons éléments.

$("#target2").removeClass("btn-default");

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
  });
</script>

//Nous pouvons également changer le CSS d'un élément HTML directement avec jQuery.
//jQuery a une fonction appelée .css()qui vous permet de modifier le CSS d'un élément.
//Voici comment nous changer sa couleur au bleu:

$("#target1").css("color", "blue");

