import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Style
import style from './style.module.scss';


class SubNavGroup extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <ListItem className={style.navGroup}>
        <List className={style.navItemGroup} >
          { title != null ? <ListItem className={style.navGroupTitle}>{ title }</ListItem> : '' }
          { children }
        </List>
      </ListItem>
    );
  }
}

export default SubNavGroup;
