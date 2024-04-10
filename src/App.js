import './App.css';

// components
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import Todos from './components/Todos';

import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          {user && <Route path="/todos" element={<Main />} />}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        {/* <ToDoForm />
        <Todos /> */}
      </div>
    </Router>

  );
}

export default App;
