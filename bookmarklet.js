reflist = [];


refList = document.getElementsByClassName('references').childNodes;

for (var i = 0; i < refList.length; i++) {
	alert(refList[i].innerHTML);
}
