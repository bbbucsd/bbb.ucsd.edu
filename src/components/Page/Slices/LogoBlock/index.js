import React, { Component } from 'react';
import Block, { Section, Headline, Subheadline, Cta } from 'components/Elements/Block';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
        if (column.logo && column.logo.url) {
          return (
            <div key={`column_${index}`} className={`${style.customer}`}>
              <img alt={column.logo.url.split("_")[1].split(".")[0]} src={column.logo.url} className={ style.logo } />
            </div>
          );
        } else {
          return null;
        }
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
      <Block className={style.root} height={data.height}>
        <Section paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>
          <Headline className={style.headline}>{data.headline.text}</Headline>

          <List className={ style.container }>
            <ListItem className={ style.containerItem }>
              <div className={ style.customers }>
                {this.renderLogos(logos)}
              </div>
            </ListItem>
          </List>

          <Cta to={data.cta_link} className={style.cta} onClick={this.handleClickOpen}>{data.cta_label}</Cta>
        </Section>
      </Block>
    )
  }
}

export default LogoBlock;

// language=GraphQL
export const query = graphql`
  fragment LogoBlock on PrismicPageBodyLogoBlock {
    slice_type
    primary {
      height
      inner_padding_top
      inner_padding_bottom
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
