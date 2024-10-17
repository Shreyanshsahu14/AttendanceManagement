const Student = require("../models/Student");

exports.createStudent = async (req,res) => {
    const {name , enrollmentNum , rollNum  , enrolledBranch , enrolledYear} = req.body

    if (name.trim() == "" || enrollmentNum.trim() == "" || rollNum.trim() == "" || !enrolledYear || !enrolledBranch) {
        return res.status(403).send({
            success: false,
            message: "All Fields are required",
        });
    }
    
    const newStudent = await Student.create({nama, enrollmentNum, rollNum , enrolledBranch , enrolledYear});

    if (!newStudent) {
        return res.status(403).send({
            success: false,
            message: "Failed to create student!",
        });
    }

    return res.status(200).json({
        success: true,
        newStudent,
        message: "Student created Successfully"
    })
}

exports.deleteStudent = async (req,res) => {
    const {name , enrollmentNum} = req.body;

    if (!name.trim() || !enrollmentNum.trim()) {
        return res.status(400).send({
            success: false,
            message: "Name and Enrollment Number are necessary",
        });
    }

    const deleteStudent = await Student.findOneAndDelete({enrollmentNum});

    if (!deleteStudent) {
        return res.status(404).send({
            success: false,
            message: "Student not found with the provided enrollment number!",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Student removed Successfully"
    })
}