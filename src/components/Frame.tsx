import '../styles/Frame.less';
import type { ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
}

function Frame(props: Props) {
    return (
        <div className="frame-container">
            <div className="header-container">
                <h1 className="title">{props.title}</h1>
                <hr className="line" />
            </div>

            <div className="frame-content">
                {props.children}
            </div>
        </div>
    )
}   

export default Frame;
