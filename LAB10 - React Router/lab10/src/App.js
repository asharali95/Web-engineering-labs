import "./App.css";
import Shell from "./Components/Shell/Shell";
import { Routes as Switch, Route } from "react-router-dom";
import StudentDetails from "./Components/studentDetails/StudentDetails";
function App() {
  return (
    <div className="container">
      <h1 id="header">Lab 10 - React Router</h1>
      <Switch>
        <Route path="/" element={<Shell />} />
        <Route path="/details" element={<StudentDetails />} />
      </Switch>
    </div>
  );
}

export default App;
