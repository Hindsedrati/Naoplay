import React, { useState } from 'react';
import './login.scss';


function Login () {
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
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <label>
        <input placeholder="Identifiant" type="email" name="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        <input placeholder="Mot de passe"  type="password" name="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">CONNEXION</button>
    </form>
  );
};

export default Login;
