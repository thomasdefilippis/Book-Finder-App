import React from 'react';
import Header from './components/Header';
import ContainBody from './components/Container';

export default class App extends React.Component{
  

  render(){
    return(
      <div className="App">
        <header>
          <Header />
        </header>
        <div>
          <ContainBody handleChange={this.handleChange} callApi={this.callApi}/>
        </div>
        
      </div>
    )
  }
}




