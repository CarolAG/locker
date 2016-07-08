//check if the File API is available and call an Init() function
if (window.File && window.FileList && window.FileReader) {
	Init();
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

  var files = ev.dataTransfer.files; //FileList object thay contains a list of
  //all files available on data Transfer

}

var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', allowDrop, false);
  dropZone.addEventListener('drop', dropHandler, false);
//addEventListener takes in 3 arguments:
// document.addEventListener(event, function, useCapture)
//events reference https://developer.mozilla.org/en-US/docs/Web/Events
