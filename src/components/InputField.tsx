import '../styles/InputField.less';

function InputField({label, isPassword, className = "" }) {
    
    return (
        <div className={`input-field ${className}`}>
            <label className="label" for="input">{label}</label>
            <input 
                className="input" 
                type={isPassword ? "password" : "text"} 
                id="input" 
            />
        </div>
    )
}

export default InputField;
