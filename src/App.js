import "./App.css";
import Login from "./components/Login";
import UponLogin from "./components/UponLogin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/ContextFile";
import { useState } from "react";

function App() {
  const [name, setName] = useState("inital Value");
  return (
    <div className="App">
      <UserProvider value={[name, setName]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/uponlogin" element={<UponLogin />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
