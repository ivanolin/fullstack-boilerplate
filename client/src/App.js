import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider, Query, Mutation } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { connect } from "./queries.js";

/**
* Create new client 
*/
const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

/**
 * 
 */
class App extends Component {
  render() {

    //Get time
    let today = new Date();
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:${today.getMilliseconds()}`

    //Create-react-app starter code with added query
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Query query={connect} variables={{ time: time }}>
            {({ data, loading, error }) => {

              //render error
              if (error)
                return (<p className="App-intro">ERROR</p>);

              //render loader
              if (loading)
                return (<p className="App-intro">LOADING</p>)

              //render connection log
              if (data)
                return (<p className="App-intro">{data.connect}</p>);

            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
