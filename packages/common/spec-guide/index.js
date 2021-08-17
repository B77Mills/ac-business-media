const { asyncRoute } = require('@parameter1/base-cms-utils');
const fetch = require('node-fetch');

const { GOOGLE_DOC_API_KEY } = process.env;
module.exports = (app) => {
  app.use('/__spec-guide', asyncRoute(async (req, res) => {
    const { src } = req.query;
    const url = `${src}?key=${GOOGLE_DOC_API_KEY}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      res.send(json);
    } catch (error) {
      res.status(500).send(error);
    }
  }));
};
