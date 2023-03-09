import React, { useState } from 'react';
import './index.css';

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // evita que se recargue la página al enviar el formulario
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  }

  function handlePasswordToggle() {
    setPasswordVisible(!passwordVisible);
    const passwordToggle = document.querySelector('.password-toggle');
    passwordToggle.classList.toggle('active');
  }

  document.body.classList.add("outside-container");

  return (
    <div className="grid-container">
      <div className="left-column">
        <div className="welcome-message">
          <h1 className='mensaje-bienvenido'>BIENVENIDO</h1>
          <h2 className="uaa-message"><span className="red-letter">U</span>NIVERSIDAD <span className="red-letter">A</span>MERICANA DE <span className="red-letter">A</span>CAPULCO</h2>
          <form onSubmit={handleSubmit} className="login-container">
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Usuario" className="login-input" />
            <div className="password-container">
              <input type={passwordVisible ? 'text' : 'password'} value={password} onChange={handlePasswordChange} placeholder="Contraseña" className="login-input" />
              <div className="password-toggle" onClick={handlePasswordToggle}>{passwordVisible ? 'Ocultar la contraseña' : 'Mostrar la contraseña'}</div>
            </div>
            <button type="submit" className="submit-button">Iniciar Sesión</button>
          </form>
        </div>
        </div>
      <div className="right-column">
        <img src="/images/Americana_Fachada.png" alt="imagen" />
      </div>
    </div>  
  );
}
export default App;