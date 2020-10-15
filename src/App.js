import React, { Component } from 'react';
import Header from './components/header'
import Jumbo from './components/jumbo';
import Body from './components/mainbody';
import Blog from './components/blog'

class App extends Component {
  constructor() {
    super();
    this.pages = ['Home', 'About', 'Blog', 'Links'];
    this.state = {
      currentPage: 0
    }
    this.setPage = this.setPage.bind(this)
  }

setPage(newPageNum) {
  this.setState({ currentPage: newPageNum })
}

  render() {
    return (
      <div className="App container-fluid">
        <Header
          pages={this.pages}
          currentPage={this.state.currentPage}
          setPage={this.setPage}
        />
        <Jumbo />
        <Body />
        <Blog />
      </div>
    );
  }
}

export default App;
