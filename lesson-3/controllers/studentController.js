const studentData = require('../data/school.json');

module.exports.getAll = (req, res) => {

    console.log("Get All Students");
    console.log(studentData);
    return res.status(200).json(studentData);

}

module.exports.getOne = (req, res) => {

    let index = parseInt(req.params.studentIndex, 10) - 1;
    console.log("Get One Student");
    console.log(studentData[index]);
    return res.status(200).json(studentData[index ]);

}