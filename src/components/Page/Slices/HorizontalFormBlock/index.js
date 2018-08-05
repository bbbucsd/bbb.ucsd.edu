import React, { Component } from 'react';
import Block, { Section, Headline, Subheadline, HorizontalForm } from 'components/Elements/Block';
import style from './style.module.scss';
import { connect } from 'airlytics';

class HorizontalFormBlock extends Component {

  state = {
  }

  onSubmit = () => {
    this.setState({
      hasSubmitted: true
    });
  }

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    if (this.state.hasSubmitted) {
      return (
        <Block color={data.background_color} reducedHeight={data.height && !!data.height.match(/Reduced/i)}>
          <Section className={style.root}>
            <Headline color={data.headline_color}>
              {data.success_message}
            </Headline>
          </Section>
        </Block>
      );
    } else {
      if(this.props.subscriber.current.anonymous) {
        return (
          <Block color={data.background_color} reducedHeight={data.height && !!data.height.match(/Reduced/i)}>
            <Section className={style.root}>
              <Headline color={data.headline_color} text={data.headline} />
              <Subheadline color={data.subheadline_color} text={data.subheadline} />
              <HorizontalForm onSubmit={this.onSubmit} buttonLabel={data.cta_label} />
            </Section>
          </Block>
        );
      } else {
        return null;
      }
    }
  }
}

export default connect()(HorizontalFormBlock);

// export const query = graphql`
//   fragment HorizontalFormBlock on PrismicPageBodyHorizontalFormBlock {
//     slice_type
//     primary {
//       height
//       background_color
//       headline_color
//       success_message
//       headline {
//         text
//       }
//       subheadline {
//         text
//       }
//       cta_label
//     }
//   }
// `;
