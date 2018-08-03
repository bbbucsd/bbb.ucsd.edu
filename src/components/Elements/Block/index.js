import React, { Component } from 'react';
import List from '@material-ui/core/List';
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class Block extends Component {
  orderChildren() {
    this.blocks = React.Children.toArray(this.props.children);

    if (this.props.direction && !!this.props.direction.match(/left/i)) {
      this.blocks.reverse();
    }

    return this.blocks;
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
        { this.orderChildren() }
      </div>
    )
  }
}

export Headline from './Headline'
export Subheadline from './Subheadline'
export Section from './Section'
export Cta from './Cta'
export RichText from './RichText'
export default Block;
