import React from 'react';
import PropTypes from 'prop-types';

import Nav from './nav';
import Sidebar from './sidebar';
import Footer from './footer';

import '../i18n';

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Sidebar />
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
