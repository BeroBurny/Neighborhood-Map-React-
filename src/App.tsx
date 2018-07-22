import * as React from 'react';
import styled from 'react-emotion';
import Map from './containers/Map';

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
          a
        </Content>
      </Root>
    );
  }
}

export default App;
