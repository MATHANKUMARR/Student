const express = require('express');
const {registerView,updateView,studentsView,updateStudentData,deleteStudentData,addNewStudent,getUniqueData} = require('../controllers/registerController');
const router = express.Router();

router.get('/', registerView);
router.get('/students', studentsView);
router.get('/update/:id', updateView);
router.post('/updateStudentData', updateStudentData);
router.get('/deleteStudentData/:id', deleteStudentData);
router.post('/addNewStudent', addNewStudent)
router.get('/getAll', getUniqueData);

module.exports = router;