'use strict'
//const readFile = require('readFile.js')

	//check if the File API is available and call an Init() function
	if (window.File && window.FileList && window.FileReader && window.Blob) {
		console.log('All file APIs are supported')
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}

	//initialize
	function allowDrop (ev){
	  ev.preventDefault();
	  ev.stopPropagation();
		ev.dataTransfer.dropEffect = 'copy'
		// dataTransfer.dropEffect can only be given one of 4 string values: link,
		//copy, move or none. This is feedback given to the user
		//https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect
	}

	function dropHandler (ev){
	  ev.preventDefault();
	  ev.stopPropagation();
	  const files = ev.dataTransfer.files; //FileList object that contains a list of
	  //all files available on data Transfer
		console.log('files🚗', files);
		//console.log('readFile',readFile)

		// files is a FileList of File objects. List some properties.
		const output = [];
		
		for (var i = 0,f; f = files[i]; i++) {
			//creating an output string for user to see that gives some info of file
			//they've dropped
			output.push('<li><strong>', escape(f.name),'</strong>',' (', f.type || 'n/a', ') - ',
			f.size, 'bytes, last modified: ', f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString(): 'n/a',
		'</li>');
		}
		//escape deprecated
		document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
	}

	const dropZone = document.getElementById('dropZone');
	  dropZone.addEventListener('dragover', allowDrop, false);
	  dropZone.addEventListener('drop', dropHandler, false);
	//addEventListener takes in 3 arguments:
	// document.addEventListener(event, function, useCapture)
	//events reference
