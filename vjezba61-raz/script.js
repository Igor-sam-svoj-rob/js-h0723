/* $(function () {
  $("#btn1").hide();
  $("#btn2").hide(2000).show(3000);
  $("#btn3").slideUp(1000).slideDown(1000);
}); */

//delay, fadeIn, fadeOut, toggle, njega se može dodati i kao fadeToggle

/* Možemo mijenjati i CSS */

$(function () {
  $(".col-sm-3:first-child").css({ fontWeight: "bold" });
});

/* Možemo mijenjati i sadržaj HTML-a */
$(function () {
  $("#btn1").html("Gumbić 1");
});
