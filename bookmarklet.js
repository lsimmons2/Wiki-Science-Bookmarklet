	var olElem;
	var liList;
	var iElem;
	var jArray = [];
	var jObj = {};
	var jName;
	var message = '';
	var refText;
	var number = 0;
	var modal;
	var text;
	var styles = document.createElement('link');
	styles.setAttribute('rel', 'stylesheet');
	styles.setAttribute('href', 'https://rawgit.com/lsimmons2/Wiki-Science-Bookmarklet/master/bm_styles.css');
	styles.setAttribute('type', 'text/css');
	document.getElementsByTagName('head')[0].appendChild(styles);


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

	modal = document.createElement('div');
	modal.className = 'modal';
	text = document.createTextNode(message);
	modal.appendChild(text);
	console.log(modal);
	document.body.appendChild(modal);


	/*if(number == 0){
		alert('No scientific journals are used as references for this article.')
	}
	else{
		alert('Scientific journals used as references for this article(# of times cited):\n' + message);
	}
	console.log(number);*/