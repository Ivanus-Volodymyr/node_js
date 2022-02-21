const users = require("../db/users");

class UserController {
    renderUsers(req, res) {
        const {age, city} = req.query;
        let filter = [...users];

        if (age) {
            filter = filter.filter(value => value.age === age);
        }
        if (city) {
            filter = filter.filter(value => value.city.toLowerCase() === city);
        }

        res.render('users', {filter});
    }

    getUserById(req, res) {
        const {userId} = req.params;
        const user = users[userId - 1];
        res.render('user', {user});
    }
}

module.exports = new UserController();