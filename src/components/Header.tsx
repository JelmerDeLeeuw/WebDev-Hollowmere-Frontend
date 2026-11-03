import '../styles/Header.less';
import Dropdown from './Dropdown';
import Button from './Button';
import { useState } from 'react';
import useNavigation from '../hooks/useNavigation';


function Header(){
    const [chosen, setChosen] = useState("");
    const { goTo } = useNavigation();

    const dropdownItems = [
        { key: 1, value: 'createDrills', label: 'Create Drills' },
        { key: 2, value: 'editDrills', label: 'Edit Drills' },
        { key: 3, value: 'createGear', label: 'Create Gear' },
        { key: 4, value: 'editGear', label: 'Edit Gear' },
        { key: 5, value: 'member', label: 'Member Page'},
        { key: 6, value: 'logOut', label: 'Logout'},
    ];

    const handleSelect = (value) => {
        if (value === 'logOut') {
            sessionStorage.removeItem('token');
            goTo('login');
            return
        }

        goTo(value);
    }; 
    
    return (
        <div className="header-container">
            <div className="upper-header">
                <div className="logo-container">
                    <img src="/images/logo.png" alt="Logo" className="logo" />
                </div>
                <div className="dropdown-container">
                    <Dropdown options={dropdownItems} onSelect={handleSelect} />
                </div>
            </div>

            <div className="lower-header">
                <div className="buttons">
                    <Button className="lower-header-button" title="Armory"/>
                    <Button className="lower-header-button" title="Arhive"/>
                    <Button className="lower-header-button" title="Yard"/>
                    <Button className="lower-header-button" title="Quests"/>
                    <Button className="lower-header-button" title="Bestiary"/>
                </div>
            </div>
        </div>        
    )
}

export default Header;
