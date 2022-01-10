const redis = require('redis');

const redisClient = redis.createClient();
redisClient.connect();

redisClient.on("connect", () => {
  console.log('Redis Client connected on port 6379');
})
redisClient.on("error", (err) => {
  console.log(err);
});

module.exports = redisClient;