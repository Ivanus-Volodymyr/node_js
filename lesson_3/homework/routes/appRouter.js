const { Router } = require('express');

const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const signInRouter = require('./signInRouter');

//appRouter
const router = Router();

router.use('/users', userRouter);
router.use('/login', loginRouter);
router.use('/signIn', signInRouter);

router.use((req, res) => {
  res.render('notFound');
});

module.exports = router;
