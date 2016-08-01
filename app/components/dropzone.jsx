import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class DropZone extends React.Component{
  constructor(props){
    super(props);
    if (window.File && window.FileList && window.FileReader && window.Blob) {
  		console.log('All file APIs are supported')
  	} else {
  		alert('The File APIs are not fully supported in this browser.');
  	}
  }

  allowDrop(ev){
    ev.preventDefault();
    ev.stopPropagation();
    ev.dataTransfer.dropEffect = 'copy'
    // dataTransfer.dropEffect can only be given one of 4 string values: link,
    //copy, move or none. This is feedback given to the user
    //https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect
  }

  dropHandler(ev){
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
  componentDidMount(){
    window.addEventListener('dragover', this.allowDrop)
    window.addEventListener('drop', this.dropHandler)
  }

  render(){
    return (
      <div>
      <div id ={this.props.dropZone} > Drop Files Here- React</div>
        <output id ="list"></output>
        <div></div>
      </div>
    )
  }
}

export default DropZone;
// There are two ways to add the event listeners drop and dragover. One was is
//adding the lifecycle Component componentDidMount and doing it as above.
//Another
//is adding the event listeners to the div itself, but then you have to use the
//React evenlistener words for drop and dragover, which are onDragOver and onDrop.
//and bind the methods,
//As shown below
//< div id= {this.props.dropZone} onDragOver ={this.allowDrop.bind(this)} onDrop ={this.dropHandler.bind(this)}></div>
