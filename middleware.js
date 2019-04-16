const redis = require('redis');

const client = redis.createClient();


const sampleMiddleware = (req, res, next) => {
  res.sendResponse = res.json;
  res.json = (detail) => {
    client.setex('bugtest', 60000, JSON.stringify(detail));
    res.sendResponse(detail);
  };
  next();
};

module.exports = {
  sampleMiddleware,
};
