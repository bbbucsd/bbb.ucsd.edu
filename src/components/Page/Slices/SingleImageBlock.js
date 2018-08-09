import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import { styled, css} from 'components/Theme/Styles';
import ThemeRichText from 'components/Theme/RichText'
import ThemeButton from 'components/Theme/Button';
import Validator from 'utils/validator';

const Primary = styled(Section)`
  background-image: url('${p => p.src}');
`;


const RichText = styled(ThemeRichText)`
  color: ${props => props.color};
  font-size: ${p => p.theme.h2FontSize}px;
  font-weight:300;
`;

const Button = styled(ThemeButton)`
  
`;

class SingleImageBlock extends Component {
  render() {
    const {
      height,
      align,
      justify,
      finishing,
      asset,
      content,
      content_color,
      cta_label,
      cta_link
    } = this.props.slice.primary

    let bg = (asset && Validator.isImage(asset.url)) ? asset.url : false

    return (
      <Block height={height} finishing={finishing}>
        <Primary align={align} justify={justify} src={bg}>
          <RichText color={content_color} body={content} />
          {cta_label &&
            <Button to={cta_link}>{cta_label}</Button>
          }
        </Primary>
      </Block>
    )
  }
}



export default SingleImageBlock;

export const query = graphql`
  fragment SingleImageBlock on PrismicPageBodySingleImageBlock {
    slice_type
    primary {
      height
      align
      justify
      finishing
      asset {
        url
      }
      content {
        html
      }
      content_color
      cta_label
      cta_link {
        url
      }
    }
  }
`;
