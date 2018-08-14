import React, { Fragment, Component } from 'react';
import Styles, { styled, css} from 'components/Theme/Styles';
import ProductMenu from './DropDownMenu/ProductMenu'
import IndustriesMenu from './DropDownMenu/IndustriesMenu'
import SupportMenu from './DropDownMenu/SupportMenu'
import HowToBuyMenu from './DropDownMenu/HowToBuyMenu'


class DropDownMenu extends Component {

  render() {
    const { floating } = this.props
    return (
      <Fragment>
        <ProductMenu floating={floating} />
        <IndustriesMenu floating={floating} />
        <SupportMenu floating={floating} />
        <HowToBuyMenu floating={floating} />
      </Fragment>
    );
  }
}

export default DropDownMenu;
