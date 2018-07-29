import React, { Component } from 'react';

// Elements
import List from '@material-ui/core/List';

// Style
import style from './style.module.scss'

class BlockContainer extends Component {
  render() {
    const { children } = this.props

    return (
      <div className={ style.root }>
        <List className={ style.container }>
          { children }
        </List>
      </div>
    )
  }
}

export default BlockContainer;