//check if the File API is available and call an Init() function
if (window.File && window.FileList && window.FileReader) {
	Init();
}

//initialize
function allowDrop (ev){
  ev.preventDefault();
  ev.stopPropagation();

}

function dropHandler (ev){
  ev.preventDefault();
  ev.stopPropagation();

  var files = ev.dataTransfer.files; //FileList object.

}

var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', allowDrop, false);
  dropZone.addEventListener('drop', dropHandler, false);
