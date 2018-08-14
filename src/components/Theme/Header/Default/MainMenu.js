import React, { Fragment, Component } from 'react';
import Styles, { styled, css} from 'components/Theme/Styles';
import StartHere from './MainMenu/StartHere';
import About from './MainMenu/About';
import Coaching from './MainMenu/Coaching';
import Resources from './MainMenu/Resources';
import Contact from './MainMenu/Contact';


class MainMenu extends Component {

  render() {
    const { floating } = this.props
    return (
      <Fragment>
        <StartHere floating={floating} />
        <About floating={floating} />
        <Coaching floating={floating} />
        <Resources floating={floating} />
        <Contact floating={floating} />
      </Fragment>
    );
  }
}

export default MainMenu;
