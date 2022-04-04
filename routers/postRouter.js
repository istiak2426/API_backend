const router = require('express').Router();


const { publicPost, privatePost } = require('../controllers/postController');

const authorize = require('../middlewares/authorize');

router.route('/public')
    .get(publicPost);

router.route('/private')
    .get(authorize, privatePost);

module.exports = router;