var search = document.getElementById('search_bar');
function Search(){
	return window.open('https://www.google.com/search?q='+search.value,"_self");
}
search.addEventListener("keyup",function(event){
	if (event.keyCode === 13) {
		Search()
	}
});