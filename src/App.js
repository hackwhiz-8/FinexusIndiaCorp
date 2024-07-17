import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Homepage/Home";


function App() {
  return (
    <div className="bg-richblack-900 w-screen min-h-screen relative  flex flex-col font-inter">
      
      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>

    </div>
  );
}

export default App;
