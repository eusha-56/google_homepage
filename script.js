var search = document.getElementById('search_bar');
function Search(){
	return window.open('https://www.google.com/search?q='+search.value,"_self");
}
search.addEventListener("keyup",function(event){
	if (event.keyCode === 13) {
		Search()
	}
});
if (window.innerHeight>600) {
	var bottom_margin = (window.innerHeight-document.getElementById("top").offsetHeight-document.getElementById("bottom").offsetHeight)+"px";
	document.getElementById("bottom").style.marginTop = bottom_margin;
}else{
	document.getElementById("bottom").style.marginTop = "100px";
}