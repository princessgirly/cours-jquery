![code](img/00.png)
![tableau](img/01.png)


// Charger le lien de la librairie jquery dans header et animation.css voir site cdn jquery
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


<script>
  $(document).ready(function() {
    $("#target1").css("color","red");
  });
</script>


//Lorsque vous désactivez un bouton, il deviendra grisées et ne peut plus être cliqué.
//jQuery a une fonction appelée .prop()qui vous permet d'ajuster les propriétés des éléments.
//Voici comment vous pouvez désactiver tous les boutons:

$("button").prop("disabled", true);

<script>
  $(document).ready(function() {
    $("#target1").prop("disabled", true);

  });
</script>


//jQuery a une fonction appelée .html()qui vous permet d' ajouter des balises et du texte HTML dans un élément. 
$("h3").html("<em>jQuery Playground</em>");

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html("<em>#target4</em>");
  });
</script>

//Supprimer un élément HTML de votre page en utilisant jQuery.
//jQuery a une fonction appelée .remove()qui va supprimer un élément HTML entièrement

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("button").remove("#target4");

  });
</script>

// déplacer des éléments d'un divà l' autre.
//jQuery a une fonction appelée appendTo()qui vous permet de sélectionner des éléments HTML et ajoutez - les à un autre élément.
//Par exemple, si nous voulions passer target4de notre droite et à notre bien à gauche, nous utiliserons:

$("#target4").appendTo("#left-well");


<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>


//En plus des éléments en mouvement, vous pouvez également les copier d'un endroit à l'autre.
//jQuery a une fonction appelée clone()qui fait une copie d'un élément.
//Par exemple, si nous voulions copier target2de notre left-wellà notre right-well, nous utiliserons:
//Avez - vous remarqué cela implique de coller deux fonctions jQuery ensemble? Ceci est appelé function chaininget il est un moyen pratique de faire avancer les choses avec jQuery.

$("#target2").clone().appendTo("#right-well");

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
  });
</script>

//Chaque élément HTML possède un élément parent à partir duquel il hérite des propriétés.
//Par exemple, votre jQuery Playground h3élément a l'élément parent de <div class="container-fluid">, qui a lui - même parent body.
//jQuery a une fonction appelée parent()qui vous permet d'accéder à la société mère de quel élément que vous avez sélectionné.
//Voici un exemple de la façon dont vous pouvez utiliser la parent()fonction si vous vouliez donner l'élément parent de l' left-wellélément d' une couleur de bleu de fond:

$("#left-well").parent().css("background-color", "blue")


<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red")
  });
</script>


//De nombreux éléments HTML ont childrenqui inheritleurs propriétés de leurs éléments parent HTML.
//Par exemple, chaque élément HTML est un enfant de votre bodyélément, et votre "jQuery Playground" h3élément est un enfant de votre <div class="container-fluid">élément.
//jQuery a une fonction appelée children()qui vous permet d'accéder aux enfants de quel élément que vous avez sélectionné.
//Voici un exemple de la façon dont vous pouvez utiliser la children()fonction de donner aux enfants de votre left-wellélément la couleur de bleu:

$("#left-well").children().css("color", "blue")
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
  });
</script>


//jQuery utilise CSS sélecteurs pour cibler des éléments. target:nth-child(n)sélecteur css vous permet de sélectionner tous les éléments nième avec la classe cible ou type d'élément.
//Voici comment vous donner le troisième élément dans chaque puits de la classe de rebond:

$(".target:nth-child(3)").addClass("animated bounce");

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");
  });
</script>

//Vous pouvez également cibler tous les éléments de numéro pair.
//Voici comment vous souhaitez cibler tous les éléments impairs avec la classe targetet leur donner des cours:

$(".target:odd").addClass("animated shake");    //impair
$(".target:even").addClass("animated shake");   //pair

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
  });
</script>

//jQuery peut cibler l' bodyélément ainsi.
//Voici comment nous ferions tout le corps fade out:
$("body").addClass("animated fadeOut");

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $("body").addClass("animated hinge");               //animation toute la page tombe et est supprimée   
   });
</script>


//Change le fond'ecran du body et html en même temps
      $('body, html').css('background', 'url(img/images.jpg)');
