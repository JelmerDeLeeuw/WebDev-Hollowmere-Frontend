import Frame from '../components/Frame';
import Table from '../components/Table';
import useUsers from '../hooks/useUsers';
import { useEffect } from 'react'; 
import '../styles/Member.less';


function Member ()
{
    const { fetchUser, userItem} = useUsers();

    const dataDrafts = [
        {
            id: 'drafts',
            values: [
                { label: '12-11-2026' },
                { label: 'testing' },
                { label: 'test' },
            ],
        },
        {
            id: 'drafts',
            values: [
                { label: '17-11-2026' },
                { label: 'testing2' },
                { label: 'test2' },
            ],
        },
        {
            id: 'drafts',
            values: [
                { label: '21-11-2026' },
                { label: 'testing3' },
                { label: 'test3' },
            ],
        },
    ];

    const dataDrills = [
        {
            id: 'drills',
            values: [
                { label: '12-11-2026' },
                { label: 'testing' },
                { label: 'test' },
            ],
        },
        {
            id: 'drills',
            values: [
                { label: '17-11-2026' },
                { label: 'testing2' },
                { label: 'test2' },
            ],
        },
        {
            id: 'drills',
            values: [
                { label: '21-11-2026' },
                { label: 'testing3' },
                { label: 'test3' },
            ],
        },
    ];

    const dataBorrow = [
        {
            id: 'borrow',
            values: [
                { label: '12-11-2026' },
                { label: 'test' },
                { label: 'testing' },
                { label: 'Recruit' },
            ],
        },
        {
            id: 'borrow',
            values: [
                { label: '12-11-2026' },
                { label: 'test2' },
                { label: 'testing2' },
                { label: 'Squire' },
            ],
        },
        {
            id: 'borrow',
            values: [
                { label: '12-11-2026' },
                { label: 'test3' },
                { label: 'testing3' },
                { label: 'Veteran' },
            ],
        },
    ];

    const dataQuests = [
        {
            id: 'quests',
            values: [
                { label: 'Test quest' },
                { label: 'Test village' },
                { label: '21-10-2026' },
                { label: '8 days' },
            ],
        },
        {
            id: 'quests',
            values: [
                { label: 'Test quest2' },
                { label: 'Test village2' },
                { label: '7-11-2026' },
                { label: '4 days' },
            ],
        },
        {
            id: 'quests',
            values: [
                { label: 'Test quest3' },
                { label: 'Test village3' },
                { label: '12-11-2026' },
                { label: '2 days' },
            ],
        },
    ];

    useEffect(() => 
        {
            fetchUser();
        }, []);   


    return (
        <div className="member-page">
            <div className="main">
                <div className="user-info-container">
                    <Frame title = "User info">
                        <div className="user-info-items-container">
                            <p>Name: {userItem?.member.name}</p>
                            <p>Training level: {userItem?.member.trainingLevelId}</p>
                        </div>
                    </Frame>
                </div>

                <div className="table-container">
                    <div className="draft-reports-container">
                        <Frame title = "Draft reports">
                            <div className= "draft-reports-table-container">
                                <Table 
                                    headers={["Date", "Name", "Region", ""]} 
                                    rows={dataDrafts}
                                    showButton= {true}
                                    buttonLabel= "Edit">
                                </Table>
                            </div>
                        </Frame>
                    </div>

                    <div className="borrowed-items-container">
                        <Frame title = "Borrowed items">
                            <div className= "borrowed-items-table-container">
                                <Table 
                                    headers={["Borrow date", "Name", "Description", "Training level",""]} 
                                    rows={dataBorrow}
                                    showButton= {true}
                                    buttonLabel= "Return"/>
                            </div>
                        </Frame>
                    </div>

                    <div className="drills-container">
                        <Frame title = "Drills">
                            <div className= "drills-table-container">
                                <Table 
                                    headers={["Date", "Title", "Gear", ""]} 
                                    rows={dataDrills}
                                    showButton= {true}
                                    buttonLabel= "Edit">
                                </Table>
                            </div>
                        </Frame>
                    </div>

                    <div className="my-quests-container">
                        <Frame title = "My quests">
                            <div className= "my-quests-table-container">
                                <Table 
                                    headers={["Quest name", "Village", "Departure day", "Duration"]}
                                    rows={dataQuests}/>
                            </div>
                        </Frame>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;