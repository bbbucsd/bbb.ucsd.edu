import React, { Component } from 'react';
import Link from './Link';
import LazyLoad from 'react-lazyload';
import { styled } from 'components/Theme/Styles';

const FeaturedImage = styled.div`
  min-width: 255px;
  padding: 20px 0;
  transition: all .2s ease-in-out;
  &:hover { transform: scale(1.05); z-index: 90; }
  a {
    background-size: cover !important;
    height: 230px;
    width: 100%;
    display: block;
    border-radius: 30px;
  }
`;

const Ribbon = styled.div`
    position: relative;
    top: -50px;
    margin-bottom: -30px;
    background: ${p => p.isFeatured ? p.theme.darkSuccess : p.theme.brandInfo};
    color: ${p => p.theme.white};
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
`;

export default class extends Component {

  render() {
    const {
      title,
      image,
      to,
      isFeatured
    } = this.props;
    if (image) {
      return (
        <FeaturedImage>
          <LazyLoad>
            <Link to={to} style={{ background: `url(${image}) no-repeat` }}>
              &nbsp;
            </Link>
            <Ribbon isFeatured={isFeatured}>
              {title}
            </Ribbon>
          </LazyLoad>
        </FeaturedImage>
      );
    } else {
      return null;
    }
  }

}
