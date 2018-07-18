const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
let config = require('../../config');
const ModelIndex = require('../../models/general');
const Admin = ModelIndex.User;
const Op = ModelIndex.sequelize.Op;

const AdminController = function() { };

AdminController.add = function(login, password) {
    return Admin.create({
        login: login,
        password: passwordHash.generate(password)
    });
}

AdminController.exist = function (login) {
    return Admin.find({
        login : login
    });
}

AdminController.verifyPassword = function (pwd, pwd1) {
    if( passwordHash.verify(pwd, pwd1) ) {
        return true;
    }
    return false;
}

AdminController.checkToken = function (token) {
    if (token) {
        try {
            var decoded = jwt.verify(token, config.secret);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    } else {
        return false;
    }
}

module.exports = AdminController;
