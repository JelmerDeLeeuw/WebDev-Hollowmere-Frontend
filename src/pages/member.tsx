import Frame from '../components/Frame';
import useUsers from '../hooks/useUsers';
import { useEffect } from 'react'; 

function Member ()
{
    const { fetchUser, userItem} = useUsers();

    useEffect(() => 
        {
            fetchUser();
        }, []);   


    return (
        <Frame title = "User info">
            <p>Name: {userItem?.member.name}</p>
            <p>Training level: {userItem?.member.trainingLevelId}</p>
        </Frame> 
    );
}

export default Member;