import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Teethsales from './Teethsales'
import Procedures from './Procedures'
import Contact from './Contact'

class App extends React.Component {

  // You dont actually need a constructor to initialize state.
  // You can use this shorthand:
  state = {
    currentPage: 'home',
  };

  navigateTo = (destination) => {
    console.log('navigating to:', destination);
    this.setState({currentPage: destination});
  }

  render(){

    let pageContent;
    if (this.state.currentPage === 'procedures') {
      pageContent = <Procedures />;
    } else if (this.state.currentPage === 'teethshop') {
      pageContent = <Teethsales />;
    } else if (this.state.currentPage === 'contact') {
      pageContent = <Contact />;
    } else {
      pageContent = <p>I am a good dentist. Let me look in your mouth.</p>;
    }
    return(
      <div className="App">
        <h1>Let Me Your Dentist. I insist.</h1>
        <hr/>
        <nav>
          <button onClick={() => this.navigateTo('home')}>Home</button> | &nbsp;
          <button onClick={() => this.navigateTo('procedures')}>Procedures</button> |&nbsp;
          <button onClick={() => this.navigateTo('contact')}>Contact Us</button> |&nbsp;
          <button onClick={() => this.navigateTo('teethshop')}>Teeth Sales</button>
        </nav>
        <br/>

        {pageContent}

        <hr/>
        <br/>
      <footer>
        &copy; 2020 Unsettling Professionals
      </footer>
    </div>
    );
  } // render()

} // class App

export default App;
