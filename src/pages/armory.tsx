import { useState } from 'react';
import '../styles/Armory.less';
import useArmory from '../hooks/useArmory';
import Frame from '../components/Frame';
import ItemCardArmory from '../components/ItemCards/ItemCardArmory';
import { useEffect } from 'react';

function Armory() {
    const { fetchArmory, armoryItems, borrow } = useArmory();
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetchArmory();
    }, [submitted]);


    async function handleBorrow(item: any) {
        try {
            const response = await borrow(item);

            if(response) {
                setSubmitted(true);
            }
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="armory-page">
            <div className="main">
                <div className="armory-container">
                    <Frame title="Armory">
                        <div className="armory-items-container">
                            {armoryItems.map((item) => (
                                <ItemCardArmory key={item.id} item={item} onBorrow={handleBorrow}/>
                            ))}
                        </div>
                    </Frame>
                </div>
            </div>
        </div>
    );
}

export default Armory;
