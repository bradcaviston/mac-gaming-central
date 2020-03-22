import axios from 'axios';

function clientSidePost (urlEnding, body) {
  try {
    if (process.env.NODE_ENV === 'production') {
      return axios.post('/.netlify/functions' + urlEnding, body);
    } else {
      return axios.post('http://localhost:9000' + urlEnding, body);
    }
  } catch (err) {
    console.log('there was an error connecting to the API');
    console.log(err);
    return null;
  }
}

export default {
  getPostsByCategorySlug (slug) {
    return clientSidePost('/posts-by-category-slug', slug);
  }
};