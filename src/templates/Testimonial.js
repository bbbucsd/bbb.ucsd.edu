import React, { Component } from 'react';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class Testimonial extends Component {

  render() {
    return (
      <div>
        <Header />
        <Slices document={this.props.document} />
        <Footer />
      </div>
    );
  }

}

export default connectPreview('testimonial')(Testimonial);

//export const testimonialQuery = graphql`
  //query TestimonialQuery($uid: String!) {
    //testimonial(uid: { eq: $uid }) {
      //uid
      //first_publication_date
      //last_publication_date
      //data {
        //title
        //full_name {
          //text
        //}
        //website {
          //url
        //}
        //picture {
          //url
        //}
        //company {
          //text
        //}
        //company_logo {
          //url
        //}
        //role_occupation
        //body1 {
          //...FrontMatter
          //...SchemaPerson
        //}
      //}
    //}
  //}
//`


