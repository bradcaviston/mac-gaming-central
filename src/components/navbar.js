import React, { useState } from 'react';
import NavbarStyles from './navbar.module.scss';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressCategory(sort: {fields: count, order: DESC}, limit: 5, filter: {slug: {ne: "uncategorized"}}) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;
  const categories = data.allWordpressCategory.edges;

  const [menuActive, setMenuActive] = useState(false);
  const burgerClicked = (e) => {
    if (menuActive) {
      setMenuActive(!menuActive);
    } else {
      setMenuActive(!menuActive);
    }
  };
  
  return (
  <nav
    className="navbar container is-fullhd is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link to="/" className={NavbarStyles.logo + ' navbar-item'}>
        {siteTitle}
      </Link>

      <a
        role="button"
        className={menuActive ? 'is-active navbar-burger burger': 'navbar-burger burger'}
        aria-label="menu"
        aria-expanded="false"
        onClick={burgerClicked}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className={menuActive ? 'is-active navbar-menu': 'navbar-menu'}>
      <div className="navbar-start">
        {categories.map((edge) => {
          return <Link to={`/${edge.node.slug}`} key={edge.node.id} className="navbar-item has-text-weight-bold">{edge.node.name}</Link>;
        })}
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary" href="https://twitter.com/macgamecentral">
              <span className="icon">
                <i className="fab fa-twitter fa-lg"></i>
              </span>
            </a>
            <a className="button is-primary" href="https://www.youtube.com/channel/UCiyqblAHjgWdskQ8ImYdY_A?view_as=subscriber">
              <span className="icon">
                <i className="fab fa-youtube fa-lg"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;
