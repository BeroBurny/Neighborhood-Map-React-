import * as React from 'react';
import styled from 'react-emotion';
import { MdMenu } from 'react-icons/lib/md';
import Map from './containers/Map';
import SideMenu from './containers/SideMenu';
import { Route, Switch } from 'react-router';

const Root = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

interface SideMenuIconProps {
  visible: boolean;
}

const SideMenuIcon = styled('div')`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: rgba(220,220,220,0.51);
  border: 1px solid rgba(170,164,161,0.47);
  border-radius: 3px;
  opacity: ${(props: SideMenuIconProps) => props.visible ? 1 : 0};
  transition: opacity 0.3s linear;
`;

const Logo = styled('h1')`
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 50px;
  color: #fff;
  margin: 0;
  text-shadow:
    0 1px 3px #111,
    -1px 1px 3px #111,
    1px 1px 3px #111,
    3px 4px 5px #111;
`;

interface State {
  isOpenMenu: boolean;
}

class App extends React.Component<{}, State> {
  public state = {
    isOpenMenu: false,
  };

  public handleOpenSideMenu = () => {
    this.setState({ isOpenMenu: true });
  }

  public handleCloseSideMenu = () => {
    this.setState({ isOpenMenu: false });
  }

  public render() {
    const { isOpenMenu } = this.state;
    return (
      <Root>
        <Switch>
          <Route path="/:ID" component={Map}/>
          <Route path="/" component={Map}/>
        </Switch>
        {process.env.REACT_APP_MAPBOXACCESSTOKEN ? <Logo>Asian Food</Logo> : null}
        <SideMenuIcon onClick={this.handleOpenSideMenu} visible={!isOpenMenu}>
          <MdMenu size={40} />
        </SideMenuIcon>
        <SideMenu isOpen={isOpenMenu} onClose={this.handleCloseSideMenu}/>
      </Root>
    );
  }
}

export default App;
