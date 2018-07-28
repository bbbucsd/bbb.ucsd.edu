import React, { Component } from 'react';
import Validator from 'utils/validator';

// Elements
import ListItem from '@material-ui/core/ListItem';
import Video from 'components/Elements/Video'

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class Block extends Component {

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
  }

  render() {
    const { children, src } = this.props

    return (
      <ListItem className={cx({ containerItem: true, image: this.isImage })}
                style={ this.inlineStyle }>
        { this.isVideo ? <Video src={src} /> : children }
      </ListItem>
    )
  }
}

export BlockContainer from './BlockContainer'
export default Block;