import React, { Component } from 'react';
import logo from './logo.svg';
import Headline from './components/Headline';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: ''
    }
  }
  componentDidMount() {
    fetch(`/helloworld`)
      .then(res => res.json())
      .then(data => this.setState({ 
        title: data.data[0].primary_string,
        subtitle: data.subtitle 
      }))
      .catch(err => err);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Headline title={this.state.title} subtitle={this.state.subtitle}/>
          <h1> It's a MERN world</h1>
        </header>
      </div>
    );
  }
}

export default App;

/* App.js by Group 3 Inc.

In this file:
* We build the App class that is rendered by the ReactDOM method within index.js 

* We create the application state. The App component owns the state within our application.

* calls the componentDidMount() lifecycle method to fetch data from our API and update our state's properties with the data from the response 

* Renders the html container that is used as the parent container throughout the application.

- ML, 12/8/2021

*/