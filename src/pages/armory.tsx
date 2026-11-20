import '../styles/Armory.less';
import useArmory from '../hooks/useArmory';
import Frame from '../components/Frame';
import ItemCard from '../components/ItemCard';
import { useEffect } from 'react';

function Armory() {
    const { fetchArmory, armoryItems } = useArmory();

    useEffect(() => {
        fetchArmory();
    }, []);

    return (
        <div className="armory-page">
            <div className="main">
                <div className="armory-container">
                    <Frame title="Armory">
                        <div className="armory-items-container">
                            {/* {armoryItems.map((item) => (
                                <ItemCard item={item} hasImage={true} hasButton={true}/>
                            ))} */}
                        </div>
                    </Frame>
                </div>
            </div>
        </div>
    );
}

export default Armory;
