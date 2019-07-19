import React, { Component } from 'react';
import config from '../../../config';
import { Button } from 'reactstrap';
import './faqitem.css';
export default class Faqitem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: false,
      icon:false
    };
  }

  render() {
    const { showing } = this.state;
    const {icon} = this.state;
    return (
      <div >
        <Button  className ="btn-block question " 
        color="light"
          onClick={() => this.setState({ showing: !showing,icon: !icon })}
        >
        <span className ={ this.state.icon ? "cerrado" : "icon"} />
          {this.props.nombre}
        </Button>
        <div style={{ display: showing ? 'block' : 'none' }}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

// <li key={authorName}>
//               <button id={key} onClick={this.handleClick(key)}>
//                 {type}
//               </button>
//               <div className={key}  style={this.handleClick()} >{texto}</div>

//             </li>
