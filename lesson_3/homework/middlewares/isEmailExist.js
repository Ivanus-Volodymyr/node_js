const users = require('../db/users')

function IsEmailExist(req, res, next) {
    const {email} = req.body;
    try {
        const find = users.find(value => value.email === email);
        if (find) {
            throw new Error('Email already exist.......');
        }
        next();
    }
    catch (err){
        res.status(400).send(err.message);
    }


}

module.exports = IsEmailExist;
