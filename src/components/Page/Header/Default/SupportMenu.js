import React, { Component } from 'react';
import SubNav, { SubNavGroup, SubNavItem } from 'components/Theme/SubNav';
import Button from 'components/Theme/Button';
import Styles, { styled, css} from 'components/Theme/Styles';
import { Email } from 'styled-icons/material/Email.cjs'
import { Call } from 'styled-icons/material/Call.cjs'

const FastestRouteItem = styled.div`
  height: 20px;
  margin-bottom: 35px;
`;

const GetHelpButton = styled(Button)`
  margin-right: 15px;
`;

const Icon = `
  height: 16px;
  width: 16px;
  margin-right: 5px;
  position: relative;
  top: 2px;
  fill: #2F363C;
`;

const EmailIcon = styled(Email)`
  ${Icon}
`;

const PhoneIcon = styled(Call)`
  ${Icon}
`;



class SupportMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <SubNav text="Support" floating={floating} menuWidth={480} offsetY={85} padding={40}>
        <SubNavGroup>
          <SubNavItem>
            <SubNavGroup>
              <SubNavItem>
                <FastestRouteItem>
                  <GetHelpButton to="/" small={true}>Get Help</GetHelpButton>
                  For the fastest and easiest way to get help.
                </FastestRouteItem>
              </SubNavItem>
            </SubNavGroup>
          </SubNavItem>
          <SubNavItem>
            <SubNavGroup title="Email Us">
              <SubNavItem><EmailIcon /><a href="mailto: support@proluxe.com">support@proluxe.com</a>
              </SubNavItem>
            </SubNavGroup>
            <SubNavGroup title="Call Us">
              <SubNavItem><PhoneIcon /><a href="callto:1-800-624-6717">1.800.624.6717</a></SubNavItem>
            </SubNavGroup>
          </SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

export default SupportMenu;
