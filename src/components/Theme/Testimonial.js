import React, { Component } from 'react';
import { styled, css, media } from 'components/Theme/Styles';
import GradientBorder from './GradientBorder';
import BlockQuote from './BlockQuote';

const CompanyLogoPlacement = styled.div`
  width: 150px;
  position: absolute;
  top: -30px;
  left: 50px;
  background: ${p => p.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompanyLogo = styled.img`
    width: 100px;
    position: relative;
    top: 5px;
`;

const Bracket = styled.div`
  display: inline-block;
  font-size: 40px;
  color: ${p => p.theme.brandInfo};
`;

const LeftBracket = styled(Bracket)`
  &:before {
    content: "["
  }
`;

const RightBracket = styled(Bracket)`
  &:before {
    content: "]"
  }
`;

const Body = styled.div`
  padding: 15px;
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
  text-align: left;
`;

const PicturePlacement = styled.div`
  width: 75px;
`;

const Picture = styled.img`
  border-radius: 5px;
`;

const Credentials = styled.div`
  font-size: 17.5px;
  align-self: center;
  margin-left: 15px;
`;


export default class Testimonial extends Component {
  render() {
    const { company,
            company_logo,
            body,
            picture,
            full_name,
            role_occupation,
    } = this.props.data;

    return (
      <GradientBorder innerColor={this.props.backgroundColor}>
        <CompanyLogoPlacement>
          <LeftBracket />
          <CompanyLogo src={company_logo.url} />
          <RightBracket />
        </CompanyLogoPlacement>
        <Body>
          <BlockQuote>
            {body.text}
          </BlockQuote>
        </Body>
        <Person>
          <PicturePlacement>
            <Picture src={picture.url} />
          </PicturePlacement>
          <Credentials>
            {full_name.text}<br />
            {role_occupation + ", " + company.text}
          </Credentials>
        </Person>
      </GradientBorder>
    )
  }
}
