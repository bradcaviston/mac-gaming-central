import api from '../api/functions-api';
import sendObject from '../api/send-object';

exports.handler = (event, context, callback) => {
  const send = (statusCode, body) => {
    callback(null, sendObject.getSendObject(statusCode, body));
  };

  if (event.httpMethod === 'POST') {
    const slug = event.body;

    api.getPostsByCategorySlug(slug)
      .then((res) => {
        send(200, res.data);
      })
      .catch((err) => {
        send(err.response.status, err.response.statusText);
      });
  } else {
    send(501, '501 Not Implemented');
  }
};
