import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Contacts from './pages/contacts/contacts';
import UsefulInfo from './pages/usefulInfo/usefulInfo';
import Comment from './components/comment/comment';
import Exam from './pages/exam/exam';
import Auth from './pages/auth/auth';
import KnowledgeBase from './pages/knowledgeBase/knowledgeBase';
import ExamQuestion from './pages/examQuestion/examQuestion';

function App() {
  return (
    <div>
      {/* <Contacts/> */}
      <UsefulInfo/>
      {/* <Comment/> */}
      {/* <Exam/> */}
      {/* <Auth/> */}
      {/* <KnowledgeBase/> */}
      {/* <ExamQuestion/> */}
    </div>
  );
}

export default App;
