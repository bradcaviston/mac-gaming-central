import React from 'react';

import Layout from '../layouts/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{textAlign: 'center', paddingTop: '3rem'}}>
      <h1 className="title is-1">404 NOT FOUND</h1>
      <p style={{paddingBottom: '1.5rem'}}>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/" className="button is-primary">Go Home</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
