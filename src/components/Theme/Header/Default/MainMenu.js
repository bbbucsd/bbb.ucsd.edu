import React, { Fragment, Component } from 'react';
import Volunteer from './MainMenu/Volunteer';
import InsideThePrison from './MainMenu/InsideThePrison';
import HowWeWork from './MainMenu/HowWeWork';
import About from './MainMenu/About';
import Books from './MainMenu/Books';
import Contact from './MainMenu/Contact';
import FAQ from './MainMenu/FAQ';


class MainMenu extends Component {

  render() {
    let { floating, color = "#FFFFFF" } = this.props;
    return (
      <Fragment>
        <About floating={floating} color={color} />
        <HowWeWork floating={floating} color={color} />
        <Volunteer floating={floating} color={color} />
        <InsideThePrison floating={floating} color={color} />
        <Books floating={floating} color={color} />
        <FAQ floating={floating} color={color} />
        <Contact floating={floating} color={color} />
      </Fragment>
    );
  }
}

export default MainMenu;
