import { useEffect } from 'react';
import { API_URL } from './config';
import './styles/App.less';

function App() {
  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Fout bij ophalen data:', err));
  }, []);

  return (
    <div>
        <h1 className='title'>Test</h1>
    </div>
  );
}

export default App;