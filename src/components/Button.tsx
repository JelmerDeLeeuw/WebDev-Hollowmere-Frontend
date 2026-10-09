import '../styles/Button.less';
import FontIcon from './FontIcon';


function Button({title, icon, iconType, onSelect}) {
    return (
        <div className="button" onClick={onSelect}>
            <div className="text-box">
                <p>
                    {icon && <FontIcon name={icon} type={iconType} ></FontIcon>}
                    {title}
                </p>
            </div>        
        </div>
    )
}

export default Button;
