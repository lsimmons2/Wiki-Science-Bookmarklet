var olElem;
var liList;
var iElem;
var jArray = [];
var jObj = {};
var jName;
var message = '';



/*olElem is an HTMLCollection of one node- the <ol>*/
olElem = document.getElementsByClassName('references');
/*liList is an HMTLCollection of nine nodes - the <li>'s*/
liList = olElem[0].children;
/*every liList child - every <li> - is an object */
/*every <span class="reference-text"> is an HTMLCollection*/
for (var i = 0; i < liList.length; i++) {
	iElem = liList[i].getElementsByClassName('reference-text')[0].children[0].getElementsByTagName('i')[0];
	if (iElem.firstChild.nodeType == 3){
		jArray[i] = iElem.innerHTML;
	}
	else{
		jArray[i] = iElem.firstChild.innerHTML;
	}
}

console.log(jArray);

jArray.sort();

for (var i = 0; i < jArray.length; i++) {
	jName = jArray[i];
	if(!jObj[jName]){
		jObj[jName] = 1;
	}
	else{
		jObj[jName] += 1;
	}
}

for(jn in jObj){
	message += jn + ' (' + jObj[jn] + ')\n';
}

alert('jArray used as references for this article(# of times cited):\n' + message);