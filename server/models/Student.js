const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    enrollmentNum:{
        type: String,
        required: true
    },
    rollNum:{
        type: String,
        required: true
    },
    enrolledBranch: {
        type: String,
        required: true
    },
    enrolledYear: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Student",StudentSchema);