module.exports = intercepter;

function intercepter(body, req, res) {
  res.bodySent = JSON.stringify(body);
  // return body;
}
