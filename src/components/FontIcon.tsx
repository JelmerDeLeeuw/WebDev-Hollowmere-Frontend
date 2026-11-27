import '../styles/FontIcon.less';
import '@fortawesome/fontawesome-free/css/all.min.css';

type Props = {
    name: string;
    type: string;
}

function FontIcon(props: Props){
    return (
        <i className={`fa-${props.type} fa-${props.name} icon`}></i>
    );
}

export default FontIcon;
