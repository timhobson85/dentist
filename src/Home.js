import React from 'react';

class Home extends React.Component {

  // You dont actually need a constructor to initialize state.
  // You can use this shorthand:
  state = {
    searchText: ''
  };

  handleInput = (event) => {
    // console.log(event.target.value);
    this.setState({ searchText: event.target.value })
  }

  handleSubmit = () => {
    const route = `/procedures/search/${ this.state.searchText }`
    console.log('new route:', route);
    this.props.history.push( route )
  }

  render(){

    return (
      <div>
        <input type="text" onChange={ this.handleInput } />
        <button onClick={ this.handleSubmit }>Search Procedures</button>
        <p>I am a good dentist. Let me look in your mouth.</p>
      </div>
    );

  } // render
} // Home

export default Home;
