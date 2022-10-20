const Student = require("../models/studentRegistration")

const registerView = async (req, res) => {
    res.render("register");
}

const addNewStudent = async (req, res) => {
    const user = new Student();
    await user.addNewStudent(req.body);
    res.redirect("/students")
}

const updateStudentData = async (req, res) => {
    const user = new Student();
    await user.updateStudentData(req.body);
    res.redirect("/students")
}

const studentsView = async (req, res) => {
    const user = new Student();
    let [data,tcount] = await Promise.all([user.getAllData(), user.getCount()]);
    res.render("students", {
        students : data,
        count : tcount[0].count
    });
}

const updateView = async (req, res) => {
    const user = new Student();
    let student = await user.getOneStudent(req.params['id']);
    res.render("update", {
        data: student
    } );
}

const deleteStudentData = async (req, res) => {
    const user = new Student();
    await user.deleteStudentData(req.params['id']);
    res.redirect("/students")
}

const getUniqueData = async (req, res) => {
    const user = new Student();
    let ans = await user.getAllData();
    res.send(ans);
}
module.exports =  {
    registerView,
    studentsView,
    updateView,
    updateStudentData,
    deleteStudentData,
    addNewStudent,
    getUniqueData
};