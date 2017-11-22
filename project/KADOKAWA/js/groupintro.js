$(document).ready(function() {
var $biger = $('.ui-main-word');
var num = parseFloat($biger.css('fontSize'));
$('#ui-intro-head-select1').click(function(){
num= "14px";
$biger.css('fontSize',num);
$('#ui-intro-head-select').click(function(){
num="10px";
$biger.css('fontSize',num);
$('#ui-intro-head-select2').click(function(){
num="18px";
$biger.css('fontSize',num);
});
});
});
});
