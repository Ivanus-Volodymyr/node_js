const users = require('../db/users')

function IsEmailExist(req, res, next) {
    const {email} = req.body;
    const find = users.find(value => value.email === email);

    if (find) {
        throw new Error('Email already exist.......').message
    }
    next();
}

module.exports = IsEmailExist;