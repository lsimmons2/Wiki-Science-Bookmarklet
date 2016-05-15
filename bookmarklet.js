var refElement;
var refList;
var pubMed;
var tags;

/*refElement is an HTMLCollection of one node- the <ol>*/
refElement = document.getElementsByClassName('references');
/*refList if an HMTLCollection of nine nodes - the <li>'s*/
refList = refElement[0].children;
/*every refList child - every <li> - is an object */
/*every <span class="reference-text"> is an HTMLCollection*/
for (var i = 0; i < refList.length; i++) {
	tags = refList[i].getElementsByClassName('reference-text')[0].children[0].getElementsByTagName('a');
	console.log(tags[tags.length-1]);
}