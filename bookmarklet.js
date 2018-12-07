var iElem;
var jObj = {};
var jName;
var refText;
var jCount = 0;
var jArray = [];
var meanIF;
var numerator1;
var numerator2 = 0;
var denominator = 0;
var availIF;
var liArray = [];
var IFElem;
var jOutput;
var jTimes;
var liElem;
var modalText = document.createElement('div');
var modalCon = document.createElement('div');
modalCon.id = 'modalCon';
var x = document.createElement('span');
x.id = 'x';
x.innerHTML = 'x';
var xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', 'https://rawgit.com/lsimmons2/Wiki-Science-Bookmarklet/master/journals.json', false);
xmlHttp.send(null);
var JSONArray = JSON.parse(xmlHttp.responseText);
var styles = document.createElement('link');
styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('type', 'text/css');
var rando = Math.random()*1000;
styles.setAttribute('href', 'https://cdn.jsdelivr.net/gh/lsimmons2/Wiki-Science-Bookmarklet/bm_styles.css?v='+rando);
document.getElementsByTagName('head')[0].appendChild(styles);



/*GET ALL REFERENCES THAT ARE STORED IN <i> OR <a> ELEMENTS AND STORE AS STRINGS IN jArray[]*/
/*olElem is an HTMLCollection of one node- the <ol>*/
var olElem = document.getElementsByClassName('references');
/*liList is an HMTLCollection of nodes - the <li>'s*/
var liList = olElem[0].children;
/*every liList child - every <li> - is an object */
/*every <span class="reference-text"> is an HTMLCollection*/
for (var i = 0; i < liList.length; i++) {
	refText = liList[i].getElementsByClassName('reference-text')[0];
	if(refText.getElementsByTagName('i')[0] !== undefined && refText.getElementsByTagName('i')[0].firstChild.nodeType === 3){
		jArray[i] = refText.getElementsByTagName('i')[0].innerHTML;
	}
	else if(refText.getElementsByTagName('a')[0] !== undefined && refText.getElementsByTagName('a')[0].firstChild.nodeType === 3){
		jArray[i] = refText.getElementsByTagName('a')[0].innerHTML;
	}
}
jArray.sort();



/*COUNTS THE # OF TIMES EACH REFERENCE IS CITED AND STORES IN THE jObj OBJECT*/
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
	jOutput = JSONArray.filter(function(item){
		return (item.jName==jn);
	} );
	jTimes = parseFloat(jObj[jn]);
	if(jOutput.length == 1){
		if(jOutput[0].if1415 != '\u00a0'){
			availIF = parseFloat(jOutput[0].if1415);
		}
		else{
			availIF = parseFloat(jOutput[0].if13);
		}
		liArray.push(jn + ' (' + jObj[jn] + ', '+ availIF + ')');
		numerator1 = availIF * jTimes;
		numerator2 += numerator1;
		denominator += jTimes;
	}
	jCount += jObj[jn];
}
if(numerator2 == 0){
        var header = document.createElement('h');
	header.id = 'header';
	header.innerHTML= 'Woops! Either there are no scientific journal articles used as references for this Wikipedia article, or this still doesn\'t work.';
	modalText.appendChild(header);
}
else{
	var jUl = document.createElement('ul');
	for (var i = 0; i < liArray.length; i++) {
		liElem = document.createElement('li');
		liElem.innerHTML = liArray[i];
		jUl.appendChild(liElem);
	}
	header = document.createElement('h');
	header.id = 'header';
	header.innerHTML = 'Scientific journals used as references for this article(# of times cited, impact factor):';

	meanIF = numerator2/denominator;
	meanIF = meanIF.toFixed(3);
	IFElem = document.createElement('span');
	IFElem.id = 'IF';
	IFElem.innerHTML = 'Average impact factor of all journal references: ' + meanIF;

	modalText.appendChild(header);
	modalText.appendChild(jUl);
	modalText.appendChild(IFElem);
}
modalCon.appendChild(x);
modalCon.appendChild(modalText);
document.body.appendChild(modalCon);
x.onclick = function() {
	modalCon.style.display = 'none';
};
