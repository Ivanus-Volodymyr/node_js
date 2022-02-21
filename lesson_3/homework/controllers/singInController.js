const users = require("../db/users");

class SingInController {
    singInRender(req, res) {
        res.render('signIn');
    }

    singInFind(req, res) {
        const user = users.find(value => value.email === req.body.email && value.password === req.body.password);

        if (user) {
            res.render('user', {user});
            return;
        }

        res.render('userNotFound');
    }

}

module.exports = new SingInController();