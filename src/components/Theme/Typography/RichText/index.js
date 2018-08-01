import React, { Component } from 'react';
import processHtml from 'utils/processHTML'
import ReactHtmlParser from 'react-html-parser'
import PrismicDOM from 'prismic-dom'
import style from './style.module.scss'

class RichText extends Component {
  bodyText() {
    return this.props.body.html || PrismicDOM.RichText.asHtml(this.props.body)
  }

  render() {
    return (
      <div className={style.content}>
        { ReactHtmlParser((this.bodyText() || this.props.children), { transform: processHtml }) }
      </div>
    );
  }
}


export default RichText;
