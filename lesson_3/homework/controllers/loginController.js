const users = require("../db/users");

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    renderLoginSome(req, res) {
        const exist = users.some(value => value.email === req.body.email);

        if (exist) {
            res.redirect('/exist');
            return;
        }

        users.push({...req.body, id: users.length + 1});
        res.redirect('/users');
    }
}

module.exports = new LoginController();