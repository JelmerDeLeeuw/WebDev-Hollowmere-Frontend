import '../styles/Dropdown.less';
import Button from './Button';
import { useState } from 'react';

function Dropdown({options, onSelect, label="Jelmer de Leeuw", className = ""}){
    const [open, setOpen] = useState(false);
    
    const handleClick = (option) => {
        onSelect(option.value);
        setOpen(false);
    };

    const toggle = () => {
        setOpen(!open);
    };   


    return (
        <div className={`dropdown-container ${className}`}>
            <Button title={label} icon="chevron-down" iconType="solid" onSelect={toggle} />
            {open && (
                <ul className="dropdown-list">
                    {options.map((option) => (
                        <li className="dropdown-item" key={option.key} onClick={() => handleClick(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

        </div>
   );
}

export default Dropdown;
