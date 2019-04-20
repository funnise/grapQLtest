import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import graphQl from './components/graphQl'
import { Query } from 'react-apollo';
import { query } from './components/query'

class App extends Component {
  componentDidMount(){
    graphQl()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Query query={query}>
          {({ loading, data }) => {
            if (loading) return <p>Loading...</p>;
            const repositories = data.organization.repositories.nodes;
            console.log(repositories);
            return (
              <ul>
                {repositories.map(repo => (
                  <li key={repo.id}>
                    <a href={repo.url}>{repo.name}</a>
                    <button>{repo.stargazers.totalCount} Star</button>
                  </li>
                ))}
              </ul>
            );
          }}
      </Query>
        </header>
      </div>
    );
  }
}

export default App;
