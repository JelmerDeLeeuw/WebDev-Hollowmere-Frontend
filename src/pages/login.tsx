
import { useEffect } from 'react';
import { API_URL } from '../config';
import '../styles/Login.less';

function Login() {
  console.log('ik wordt gerendered');

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Fout bij ophalen data:', err));
  }, []);

  return (
    <div className="login-container">
       <h1 className='title'>Login</h1>
    </div>
  );
}

export default Login;
