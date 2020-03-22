/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <div style={{minHeight: '100vh', position: 'relative'}}>
      <Navbar />
      <main style={{paddingBottom: '11rem'}}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
