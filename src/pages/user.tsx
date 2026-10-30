import Frame from '../components/Frame';
import Button from '../components/Button';

function User() {
  return (
    <div>
        <h1 className='title'>User</h1>
        <Frame title={"test"} content={<Button title={'test'} icon="chevron-down" iconType="solid" onSelect={null} />}/>
    </div>
  );
}

export default User;