var reflist = [];
var refContent = [];


refList = document.getElementsByClassName('references').childNodes;
refListLength = document.getElementsByClassName('references').childNodes.length;
for (var i = 0; i < refListLength; i++) {
	refContent[i] = (refList[i].innerHTML);
}

alert(refContent);
