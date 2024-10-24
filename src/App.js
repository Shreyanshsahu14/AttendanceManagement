// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import LoginPage from './components/LoginPage'; 
// import SignupPage from './components/SignupPage'; 
// import AttendanceApp from './AttendanceApp/AttendanceApp'; 
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
   
//           <Route path="/login" element={<LoginPage />} />

//           <Route path="/signup" element={<SignupPage />} />
          


//           <Route path="/attendance" element={<AttendanceApp />} />
          
         
//           <Route path="/" element={<LoginPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage'; 
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage'; 
import AttendanceApp from './AttendanceApp/AttendanceApp'; // Import AttendanceApp

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/attendance" element={<AttendanceApp />} /> {/* Attendance App route */}
          <Route path="/" element={<LoginPage />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

