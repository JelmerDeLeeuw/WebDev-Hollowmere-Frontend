import '../styles/InputField.less';

function InputField({label, isPassword, className = "", onChange}) {
    
    return (
        <div className={`input-field ${className}`}>
            <label className="label" htmlFor="input">{label}</label>
            <input 
                className="input" 
                type={isPassword ? "password" : "text"} 
                id="input" 
                onChange={onChange} 
            />
        </div>
    )
}

export default InputField;
