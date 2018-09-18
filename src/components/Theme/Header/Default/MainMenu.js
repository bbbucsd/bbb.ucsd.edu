import React, { Fragment, Component } from 'react';
import StartHere from './MainMenu/StartHere';
import About from './MainMenu/About';
import Learn from './MainMenu/Learn';
//import Coaching from './MainMenu/Coaching';
import Resources from './MainMenu/Resources';
import Contact from './MainMenu/Contact';


class MainMenu extends Component {

  render() {
    let { floating, color = "#FFFFFF" } = this.props;
    return (
      <Fragment>
        <StartHere floating={floating} color={color} />
        <About floating={floating} color={color} />
        <Learn floating={floating} color={color} />
        <Resources floating={floating} color={color} />
        {/*
        <Coaching floating={floating} color={color} />
        */}
        <Contact floating={floating} color={color} />
      </Fragment>
    );
  }
}

export default MainMenu;
