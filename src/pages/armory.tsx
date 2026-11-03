import '../styles/Armory.less';
import useArmory from '../hooks/useArmory';
import { useEffect } from 'react';

function Armory() {
    const { fetchArmory, armoryItems } = useArmory();

    useEffect(() => {
        fetchArmory();
    }, []);
    

    console.log(armoryItems);

    return (
        <div className="armory-page">
            <div className="main">
                <div className="armory-container">
                    <h1>Ik word aangeroepen</h1>
                </div>
            </div>
        </div>
    );
}

export default Armory;
