import React, { Component } from 'react';
import Validator from 'utils/validator';
import Video from '../Video'
import Styles, { styled, css} from '../Styles';

const featuresMixin = (version) => {
  return css`
    ${props => props.hidden && props.hidden[version] && Styles.hidden(props.hidden[version])}
    ${props => props.background && props.background[version] && Styles.backgroundColor(props.background[version])}
    ${props => props.background && props.background[version] && Styles.backgroundImage(props.background[version])}
  `
}

const desktopMixin = css`
  ${featuresMixin('desktop')}
`;

const mobileMixin = css`
  ${featuresMixin('mobile')}    
  text-align: center;
  background-color: #333; 
  
  h2 { 
    color:#ffffff !important; 
  }
  
  h3 { 
    color:#ffffff !important; 
  }   
`;

const SectionWrapper = styled.div`
  width:auto;
  margin-right:0;
  display:flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 60px;
  text-align: left;
  font-weight: 300;
  font-style: normal;
  overflow: hidden;
  position:relative;
  ${ Styles.media.mobile(...mobileMixin) }
  ${ Styles.media.desktop(...desktopMixin) }
  ${ Styles.media.tablet(...mobileMixin) }
  
  > * {
    width:100%;
  }
`;

class Section extends Component {

  isVideoCapable() {
    return this.props.background && this.props.background.desktop && Validator.isVideo(this.props.background.desktop)
  }

  render() {
    const { children } = this.props

    return (
      <SectionWrapper {...this.props}>
        { this.isVideoCapable() ? <Video src={this.props.background.desktop} /> : null }
        { children }
      </SectionWrapper>
    )
  }
}

export default Section;