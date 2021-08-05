import BurgerIcon from "../../components/BurgerIcon/BurgerIcon.component";
import MarketLogo from "../../components/MarketLogo/MarketLogo.component";
import NavBar from "../../components/NavBar/NavBar.component";
import ItemCard from "../../components/ItemCard/ItemCard.component";
import { IoSearchSharp } from "react-icons/io5";
import './MarketPage.styles.css'

function Market() {

    const page = "Market";

    return (   
        <div className="marketPage">
            <div className="outer">
                    <BurgerIcon />
                    <div className="custom-container">
                        <div className="navigation-holder">
                            <MarketLogo />
                            <div className="navigation">
                                <NavBar />
                            </div>
                        </div>
                    </div>
                <div className="welcome-market-opener clearfix" id="home">
                    <div className="chain-container">
                        <div className="market-header">
                            <div className="form-group has-search">
                                <IoSearchSharp size="20" className='searchBar-icon'/>
                                <input type="text" className="form-control text-center" placeholder="What are you looking for ? "/>
                            </div>
                        </div>
                    </div>
                    <div className="chain-container">
                        <div className="row">
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                        </div>
                    </div>
                </div>
                <div id="c-mask-right" className="c-mask"></div>
            </div>
        </div>
    )
}

export default Market;