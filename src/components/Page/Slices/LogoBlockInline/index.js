import React, { Component } from 'react';

// Style
import style from './style.module.scss'

class LogoBlockInline extends Component {

  render() {
    const { classes, data } = this.props;

    return (
      <div className={style.root}>
        {this.props.data.logos.map((logo, i) => <div><img alt={logo.title} src={logo.file.url} className={style.logo} /></div>)}
      </div>
    )
  }
}

export default LogoBlockInline;

//export const query = graphql`
  //fragment Index on ContentfulLayoutLogoBlockInline {
    //logos {
      //title
      //file {
        //url
        //contentType
      //}
    //}
  //}
//`;
