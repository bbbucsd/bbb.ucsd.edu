import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Block, { Section } from 'components/Theme/Block';
import Testimonial from 'components/Theme/Testimonial';
import { styled, media } from 'components/Theme/Styles';

const Primary = styled(Section)`
  min-height: 400px;
 ${media.lessThan("large")`
   padding-top: 50px;
   padding-bottom: 50px;
 `}
  ${media.greaterThan('small')`
     & > * {
      width: 50%;
     }
  `}
`;

class TestimonialBlock extends Component {

  render() {
    const { background_color,
            align,
            justify,
    } = this.props.slice.primary;

    const document = this.props.slice.primary.testimonial.document
    if (!document) { return null; }
    const testimonial = document[0].data;

    return (
      <Block color={background_color} height="Medium">
        <Primary align={align} justify={justify}>
          <Testimonial backgroundColor={background_color} data={testimonial} />
        </Primary>
      </Block>
    );
  }
}

export default TestimonialBlock;

export const query = graphql`
  fragment TestimonialBlock on TestimonialBlock {
    __typename
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
