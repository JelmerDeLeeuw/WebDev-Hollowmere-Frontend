
import { useEffect } from 'react';
import { API_URL } from '../config';
import '../styles/Login.less';
import Table from '../components/Table';


function Login() {
  console.log('ik wordt gerendered');

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Fout bij ophalen data:', err));
  }, []);

    const columnstest = [
        { key: "name", label: "Naam" },
        { key: "email", label: "E-mail" },
        { key: "role", label: "Rol" },
        { key: "action", label: "" },
    ];
    const datatest = [
        { id: 1, name: "Jan", email: "jan@example.com", role: "Admin"},
        { id: 2, name: "Lisa", email: "lisa@example.com", role: "Gebruiker"},
        { id: 3, name: "Pieter", email: "pieter@example.com", role: "Editor"},
    ];
  return (
    <div>
        <h1 className='title'>Login</h1>
        <Table columns={columnstest} data={datatest} showButton buttonLabel='Edit'/>
        <Table columns={columnstest} data={datatest}/>
    </div>
  );
}

export default Login;
