const {Router} = require('express');

const DeleteController = require('../controllers/deleteController')

//deleteUserRouter
const deleteRouter = Router();

deleteRouter.post('/:userId', DeleteController.deleteUser);

module.exports = deleteRouter;