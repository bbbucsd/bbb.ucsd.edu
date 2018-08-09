import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Testimonial from 'components/Theme/Testimonial';

class DoubleTestimonialBlock extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;
    console.log(data)
    const testimonialOne = data.testimonial_one.document[0].data;
    const testimonialTwo = data.testimonial_two.document[0].data;

    return (
      <Block height="Medium">
        <Section full>
          {/*<Testimonial align="left" data={testimonialOne} />*/}
        </Section>

        <Section full>
          {/*<Testimonial align="left" data={testimonialTwo} />*/}
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

