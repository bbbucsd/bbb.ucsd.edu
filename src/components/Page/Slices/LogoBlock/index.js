import React, { Component } from 'react';

// Elements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from 'components/Elements/Button/index';

// Style
import style from './style.module.scss'

class LogoBlock extends Component {

  createMatrix(logos) {
    let group = [];
    let count = 0;
    logos.forEach((logo, index) => {
      if (index >= 3 && index % 3 === 0) { count++; }
      group[count] = group[count] || [];
      group[count].push(logo)
    });
    return group;
  }

  renderLogos(logos) {
    if (!logos.length) { return null; }
    const matrix = this.createMatrix(logos);
    return matrix.map((row, index) => {
      let columns = row.map((column, index) => {
        return (
          <div key={`column_${index}`} className={`${style.customer} ${style.border}`}>
            <img alt={column.logo.url.split("_")[1].split(".")[0]} src={column.logo.url} className={ style.logo } />
          </div>
        );
      });
      return (
        <div key={`row_${index}`} className={` ${style.row} ${index === 0 ? style.topRow : ''}`}>
          {columns}
        </div>
      );
    });
  }

  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const logos = slice.items;

    return (
      <div className={style.root}>
        <h1 className={style.headline}>{data.headline.text}</h1>
        <List className={ style.container }>
          <ListItem className={ style.containerItem }>
            <div className={ style.customers }>
              {this.renderLogos(logos)}
            </div>
          </ListItem>
        </List>

        <Button to={data.cta_link && data.cta_link.url} text={data.cta_label} size="small" />
      </div>
    )
  }
}

export default LogoBlock;

export const query = graphql`
  fragment LogoBlock on PrismicPageBodyLogoBlock {
    primary {
      headline {
        text
      }
      cta_link {
        url
      }
      cta_label
    }
    items {
      logo {
        url
      }
    }
  }
`;
