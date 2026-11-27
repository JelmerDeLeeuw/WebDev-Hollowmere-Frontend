import '../styles/Dropdown.less';
import Button from './Button';
import { useState } from 'react';

type Props = {
    options: any[];
    onSelect: (item: any) => void;
    label: string;
    className?: string;
}


function Dropdown(props: Props){
    const [open, setOpen] = useState(false);

    const handleClick = (option) => {
        props.onSelect(option.value);
        setOpen(false);
    };

    const toggle = () => {
        setOpen(!open);
    };


    return (
        <div className={`dropdown-container ${props.className}`}>
            <Button title={props.label} icon="chevron-down" iconType="solid" onSelect={toggle} />
            {open && (
                <ul className="dropdown-list">
                    {props.options.map((option) => (
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
