module.exports = (request, response) => {
  const targetUrl = 'https://livingamonganimals.com';

  setTimeout(() => {
    response.writeHead(302, {
      Location: targetUrl,
    });
    response.end();
  }, 3000);
};
