import React, { useState } from 'react';
import './login.scss';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
    // Envoie des données du formulaire vers le serveur

    navigate('/erreur');
  };

  return (
    <div className='main'>
      <form className='login' onSubmit={handleSubmit}>
        <h1>login</h1>
      <label className='label'>
        <label for="mail">mail:</label>
        <input className='input' placeholder="Pnom@naoplay.fr" type="email" name="email" value={email} onChange={handleEmailChange} />
      </label>
      <label className='label'>
        <label for="password">password:</label>
        <input className='input' placeholder="**********"  type="password" name="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">CONNEXION</button>

    </form>
    </div>
  );
};

export default Login;
