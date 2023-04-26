import React, { useState } from 'react';
import './login.scss';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailFocus = () => {
    if (email === '') {
      setEmail('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = () => {
    if (email === '') {
      setEmail('Pnom@naoplay.fr');
    }
  };

  const handlePasswordFocus = () => {
    if (password === '') {
      setPassword('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordBlur = () => {
    if (password === '') {
      setPassword('**************');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
    // Envoie des données du formulaire vers le serveur
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <label>
        <input placeholder={email === '' ? 'Pnom@naoplay.fr' : ''} type="email" name="email" value={email} onFocus={handleEmailFocus} onChange={handleEmailChange} onBlur={handleEmailBlur} />
      </label>
      <label>
        <input placeholder={password === '' ? '**************' : ''} type="password" name="password" value={password} onFocus={handlePasswordFocus} onChange={handlePasswordChange} onBlur={handlePasswordBlur} />
      </label>
      <button type="submit">CONNEXION</button>
    </form>
  );
};

export default Login;

