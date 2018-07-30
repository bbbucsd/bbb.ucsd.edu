import React, { Component } from 'react';
import Validator from 'utils/validator';
import Video from 'components/Elements/Video'

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class HeroWrapper extends Component {
  constructor(props) {
    super(props)

    // set defaults
    this.inlineStyle = {
      backgroundColor: 'none',
      backgroundImage: 'none',
    }

    // set params
    this.hasBackgroundColor = (this.props.backgroundColor != null);
    this.hasAsset = (this.props.src && this.props.src);
    this.isVideo = (this.props.src && Validator.isVideo(this.props.src));
    this.isImage = (this.props.src && Validator.isImage(this.props.src));


    // change inline style
    this.isImage ? this.inlineStyle.backgroundImage = `url('${this.props.src}')` : false
    this.hasBackgroundColor ? this.inlineStyle.backgroundColor = this.props.backgroundColor : false

    // alignment
    if (props.alignment) {
      this.centerAlign = !!props.alignment.match(/Center/i)
      this.leftAlign = !!props.alignment.match(/Left/i)
      this.rightAlign = !!props.alignment.match(/Right/i)
    } else {
      this.centerAlign = true
    }
  }
  render() {
    const { children, reducedHeight, src } = this.props;

    return (
      <div style={ this.inlineStyle } className={cx({ root: true,
                                                      reducedHeight: reducedHeight,
                                                      centerAlign: this.centerAlign,
                                                      leftAlign: this.leftAlign,
                                                      rightAlign: this.rightAlign }) }>
        { this.isVideo && <Video src={src} /> }
        {children}
      </div>
    );
  }
}


export default HeroWrapper;
