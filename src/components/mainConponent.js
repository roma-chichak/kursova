import "./style.css"
import ProductsList from "./productsComponent"

function MainConponent() {

    return(
        <div>
            <div className="header__body">
                <p>the best online store of ancient literature</p>
                <p>a large collection of limited edition books</p>
            </div>
                <div className="shop" id="shop">
            <div className="shop__header">
                <h2>OUR SHOP</h2>
            </div>
                    <div className="shop__body">
                        <ProductsList variant="main" />
                    </div>
                </div>
        </div>
    )
}

export default MainConponent