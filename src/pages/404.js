import React, { Component } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Theme/Header';
import StandardHero from 'components/Slices/StandardHero';
import Footer from 'components/Theme/Footer';

class NotFoundPage extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <Header />
        <StandardHero slice={{ primary: { headline_color: 'white', height: 'XL', headline: "Oops! This page is not found...SAD!"}}} />
        <Footer />
      </Layout>
    );
  }
}

export default NotFoundPage
