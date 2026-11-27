import { useEffect } from 'react';
import '../styles/Archive.less';
import useArchive from '../hooks/useArchive';
import Frame from '../components/Frame';
import ItemCardArchive from '../components/ItemCards/ItemCardArchive';
import type { ArchiveItem } from '../types/ArchiveItem';


function Archive() {
    const { fetchArchive, archiveItems } = useArchive();

    useEffect(() => {
        fetchArchive();
    }, []);

    return (
        <div className="archive-page">
            <div className="main">
                <div className="archive-container">
                    <Frame title="Archive">
                        <div className="archive-items-container">
                            {archiveItems.map((item) => (
                                <ItemCardArchive key={item.id} item={item} /> 
                            ))}
                        </div>
                    </Frame>
                </div>
            </div>
        </div>
    );
}

export default Archive;
