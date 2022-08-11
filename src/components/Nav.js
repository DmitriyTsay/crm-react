import logo from "../images/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Nav() {

    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="controls-container">
                <div className="cc__icon" onClick={() => navigate('/ticket')}>＋</div>
                <div className="cc__icon" onClick={() => navigate('/')}>{"<<"}</div>
            </div>
        </nav>
    )
}