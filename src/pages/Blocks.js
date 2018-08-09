import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import { styled, css} from 'components/Theme/Styles';

const Container = styled.div`
  margin:50px;
`;

const Row = styled.div`
  display:flex;
  flex-direction: row;
  width:100%;
`;

const Col = styled.div`
  width:100%;
  padding-top:50px;
`;

const Box = styled.div`
  width:50px;
  height:50px;
  background-color:#333;
`;

const BlockWrapper = styled.div`
  width:100%;
  border:1px solid #000;
  > div:first-child {
    //border:1px solid blue;  
  }
`

const StyledSection = styled(Section)`
  background-image:linear-gradient(to bottom, rgba(159, 196, 231, 1) 0%, rgba(159, 196, 231, 1) 100%), linear-gradient(to bottom, rgba(194, 221, 182, 1) 0%, rgba(194, 221, 182, 1) 100%);
  background-clip: content-box, padding-box;
`;

export default class Blocks extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <code>
              Block height="XL" - 100vh
            </code>
            <BlockWrapper>
              <Block height="XL">
                <StyledSection>
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Large" - 70vh
            </code>
            <BlockWrapper>
              <Block height="Large">
                <StyledSection>
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium" - 50vh
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection>
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Small" - 30vh
            </code>
            <BlockWrapper>
              <Block height="Small">
                <StyledSection>
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="auto" - auto height
            </code>
            <BlockWrapper>
              <Block height="Auto">
                <StyledSection>
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium" color="#cccccc" - 50vh, background-color: #cccccc;
            </code>
            <BlockWrapper>
              <Block height="Medium" color="#cccccc">
                <StyledSection>
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", StyledSection align="left" - 50vh, text-align:left
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection align="Left">
                  Hello World
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", StyledSection justify="Top" - 50vh, Top align
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection justify="Top">
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", StyledSection justify="Middle" - 50vh, Middle align (default)
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection justify="Middle">
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", StyledSection justify="Bottom" - 50vh, Bottom
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection justify="Bottom">
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", StyledSection justify="Topish" - 50vh, Top + 15vh padding
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection justify="Topish">
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", StyledSection justify="Bottomish" - 50vh, Bottom + 15vh padding
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection justify="Bottomish">
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Auto", StyledSection justify="Top" - Auto height with auto margin
            </code>
            <BlockWrapper style={{backgroundColor:'#F7C492'}}>
              <Block height="Auto" color="#94BCE3">
                <StyledSection justify="Top">
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Auto", StyledSection justify="Bottom" - Auto height with auto margin
            </code>
            <BlockWrapper style={{backgroundColor:'#F7C492'}}>
              <Block height="Auto" color="#94BCE3">
                <StyledSection justify="Bottom">
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", StyledSection color="#cccccc" - 50vh, StyledSection background-color:#cccccc
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection color="#cccccc">
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Two StyledSections
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection>
                  <Box />
                </StyledSection>
                <StyledSection>
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Three StyledSections
            </code>
            <BlockWrapper>
              <Block height="Medium">
                <StyledSection>
                  <Box />
                </StyledSection>
                <StyledSection>
                  <Box />
                </StyledSection>
                <StyledSection>
                  <Box />
                </StyledSection>
              </Block>
            </BlockWrapper>
          </Col>
        </Row>

      </Container>
    )
  }
}
