var reflist;
var refContent = [];


refList = document.getElementsByClassName('references').childNodes;
//alert(refList);
for (var i = 0; i < refList.length; i++) {
	refContent[i] = (refList[i].innerHTML);
}

alert(refContent);
