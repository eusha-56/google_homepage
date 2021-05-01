var search = document.getElementById('search_bar');

search.addEventListener("keyup",function(event){
	if (event.keyCode === 13) {
		window.open('https://www.google.com/search?q='+search.value,"_self");
	}
});