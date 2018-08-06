import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import ThemeHeadline from 'components/Theme/Headline';
import ThemeButton from 'components/Theme/Button';
import Styles, { styled, css} from 'components/Theme/Styles';

const BlockWrapper = styled(Block)`
  text-align: center;
`;

const Headline = styled(ThemeHeadline)`
  font-weight: 200;
  font-style: normal;
  margin: 40px 0 80px 0;
  padding: 0;
  text-align: center;
  font-size: ${props => props.theme.h1FontSize / 1.2}px;
`;

const Container = styled.ul`
  display: table;
  width: 100%;
  padding: 0;
`;

const Item = styled.li`
  display: table-cell;
  width: 100%;
  padding: ${props => props.theme.largePadding};
  text-align: left;
  vertical-align: middle;
`;

const Customers = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`;

const Customer = styled.div`
  flex: 4;
  display: flex;
  flex-flow: column wrap;
  height: 150px;
  justify-content: center;
  & + & {
    border-left: 1px solid #ccc;
  }
`;

const Logo = styled.img`
  width: 100px;
  display: inline-block;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex: 5;
  flex-direction: row;
  margin-top: ${props => props.topRow ? 0 : 75}px;
`;

const Button = styled(ThemeButton)`
  text-align: center;
  display:block;
  margin-top: 40px;
  margin-bottom: 40px;
`;

class LogoBlock extends Component {
  createMatrix(logos) {
    let group = [];
    let count = 0;
    logos.forEach((logo, index) => {
      if (index >= 3 && index % 3 === 0) { count++; }
      group[count] = group[count] || [];
      group[count].push(logo)
    });
    return group;
  }

  renderLogos(logos) {
    if (!logos.length) { return null; }
    const matrix = this.createMatrix(logos);
    return matrix.map((row, index) => {
      let columns = row.map((column, index) => {
        if (column.logo && column.logo.url) {
          return (
            <Customer key={`column_${index}`}>
              <Logo alt={column.logo.url.split("_")[1].split(".")[0]} src={column.logo.url} />
            </Customer>
          );
        } else {
          return null;
        }
      });
      return (
        <Row key={`row_${index}`} topRow={index === 0}>
          {columns}
        </Row>
      );
    });
  }

  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const logos = slice.items;

    return (
      <BlockWrapper height={data.height}>
        <Section paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>
          <Headline h2>{data.headline.text}</Headline>

            <Container>
              <Item>
                <Customers>
                  {this.renderLogos(logos)}
                </Customers>
              </Item>
            </Container>

          <Button to={data.cta_link} onClick={this.handleClickOpen}>{data.cta_label}</Button>
        </Section>
      </BlockWrapper>
    )
  }
}

export default LogoBlock;

// language=GraphQL
export const query = graphql`
  fragment LogoBlock on PrismicPageBodyLogoBlock {
    slice_type
    primary {
      height
      inner_padding_top
      inner_padding_bottom
      headline {
        text
      }
      cta_link {
        url
      }
      cta_label
    }
    items {
      logo {
        url
      }
    }
  }
`;
