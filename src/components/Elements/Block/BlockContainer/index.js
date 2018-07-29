import React, { Component } from 'react';

// Elements
import List from '@material-ui/core/List';

// Style
import style from './style.module.scss'

class BlockContainer extends Component {
  constructor(props) {
    super(props)
    this.blocks = React.Children.toArray(props.children)

    if (!!props.direction.match(/left/i)) {
      this.blocks.reverse()
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={ style.root }>
        <List className={ style.container }>
          { this.blocks }
        </List>
      </div>
    )
  }
}

export default BlockContainer;