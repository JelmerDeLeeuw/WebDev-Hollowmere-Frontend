import { useState } from 'react';
import '../styles/Login.less';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Frame from '../components/Frame';
import useUsers from '../hooks/useUsers';
import useNavigation from '../hooks/useNavigation';


function Login() {
    const { login, error, } = useUsers();
    const { goTo } = useNavigation();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function submit () {
        try {
            const response = await login({ username, password});

            if (response?.token) {
                localStorage.setItem('token', response.token);
                goTo('home');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login-page">
            <div className="header-login-container">
                <div className="logo-container">
                    <img src="/images/logo.png" alt="Logo" className="logo" />
                </div>
            </div>

            <div className="main">
                <div className="login-container">
                    <Frame title="Login">
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
                    </Frame>
                </div>
            </div>
        </div>
    );
}

export default Login;
