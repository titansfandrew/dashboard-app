import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <HashRouter> 
      <Routes>       
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </HashRouter> 
  );
}

export default App;