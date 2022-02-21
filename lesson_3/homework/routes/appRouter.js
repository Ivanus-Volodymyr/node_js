const {Router} = require('express');

const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const existRouter = require('./existRouter');
const signInRouter = require('./signInRouter');
const deleteRouter = require('./deleteRouter');

//appRouter
const router = Router();

router.use('/users', userRouter);
router.use('/login', loginRouter);
router.use('/exist', existRouter);
router.use('/signIn', signInRouter);
router.use('/delete', deleteRouter);

router.use((req, res) => {
    res.render('notFound');
})

module.exports = router;
