import '../styles/Home.less';
import Frame from '../components/Frame';

function Home() {
    return (
        <div className="home-page">
            <div className="main">
                <div className="home-container">
                    <Frame title="Welcome to Hollowmere">
                        <p className="text">
                            Hollowmere is the guild's one place for quests, gear,
                            drills and reports. Pin a letter from the valley to
                            the board, fill the places fairly, and send your party
                            out knowing what earlier parties found. Sign gear out
                            and back in, keep track of completed drills, and write
                            reports that the next party will actually read.
                        </p>
                    </Frame>
                </div>
            </div>
        </div>
    );
}

export default Home;
