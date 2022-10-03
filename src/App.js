import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home></Home>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <Details></Details>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
