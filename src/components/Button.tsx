import '../styles/Button.less';
import FontIcon from './FontIcon';

type Props = {
    title: string;
    icon?: string;
    iconType?: string;
    onSelect: (item: any) => void;
    className?: string;
}


function Button(props: Props) {
    return (
        <button className={`button ${props.className}`} onClick={props.onSelect}>
            <div className="text-box">
                <p>
                    {props.icon && <FontIcon name={props.icon} type={props.iconType} ></FontIcon>}
                    {props.title}
                </p>
            </div>        
        </button>
    )
}

export default Button;
