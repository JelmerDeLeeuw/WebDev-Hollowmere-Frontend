import { useEffect } from 'react';
import { API_URL } from '../config';
import '../styles/Login.less';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Login() {
  console.log('ik wordt gerendered');

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Fout bij ophalen data:', err));
  }, []);

  return (
    <div className="login-page">
        <div className="header-login-container">
            <div className="logo-container">
                <img src="/images/logo.png" alt="Logo" className="logo" />
            </div>
        </div>
        
        <div className="main">
            <div className="login-container">
                <div className="header-container">
                    <h1 className="title">Login</h1>
                    <hr className="line" />
                </div>
                <div className="login-form">
                    <div className="login-username">
                        <InputField label="Username" isPassword={false}/>
                    </div>
                    <div className="login-password">
                        <InputField label="Password" isPassword={true} />
                    </div>    
                </div>
                <div className="buttons">
                    <Button title="Login" className="login-button" /> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
