import React, { Fragment, Component } from 'react';
import Styles, { styled, css} from 'components/Theme/Styles';
import About from './MainMenu/About';
import Volunteer from './MainMenu/Volunteer';
import Resources from './MainMenu/Resources';
import Contact from './MainMenu/Contact';


class MainMenu extends Component {

  render() {
    const { floating } = this.props
    return (
      <Fragment>
        <About floating={floating} />
        <Volunteer floating={floating} />
        <Resources floating={floating} />
        <Contact floating={floating} />
      </Fragment>
    );
  }
}

export default MainMenu;
