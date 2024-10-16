const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    marked_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
}, { timestamps: true });

const Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = Attendance;
