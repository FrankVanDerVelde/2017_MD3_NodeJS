var user = require('../controllers/user.controller');

module.exports = function(app) {

    app.route('/users')
        .get(user.list)
        .post(user.changeName, user.create);

    app.route('/users/:userID')
        .get(user.read)
        .put(user.update)
        .delete(user.delete);

        app.route('/meetings')
        .get(user.meetings)
        .post(user.createMeeting)
        ;

    app.param('userID', user.getUserByID);
};
