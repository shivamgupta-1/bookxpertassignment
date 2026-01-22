import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import AlertMsg from '../../atoms/AlertMsg';
import { useAuth } from '../../../contexts/AuthContext';

const Login = () => {

    const creds = [
        {username: 'admin', password: 'admin123'},
        {username: 'anuj', password: 'anuj123'},
        {username: 'guest', password: 'guest123'},
        {username: 'shivam', password: 'password123'}
    ]

    const navigate = useNavigate();
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgLabel, setMsgLabel] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const checkCredentials = () => {
        return creds.some(cred=> cred.username === username && cred.password === password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = checkCredentials();

        if(isValid){
           login(username);
           navigate('/dashboard');
        }else{
            setMsgLabel('Invalid credentials');
        }
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { type, value } = e.target;
        if (type === 'text') {
            const isValidUsername = /^[a-zA-Z0-9]*$/.test(value);
            if (!isValidUsername) {
                setErrorMessage('Username can only contain alphanumeric characters.');
            } else {
              setUsername(value);
              setErrorMessage('');
            }
        } else if (type === 'password') {
            const isvlaid = value.length < 14;
            if (!isvlaid) {
                setErrorMessage('The password should be fewer than 13 characters long.');
            } else {
              setPassword(value);
              setErrorMessage('');
            }
        }
    };

  const isDisabled = username === '' || password === '';  

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="login-page">
      { msgLabel && <AlertMsg variant="error" setMsgLabel={setMsgLabel}>{msgLabel}</AlertMsg> }
      <div className="login-card">
        <h2 className="brand">BookXpert</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input className="input" type="text" placeholder="Username" value={username} onChange={handleInputChange} />
          <input className="input" type="password" placeholder="Password" value={password} onChange={handleInputChange} />
          <button className="btn" type='submit' disabled={isDisabled && errorMessage.length== 0 } >Login</button>
          {errorMessage.length > 0 && <span className='error-message'>{errorMessage}</span>}
        </form>
      </div>
    </div>
  )
}

export default Login
