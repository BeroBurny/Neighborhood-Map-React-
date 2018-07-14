import * as React from 'react';
import styled from 'react-emotion';
import './App.css';

import Map from './containers/Map';
import logoSvg from './logo.svg';

const Root = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const Content = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
`;

class App extends React.Component {
  public render() {
    return (
      <Root>
        <Map />
        <Content>
          <div className="App">
            <header className="App-header">
              <img src={logoSvg} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
          </div>
        </Content>
      </Root>
    );
  }
}

export default App;
