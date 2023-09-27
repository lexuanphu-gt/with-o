import Login from "./authentication/Login";
import Register from "./authentication/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 function App() {
  return (
    <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      <h1>Welcome to App!</h1>
    </div>
  );
}


export default App;