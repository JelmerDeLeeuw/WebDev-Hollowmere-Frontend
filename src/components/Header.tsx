import '../styles/Header.less';

function Header(){
    return (
        <div className="header-container">
            <div className="upper-header">
                <div className="logo-container">
                    <img src="/images/logo.png" alt="Logo" className="logo" />
                </div> 
            </div>

            <div className="lower-header">
                <h1>Lower header</h1>
            </div>
        </div>        
    )
}

export default Header;
