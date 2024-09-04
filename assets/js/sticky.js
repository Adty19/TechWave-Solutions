$(window).on("scroll", function(){
	if($(window).scrollTop() > 600){
$("nav").addClass("active");
} else {
	$("nav").removeClass("active");
}
});