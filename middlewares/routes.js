const userRouter = require('../routers/userRouter');
const postRouter = require('../routers/postRouter');



module.exports = (app) => {
    app.use('/api/auth', userRouter);
    app.use('/api/posts', postRouter);

}