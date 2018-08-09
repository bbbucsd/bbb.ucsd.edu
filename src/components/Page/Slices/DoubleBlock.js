import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import ThemeHeadline from 'components/Theme/Headline'
import Video from 'components/Theme/Video';
import Validator from 'utils/validator';
import { styled, media } from 'components/Theme/Styles';

const Headline = styled(ThemeHeadline)`
  font-size: 38px;
  line-height: 42px;
  padding:0;
  margin:0;
  ${media.lessThan("medium")`
    font-size: 28px;
    color:${p => p.theme.white};
  `}
`;

const Subheadline = styled(ThemeHeadline)`
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0;
  ${media.lessThan("medium")`
    font-size: 22px;
    color:${p => p.theme.white};
  `}
`;

const Primary = styled(Section)`
  background-color: ${p => p.color};
  
  // change the inner section div's width to center the text a bit
  
  ${media.lessThan("medium")`
    & > div {
      text-align:center;
    }
    background-image: url('${p => p.src}');
  `}
  
  ${media.greaterThan("medium")`
    & > div {
      width:90%;
      padding-left: ${p => p.theme.blockPaddingMedium}px;
    }
  `}
  
  ${media.greaterThan("large")`
    & > div {
      width:90%;
      padding-left: ${p => p.theme.blockPaddingMedium}px;
    }
  `}
`;

const Secondary = styled(Section)`
  background-image: url('${p => p.src}');
  padding-left:0 !important;
  padding-right:0 !important;
  
  ${media.lessThan("medium")`
    display:none;
  `}
`;

class DoubleBlock extends Component {

  backgroundImage(url) {
    return Validator.isImage(url) ? url : false
  }

  render() {
    const { slice } = this.props;
    const { direction,
            height,
            background_color,
            headline,
            headline_color,
            subheadline,
            subheadline_color,
            asset } = slice.primary

    let bg = asset.url && this.backgroundImage(asset.url)

    return (
      <Block direction={direction} height={height}>

        {/* Primary Section */}
        <Primary align="left" color={background_color} src={bg} direction={direction}>
          <Headline h2 color={headline_color} text={headline} />
          <Subheadline h3 color={subheadline_color} text={subheadline} />
        </Primary>

        {/* Secondary Section (Desktop only) */}
        <Secondary src={bg}>
          <Video src={asset.url} />
        </Secondary>
      </Block>
    )
  }
}

export default DoubleBlock;

export const query = graphql`
  fragment DoubleBlock on PrismicPageBodyDoubleBlock {
    slice_type
    primary {
      height
      direction
      background_color
      asset {
        url
      }
      headline {
        text
      }
      headline_color
      subheadline {
        text
      }
      subheadline_color
    }
  }
`;

