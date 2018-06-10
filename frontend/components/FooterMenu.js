import React, { Component } from "react";
import Link from "next/link";
import _ from 'lodash';

class FooterMenu extends Component {

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
    var t = this;
    var menu = _.reduce(_.groupBy(this.props.footerMenu.items, x => x.menu_item_parent), (result, value, key) => {
      if (key === "0") {
        _.each(value, (val) => result[val.ID] = { parent: val });
        return result;
      } else {
        result[key].children = value;
      }
      return result;
    }, {});

    return _.map(menu, (value, key) => {

      let buildChildren = (children) => {
        const menuItems = _.map(children, (item, index) => {
          if (item.object === "custom" && !t.isCurrentSite(item.url)) {
            return (
              <NavItem key={item.ID}>
                <a href={item.url} target="_blank" className="nav-link">{item.title}</a>
              </NavItem>
            );
          } else if(item.object === "custom" && t.isCurrentSite(item.url)) {
            return (
              <li className="mt-2" key={item.ID}>
                <Link prefetch href={item.url} as={item.url}>
                  <a className="text-light">{item.title}</a>
                </Link>
              </li>
            );
          } else {
            const slug = t.getSlug(item.url);
            const actualPage = item.object === "category" ? "category" : "post";
            return (
              <li className="mt-2" key={item.ID}>
                <Link
                  as={item.url}
                  href={`/${actualPage}?slug=${slug}`}
                >
                  <a className="text-light">{item.title}</a>
                </Link>
              </li>
            );
          }
        });

        return (
          <ul className="list-unstyled">
            {menuItems}
          </ul>
        );
      }

      let buildNode = function(parent, children) {
        return (
          <div className="col-md-3" key={parent.ID}>
            <h5 className="text-info">{parent.title}</h5>
            <div className="mt-3 mb-3">
              {buildChildren(children)}
            </div>
          </div>
        );
      }

      return buildNode(value.parent, value.children);
    })

  }


}

export default FooterMenu;
