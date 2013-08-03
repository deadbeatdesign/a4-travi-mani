$(document).ready(function(){
	$("#fruits > li").find("img").click(function(){
		var fruits = $(this).closest(".name");
		var answer = fruits.data("fruits");
		var name = $('<p class="name">'+answer+'</p>');
		fruits.append(name);
	});
});