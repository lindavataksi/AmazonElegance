import React from 'react';
import { FaHeart} from 'react-icons/fa'; 
import { GrShop } from "react-icons/gr";

interface NavbarProps {
    cart: number;
}
const Navbar: React.FC <NavbarProps>= (cart) => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar__brand">
                    <h1>Amazon Elegance</h1>
                </div>
                <div className="navbar__tabs">
                    <a href="./ShopItem.tsx" className="navbar__tab">Tab 1</a>
                    <a href="./ShopItem.tsx" className="navbar__tab">Tab 2</a>
                    <a href="./ShopItem.tsx" className="navbar__tab">Tab 3</a>
                </div>
                <div className="navbar__icons">
                    <a href="./ShopItem.tsx" className="navbar__icon">Wishlist: <FaHeart /></a>
                    
                    <a href="./ShopItem.tsx" className="navbar__icon">
                    {cart.cart > 1 ? <span className="cart-number">{cart.cart}</span>: ''}
    <GrShop />
</a>

                </div>
            </nav>
        </header>
    );
}


export default Navbar;
