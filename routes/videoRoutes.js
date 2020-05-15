const keys = require('../config/keys');
const PART = "snippet,contentDetails";
const MAX_RESULTS = "100";
const CHART = "mostPopular";

module.exports = (app) => {
  app.get('/api/videos', (req, res) => {
    res.redirect(`https://www.googleapis.com/youtube/v3/videos?part=${PART}&chart=${CHART}&maxResults=${MAX_RESULTS}&key=${keys.api_key}`);
  });

  app.get('/api/videos/:videoIds', (req, res) => {
    res.redirect(`https://www.googleapis.com/youtube/v3/videos?part=${PART}&id=${req.params.videoIds}&key=${keys.api_key}`);
  });

  app.get('/api/videos/:videoId', (req, res) => {
    res.redirect(`https://www.googleapis.com/youtube/v3/videos?part=${PART}&id=${req.params.videoId}&key=${keys.api_key}`);
  });
};