import '../styles/FontIcon.less';
import '@fortawesome/fontawesome-free/css/all.min.css';

function FontIcon({name, type}){
    return (
        <i className={`fa-${type} fa-${name} icon`}></i>
    );
}

export default FontIcon;
