const users = require("../db/users");

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    renderLoginSome(req, res) {
        users.push({...req.body, id: new Date().getTime()});
        res.redirect('/users');
    }
}

module.exports = new LoginController();
