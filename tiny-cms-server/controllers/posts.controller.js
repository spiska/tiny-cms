var express = require('express');
var router = express.Router();
var postService = require('services/post.service');
var jwtHelper = require('helpers/jwt.helper');

// routes
router.post('/addpost', addPost);
router.get('/getall', getAll);

module.exports = router;

function addPost(req, res) {

    var token = jwtHelper.getToken(req);
    postService.addPost(token, req.body.title, req.body.text, req.body.date)
        .then(function (result) {
            res.send(result);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    postService.getAll()
        .then(function (posts) {
            res.send(posts);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
