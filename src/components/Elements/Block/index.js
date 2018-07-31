import React, { Component } from 'react';
import List from '@material-ui/core/List';
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class Block extends Component {
  constructor(props) {
    super(props);
    this.blocks = React.Children.toArray(props.children);

    if (props.direction && !!props.direction.match(/left/i)) {
      this.blocks.reverse();
    }
  }

  backgroundColor() {
    if (this.props.color !== '') {
      return { backgroundColor: this.props.color };
    }
  }

  render() {
    const { reducedHeight, className  } = this.props;

    return (
      <div className={`${className} ${cx({ reducedHeight: reducedHeight, container: true })}`} style={ this.backgroundColor() }>
        { this.blocks }
      </div>
    )
  }
}

export Headline from './Headline'
export Subheadline from './Subheadline'
export Section from './Section'
export Cta from './Cta'
export default Block;
