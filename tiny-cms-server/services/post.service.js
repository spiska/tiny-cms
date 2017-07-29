var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('posts');
db.bind('users');

var service = {};

service.addPost = addPost;
service.getAll = getAll;

module.exports = service;

function addPost(token, title, text, date) {
    var deferred = Q.defer();

    var userCheck = jwt.verify(token, config.secret)
    db.users.findById(userCheck.sub, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            var post = {};
            post.title = title;
            post.text = text;
            post.date = date;
            post.user = user.username;

            db.posts.insert(post, function (err, doc) {
                if (err) {
                    deferred.reject(err.name + ': ' + err.message);
                }

                deferred.resolve(true);
            });
        } else {
            deferred.resolve(false);
        }
    });

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.posts.find().toArray(function (err, posts) {
        if (err) {
            deferred.reject(err.name + ': ' + err.message);
        }

        deferred.resolve(posts);
    });

    return deferred.promise;
}