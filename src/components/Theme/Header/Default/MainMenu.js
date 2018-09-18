import React, { Fragment, Component } from 'react';
import Volunteer from './MainMenu/Volunteer';
import About from './MainMenu/About';
import Contact from './MainMenu/Contact';


class MainMenu extends Component {

  render() {
    let { floating, color = "#FFFFFF" } = this.props;
    return (
      <Fragment>
        <About floating={floating} color={color} />
        <Volunteer floating={floating} color={color} />
        <Contact floating={floating} color={color} />
      </Fragment>
    );
  }
}

export default MainMenu;
