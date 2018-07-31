import React, { Component } from 'react';

// Elements
import Block, { Section } from 'components/Elements/Block';
import Testimonial from 'components/Elements/Testimonial';

// Style
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class DoubleTestimonialBlock extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const testimonialOne = data.testimonial_one.document[0].data;
    const testimonialTwo = data.testimonial_two.document[0].data;

    return (
      <Block reducedHeight>
        <Section backgroundColor={data.background_color}>
          <Testimonial data={testimonialOne} />
        </Section>

        <Section backgroundColor={data.background_color}>
          <Testimonial data={testimonialTwo} />
        </Section>
      </Block>
    )
  }
}

export default DoubleTestimonialBlock;

export const query = graphql`
  fragment DoubleTestimonialBlock on PrismicPageBodyDoubleTestimonialBlock {
    slice_type
    primary {
      background_color
      testimonial_one {
        document {
          data {
            title
            full_name {
              text
            }
            website {
              url
            }
            picture {
              url
            }
            company {
              text
            }
            company_logo {
              url
            }
            role_occupation
            body {
              text
            }
          }
        }
      }
      testimonial_two {
        document {
          data {
            title
            full_name {
              text
            }
            website {
              url
            }
            picture {
              url
            }
            company {
              text
            }
            company_logo {
              url
            }
            role_occupation
            body {
              text
            }
          }
        }
      }
    }
  }
`;

