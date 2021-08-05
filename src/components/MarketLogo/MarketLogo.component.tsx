import { Link } from "react-router-dom";
import './MarketLogo.styles.css'

const MarketLogo = () => {
    return (
        <div className="logo">
            <Link to="/" className="transparent-logo"><img src="assets/images/opt-logo3.png" alt=""/></Link>
            <Link to="/" className="white-logo"><img src="assets/images/opt-logo3.png" alt=""/></Link>
        </div>
    )
}

export default MarketLogo
