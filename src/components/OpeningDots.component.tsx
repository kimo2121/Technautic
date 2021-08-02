import React from 'react'
import './OpeningDots.styles.css';

const OpeningDots = ({page}) => {
    function myProfileFunction() {
        console.log("profile func");
    }
    function myMarketFunction(){
        console.log("market func")
    }
    return (
        <div className="opening-dots">
            <img src="assets/images/opening-dots.jpg" alt="" onClick={ (page === "Profile") ? myProfileFunction : myMarketFunction }/>
            <div className="reportbtn">
                <div className="nav-icons-outr">
                    <ul>
                        <li>
                            <a href="#">
                                {`${(page === "Profile") ? 'Change Price' : 'Buy Now'}`}
                            </a>
                        </li>
                        <li>
                            <a href="#"> 
                                {`${(page === "Profile") ? 'Remove From Sale' : 'Place a bid'}`}
                            </a>
                        </li>
                        <li>
                            <a href="#"> 
                                {`${(page === "Profile") ? 'Transfer' : 'Show Artist'}`}
                            </a>
                        </li>
                        <li>
                            <a href="/detail"> 
                                {`${(page === "Profile") ? 'Delete Permanently' : 'View info'}`}
                            </a>
                        </li>
                        <li>
                            <a href="#"> 
                                {`${(page === "Profile") ? 'Share' : 'Share artist'}`}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OpeningDots
