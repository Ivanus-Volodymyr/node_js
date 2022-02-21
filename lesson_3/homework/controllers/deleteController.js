const users = require("../db/users");

class DeleteController {
    deleteUser(req, res) {
        const {userId} = req.params;

        users.splice(+userId - 1, 1);
        res.redirect('/users');
    }
}

module.exports = new DeleteController();