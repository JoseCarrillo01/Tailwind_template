import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Login from './components/login'
import Section from './components/contentSeccion';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Router>
      <div>
        {/* Mostrar Header solo si no se ha hecho clic en el botón de inicio de sesión */}
        {!showLogin && <Header onLoginToggle={handleLoginToggle} />}
        {!showLogin && <Section onLoginToggle={handleLoginToggle} />}

        <div>
          <Routes>
            {/* Ruta para mostrar solo el componente Login */}
            <Route
              path="/login"
              element={
                // Renderizar el componente Login solo si showLogin es verdadero
                showLogin ? (
                  <Login onLoginToggle={handleLoginToggle} />
                ) : null
              }
            />
          </Routes>
        </div>

        {/* Mostrar Footer solo si no se ha hecho clic en el botón de inicio de sesión */}
        {!showLogin && <Footer />}
      </div>
    </Router>
  );
}

export default App;
