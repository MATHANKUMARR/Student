const mysqlConnection = require("../DBConfig/Database");


module.exports = class Student {
    getAllData() {
        return (new Promise((resolve, reject) => {
            mysqlConnection.execute('SELECT * FROM sql6527893.student')
                .then(([rows, fieldData]) => {
                    resolve(rows);
                })
        }))
    }

    getCount() {
        return (new Promise((resolve, reject) => {
            mysqlConnection.execute('SELECT COUNT(student_id) as count FROM sql6527893.student')
                .then(([rows, fieldData]) => {
                    resolve(rows);
                })
        }))
    }

    getOneStudent(id){
        return (new Promise((resolve, reject) => {
            mysqlConnection.execute('SELECT * FROM sql6527893.student where student_id ='+id)
                .then(([rows, fieldData]) => {
                    resolve(rows[0]);
                })
        }))
    }

    updateStudentData(data){
        let qry = "UPDATE sql6527893.student SET first_name = '"+data.fname+"',last_name = '"+data.lname+"',gender = '"+data.gender+"',address = '"+data.address+"',email = '"+data.email+"',phone = '"+data.phone+"' WHERE student_id = '"+data.student_id+"'";
        return (new Promise((resolve, reject) => {
            mysqlConnection.execute(qry)
                .then(([rows, fieldData]) => {
                    resolve(rows[0]);
                })
        }))
    }

   deleteStudentData(id) {
        return (new Promise((resolve, reject) => {
            mysqlConnection.execute("DELETE FROM sql6527893.student WHERE student_id = "+id)
                .then(([rows, fieldData]) => {
                    resolve(rows);
                })
        }))
    }

    addNewStudent(data){
        let qry = "INSERT INTO sql6527893.student (first_name, last_name, gender, address, email, phone) VALUES ('"+data.fname+"','"+data.lname+"','"+data.gender+"','"+data.address+"','"+data.email+"','"+data.phone+"')";
        return (new Promise((resolve, reject) => {
            mysqlConnection.execute(qry)
                .then(([rows, fieldData]) => {
                    resolve(rows[0]);
                })
        }))
    }
}