export default {
  getSendObject (statusCode, body) {
    if (process.env.NODE_ENV !== 'production') {
      return {
        statusCode,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Contorl-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify(body)
      };
    } else {
      return {
        statusCode,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };
    }
  }
};
