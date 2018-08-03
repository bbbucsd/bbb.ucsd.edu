import React, { Component } from 'react';
import ThemeRichText from 'components/Theme/Typography/RichText'

// Style
import style from './style.module.scss';

class RichText extends Component {
  render() {
    const { body, color } = this.props;

    return (
      <div>
        <ThemeRichText style={{ color: color }} className={style.root} body={ body } />
      </div>
    )
  }
}

export default RichText;
