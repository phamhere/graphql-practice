import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./component/BookList";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="mine">
          <h1>Peter's Reading List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
