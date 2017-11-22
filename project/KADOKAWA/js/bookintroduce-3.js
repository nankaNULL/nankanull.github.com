$(document).ready(function() {
  $(".ui-electric").click(function() {
    $("html, body").animate({
      scrollTop: $(".ui-main-pic").offset().top }, {duration: 200,easing: "swing"});
    return false;
  });
});
