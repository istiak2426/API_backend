const router = require('express').Router();
const { signIn, signUp, token, public, private } = require('../controllers/userControllers');

const authorize = require('../middlewares/authorize');

router.route('/signup')
    .post(signUp);

router.route('/login')
    .post(signIn);

    router.route('/token')
    .post(token);


    router.route('/public')
    .get(public);

    router.route('/private')
    .get(authorize, private);



module.exports = router;