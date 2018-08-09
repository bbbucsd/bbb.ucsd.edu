import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import { styled, css} from 'components/Theme/Styles';
import Headline from 'components/Theme/Headline';

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

const StyledBlockWrapper = styled.div`
  width:100%;
  border:1px solid #000;
`
const StyledBlock = styled(Block)`
  &:first-child, &:last-child {
    background-image:linear-gradient(to bottom, rgba(159, 196, 231, 1) 0%, rgba(159, 196, 231, 1) 100%), linear-gradient(to bottom, rgba(194, 221, 182, 1) 0%, rgba(194, 221, 182, 1) 100%);
    background-clip: content-box, padding-box;
  }
`;

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
            <StyledBlockWrapper>
              <StyledBlock height="XL">
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Large" - 70vh
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Large">
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium" - 50vh
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Small" - 30vh
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Small">
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="auto" - auto height
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Auto">
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium" color="#cccccc" - 50vh, background-color: #cccccc;
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium" color="#cccccc">
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section align="left" - 50vh, align left
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection align="Left">
                  <Headline h1>Heading 1</Headline>]
                  Hello World
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section align="right" - 50vh, align right
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection align="Right">
                  <Headline h1>Heading 1</Headline>
                  Hello World
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section align="center" - 50vh, align center
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection align="Center">
                  <Headline h1>Heading 1</Headline>
                  <div>Hello World</div>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section justify="Top" - 50vh, Top align
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection justify="Top">
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section justify="Middle" - 50vh, Middle align (default)
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection justify="Middle">
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section justify="Bottom" - 50vh, Bottom
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection justify="Bottom">
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section justify="Topish" - 50vh, Top + 15vh padding
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection justify="Topish">
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section justify="Bottomish" - 50vh, Bottom + 15vh padding
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection justify="Bottomish">
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Auto", Section justify="Top" - Auto height with auto margin
            </code>
            <StyledBlockWrapper style={{backgroundColor:'#F7C492'}}>
              <StyledBlock height="Auto" color="#94BCE3">
                <StyledSection justify="Top">
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Auto", Section justify="Bottom" - Auto height with auto margin
            </code>
            <StyledBlockWrapper style={{backgroundColor:'#F7C492'}}>
              <StyledBlock height="Auto" color="#94BCE3">
                <StyledSection justify="Bottom">
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Section color="#cccccc" - 50vh, Section background-color:#cccccc
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection color="#cccccc">
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Two Sections, First align="left"
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection align="left">
                  <Headline h1>Heading 1</Headline>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  <Box />
                </StyledSection>
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Two Sections, First align="center"
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection align="center">
                  <Headline h1>Heading 1</Headline>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  <Box />
                </StyledSection>
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <code>
              Block height="Medium", Three Sections
            </code>
            <StyledBlockWrapper>
              <StyledBlock height="Medium">
                <StyledSection>
                  <Box />
                </StyledSection>
                <StyledSection>
                  <Box />
                </StyledSection>
                <StyledSection>
                  <Box />
                </StyledSection>
              </StyledBlock>
            </StyledBlockWrapper>
          </Col>
        </Row>

      </Container>
    )
  }
}
