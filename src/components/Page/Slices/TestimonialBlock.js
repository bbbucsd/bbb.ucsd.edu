import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Testimonial from 'components/Theme/Testimonial';

class TestimonialBlock extends Component {

  render() {
    const { background_color,
            align,
            justify,
    } = this.props.slice.primary;

    const testimonial = this.props.slice.primary.testimonial.document[0].data;

    return (
      <Block color={background_color} height={'Medium'}>
        <Section align={align} justify={justify}>
          <Testimonial backgroundColor={background_color} data={testimonial} />
        </Section>
      </Block>
    );
  }
}

export default TestimonialBlock;

export const query = graphql`
  fragment TestimonialBlock on PrismicPageBodyTestimonialBlock {
    slice_type
    primary {
      testimonial {
        document {
          data {
            title
            full_name {
              text
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

