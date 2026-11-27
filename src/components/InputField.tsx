import '../styles/InputField.less';

type Props = {
    label?: string;
    isPassword: boolean;
    className?:string;
    onChange: () => void;
}

function InputField(props: Props) {
    
    return (
        <div className={`input-field ${props.className}`}>
            <label className="label" htmlFor="input">{props.label}</label>
            <input 
                className="input" 
                type={props.isPassword ? "password" : "text"} 
                id="input" 
                onChange={props.onChange} 
            />
        </div>
    )
}

export default InputField;
