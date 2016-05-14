var reflist = [];
var refContent = [];


refList = document.getElementsByClassName('references').childNodes;
refListLength = refList.length;
for (var i = 0; i < refListLength; i++) {
	refContent[i] = (refList[i].innerHTML);
}

alert(refContent);
