import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Page/Body';

const styles = theme => ({

});

class Page extends Component {

  render() {
    return (
      <div>
        <Header />
        <Body {...this.props} />
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

export default compose(withStyles(styles), withWidth())(Page);

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      ...Body
    }
  }
`
