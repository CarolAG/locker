import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import DropZone from './dropzone.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arr: []
    }
  }

  iterate(){
    var arr = []
    for (var i = 0; i < 6; i++){
      arr.push(i);
    }
    this.setState({arr: arr})
  }

  render(){
    return (
      <div>
      <div>{this.state.arr}</div>
      <DropZone dropZone = {"dropZone"}></DropZone>
      <button onClick ={this.iterate.bind(this)}> Tiny</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("content"))
