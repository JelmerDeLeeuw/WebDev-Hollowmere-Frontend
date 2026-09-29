import '../styles/Dropdown.less';
import { useState } from 'react';

function Dropdown({options, onSelect, label="Jelmer de Leeuw"}){
    const [open, setOpen] = useState(false);
    
    const handleClick = (option) => {
        onSelect(option.value);
        setOpen(false);
    };


    return (
        <div className="dropdown-container">
            <button type="button" onClick={() => setOpen(!open)}>
                {label}
            </button>
            
            {open && (
                <ul className="dropdown-list">
                    {options.map((option) => (
                        <li key={option.key} onClick={() => handleClick(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

        </div>
   );
}

export default Dropdown;
