import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"
import { Routes,Route } from "react-router-dom";






function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="About" element={<About/>}></Route>
      <Route path="Services" element={<Services/>}></Route>
      <Route path="Contact" element={<Contact/>}></Route>
     </Routes>
      <Navbar />

    </div>
  );
}

export default App;
