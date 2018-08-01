import React, { Component } from 'react';
import processHtml from 'utils/processHTML'
import ReactHtmlParser from 'react-html-parser'
import PrismicDOM from 'prismic-dom'
import style from './style.module.scss'
import _ from 'lodash';

class RichText extends Component {

  constructor(props) {
    super(props)
    this.state = { body: props.body.html }
  }

  componentDidMount() {
    if (_.isArray(this.props.body)) {
      this.setState({body: PrismicDOM.RichText.asHtml(this.props.body)})
    }
  }

  render() {
    return (
      <div className={style.content}>
        { ReactHtmlParser((this.state.body || this.props.children), { transform: processHtml }) }
      </div>
    );
  }
}


export default RichText;
