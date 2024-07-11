import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./components/contact.jsx";
import Services from "./components/services.jsx";

import "./styles/app.scss";
import "./styles/media.scss"
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App;
