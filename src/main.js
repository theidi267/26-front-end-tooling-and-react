import React from 'react';
import ReactDom from 'react-dom'
import Cowsay from 'react-cowsay';
import faker from 'faker';

import './style/app.scss';

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      content: '',
    };
  }

  handleClick(){
    let content = faker.name.findName();
    this.updateState(content)
  }

  updateState(content) {
    this.setState({content});
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
          <div id="contentWrapper">
          <Cowsay>{this.state.content}</Cowsay>
          </div>
          <button onClick={this.handleClick}> Click Moo </button>
        </React.Fragment>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));