import React from "react";
import LectureList from './AppList/LectureList';
import AssignmentList from "./AppList/AssignmentList";
import QuizPage from "./QuizPage";
import MainLayout from "./MainLayout";
import CantFound from "./CantFound";
import Details from "./AppList/Details";
import Profile from "./AppList/Profile";
import Students from "./AppList/Students";


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="/lectures" />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="lectures" element={<LectureList />} />
        <Route path="assignments" element={<AssignmentList />} />
        <Route path="assignments/:id/details" element={<Details />} />
        <Route path="profile" element={<Profile />} />
        <Route path="students" element={<Students />} />
      </Route>

      <Route path="quiz" element={<QuizPage />} />

      <Route path="*" element={<CantFound />} />
    </Routes>
  );
}

export default App;
