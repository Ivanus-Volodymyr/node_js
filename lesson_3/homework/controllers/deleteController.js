const users = require("../db/users");

class DeleteController {
    deleteUser(req, res) {
        const {id} = req.params;
        const index = users.findIndex(value => value.id === +id);

        users.splice(index, 1);
        res.redirect('/users');
    }
}

module.exports = new DeleteController();
