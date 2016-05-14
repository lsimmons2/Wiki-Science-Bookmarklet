var reflist = [];
var refContent = [];
var refListLength;


refList = document.getElementByClassName('references').childNodes;
refListLength = document.getElementsByClassName('references').childNodes.length;
for (var i = 0; i < refListLength; i++) {
	refContent[i] = (refList[i].innerHTML);
}

alert(refContent);
