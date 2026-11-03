import { useState } from 'react';
import '../styles/Login.less';
import InputField from '../components/InputField';
import Button from '../components/Button';
import useUsers from '../hooks/useUsers';
import useNavigation from '../hooks/useNavigation';


function Login() {
    const { login, error, } = useUsers();
    const { goTo } = useNavigation();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const keyDown = (event) => {
        if(event.key === "Enter") {
            submit();
        }
    }

    async function submit() {
        try {
            const response = await login({ username, password });

            if (response?.token) {
                sessionStorage.setItem('token', response.token);
                goTo('home');
            } else {
                console.log('Geen token ontvangen');
            }
        } catch (e) {
            console.log('Login error:', e);
        }
    }
           
    return (
        <div className="login-page" onKeyDown={keyDown}>
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
                        {error && <p className='error-message'>Invalid username or password</p>}
                        <div className="login-username">
                            <InputField label="Username" isPassword={false} onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className="login-password">
                            <InputField label="Password" isPassword={true} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button title="Login" className="login-button" onSelect={submit}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
