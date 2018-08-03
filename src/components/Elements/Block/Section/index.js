import React, { Component } from 'react';
import Validator from 'utils/validator';
import Video from 'components/Elements/Video'
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class Section extends Component {

  setAttrs() {
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
  }

  render() {
    this.setAttrs()

    const { children, className, src } = this.props

    return (
      <div className={`${cx({ root: true, image: this.isImage })} ${className}`}
                style={ this.inlineStyle }>
        { this.isVideo ? <Video src={src} /> : children }
      </div>
    )
  }
}

export default Section;