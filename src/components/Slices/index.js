import React, { Fragment, Component } from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import StandardHero from './StandardHero';
import HighlightHero from './HighlightHero';
import DoubleBlock from './DoubleBlock';
import LogoBlock from './LogoBlock';
import LogoBlockInline from './LogoBlockInline';
import ContentBlock from './ContentBlock';
import StatementBlock from './StatementBlock';
import FeatureBlock from './FeatureBlock';
// import TestimonialBlock from './TestimonialBlock';
// import DoubleTestimonialBlock from './DoubleTestimonialBlock';
import SingleImageBlock from './SingleImageBlock';
import FrontMatter from './FrontMatter';
import OpenGraph from './OpenGraph';
import Twitter from './Twitter';
import SchemaOrganization from './SchemaOrganization';
import SchemaPerson from './SchemaPerson';
import SchemaArticle from './SchemaArticle';
import SchemaWebpage from './SchemaWebpage';
import SchemaProduct from './SchemaProduct';
import SchemaWebsite from './SchemaWebsite';
import SchemaItemList from './SchemaItemList';
import Form from './Form';
//import HighlightContentBlock from './HighlightContentBlock';
//import HorizontalFormBlock from './HorizontalFormBlock';

const Slice = (props) => {
  let { data } = props

  var type = data.__typename || _.upperFirst(_.camelCase(data.slice_type))


  switch (type) {
    case 'StandardHero':
      return <StandardHero slice={data} />
    case 'DoubleBlock':
      return <DoubleBlock slice={data} />
    case 'HighlightHero':
      return <HighlightHero slice={data} />
    case 'LogoBlock':
      return <LogoBlock slice={data} />
    case 'LogoBlockInline':
      return <LogoBlockInline slice={data} />
    case 'ContentBlock':
      return <ContentBlock slice={data} />
    // case 'HighlighContentBlock':
    //   return <HighlightContentBlock slice={data} />
    // case 'HorizontalFormBlock':
    //   return <HorizontalFormBlock slice={data} />
    case 'StatementBlock':
      return <StatementBlock slice={data} />
    case 'FeatureBlock':
      return <FeatureBlock slice={data} />
    // case 'TestimonialBlock':
    //   return <TestimonialBlock slice={data} />
    // case 'DoubleTestimonialBlock':
    //   return <DoubleTestimonialBlock slice={data} />
    case 'SingleImageBlock':
      return <SingleImageBlock slice={data} />
    case 'SchemaWebpage':
      return <SchemaWebpage slice={data} />
    case 'SchemaProduct':
      return <SchemaProduct slice={data} />
    case 'SchemaArticle':
      return <SchemaArticle slice={data} />
    case 'SchemaWebsite':
      return <SchemaWebsite slice={data} />
    case 'SchemaItemList':
      return <SchemaItemList slice={data} />
    case 'OpenGraph':
      return <OpenGraph slice={data} />
    case 'Twitter':
      return <Twitter slice={data} />
    case 'SchemaOrganization':
      return <SchemaOrganization slice={data} />
    case 'SchemaPerson':
      return <SchemaPerson slice={data} />
    case 'Form':
      return <Form slice={data} />
    default:
      return null;
  };
}

class Slices extends Component {

  render() {
    const { document } = this.props;

    return (
      <Fragment>
        <Helmet>
          <FrontMatter />
          {( document.data.body1 || document.data.body2 || [] ).map((slice, i) => <Slice data={slice} key={`meta_${i}`} /> )}
        </Helmet>

        {( document.data.body || [] ).map((slice, i) => <Slice data={slice} key={`ui_${i}`} /> )}
      </Fragment>
    )
  }
}

export default Slices;
