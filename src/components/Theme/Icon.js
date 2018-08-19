import React, { Component } from 'react';
import { Bell } from 'styled-icons/fa-regular/Bell.cjs';
import { Building } from 'styled-icons/fa-regular/Building.cjs';
import { Calendar } from 'styled-icons/fa-regular/Calendar.cjs';
import { CalendarAlt } from 'styled-icons/fa-regular/CalendarAlt.cjs';
import { CalendarCheck } from 'styled-icons/fa-regular/CalendarCheck.cjs';

// Octicons
import { Graph } from 'styled-icons/octicons/Graph.cjs';

// Material
import { GraphEq } from 'styled-icons/material/GraphicEq.cjs';
import { MailOutline } from 'styled-icons/material/MailOutline.cjs';
import { PermIdentity } from 'styled-icons/material/PermIdentity.cjs';
import { BrandingWatermark } from 'styled-icons/material/BrandingWatermark.cjs';
import { DeveloperBoard } from 'styled-icons/material/DeveloperBoard.cjs';
import { Stars } from 'styled-icons/material/Stars.cjs';

// Font Awesome Solid
import { ChartLine } from 'styled-icons/fa-solid/ChartLine.cjs';
import { UsersCog } from 'styled-icons/fa-solid/UsersCog.cjs';
import { TimesCircle } from 'styled-icons/fa-solid/TimesCircle.cjs';

// Font Awesome Brands
import { Instagram } from 'styled-icons/fa-brands/Instagram.cjs';
import { Facebook } from 'styled-icons/fa-brands/Facebook.cjs';
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin.cjs';


export default class Icon extends Component {

  constructor(props) {
    super(props);
  }

  renderIcon() {
    switch (this.props.name.toLowerCase()) {
      case 'instagram':
        return Instagram;
      case 'facebook':
        return Facebook;
      case 'twitter':
        return Twitter;
      case 'linkedin':
        return Linkedin;
      case 'youtube':
        return null;
      case 'bell':
        return Bell;
      case 'building':
        return Building;
      case 'calendar':
        return Calendar;
      case 'calendaralt':
        return CalendarAlt;
      case 'calendarcheck':
        return CalendarCheck;
      case 'chartline':
        return ChartLine;
      case 'graph':
        return Graph;
      case 'grapheq':
        return GraphEq;
      case 'mailoutline':
        return MailOutline;
      case 'permidentity':
        return PermIdentity;
      case 'userscog':
        return UsersCog;
      case 'brandingwatermark':
        return BrandingWatermark;
      case 'developerboard':
        return DeveloperBoard;
      case 'stars':
        return Stars;
      case 'timescircle':
        return TimesCircle;
      default:
        return null;
    }
  }

  render() {
    if (!this.props.name) { return null; }
    let icon = this.renderIcon();
    if (icon) {
      return React.createElement(icon, ...this.props);
    } else {
      return null;
    }
  }

}
