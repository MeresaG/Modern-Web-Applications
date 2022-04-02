const mongoose = require('mongoose');

const Student = mongoose.model(process.env.STUDENT_MODEL);

getAll = (req, res) => {
    console.log("Get All Controller called");
    let offset = 0;
    let count = 2;
    if(req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if(req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
        count = count > 10 ? 10 : count;
    }
    Student.find().skip(offset).limit(count).exec(function(err, students) {
        if(err) {
            return res.status(500).json({error : err})

        }
        console.log("Found students");
        return res.status(200).json(students);
        });
}

const getOne = (req, res) => {
    console.log("GET One Publisher controller");

    const studentId = req.params.studentId;

    Student.findById(studentId).select('course').exec(function(err, course){
        console.log("Student Found");
        res.status(200).json(course)
    })
} 

module.exports = {
    getOne: getOne,
    getAll: getAll,
}
