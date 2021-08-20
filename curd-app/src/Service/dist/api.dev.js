"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editUser = exports.deleteUser = exports.addUser = exports.getUsers = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersUrl = 'http://localhost:3003/users';

var getUsers = function getUsers(id) {
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = id || '';
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(usersUrl, "/").concat(id)));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getUsers = getUsers;

var addUser = function addUser(user) {
  return regeneratorRuntime.async(function addUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(usersUrl, "/add"), user));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.addUser = addUser;

var deleteUser = function deleteUser(id) {
  return regeneratorRuntime.async(function deleteUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(usersUrl, "/").concat(id)));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.deleteUser = deleteUser;

var editUser = function editUser(id, user) {
  return regeneratorRuntime.async(function editUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].put("".concat(usersUrl, "/").concat(id), user));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.editUser = editUser;