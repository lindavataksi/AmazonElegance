import {useState} from 'react';
import React from 'react';
import './styles.css'; 

// type AddToCart = (item: any) => void;

interface shopItem {
    id: number;
    title: string;
    imageURL: string;
    price: number;
    quantity: number;
    isFavorite: boolean;
    onClick:  () => void;
}


const ShopItem: React.FC<shopItem> = (props) => {
    const[favorite, setFavorite] = useState(props.isFavorite)
    const[quantity, setQuantity] = useState(props.quantity)

    function toggleFavorite(){
        setFavorite (prevFavorite => !prevFavorite)
    };

    function updateQuantity(){
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1)
        } else {
            setQuantity(0)
        }
       
    }

    const handleBuyClick = () => {
        props.onClick();
        updateQuantity();
    };


    function Favorite (isFavorite : boolean) {
        return isFavorite ? ('https://freeiconshop.com/wp-content/uploads/edd/heart-outline-filled.png') : 
        ('https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-gris.png')
    }
    return (
        <div className='card'>
            <img className='card--image'
            src = {props.imageURL}
            alt = {props.title}
            />
            <p className='card--title '>{props.title}</p>
            <p className='card--price'>{'$' + props.price}</p>
            <p className='card--quantity'>{'Quantity:'+ quantity}</p>
            <img
                className='card--favorite'
                src={Favorite(favorite)}
                alt='fav'
                onClick={toggleFavorite}
            />
            <button className='card--buy-button' onClick={handleBuyClick}>
                Add to Cart
            </button>
        </div>
    )
}

export default ShopItem