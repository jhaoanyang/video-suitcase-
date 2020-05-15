const mongoose = require('mongoose');

const Collect = mongoose.model('collects');

module.exports = (app) => {
    app.get('/api/collects', (req, res) => {
        Collect.find((err, foundCollects) => {
            if (!err) {
                res.send(foundCollects);
            } else {
                res.send(err);
            }
        });
    });

    app.post('/api/collects', (req, res) => {
        const newCollect = new Collect(req.body);
        newCollect.save((err, response) => {
            if (!err) {
                res.send(response);
              } else {
                res.send(err);
              }
        })
    });

    app.delete('/api/collects/:videoId', (req, res) => {
        Collect.deleteOne({ videoId: req.params.videoId },
        (err, response) => {
            if (!err) {
              res.send(response);
            } else {
              res.send(err);
            }
          }
        );
    });     
};