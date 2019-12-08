var models = require('../model/customer');
var path = require('path');


module.exports = function (router) {
    router.use((req, res, next) => {
        next();
    })

    router.get('/users', (req, res) => {
        models.user.find({}, (err, users) => {
            if (err) {
                res.status(500).send('Error finding users');
            } else {
                res.status(200).send(users);
            }
        })
    });

    router.get('/users/:id', (req, res) => {
        var id = req.params.id
        models.user.findOne({ _id: id }, (err, user) => {
            if (err) {
                res.status(500).send('Error finding user');
            } else {
                res.status(200).send(user);
            }
        })
    });

    router.post('/users/', (req, res) => {
        var newUser = {
            name: req.body.name,
            email: req.body.email
        }
        models.user.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                res.status(500).send('Error finding user')
            } else if (user) {
                res.status(500).send('User already found')
            } else if (!user && !err) {
                models.user.create(newUser, (err, newuser) => {
                    if (err) {
                        res.status(500).send('Error creating user')
                    } else {
                        res.status(201).send(newuser)
                    }
                })
            }
        })
    })

    router.delete('/users/:id', (req, res) => {
        var id = req.params.id;
        models.user.deleteOne({ _id: id }, (err) => {
            if (err) {
                res.status(500).send('Error deleting user')
            } else {
                res.status(200).send('Done');
            }
        })
    })

    return router;
}