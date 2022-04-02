const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    code : String
})

const StudentSchema = mongoose.Schema({
    
    name : {
        type : String,
        required : true
    },

    gpa : {
       type:  Number
    },
    course : [CourseSchema]

});

mongoose.model(process.env.STUDENT_MODEL, StudentSchema, process.env.STUDENT_COLLECTION)
