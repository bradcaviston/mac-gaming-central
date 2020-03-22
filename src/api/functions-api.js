import axios from 'axios';
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const wpcBaseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/';

const config = {
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`
  }
};

function get (urlEnding) {
  try {
    if (process.env.NODE_ENV === 'production') {
      return axios.get(wpcBaseUrl + process.env.WP_URL + urlEnding, config);
    } else {
      return axios.get(wpcBaseUrl + process.env.WP_URL + urlEnding);
    }
  } catch (err) {
    console.log('there was an error connecting to the API');
    console.log(err);
    return null;
  }
}

export default {
  getPostBySlug (slug) {
    return get(`/posts/slug:${slug}`);
  },
  getPostsByCategorySlug (slug) {
    return get(`/posts/?fields=date%2Ctitle%2Cexcerpt%2Cslug%2Cfeatured_image&number=15&category=${slug}`);
  }
};
