import React, { Fragment, Component } from 'react';
import StandardHero from './StandardHero';
import HighlightHero from './HighlightHero';
import DoubleBlock from './DoubleBlock';
import LogoBlock from './LogoBlock';
import LogoBlockInline from './LogoBlockInline';
import ContentBlock from './ContentBlock';
//import HighlightContentBlock from './HighlightContentBlock';
import StatementBlock from './StatementBlock';
//import HorizontalFormBlock from './HorizontalFormBlock';
import FeatureBlock from './FeatureBlock';
import TestimonialBlock from './TestimonialBlock';
import DoubleTestimonialBlock from './DoubleTestimonialBlock';
import SingleImageBlock from './SingleImageBlock';

class Slices extends Component {

  renderSlice(slice, index) {
    switch (slice.slice_type) {
      case 'standardhero':
        return <StandardHero key={`slice_${index}`} slice={slice} />
      case 'double_block':
        return <DoubleBlock key={`slice_${index}`} slice={slice} />
      case 'highlight_hero':
        return <HighlightHero key={`slice_${index}`} slice={slice} />
      case 'logo_block':
        return <LogoBlock key={`slice_${index}`} slice={slice} />
      case 'logo_block__inline_':
        return <LogoBlockInline key={`slice_${index}`} slice={slice} />
      case 'content_block':
        return <ContentBlock key={`slice_${index}`} slice={slice} />
      //case 'highlight_content_block':
        //return <HighlightContentBlock key={`slice_${index}`} slice={slice} />
      case 'statement_block':
        return <StatementBlock key={`slice_${index}`} slice={slice} />
      //case 'horizontal_form_block':
        //return <HorizontalFormBlock key={`slice_${index}`} slice={slice} />
      case 'feature_block':
        return <FeatureBlock key={`slice_${index}`} slice={slice} />
      case 'testimonial_block':
        return <TestimonialBlock key={`slice_${index}`} slice={slice} />
      case 'double_testimonial_block':
        return <DoubleTestimonialBlock key={`slice_${index}`} slice={slice} />
      case 'single_image_block':
        return <SingleImageBlock key={`slice_${index}`} slice={slice} />
    };
  }

  render() {
    const { page } = this.props;
    return ( page.body || [] ).map((slice, i) => this.renderSlice(slice, i) )
  }
}

export default Slices;

export const query = graphql`
  fragment Slices on PrismicPage {
    data {
      body {
        ...StandardHero
        ...DoubleBlock
        ...HighlightHero
        ...LogoBlock
        ...LogoBlockInline
        ...ContentBlock
        ...StatementBlock
        ...FeatureBlock
        ...SingleImageBlock
        ...TestimonialBlock
        ...DoubleTestimonialBlock
      }
    }
  }
`;
