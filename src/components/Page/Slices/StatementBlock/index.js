import React, { Component } from 'react';
import Block, { Section, Headline, Subheadline, Cta } from 'components/Elements/Block';
import style from './style.module.scss';
import Modal from 'components/Page/Modal';


class StatementBlock extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block color={data.background_color} reducedHeight={data.height && !!data.height.match(/Reduced/i)}>
        <Section className={style.root}>
          <Modal
            data={data.cta_link}
            open={this.state.open}
            onClose={this.handleClose}
          />
          <Headline color={data.headline_color} text={data.headline} />
          <Subheadline color={data.subheadline_color} text={data.subheadline} />
          <Cta to={data.cta_link} onClick={handleClickOpen} className={style.statementButton}>{data.cta_label}</Cta>
        </Section>
      </Block>
    );
  }
}

export default StatementBlock;

export const query = graphql`
  fragment StatementBlock on PrismicPageBodyStatementBlock {
    primary {
      height
      background_color
      headline_color
      headline {
        text
      }
      subheadline {
        text
      }
      cta_label
      cta_link {
        url
        document {
          ...Modal
        }
      }
    }
  }
`;
