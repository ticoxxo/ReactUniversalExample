import React, { Component } from 'react';
import config from '../../../config';
import Faqitem from 'components/faqitem';
import './faq.css';
export default class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: false,
    };

    
  }

 

  render() {
    const { showing } = this.state;
    const type = this.props.value;
    const mapped =
      type === 'boletos'
        ? config.boletos
        : type === 'paqueteria'
        ? config.paqueteria
        : type === 'compras'
        ? config.compras
        : type === 'abordando'
        ? config.abordando
        : 'boletos';

    return (
      <ul>
        {mapped.map(faq => {
          const { key, authorName, texto } = faq;
          let props = {
            llave: key,
            nombre: authorName,
            text: texto,
          };
          return (
            <li  className="question-wrapper" key={authorName}>
              <Faqitem {...props} />
            </li>
          );
        })}
      </ul>
    );
  }
}
