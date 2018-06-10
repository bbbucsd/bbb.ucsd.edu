import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";
import {
	Row,
	Col,
  Container,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const linkStyle = {
	marginRight: 15
};

class HeaderMenu extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	getSlug(url) {
		const parts = url.split("/");
		return parts.length > 2 ? parts[parts.length - 2] : "";
	}

  isCurrentSite(url) {
    if (!!url.match(Config.hostname)) { return true; }
    if (!url.match('http')) { return true; }
    return false;
  }

  render() {
    const menuItems = this.props.headerMenu.items.map((item, index) => {
      if (item.object === "custom" && !this.isCurrentSite(item.url)) {
        return (
          <NavItem key={item.ID}>
            <a href={item.url} target="_blank" className="nav-link">{item.title}</a>
          </NavItem>
        );
      } else if(item.object === "custom" && this.isCurrentSite(item.url)) {
        return (
          <NavItem key={item.ID}>
            <Link prefetch href={item.url} passHref prefetch>
              <a className="nav-link">{item.title}</a>
            </Link>
          </NavItem>
        );
      } else {
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
          <NavItem key={item.ID}>
            <Link prefetch as={`/${item.object}/${slug}`} href={`/${actualPage}?slug=${slug}`}>
              <a className="nav-link">{item.title}</a>
            </Link>
          </NavItem>
        );
      }
    });

    return (
      <Navbar expand="md" className="navbar-toggleable-md top-nav fixed-top light-header">
        <Container>
          <NavbarBrand>
            <Link href={'/'}>
              <a>Automate Your Brand</a>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {menuItems}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }


}

export default HeaderMenu;
