import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import StandardHero from './StandardHero';
import SimpleHero from './SimpleHero';
import HighlightHero from './HighlightHero';
import ContentBlock from './ContentBlock';
import DoubleBlockSection from './DoubleBlockSection';
import LogoBlock from './LogoBlock';
import LogoBlockInline from './LogoBlockInline';
import SingleImageSection from './SingleImageSection';
import { connect } from 'airlytics';

const styles = theme => ({

});

class Body extends Component {

  renderSection(section, index) {
    switch (section.__typename) {
      case 'ContentfulLayoutDoubleBlockSection':
        return <DoubleBlockSection key={`section_${index}`} data={section} />
      case 'ContentfulLayoutLogoBlock':
        return <LogoBlock key={`section_${index}`} data={section} />
      case 'ContentfulLayoutContentBlock':
        return <ContentBlock key={`section_${index}`} data={section} />
      case 'ContentfulLayoutSingleImageSection':
        return <SingleImageSection key={`section_${index}`} data={section} />
      case 'ContentfulLayoutLogoBlockInline':
        return <LogoBlockInline key={`section_${index}`} data={section} />
    };
  }

  renderHero(hero) {
    switch (hero.__typename) {
      case 'ContentfulLayoutStandardHero':
        return <StandardHero hero={hero} />
      case 'ContentfulLayoutHighlightHero':
        return <HighlightHero hero={hero} />
      case 'ContentfulLayoutSimpleHero':
        return <SimpleHero hero={hero} />
    }
  }

  render() {
    const { classes } = this.props;
    const page = this.props.data.contentfulPage
    const { hero, sections } = page

    return (
      <div>
        {this.renderHero(hero[0])}
        {(sections||[]).map((section, i) => this.renderSection(section, i) )}
      </div>
    );
  }
}


Body.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth(), connect())(Body);

export const query = graphql`
  fragment Body on ContentfulPage {
      hero {
        ...StandardHero
        ...SimpleHero
        ...HighlightHero
      }

      sections {
        ...DoubleBlockSection
        ...LogoBlock
        ...ContentBlock
        ...SingleImageSection
        ...LogoBlockInline
      }
  }
`;
