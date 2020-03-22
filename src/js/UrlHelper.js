export default {
  getPostUrl (post) {
    const date = new Date(post.date);
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return `${date.getUTCFullYear()}/${month}/${day}/${post.slug}`;
  }
};