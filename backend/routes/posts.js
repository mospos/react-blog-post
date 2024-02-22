const router = require('express').Router();
let Post = require('../models/posts.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error' + err));
})

router.route('/add').post((req, res) => {
    const author = req.body.author;
    const body = req.body.body;
    const newPost = new Post({
        author,
        body
    });
    newPost.save()
        .then(() => res.json('Post added'))
        .catch(err => res.status(400).json('Error ' + err))
})
router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => console.log('Error'))
})

router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => console.log('Deleted'))
        .catch(err => console.log('Error' + err));
})
module.exports = router;