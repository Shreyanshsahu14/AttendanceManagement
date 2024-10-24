import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons
import "./AttendanceApp.css";

const AttendanceApp = () => {
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [theme, setTheme] = useState("light"); // Theme state for light/dark mode
  const [students, setStudents] = useState([
    { id: 324, name: "Shivansh Devendra Verma", rollNo: "CSB21001", present: false },
    // Add more students as needed
  ]);

  const sessionClasses = {
    "Semester 1": ["AMR2C1", "APR2C2", "MER2C3", "EIR2C4", "COR2C5", "SSR2S2"],
    "Semester 2": ["AMR1C1", "ACR1C2", "MER1C3", "ETR1C4", "MER1C5", "SSR1S1"],
    "Semester 3": ["2AERC1", "3EIRC2", "3EIRC3", "3EIRC4", "3EIRG1", "3EIRL1"],
    "Semester 4": ["4EIRC1", "4EIRC2", "4EIRC3", "4EIRC4", "4EIRG2", "4SERS4"],
    "Semester 5": ["5EIRC1", "5EIRC2", "5EIRC3", "5EIRE1", "5EIRE5", "5SERS5"],
    "Semester 6": ["6EIRC1", "6EIRC2", "6EIRC3", "6EIRE1", "6EIRG4", "6SERS6"],
    "Semester 7": ["7EIRC1", "7EIRC2", "7EIRC3", "7EIRE1"],
    "Semester 8": ["8EIRC1", "8EIRC2", "8EIRC3", "8EIRC4"],
  };

  const [availableClasses, setAvailableClasses] = useState([]); // State for available classes

  const navigate = useNavigate();

  const handleSessionChange = (event) => {
    const session = event.target.value;
    setSelectedSession(session);
    setAvailableClasses(sessionClasses[session] || []);
    setSelectedClass("");
  };

  const handleClassChange = (className) => {
    setSelectedClass(className);
  };

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleLogout = () => {
    navigate("/login");
  };

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Load theme from localStorage and update the theme state
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme); // Save theme preference in localStorage
  }, [theme]);

  return (
    <div className={`attendance-app ${theme}`}>
      <header>
        <h1>Attendance App</h1>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />} {/* Moon for light mode, sun for dark mode */}
          </button>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="session-selector">
        <label>Semester:</label>
        <select value={selectedSession} onChange={handleSessionChange}>
          <option value="">Select Semester</option>
          {Object.keys(sessionClasses).map((session) => (
            <option key={session} value={session}>
              {session}
            </option>
          ))}
        </select>
      </div>

      {availableClasses.length > 0 && (
        <div className="class-selector">
          {availableClasses.map((className) => (
            <button key={className} onClick={() => handleClassChange(className)}>
              {className}
            </button>
          ))}
        </div>
      )}

      {selectedSession && selectedClass && (
        <div className="student-list">
          <h2>
            {selectedClass} - {selectedSession}
          </h2>
          {students.map((student) => (
            <div key={student.id} className="student">
              <p>{student.rollNo}</p>
              <p>{student.name}</p>
              <input
                type="checkbox"
                checked={student.present}
                onChange={() => toggleAttendance(student.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttendanceApp;
