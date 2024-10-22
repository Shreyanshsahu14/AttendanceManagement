const Course = require("../models/Course");

exports.copyStudentsFromPreviousSession = async (req, res) => {
    const { previousSessionId, newSessionId } = req.body;
    
    try {
      const previousCourses = await Course.find({ session: previousSessionId });
      
      for (const course of previousCourses) {
        const newCourse = new Course({
          course_id: course.course_id,
          course_name: course.course_name,
          enrolled_Students: course.enrolled_Students, // Copy students
          professor: course.professor,
          semester: course.semester,
          credit: course.credit,
          session: newSessionId // Link to the new session
        });
        await newCourse.save();
      }

      return res.status(200).json({
        success: true,
        message: "Students copied to new session successfully"
      });
    } catch (error) {
      console.error("Error copying students:", error);
      return res.status(500).json({
        success: false,
        message: "Error copying students"
      });
    }
  };
  