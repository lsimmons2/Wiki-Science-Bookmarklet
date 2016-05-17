var olElem;
var liList;
var iElem;
var jArray = [];
var jObj = {};
var jName;
var message = '';
var refText;
var number = 0;
var modalText;
var text;
var modalCon;
var x;

var styles = document.createElement('style');
styles.setAttribute('type', 'text/css');
styles.innerHTML = '.modalCon {position: fixed; top: 10vh; left: 10vw; right: 10vh;' +
' z-index: 4; background-color: white; max-width: 80vw; margin: auto;' +
'box-shadow: 0 0 10px grey; -webkit-box-shadow: 0 0 10px grey;' +
'padding: 40px 25px 50px; border-style: solid; border-width: 10px; border-color: #319211;}' +
'display: inline;';
document.getElementsByTagName('head')[0].appendChild(styles);

var xStyles = document.createElement('style');
xStyles.setAttribute('type', 'text/css');
xStyles.innerHTML = '.x {position: absolute; top: 5px; right: 15px; font-weight: bold; font-size: 25px;}';
document.getElementsByTagName('head')[0].appendChild(xStyles);



/*olElem is an HTMLCollection of one node- the <ol>*/
olElem = document.getElementsByClassName('references');
/*liList is an HMTLCollection of nine nodes - the <li>'s*/
liList = olElem[0].children;
/*every liList child - every <li> - is an object */
/*every <span class="reference-text"> is an HTMLCollection*/
for (var i = 0; i < liList.length; i++) {
	refText = liList[i].getElementsByClassName('reference-text')[0];
	if(refText.getElementsByTagName('i')[0] !== undefined && refText.getElementsByTagName('i')[0].firstChild.nodeType === 3){
		jArray[i] = refText.getElementsByTagName('i')[0].innerHTML;
	}
}


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
	number += jObj[jn];
}


if(number == 0){
	text = document.createTextNode('No scientific journals are used as references for this article.');
}
else{
	text = document.createTextNode('Scientific journals used as references for this article(# of times cited):\n' + message);
}


modalCon = document.createElement('div');
modalText = document.createElement('div');
x = document.createElement('span');
modalCon.className = 'modalCon';
modalText.className = 'modalText';
x.className = 'x';
x.innerHTML = 'x';
modalText.appendChild(text);
modalCon.appendChild(x);
modalCon.appendChild(modalText);
document.body.appendChild(modalCon);

x.onclick = function() {
	modalCon.style.display = 'none';
};


console.log(number);