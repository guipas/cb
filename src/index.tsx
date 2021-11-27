import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid } from './components/Grid';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return <Grid />;
  }
}

render(<App />, document.getElementById('root'));
