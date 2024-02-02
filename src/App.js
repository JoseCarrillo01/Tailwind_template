import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Footer from "./components/footer";
import Login from "./components/login";
import Productos from "./components/productos";
import Section from "./components/contentSeccion";
import { useLocation } from "react-router-dom";
import Navigation from "./components/Navbar";
import Header from "./components/header";
import Bloc from "./components/bloc";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
  };


  return (
    <Router>
      <div>
        {!showLogin && <Navigation onLoginToggle={handleLoginToggle} />}
        
        <div>
          <Routes>
            <Route path="/" element = { <Section/> } />
            <Route path="/productos" element = { <Productos/> } />
            <Route path="/bloc" element = { <Bloc/> } />


            <Route
              path="/login" element={
                showLogin ? <Login onLoginToggle={handleLoginToggle} /> : null
              }
              
            />
            

          </Routes>
          <Outlet />
        </div>

        {!showLogin && <Footer />}
      </div>
    </Router>
  );
}

export default App;
