import React, { Component } from 'react';

// Elements
import List from '@material-ui/core/List';

// Style
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class BlockContainer extends Component {
  constructor(props) {
    super(props);
    this.blocks = React.Children.toArray(props.children);

    if (props.direction && !!props.direction.match(/left/i)) {
      this.blocks.reverse();
    }
  }

  render() {
    const { children, reducedHeight } = this.props;

    return (
      <div className={cx({ root: true, reducedHeight: reducedHeight }) }>
        <List className={ style.container }>
          { this.blocks }
        </List>
      </div>
    )
  }
}

export default BlockContainer;
