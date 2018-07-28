import React, { Component } from 'react';
import Button from 'components/Elements/Button/index';

// Style
import style from './style.module.scss'

class StatementBlock extends Component {

  headlineColor() {
    if (this.props.slice.primary.headline_color !== '') {
      return { color: this.props.slice.primary.headline_color };
    }
  }

  backgroundColor() {
    if (this.props.slice.primary.background_color !== '') {
      return { backgroundColor: this.props.slice.primary.background_color };
    }
  }

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <div className={`${style.statementCTA} wrapper`} style={ this.backgroundColor() }>
        <div>
          <h2 className={style.headline} style={ this.headlineColor() }>{data.headline.text}</h2>
          <Button to={data.cta_link.url} text={data.cta_label} className={style.statementButton}></Button>
        </div>
      </div>
    );
  }
}

export default StatementBlock;

export const query = graphql`
  fragment StatementBlock on PrismicPageBodyStatementBlock {
    primary {
      background_color
      headline_color
      headline {
        text
      }
      cta_label
      cta_link {
        url
      }
    }
  }
`;
