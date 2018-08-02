import React, { Component } from 'react';

// Style
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

// Testimonial
class Testimonial extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { data } = this.props;

    return (
      <div className={cx(style.gradientBorder, style.containerItem)}>
        <div className={style.companyLogo}>
          <div className={style.bracket}>[</div>
          <img src={data.company_logo.url} />
          <div className={style.bracket}>]</div>
        </div>
        <div className={style.body}>
          <div className={style.text}>
            {data.body.text}
          </div>
          <div className={style.person}>
            <div className={style.picture}>
              <img src={data.picture.url} />
            </div>
            <div className={style.credentials}>
              {data.full_name.text}<br />
              {data.role_occupation + ", " + data.company.text}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Testimonial;

export const query = graphql`
  fragment Testimonial on PrismicTestimonial {
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
`
