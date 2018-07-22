import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StandardHero from '../components/Page/StandardHero';
import HighlightHero from '../components/Page/HighlightHero';
import ContentBlock from '../components/Page/ContentBlock';
import DoubleBlockSection from '../components/Page/DoubleBlockSection';
import LogoBlock from '../components/Page/LogoBlock';
import LogoBlockInline from '../components/Page/LogoBlockInline';
import SingleImageSection from '../components/Page/SingleImageSection';
import { connect } from 'airlytics';


const styles = theme => ({
  cta: {
    marginTop: '30px',
  },
});

class Page extends Component {

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
    }
  }

  render() {
    const { classes } = this.props;
    const page = this.props.data.contentfulPage
    const { hero, sections } = page

    return (
      <div className={classes.home}>
        <Header />
        {this.renderHero(hero[0])}
        {(sections||[]).map((section, i) => this.renderSection(section, i) )}
        <Footer />
      </div>
    );
  }
}


Page.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth(), connect())(Page);

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      hero {
        ...StandardHero
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
  }
`
