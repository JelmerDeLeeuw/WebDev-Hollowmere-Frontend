import Frame from '../components/Frame';
import useUsers from '../hooks/useUsers';
import { useEffect } from 'react'; 

function Member ()
{
    const { fetchUser, userItem} = useUsers();

    useEffect(() => 
        {
            fetchUser(1);
        }, []);   

    console.log(userItem);

    return (
        <Frame title = "User info">
            <p>Name: </p>
            <p>Training level: </p>
        </Frame> 
    );
}

export default Member;