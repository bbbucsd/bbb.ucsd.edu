import React, { Fragment, Component } from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import StandardHero from './StandardHero';
import SimpleHero from './SimpleHero';
import HighlightHero from './HighlightHero';
import DoubleBlock from './DoubleBlock';
import DoubleColumnContentForm from './DoubleColumnContentForm';
import LogoBlock from './LogoBlock';
import LogoBlockInline from './LogoBlockInline';
import ContentBlock from './ContentBlock';
import StatementBlock from './StatementBlock';
import SingleFeatureBlock from './SingleFeatureBlock';
import FeatureBlock from './FeatureBlock';
import TestimonialBlock from './TestimonialBlock';
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
import FormBlock from './FormBlock';
import HighlightContentBlock from './HighlightContentBlock';
//import HorizontalFormBlock from './HorizontalFormBlock';

const Slice = (props) => {
  let { data } = props

  var type = data.__typename || _.upperFirst(_.camelCase(data.slice_type));

  switch (type) {
    case 'StandardHero':
      return <StandardHero slice={data} />
    case 'SimpleHero':
      return <SimpleHero slice={data} />
    case 'DoubleColumnContentForm':
      return <DoubleColumnContentForm slice={data} />
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
   case 'HighlightContentBlock':
     return <HighlightContentBlock slice={data} />
    // case 'HorizontalFormBlock':
    //   return <HorizontalFormBlock slice={data} />
    case 'FrontMatter':
      return <FrontMatter slice={data} />
    case 'StatementBlock':
      return <StatementBlock slice={data} />
    case 'SingleFeatureBlock':
      return <SingleFeatureBlock slice={data} />
    case 'FeatureBlock':
      return <FeatureBlock slice={data} />
   case 'TestimonialBlock':
     return <TestimonialBlock slice={data} />
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
    case 'FormBlock':
      return <FormBlock slice={data} />
    default:
      return null;
  };
}

class Slices extends Component {

  render() {
    const { document } = this.props;

    return (
      <Fragment>
        {document.data && (document.data.body1 || document.data.body2) ? (
          <Helmet>
            {( (document.data.body1 || document.data.body2) || [] ).map((slice, i) => <Slice data={slice} key={`meta_${i}`} /> )}
          </Helmet>
        ) : null}

        {( (document.data && document.data.body) || [] ).map((slice, i) => <Slice data={slice} key={`ui_${i}`} /> )}
      </Fragment>
    )
  }
}

export default Slices;
