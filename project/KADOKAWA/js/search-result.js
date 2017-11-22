function search_button(){
	window.location.href='http://www.kadokawa.co.jp/product/search/?lgenre=3';
}
  
// 表示を増やす
$(".view-increase a").on('click', function () {
	if ($(this).parent().prev().hasClass('hide')) {
		$(this).parent().prev().removeClass().addClass('active');
		$(this).text('-表示を減らす');
		document.getElementById("ui-leftbody").style.height="1500px";
		document.getElementById("ui-leftbody-item2").style.height="557px";
	} else {
		$(this).parent().prev().removeClass().addClass('hide');
		$(this).text('+表示を増やす');
		document.getElementById("ui-leftbody").style.height="1345px";
		document.getElementById("ui-leftbody-item2").style.height="402px";
	}
	return false;
});
