const mongoose = require('mongoose');

const Student = mongoose.model(process.env.STUDENT_MODEL);

getAll = (req, res) => {
    console.log("Get All Controller called");
    console.log("GET One Publisher controller");

    const studentId = req.params.studentId;

    Student.findById(studentId).select('course').exec(function(err, student){
        console.log("Student Found");
        res.status(200).json(student.course)
    })
}

const getOne = (req, res) => {
    console.log("GET One Publisher controller");

    const studentId = req.params.studentId;
    const courseId = req.params.courseId;

    Student.findById(studentId).select('course').exec(function(err, student){
        console.log("Student Found");
        res.status(200).json(student.course.id(courseId))
    })
} 

module.exports = {
    getOne: getOne,
    getAll: getAll,
}
