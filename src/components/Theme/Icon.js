import React, { Component } from 'react';
import { Bell } from 'styled-icons/fa-regular/Bell.cjs';
import { Building } from 'styled-icons/fa-regular/Building.cjs';
import { Calendar } from 'styled-icons/fa-regular/Calendar.cjs';
import { CalendarAlt } from 'styled-icons/fa-regular/CalendarAlt.cjs';
import { CalendarCheck } from 'styled-icons/fa-regular/CalendarCheck.cjs';

// Octicons
import { Graph } from 'styled-icons/octicons/Graph.cjs';
import { MailRead } from 'styled-icons/octicons/MailRead.cjs';
import { FileZip } from 'styled-icons/octicons/FileZip.cjs';
import { Gift } from 'styled-icons/octicons/Gift.cjs';

// Material
import { GraphEq } from 'styled-icons/material/GraphicEq.cjs';
import { MailOutline } from 'styled-icons/material/MailOutline.cjs';
import { PermIdentity } from 'styled-icons/material/PermIdentity.cjs';
import { BrandingWatermark } from 'styled-icons/material/BrandingWatermark.cjs';
import { DeveloperBoard } from 'styled-icons/material/DeveloperBoard.cjs';
import { Stars } from 'styled-icons/material/Stars.cjs';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight.cjs';

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

  render() {
    if (!this.props.name) { return null; }
    switch (this.props.name.toLowerCase()) {
      case 'instagram':
        return <Instagram {...this.props} />
      case 'facebook':
        return <Facebook {...this.props} />
      case 'twitter':
        return <Twitter {...this.props} />
      case 'linkedin':
        return <Linkedin {...this.props} />
      case 'youtube':
        return null;
      case 'bell':
        return <Bell {...this.props} />
      case 'building':
        return <Building {...this.props} />
      case 'calendar':
        return <Calendar {...this.props} />
      case 'calendaralt':
        return <CalendarAlt {...this.props} />
      case 'calendarcheck':
        return <CalendarCheck {...this.props} />
      case 'chartline':
        return <ChartLine {...this.props} />
      case 'graph':
        return <Graph {...this.props} />
      case 'grapheq':
        return <GraphEq {...this.props} />
      case 'filezip':
        return <FileZip {...this.props} />
      case 'gift':
        return <Gift {...this.props} />
      case 'mailoutline':
        return <MailOutline {...this.props} />
      case 'mailread':
        return <MailRead {...this.props} />
      case 'permidentity':
        return <PermIdentity {...this.props} />
      case 'userscog':
        return <UsersCog {...this.props} />
      case 'brandingwatermark':
        return <BrandingWatermark {...this.props} />
      case 'developerboard':
        return <DeveloperBoard {...this.props} />
      case 'stars':
        return <Stars {...this.props} />
      case 'timescircle':
        return <TimesCircle {...this.props} />
      case 'keyboardarrowright':
        return <KeyboardArrowRight {...this.props} />
      default:
        return null;
    }
  }

}
