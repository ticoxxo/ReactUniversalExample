import React,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Layout from 'components/layout';

import Faqlist from 'components/faqlist';
import Faq from 'components/faq';
import '../components/faqlist/faqlist.css';


export default class Index extends Component {
  

  render(){
  
    return(
      <Layout>
       
          
            <Faqlist />
        
      </Layout>

    )
  }
}
  
