//main.js
 //var style = require('./style.css');
// var greeter = require('./Greeter.js');
//document.getElementById('root').appendChild(greeter());


//var pp = new greeter.Greeter()
//pp.say()

import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import Hellok from './Hellok';

class Hello extends React.Component {

constructor(props){
	super(props)
	this.state = {
		name:'ccc',
		color:'red'
	}
  this.props.name = "yy123"
	this.fncc = this.fncc.bind(this)
	console.log(this)
}

fncc(){
		console.log(this)
		this.setState(prevState=>({
		name : 'vvv',
		color:'blue'
		}))
    this.props.name = this.state.name
}

render() {
		let text = this.state.name
    let yy = this.props.name
		let color =this.state.color
		return <div>
		<h1 style={{color}}>{text}</h1>
    <h3>{yy}</h3>
		<Hellok />
		<span onClick={this.fncc}>wowow</span>
		</div>
	}

}




// ReactDOM.render(<Hello	/>, document.getElementById('root'));
module.exports = Hello;
