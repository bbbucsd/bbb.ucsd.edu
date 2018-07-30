import React, { Component } from 'react';
import Button from 'components/Elements/Button/index';
import Testimonial from 'components/Elements/Testimonial';

// Style
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class TestimonialBlock extends Component {

  backgroundColor() {
    if (this.props.slice.primary.background_color !== '') {
      return { backgroundColor: this.props.slice.primary.background_color };
    }
  }

  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const testimonial = data.testimonial.document[0].data;

    return (
      <div className={style.blockWrapper} style={ this.backgroundColor() }>
        <Testimonial data={testimonial} />
      </div>
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

