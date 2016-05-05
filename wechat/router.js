var express = require('express');
var department = require('./department');
var user = require('./user');

var router = express.Router();

router.get('/departmentUsers/:departmentId', user.getDepartmentUsers);
router.get('/departments', department.getDepartments);



module.exports = router;